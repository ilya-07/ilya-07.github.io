// let actiive = document.querySelector('.active'),
//    burger = document.querySelector('.header__burger'),
//    menu = document.querySelector('.header__menu');

// burger.addEventListener('click', () => {
//    burger.classList.toggle('active');
//    menu.classList.toggle('active');
// });
$(document).ready(function (e) {
   $('.slider').slick({
      // arrows:true,
      // dots:true,
      slidesToShow: 3,
      autoplay: true,
      //speed:1000,
      autoplaySpeed: 800,
      responsive: [
         {
            breakpoint: 786,
            settings: {
               autoplay: false,
               slidesToShow: 2
            }
         },
         {
            breakpoint: 560,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });

})

let link1 = document.querySelector('.find__link');
let link2 = document.querySelector('.description__link');
let link3 = document.querySelector('.sliders__link');
let link4 = document.querySelector('.footer__link_arr');
let newblock = document.querySelector('.new');
let hide = document.querySelector('.new__hide');
link1.addEventListener('click', () => {
   newblock.classList.add('show')
   newblock.classList.remove('remowe')
});
link2.addEventListener('click', () => {
   newblock.classList.add('show')
   newblock.classList.remove('remowe')
});
link3.addEventListener('click', () => {
   newblock.classList.add('show')
   newblock.classList.remove('remowe')
});
link4.addEventListener('click', () => {
   newblock.classList.add('show')
   newblock.classList.remove('remowe')
});
hide.addEventListener('click', () => {
   newblock.classList.add('remowe')

})
let btn = document.querySelector('.sliders__btn');

btn.addEventListener('click', () => {
   btn.textContent = 'done'
})