let burger_btn = document.querySelector(".menu-icon");
let nav = document.querySelector("nav");
let menu_icon = document.querySelector("nav .menu-icon");
let nav_container = document.querySelector("nav .nav_links_container");
let backdrop = document.querySelector(".backdrop");

console.log(nav_container);

burger_btn.addEventListener("click", () => {
  burger_btn.classList.toggle("nav-active");
  nav_container.classList.toggle("active");
  // backdrop.classList.toggle("visible");
  //   document.body.classList.toggle("overflow");
});
