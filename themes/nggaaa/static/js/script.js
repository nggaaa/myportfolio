const hamburger = document.querySelector("button#hamburger");
const navmenu = document.querySelector(
  "header#main-header-navbar nav#nav-menu"
);
const scrollTop = document.getElementById("scrollTop");
const listDarkToggle = document.getElementById("darktoggle");

window.onscroll = () => {
  onLoad();
};

window.addEventListener("load", onLoad());
function onLoad() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed");
    scrollTop.classList.remove("hidden");
    scrollTop.classList.add("flex");
  } else {
    header.classList.remove("nav-fixed");
    scrollTop.classList.add("hidden");
    scrollTop.classList.remove("flex");
  }
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("hidden");
});

// klik luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navmenu && e.target != hamburger) {
    hamburger.classList.remove("active");
    navmenu.classList.add("hidden");
  }
});

// Darkmode Toggle
listDarkToggle.querySelector("label").addEventListener("click", () => {
  if (listDarkToggle.querySelector("input").checked) {
    document.querySelector("html").classList.remove("dark");
    localStorage.theme = "light";
    listDarkToggle.querySelector("label div svg").innerHTML =
      '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
  } else {
    document.querySelector("html").classList.add("dark");
    localStorage.theme = "dark";
    listDarkToggle.querySelector("label div svg").innerHTML =
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  }
});

// Change Icon Toggle measured mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme:dark)").matches)
) {
  listDarkToggle.querySelector("input").checked = true;
  listDarkToggle.querySelector("label div svg").innerHTML =
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
} else {
  listDarkToggle.querySelector("input").checked = false;
  listDarkToggle.querySelector("label div svg").innerHTML =
    '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
}
