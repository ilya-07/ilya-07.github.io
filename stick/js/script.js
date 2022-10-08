let actiive = document.querySelector('.active'),
   burger = document.querySelector('.burger'),
   menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
});
let swiper = new Swiper(".slide-content", {
   slidesPerView: 4,
   spaceBetween: 25,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   // pagination: {
   //    el: ".swiper-pagination",
   //    clickable: true,
   //    dynamicBullets: true,
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      620: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
   },
});


