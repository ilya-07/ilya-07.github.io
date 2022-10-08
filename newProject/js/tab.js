const jsTriggers = document.querySelectorAll('.js-tab-trigger'),
   jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) {
   trigger.addEventListener('click', function () {
      let id = this.getAttribute('data-tab'),
         content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
         activeTrigger = document.querySelector('.js-tab-trigger.active-tab'),
         activeContent = document.querySelector('.js-tab-content.active-tab');

      activeTrigger.classList.remove('active-tab');
      trigger.classList.add('active-tab');

      activeContent.classList.remove('active-tab');
      content.classList.add('active-tab');
   });
});