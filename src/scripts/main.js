'use strict';

const dropdowns = document.querySelector('.dropdown');
const trigger = dropdowns.querySelector(`.dropdown__trigger`);

trigger.addEventListener('click', () => {
  dropdowns.classList.toggle('dropdown--active');
});
