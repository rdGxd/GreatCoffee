const MenuOpen = document.querySelector("#openMenu");
const MenuClose = document.querySelector("#closeMenu");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btn = document.querySelector("#pedido");

MenuOpen.addEventListener("click", openMenu);
MenuClose.addEventListener("click", closeMenu);

// Função que é chamada quando o usuário clica para abrir o menu no modo mobile
function openMenu() {
  MenuOpen.classList.add("isHidden");
  MenuClose.classList.remove("isHidden");
  nav.classList.remove("isHidden");
  main.classList.add("isHidden");
  footer.classList.add("isHidden");
  btn.classList.add("isHidden");
  btn.removeAttribute("id");
}

// Função que é chamada quando o usuário clica para fechar o menu no modo mobile
function closeMenu() {
  MenuOpen.classList.remove("isHidden");
  MenuClose.classList.add("isHidden");
  nav.classList.add("isHidden");
  main.classList.remove("isHidden");
  footer.classList.remove("isHidden");
  btn.classList.remove("isHidden");
  btn.setAttribute("id", "pedido");
}
