document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const sideMenu = document.getElementById("side-menu");

  menuToggle.addEventListener("click", () => {
    sideMenu.classList.add("open");
  });

  menuClose.addEventListener("click", () => {
    sideMenu.classList.remove("open");
  });
});