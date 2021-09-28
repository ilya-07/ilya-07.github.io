let burger = document.querySelector('.header__burger'),
    list = document.querySelector('.header__list'),
    header = document.querySelector('.header'),
    logo = document.querySelector('.header__logo'),
    headerInfo = document.querySelector('.header__info');

burger.addEventListener('click', () => {
    list.classList.toggle('list-active');
    burger.classList.toggle('burger-active');
    header.classList.toggle('header-active');
    headerInfo.classList.toggle('header__info-active');
    logo.classList.toggle('header__logo-active');
})