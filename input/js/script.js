
// $(Document).ready(function(e){
//     $('.header__burger').click(function(event){
//         $('.header__burger, .h-menu__list ').toggleClass('burger-active');
//         $('body').toggleClass('lock');
//     });

// function testWebP(callback) {


// var webP = new Image();
// webP.onload = webP.onerror = function () {
// callback(webP.height == 2);
// };
// webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

// if (support == true) {
// document.querySelector('body').classList.add('webp');
// }else{
// document.querySelector('body').classList.add('no-webp');
// }
// });


// });
// const animItems =  document.querySelectorAll('._anim-items');

// if(animItems.length > 0){
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(){
//         for(let index = 0; index < animItems.length; index++ ){
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 3;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('_active');
//             } else{
//                 animItem.classList.remove('_active');
//             }
//         }
//     }
//     function offset(el) {
//     const rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }
// animOnScroll();

// }

$(Document).ready(function(e){
    $('.btn').click(function(event){
        $('.input ').toggleClass('width');
        
    });
})