(function () {
  var cache = null;
  function load() {
    if (cache) return cache;
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "content/en.json", false);
      xhr.send(null);
      if (xhr.status >= 200 && xhr.status < 300) {
        cache = JSON.parse(xhr.responseText);
      } else {
        cache = {};
      }
    } catch (e) {
      cache = {};
    }
    return cache;
  }

  window.t = function (key) {
    var data = load();
    if (!data || typeof data[key] === "undefined") {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("Missing copy key:", key);
      }
      return key;
    }
    return data[key];
  };

  function apply() {
    var data = load();
    var nodes = document.querySelectorAll("[data-t]");
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-t");
      if (!key) return;
      var val = data[key];
      if (typeof val === "undefined") {
        if (console && console.warn) console.warn("Missing copy key:", key);
        val = key;
      }
      el.textContent = val;
    });

    var mdNodes = document.querySelectorAll("[data-t-md]");
    mdNodes.forEach(function (el) {
      var key = el.getAttribute("data-t-md");
      if (!key) return;
      var val = data[key];
      if (typeof val === "undefined") {
        el.innerHTML = "";
        return;
      }
      el.innerHTML = renderMarkdown(val);
    });

    var titleEl = document.querySelector("title[data-t-title]");
    if (titleEl) {
      var titleKey = titleEl.getAttribute("data-t-title");
      var titleVal = data[titleKey];
      if (titleVal) document.title = titleVal;
    }

    var attrNodes = document.querySelectorAll("[data-t-attr]");
    attrNodes.forEach(function (el) {
      var raw = el.getAttribute("data-t-attr") || "";
      raw.split(";").forEach(function (pair) {
        if (!pair) return;
        var parts = pair.split(":");
        if (parts.length < 2) return;
        var attr = parts[0];
        var key = parts.slice(1).join(":");
        var val = data[key];
        if (typeof val === "undefined") {
          if (console && console.warn) console.warn("Missing copy key:", key);
          val = key;
        }
        el.setAttribute(attr, val);
      });
    });
  }

  function renderMarkdown(input) {
    var text = String(input || "");
    // Basic markdown: paragraphs, bullet lists, bold.
    var lines = text.split(/\r?\n/);
    var out = [];
    var inList = false;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        continue;
      }
      if (line.startsWith("* ")) {
        if (!inList) {
          out.push("<ul class=\"sources-list-simple\">");
          inList = true;
        }
        out.push("<li>" + boldify(escapeHtml(line.slice(2))) + "</li>");
      } else {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push("<p class=\"sources-desc\">" + boldify(escapeHtml(line)) + "</p>");
      }
    }
    if (inList) out.push("</ul>");
    return out.join("");
  }

  function boldify(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Make all .back-link elements use browser history instead of hardcoded hrefs
  function applyBackLinks() {
    document.querySelectorAll('a.back-link').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        history.back();
      });
    });
  }

  // Auto-scroll to main content on L1/L2/L3 market pages
  function applyAutoScroll() {
    if (!window.location.pathname.includes('/MARKETS/')) return;
    var target = document.querySelector('.l3-niche-grid')
               || document.querySelector('.market-l2-grid')
               || document.querySelector('section');
    if (!target) return;
    setTimeout(function() {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { apply(); applyBackLinks(); applyAutoScroll(); });
  } else {
    apply();
    applyBackLinks();
    applyAutoScroll();
  }
})();
