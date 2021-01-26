$(document).ready(function (e) {
    $('.header__burger').click(function (event) {
        $('.header__burger, .h-menu__list ').toggleClass('burger-active');
        $('body').toggleClass('lock');
    });

    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

    // let a = document.querySelectorAll('.anket__input-btn_1')[0],
    //     c = document.querySelectorAll('.anket__form_1')[0],
    //     d = document.querySelectorAll('.hide')[0];
    let a = document.querySelectorAll('.anket__input-btn_1')[0],
        b = document.querySelectorAll('.anket__input_1')[0],
        c = document.querySelectorAll('.anket__input-btn_2')[0],
        d = document.querySelectorAll('.anket__input_2')[0],
        q = document.querySelectorAll('.anket__input-btn_3')[0],
        w = document.querySelectorAll('.anket__input_3')[0],
        n = document.querySelectorAll('.anket__input-btn_4')[0],
        m = document.querySelectorAll('.anket__input_4')[0],
        r = document.querySelectorAll('.anket__box')[0];
    a.addEventListener('mouseover', function () {
        b.classList.add('las');
        b.classList.add('h');
    });
    a.addEventListener('mouseout', function () {
        b.classList.remove('las');
        b.classList.remove('h');
    })
    c.addEventListener('mouseover', function () {
        d.classList.add('las');
        d.classList.add('h');
    });
    c.addEventListener('mouseout', function () {
        d.classList.remove('las')
        d.classList.remove('h');;
    })
    q.addEventListener('mouseover', function () {
        w.classList.add('las');
        w.classList.add('h');
    });
    q.addEventListener('mouseout', function () {
        w.classList.remove('las');
        w.classList.remove('h');
    })
    n.addEventListener('mouseover', function () {
        m.classList.add('las');
        m.classList.add('h');
        r.classList.add('pad');
    });
    n.addEventListener('mouseout', function () {
        m.classList.remove('las');
        r.classList.remove('pad');
        m.classList.remove('h');
    })

    // a.addEventListener('dblclick', function (){
    //     //c.classList.add('n');
    //     c.classList.remove('hide');
    //    // d.classList.add('m');
    // });


    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // 		let body=document.querySelector('body');
    // if(isMobile.any()){
    // 		body.classList.add('touch');
    // 		let arrow=document.querySelectorAll('.anket__input-btn');
    // 	for(i=0; i<arrow.length; i++){
    // 			let thisLink=arrow[i].previousElementSibling;
    // 			let subMenu=arrow[i].nextElementSibling;
    // 			let thisArrow=arrow[i];

    // 			thisLink.classList.add('parent');
    // 		arrow[i].addEventListener('click', function(){
    // 			subMenu.classList.toggle('open');
    // 			thisArrow.classList.toggle('active');
    // 		});
    // 	}
    // }else{
    // 	body.classList.add('mouse');
    // }



});