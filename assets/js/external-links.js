document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (
      href.startsWith("http://") ||
      href.startsWith("https://")
    ) {
      if (!href.includes(window.location.hostname)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    }
  });
});