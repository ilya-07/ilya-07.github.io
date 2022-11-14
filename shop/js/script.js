// 'use strict'

const burger = document.querySelector('.burger');
const flow = document.querySelector('.header__flow');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   flow.classList.toggle('active');
})
const open1 = document.querySelector('.open-text-1');
const newText1 = document.querySelector('.news__text_1')
const open2 = document.querySelector('.open-text-2');
const newText2 = document.querySelector('.news__text_2')
const open3 = document.querySelector('.open-text-3');
const newText3 = document.querySelector('.news__text_3');
open1.addEventListener('click', () => {
   newText1.style.height = 'auto'
   open1.style.display = 'none'
})
open2.addEventListener('click', () => {
   newText2.style.height = 'auto'
   open2.style.display = 'none'
})
open3.addEventListener('click', () => {
   newText3.style.height = 'auto'
   open3.style.display = 'none'
})
const title1 = document.querySelector('.footer__title-1');
const title2 = document.querySelector('.footer__title-2');
const title3 = document.querySelector('.footer__title-3');
const list1 = document.querySelector('.footer__list-1');
const list2 = document.querySelector('.footer__list-2');
const list3 = document.querySelector('.footer__list-3');

title1.addEventListener('click', () => {
   title1.classList.toggle('footer-active')
   list1.classList.toggle('footer-active')
})
title2.addEventListener('click', () => {
   title2.classList.toggle('footer-active-2')
   list2.classList.toggle('footer-active-2')
})
title3.addEventListener('click', () => {
   title3.classList.toggle('footer-active-3')
   list3.classList.toggle('footer-active-3')
})




const btn1 = document.querySelectorAll('.help__btn')[0];
const btn2 = document.querySelectorAll('.help__btn')[1];
const width = window.screen.width;
if (width <= 768) {
   btn1.textContent = 'Перейти'
   btn2.textContent = 'Перейти'
}



