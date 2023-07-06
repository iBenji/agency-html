const footerYearEl = document.querySelector('.footer__year');

let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;

const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

