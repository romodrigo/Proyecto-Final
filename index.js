const navLinks = document.querySelector(".nav-links");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
  navLinks.classList.toggle("nav-links_opened");
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".nav-links a[href^='#']");

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function () { 
    navLinks.classList.remove("nav-links_opened");
  } )
})
