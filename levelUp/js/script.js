	$('.slider').slick({
		arrows:true,
		// dots:true,
		slidesToShow:3,
		autoplay:false,
		//speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 786,
				settings: {
					// autoplay:false,
					slidesToShow:2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow:1
				}
			},
			// {
			// 	breakpoint: 576,
			// 	settings: {
			// 		dots:true,
			// 		// arrows:false,
			// 	}
			// },
		]
	});


const startingMinutes = 30;

let time = startingMinutes * 60;
const countDownEl = document.querySelector('#countdown');
setInterval(updateCount, 1000);
function updateCount(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds
    countDownEl.innerHTML = `${minutes} : ${seconds}`
    time--;

}
$('.toform').on('click', function() {
  let el = $(this);
  let dest = el.attr('href'); // получаем направление
  if (dest !== undefined && dest !== '') { // проверяем существование
    $('html').animate({
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
    );
  }
  return false;
});