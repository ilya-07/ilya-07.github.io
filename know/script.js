$('.header__burger').click(function(event){
    $('.header__burger, .h-menu__list, .header, .header__btn, .header__text, .header__title, .phone-6').toggleClass('burger-active');
    $('body').toggleClass('lock');
});
$(document).ready(function(){
    $('.cust__slides').slick({
        slidesToShow:3
    });
});