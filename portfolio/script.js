let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.replace("fa-bars", "fa-times");
  } else {
    menuIcon.classList.replace("fa-times", "fa-bars");
  }
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".home-content, .heading, .services-heading, .about-heading, .contact h2, .skills h2",
  { origin: "top" }
);
ScrollReveal().reveal(" .contact form, .home-img img, .services-container", {
  origin: "bottom",
});
ScrollReveal().reveal(
  ".home-content h1, .about-content, .skills-column:nth-child(1)",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".home-content p, .about-img, .skills-column:nth-child(2)",
  { origin: "right" }
);

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Graphics Designer"],
  typeSpeed: 100,
  speed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const themeBtn = document.getElementById("theme-btn");
let darkMode = true;

themeBtn.onclick = () => {
  if (darkMode) {
    document.documentElement.style.setProperty("--bg-color", "#f6f6f6");
    document.documentElement.style.setProperty("--second-bg-color", "#e0e0e0");
    document.documentElement.style.setProperty("--text-color", "#1f242d");
    document.documentElement.style.setProperty("--main-color", "#0089C8");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.style.setProperty("--bg-color", "#1f242d");
    document.documentElement.style.setProperty("--second-bg-color", "#28313f");
    document.documentElement.style.setProperty("--text-color", "white");
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.documentElement.style.setProperty("--main-color", "#ffcc00");
  }
  darkMode = !darkMode;
};
