import View, { view } from './views/View';
import linksView from './views/linksView';

const btnDropdown = document.querySelector('.dropdown__btn');
const dropdownMenu = document.querySelector('.dropdown__menu');

// if (!btnDropdown) return;
// btnDropdown.addEventListener('click', function () {
//   dropdownMenu.classList.toggle('hidden');
// });

const btnAddLink = document.querySelector('.btn-add-link');
btnAddLink.addEventListener('click', function () {
  linksView.addLinkPanel();
});

const controlSave = function () {
  console.log(linksView.checkURL());
};

const init = function () {
  view.addHandlerSaveBtn(controlSave);
};

init();
