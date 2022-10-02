let actiive = document.querySelector('.active'),
   burger = document.querySelector('.burger'),
   menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
});
var swiper = new Swiper(".slide-content", {
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




let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
let container = document.querySelector('.sliders__container');
let track = document.querySelector('.sliders__track');
let items = document.querySelectorAll('.sliders__item');
let itemsCount = items.length;
let prev = document.querySelector('.sliders__prev');
let next = document.querySelector('.sliders__next');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth


items.forEach((item) => {
   item.getElementsByClassName.minWidth = `${itemWidth}px`
})
next.addEventListener('click', () => {
   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
   position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
   setPosition();
   checkBtns();
})
prev.addEventListener('click', () => {
   position += movePosition;
   setPosition();
   checkBtns();

})
const setPosition = () => {
   track.style.transform = `translateX(${position}px)`;
}
const checkBtns = () => {
   prev.disabled = position === 0;
   next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();