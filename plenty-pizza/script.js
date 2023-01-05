const header = document.querySelector(".header");
const menuBtns = document.querySelector(".menu-btns");

menuBtns.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});

const allLinks = document.querySelectorAll("a:link");
const newLinks = [...allLinks];

const indexs = newLinks.findIndex((link) =>
  link.getAttribute("href").startsWith("http")
);
newLinks.splice(indexs, 3);

newLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      header.classList.toggle("menu-open");
  });
});
