$(Document).ready(function(e){
    $('.header__burger').click(function(event){
        $('.header__burger, .h-menu__list ').toggleClass('burger-active');
        $('body').toggleClass('lock');
    });
});