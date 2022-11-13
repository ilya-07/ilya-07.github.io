// 'use strict'

const burger = document.querySelector('.burger');
const flow = document.querySelector('.header__flow');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   flow.classList.toggle('active');
})