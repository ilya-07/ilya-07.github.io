'use strict'
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
   burger.classList.toggle('active');
})