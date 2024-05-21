const burgerBtn = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("header__burger--active")
    headerMenu.classList.toggle("header__menu--active")
})