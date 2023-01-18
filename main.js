const input = document.getElementById("input");
const menu = document.querySelector(".menu");
const menuList = document.querySelectorAll(".menu-item");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");

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

function copyToClipboard() {
  let text = "0xb1957BDbA889686EbdE631DF970ecE6A7571A1B6";
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: copying address was successful");
      successMessage.classList.toggle("hidden");
      setTimeout(() => {
        successMessage.classList.toggle("hidden");
      }, 4000);
    },
    function (err) {
      console.error("Aync could not copy text:", err);
      errorMessage.classList.toggle("hidden");
      setTimeout(() => {
        errorMessage.classList.toggle("hidden");
      }, 4000);
    }
  );
}
