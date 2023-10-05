console.log("hello");
// MOBILE NAVIGATION
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbar = document.querySelector(".navigation-bar");

btnNavEl.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});

//SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //scroll ke atas
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
