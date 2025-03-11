document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-menus");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// dark mode

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
