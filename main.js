const input = document.getElementById("input");
const menu = document.querySelector(".menu");
const menuList = document.querySelectorAll(".menu-item");

window.addEventListener("load", function(){
    setTimeout(() => {

        document.getElementById('preloader').style.display = 'none';
    }, 2000)
});

input.addEventListener('click', () => {
    menu.classList.toggle("active");
})

menuList.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle("active");
        console.log(input.checked)
        input.checked = false;
    })
})