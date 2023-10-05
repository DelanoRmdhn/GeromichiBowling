console.log("hello");
// MOBILE NAVIGATION
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbar = document.querySelector(".navigation-bar");

btnNavEl.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});
