$(Document).ready(function(e){
    $('.header__burger').click(function(event){
        $('.header__burger, .h-menu__list ').toggleClass('burger-active');
        $('body').toggleClass('lock');
    });

    $('.cust__slides').slick({
        slidesToShow:3
    });

function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

    
    let tab = document.querySelectorAll('.tab__click'),
        info = document.querySelector('.tab__wrapper'),
        tabContent = document.querySelectorAll('.tab__item');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('tab__click')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });




    
    let slideIndex = 1,
    slides = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

showSlides(slideIndex);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }

    slides[slideIndex - 1].style.display = 'block';
};

function plusSlides(n) {
    showSlides(slideIndex += n); 
};
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// };

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});


let a = document.querySelectorAll('.btn')[0],
    c = document.querySelectorAll('.deacr')[0],
    d = document.querySelectorAll('.v')[0];

a.addEventListener('click', function (){
    c.classList.add('n');
    c.classList.remove('m');
    d.classList.add('m');
});

});
