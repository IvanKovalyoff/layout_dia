'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector(`.dropdown__trigger`);

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');
});
