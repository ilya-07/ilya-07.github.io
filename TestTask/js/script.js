function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

let button = document.querySelector('.header__mouse');
let footer = document.querySelector('.program__block');

button.addEventListener('click', () => {
  scrollTo(footer);
})