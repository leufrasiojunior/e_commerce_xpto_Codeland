const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

console.log(navMenu);
console.log(hamburger);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle(".active");
  navMenu.classList.toggle("active");
});
