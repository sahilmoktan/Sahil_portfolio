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
  strings: ["JavaScript Developer", "NodeJS Developer", "NextJS Developer"],
  typeSpeed: 80,
  backSpeed: 25,
  loop: true,
});

// script.js
window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  var button = document.getElementById("backToTopBtn");
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}


function downloadCV() {
  console.log('donlod')
  const link = document.createElement('a');
  link.href = './assets/Sahil_Moktan_CV_nextjs.pdf'; // Provide the path to your CV file.
  link.download = 'Sahil_Moktan_CV_nextjs.pdf'; // Set the desired name for the downloaded file.
  link.click();
}