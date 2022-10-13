'use strict'

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
   burger.classList.toggle('active');
})
window.onload = function () {
   let minute = 9;
   let sec = 60;
   setInterval(function () {
      document.querySelector('.sell__time').innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 0) {
         minute--;
         sec = 60;
         if (minute == 0) {
            minute = 9;
         }
      }
   }, 1000);
}
