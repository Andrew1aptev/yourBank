const burgerBtn = document.querySelector(".header__burger");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("header__burger--active")
})