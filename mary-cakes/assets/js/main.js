const menu = document.querySelector(".main-menu");
const hamburguer = document.querySelector(".btn-hamburguer");

function toggleMenu() {
  menu.classList.toggle("--is-visible");
  hamburguer.classList.toggle("--is-active");
}

hamburguer.addEventListener("click", toggleMenu);