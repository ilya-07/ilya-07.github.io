const burger = document.querySelector('.header__burger'),
      header = document.querySelector('.header'),
      body = document.querySelector('body'),
      list = document.querySelector('.header__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('click-burger');
    list.classList.toggle('click-list')
    body.classList.toggle('unscroll')
})