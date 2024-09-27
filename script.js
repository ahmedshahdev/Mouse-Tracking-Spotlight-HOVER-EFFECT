document.addEventListener("mousemove", (event) => {
  const { clientX: x, clientY: y } = event;
  document.querySelectorAll(".box").forEach((card) => {
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});