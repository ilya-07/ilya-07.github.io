let btn = document.querySelector('.gallery__more'),
   gallery = document.querySelector('.gallery__body_hide');
btn.addEventListener('click', () => {
   gallery.classList.toggle('show');
   if (btn.innerHTML == 'LOAD MORE') {
      btn.innerHTML = 'LOAD LESS'
   } else {
      btn.innerHTML = 'LOAD MORE'
   }
})

let num1 = document.querySelectorAll('.offer__nember')[0],
   plus1 = document.querySelectorAll('.offer__plus')[0],
   cons1 = document.querySelectorAll('.offer__cons')[0];


plus1.addEventListener('click', () => {
   num1.textContent = Number(num1.textContent) + 1;
})

cons1.addEventListener('click', () => {
   num1.textContent = Number(num1.textContent) - 1;
})
let num2 = document.querySelectorAll('.offer__nember')[1],
   plus2 = document.querySelectorAll('.offer__plus')[1],
   cons2 = document.querySelectorAll('.offer__cons')[1];


plus2.addEventListener('click', () => {
   num2.textContent = Number(num2.textContent) + 1;
})

cons2.addEventListener('click', () => {
   num2.textContent = Number(num2.textContent) - 1;
})
let num3 = document.querySelectorAll('.offer__nember')[2],
   plus3 = document.querySelectorAll('.offer__plus')[2],
   cons3 = document.querySelectorAll('.offer__cons')[2];


plus3.addEventListener('click', () => {
   num3.textContent = Number(num3.textContent) + 1;
})

cons3.addEventListener('click', () => {
   num3.textContent = Number(num3.textContent) - 1;
})

let addBlock = document.querySelector('.additional'),
   hideBlock = document.querySelector('.hideeblock'),
   offBtn1 = document.querySelectorAll('.offer__btn')[0],
   offBtn2 = document.querySelectorAll('.offer__btn')[1],
   offBtn3 = document.querySelectorAll('.offer__btn')[2];

offBtn1.addEventListener('click', () => {
   addBlock.classList.add('showblock')
})
offBtn2.addEventListener('click', () => {
   addBlock.classList.add('showblock')
})
offBtn3.addEventListener('click', () => {
   addBlock.classList.add('showblock')
})
hideBlock.addEventListener('click', () => {
   addBlock.classList.remove('showblock')

})


let actiive = document.querySelector('.active'),
   burger = document.querySelector('.header__burger'),
   menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
})
