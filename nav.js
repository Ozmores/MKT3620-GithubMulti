// ==============================
// GIRLY WEBSITE — SHARED JAVASCRIPT
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  // Automatically highlight the current page in the navigation.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // Sparkle trail following the mouse.
  let lastSparkle = 0;

  document.addEventListener("mousemove", (event) => {
    const now = Date.now();

    // Keeps the effect pretty without creating too many elements.
    if (now - lastSparkle < 45) return;

    lastSparkle = now;

    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const offsetX = (Math.random() - 0.5) * 14;
    const offsetY = (Math.random() - 0.5) * 14;

    sparkle.style.left = `${event.clientX + offsetX}px`;
    sparkle.style.top = `${event.clientY + offsetY}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 750);
  });

});
