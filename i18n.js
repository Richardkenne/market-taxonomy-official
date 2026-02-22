// EN-only copy system: i18n disabled. Use t() from content/en.json.
(function () {
  if (typeof window === "undefined") return;
  if (typeof window.t !== "function") {
    window.t = function (key) { return key; };
  }
})();
