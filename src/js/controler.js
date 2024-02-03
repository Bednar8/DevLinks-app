import * as model from './model.js';
import { view } from './views/View';
import linksView from './views/linksView';

const btnDropdown = document.querySelector('.dropdown__btn');
const dropdownMenu = document.querySelector('.dropdown__menu');

// if (!btnDropdown) return;
// btnDropdown.addEventListener('click', function () {
//   dropdownMenu.classList.toggle('hidden');
// }

const controlAddLinksPanel = function () {
  const linksPanel = linksView.addLinkPanel();
  model.state.linkPanels = linksPanel;
};

const controlRemoveLinksPanel = function () {
  linksView.removeLinkPanel(model.state);
};

const controlSave = function () {
  console.log(linksView.checkURL());
};

const init = function () {
  view.addHandlerSaveBtn(controlSave);
  linksView.addHandlerAddPanelLink(controlAddLinksPanel);
  linksView.addHandlerRemovePanelLink(controlRemoveLinksPanel);
};

init();
