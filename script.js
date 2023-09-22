function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openInNewTab(url) {
  window.open(url, "_blank");
}

var typed = new Typed(".section_text_p2", {
  strings: ["JavaScript Developer","NodeJS Developer", "NextJS Developer"],
  typeSpeed: 80,
  backSpeed: 25,
  loop: true,
});
