const input = document.getElementById("input");
const menu = document.querySelector(".menu");
const menuList = document.querySelectorAll(".menu-item");

// HIDE LOADING ANIMATION
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 3000);
});

// DISPLAY MENU ON MOBILE
input.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuList.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
    input.checked = false;
  });
});
