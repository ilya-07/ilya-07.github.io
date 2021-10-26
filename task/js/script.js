const burger = document.querySelector('.header__burger'),
      header = document.querySelector('.header'),
      body = document.querySelector('body'),
      list = document.querySelector('.list');

burger.addEventListener('click', () => {
    burger.classList.toggle('click-burger');
    list.classList.toggle('click-list')
    body.classList.toggle('unscroll')
})
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.hostel__container');
const track = document.querySelector('.hostel__list');
const items  = document.querySelectorAll('.hostel__page');
const btnNext  = document.querySelector('.hostel__next');
const btnPrev  = document.querySelector('.hostel__pre');
const itemCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`
});

btnNext.addEventListener('click', () => {
	const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft *itemWidth;

	setPosition();
	checkBtns();
})
btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position)  / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft *itemWidth;

	setPosition();
	checkBtns();
})
const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
}
const checkBtns = () => {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemCount - slidesToShow) / itemWidth
}
checkBtns();
	$('.slider').slick({
		// arrows:true,
		dots:true,
		slidesToShow:4,
		autoplay:true,
		//speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 786,
				settings: {
					autoplay:false,
					slidesToShow:2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 576,
				settings: {
					dots:true,
					// arrows:false,
				}
			},
		]
	});