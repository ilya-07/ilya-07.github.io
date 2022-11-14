
let thirdSwiper = new Swiper(".third-slide-content", {
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   enabled: false,
   breakpoints: {
      0: {
         slidesPerView: 2.5,
         enabled: true,
      },
      380: {
         slidesPerView: 3.5,
         enabled: true,
      },
      490: {
         slidesPerView: 5,
         enabled: true,
      },
      768: {
         enabled: false,
      },
   },
});
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
      0: {
         slidesPerView: 1,
      },
   },
});

let secondSwiper = new Swiper(".second-slide-content", {
   loop: true,
   pagination: {
      el: ".second-swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   enabled: false,
   breakpoints: {
      0: {
         slidesPerView: 1,
         enabled: true,
      },
      576: {
         slidesPerView: 1,
         enabled: false,
      },
   },
});
