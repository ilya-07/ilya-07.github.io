// 'use strict'

// let actiive = document.querySelector('.active'),
//    burger = document.querySelector('.header__burger'),
//    menu = document.querySelector('.header__menu');

// burger.addEventListener('click', () => {
//    burger.classList.toggle('active');
//    menu.classList.toggle('active');
// })

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
      dynamicBullets: true,
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
         slidesPerView: 1,
      },
      // 768: {
      //    slidesPerView: 3,
      // },
      // 992: {
      //    slidesPerView: 3,
      // },
      // 1200: {
      //    slidesPerView: 3,
      // },
   },
});
