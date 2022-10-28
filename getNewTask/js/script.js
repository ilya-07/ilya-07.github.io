// 'use strict'



const burger = document.querySelector('.burger');
const flow = document.querySelector('.header__flow');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   flow.classList.toggle('active');
})
const open1 = document.querySelector('.open-text-1');
const newText1 = document.querySelector('.news__text_1')
const open2 = document.querySelector('.open-text-2');
const newText2 = document.querySelector('.news__text_2')
const open3 = document.querySelector('.open-text-3');
const newText3 = document.querySelector('.news__text_3');
open1.addEventListener('click', () => {
   newText1.style.height = 'auto'
   open1.style.display = 'none'
})
open2.addEventListener('click', () => {
   newText2.style.height = 'auto'
   open2.style.display = 'none'
})
open3.addEventListener('click', () => {
   newText3.style.height = 'auto'
   open3.style.display = 'none'
})
const title1 = document.querySelector('.footer__title-1');
const title2 = document.querySelector('.footer__title-2');
const title3 = document.querySelector('.footer__title-3');
const list1 = document.querySelector('.footer__list-1');
const list2 = document.querySelector('.footer__list-2');
const list3 = document.querySelector('.footer__list-3');

title1.addEventListener('click', () => {
   title1.classList.add('footer-active')
   list1.classList.toggle('footer-active')
})
title2.addEventListener('click', () => {
   title2.classList.toggle('footer-active-2')
   list2.classList.toggle('footer-active-2')
})
title3.addEventListener('click', () => {
   title3.classList.toggle('footer-active-3')
   list3.classList.toggle('footer-active-3')
})

let thirdSwiper = new Swiper(".third-slide-content", {
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   enabled: false,
   breakpoints: {
      0: {
         slidesPerView: 3,
         enabled: true,
      },
      380: {
         slidesPerView: 4,
         enabled: true,
      },
      768: {
         enabled: false,
      },
   },
});
let swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 20,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   breakpoints: {
      0: {
         slidesPerView: 1,
      },
   },
});

let secondSwiper = new Swiper(".second-slide-content", {
   loop: true,
   pagination: {
      el: ".second-swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   enabled: false,
   breakpoints: {
      0: {
         slidesPerView: 1,
         enabled: true,
      },
      576: {
         slidesPerView: 1,
         enabled: false,
      },
   },
});




const btn1 = document.querySelectorAll('.help__btn')[0];
const btn2 = document.querySelectorAll('.help__btn')[1];
const width = window.screen.width;
if (width <= 768) {
   btn1.textContent = 'Перейти'
   btn2.textContent = 'Перейти'
}




function DynamicAdapt(type) {
   this.type = type;
}

DynamicAdapt.prototype.init = function () {
   const _this = this;
   // массив объектов
   this.оbjects = [];
   this.daClassname = "_dynamic_adapt_";
   // массив DOM-элементов
   this.nodes = document.querySelectorAll("[data-da]");

   // наполнение оbjects объктами
   for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
   }

   this.arraySort(this.оbjects);

   // массив уникальных медиа-запросов
   this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
   }, this);
   this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
   });

   // навешивание слушателя на медиа-запрос
   // и вызов обработчика при первом запуске
   for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
         return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
         _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
   }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
   if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         оbject.index = this.indexInParent(оbject.parent, оbject.element);
         this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
   } else {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         if (оbject.element.classList.contains(this.daClassname)) {
            this.moveBack(оbject.parent, оbject.element, оbject.index);
         }
      }
   }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
   element.classList.add(this.daClassname);
   if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
   }
   if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
   }
   destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
   element.classList.remove(this.daClassname);
   if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
   } else {
      parent.insertAdjacentElement('beforeend', element);
   }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
   const array = Array.prototype.slice.call(parent.children);
   return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
   if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return -1;
            }

            if (a.place === "last" || b.place === "first") {
               return 1;
            }

            return a.place - b.place;
         }

         return a.breakpoint - b.breakpoint;
      });
   } else {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return 1;
            }

            if (a.place === "last" || b.place === "first") {
               return -1;
            }

            return b.place - a.place;
         }

         return b.breakpoint - a.breakpoint;
      });
      return;
   }
};

const da = new DynamicAdapt("max");
da.init();