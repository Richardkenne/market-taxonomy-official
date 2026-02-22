import http from "http";

const PORT = process.env.AI_PROXY_PORT || 3001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CACHE_TTL_MS = Number(process.env.AI_CACHE_TTL_MS || 10 * 60 * 1000);
const RATE_LIMIT_WINDOW_MS = Number(process.env.AI_RATE_WINDOW_MS || 60 * 1000);
const RATE_LIMIT_MAX = Number(process.env.AI_RATE_MAX || 30);

const cache = new Map();
const rateBuckets = new Map();

function getClientIp(req) {
    const forwarded = req.headers["x-forwarded-for"];
    if (typeof forwarded === "string" && forwarded.length > 0) {
        return forwarded.split(",")[0].trim();
    }
    return req.socket.remoteAddress || "unknown";
}

function isRateLimited(ip) {
    const now = Date.now();
    const bucket = rateBuckets.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    if (now > bucket.resetAt) {
        bucket.count = 0;
        bucket.resetAt = now + RATE_LIMIT_WINDOW_MS;
    }
    bucket.count += 1;
    rateBuckets.set(ip, bucket);
    return bucket.count > RATE_LIMIT_MAX;
}

function makeCacheKey(prompt, options) {
    return JSON.stringify({ prompt, options });
}

function getCachedResponse(key) {
    const entry = cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
        cache.delete(key);
        return null;
    }
    return entry.value;
}

function setCachedResponse(key, value) {
    cache.set(key, { value, expiresAt: Date.now() + CACHE_TTL_MS });
}

if (!OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY environment variable.");
    process.exit(1);
}

const server = http.createServer(async (req, res) => {
    if (req.method !== "POST" || req.url !== "/api/ai") {
        res.writeHead(404);
        res.end("Not Found");
        return;
    }

    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", async () => {
        try {
            const data = JSON.parse(body || "{}");
            const prompt = (data.prompt || "").trim();
            const options = data.options || {};

            if (!prompt) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Missing prompt" }));
                return;
            }

            const clientIp = getClientIp(req);
            if (isRateLimited(clientIp)) {
                res.writeHead(429, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Rate limit exceeded" }));
                return;
            }

            const cacheKey = makeCacheKey(prompt, options);
            const cached = getCachedResponse(cacheKey);
            if (cached) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(cached));
                return;
            }

            const system = [
                "You are a taxonomy mapper.",
                "Map the user prompt to the closest canonical labels provided.",
                "Only use labels from the provided options.",
                "Return JSON following the schema exactly.",
                "If unsure, choose the closest reasonable label.",
                "Keep keywords short (1-3 words)."
            ].join(" ");

            const user = {
                prompt,
                options
            };

            const schema = {
                type: "object",
                additionalProperties: false,
                properties: {
                    market: { type: "string" },
                    problem: { type: "string" },
                    target: { type: "string" },
                    severity: { type: "string" },
                    existing_behavior: { type: "string" },
                    mechanics: {
                        type: "object",
                        additionalProperties: false,
                        properties: {
                            "Distribution Channels": { type: "array", items: { type: "string" } },
                            "Monetization Models": { type: "array", items: { type: "string" } },
                            "Business Assets": { type: "array", items: { type: "string" } },
                            "Operating Models": { type: "array", items: { type: "string" } }
                        },
                        required: ["Distribution Channels", "Monetization Models", "Business Assets", "Operating Models"]
                    },
                    model: { type: "string" },
                    gtm: { type: "string" },
                    keywords: { type: "array", items: { type: "string" } },
                    highlight: { type: "array", items: { type: "string" } }
                },
                required: ["market", "problem", "target", "severity", "existing_behavior", "mechanics", "model", "gtm", "keywords", "highlight"]
            };

            const resp = await fetch("https://api.openai.com/v1/responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    input: [
                        { role: "system", content: system },
                        { role: "user", content: JSON.stringify(user) }
                    ],
                    text: {
                        format: {
                            type: "json_schema",
                            name: "taxonomy_map",
                            schema,
                            strict: true
                        }
                    }
                })
            });

            const json = await resp.json();
            if (!resp.ok) {
                res.writeHead(resp.status, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: json }));
                return;
            }

            const outputText = json.output_text ||
                (json.output && json.output[0] && json.output[0].content && json.output[0].content[0] && json.output[0].content[0].text) ||
                "";

            const parsed = JSON.parse(outputText);
            setCachedResponse(cacheKey, parsed);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(parsed));
        } catch (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: err.message }));
        }
    });
});

server.listen(PORT, () => {
    console.log(`AI proxy listening on http://localhost:${PORT}`);
});
