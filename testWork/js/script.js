'use strict'

let actiive = document.querySelector('.active'),
   burger = document.querySelector('.header__burger'),
   menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
})

let swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 20,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   breakpoints: {
      // 0: {
      //    slidesPerView: 1,
      // },
      // 620: {
      //    slidesPerView: 1,
      // },
      0: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
      // 992: {
      //    slidesPerView: 3,
      // },
      // 1200: {
      //    slidesPerView: 3,
      // },
   },
});

const jsTriggers = document.querySelectorAll('.js-tab-trigger'),
   jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) {
   trigger.addEventListener('click', function () {
      let id = this.getAttribute('data-tab'),
         content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
         activeTrigger = document.querySelector('.js-tab-trigger.active-tab'),
         activeContent = document.querySelector('.js-tab-content.active-tab');

      activeTrigger.classList.remove('active-tab');
      trigger.classList.add('active-tab');

      activeContent.classList.remove('active-tab');
      content.classList.add('active-tab');
   });
});