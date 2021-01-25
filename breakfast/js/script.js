$(document).ready(function(e){
    $('.header__burger').click(function(event){
        $('.header__burger, .h-menu__list, .h-menu ').toggleClass('burger-active');
        $('body').toggleClass('lock');
	});
	$('.slider').slick({
		// arrows:true,
		// dots:true,
		slidesToShow:3,
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
			}
		]
	});
	
})
const animItems =  document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animItems.length; index++ ){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else{
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
animOnScroll();

}
