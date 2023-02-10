const MenuOpen = document.querySelector("#openMenu");
const MenuClose = document.querySelector("#closeMenu");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btn = document.querySelector("#pedido")

MenuOpen.addEventListener("click", openMenu);
MenuClose.addEventListener("click", closeMenu);

function openMenu() {
  MenuOpen.classList.add("hidden");
  MenuClose.classList.remove("hidden");
  nav.classList.remove("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  btn.removeAttribute("id", "hidden");
  btn.classList.add("hidden");
}

function closeMenu() {
  MenuOpen.classList.remove("hidden");
  MenuClose.classList.add("hidden");
  nav.classList.add("hidden");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
  btn.classList.remove("hidden");
  btn.setAttribute("id", "pedido")
}
