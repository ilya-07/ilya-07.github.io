let actiive = document.querySelector('.active'),
   burger = document.querySelector('.header__burger'),
   menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
})