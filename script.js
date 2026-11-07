const button = document.querySelector(".hm-button");

button.addEventListener("click", () => {
  const active = button.classList.toggle("active");

  button.setAttribute("aria-expanded", active);
  button.setAttribute("aria-label", active ? "Close menu" : "Open menu");
});
