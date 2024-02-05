import * as model from './model.js';
import { view } from './views/View';
import linksView from './views/linksView';
import dropdownPlatformView from './views/dropdownPlatformView.js';
import phoneView from './views/phoneView.js';
import navView from './views/navView.js';
import profileDetailsView from './views/profileDetailsView.js';

const controlAddPanelLink = function () {
  if (!linksView.checkUrl() && model.state.panels.length > 0) return;
  // add panel link to panels array and append it in browser
  model.state.panels.push(linksView.createPanelLink());
  linksView.appendPanelLink();

  // store links data in state
  model.state.links = [];
  linksView.storeLinkData(model.state.links);

  // add link to phone mokup
  phoneView.createLink(model.state.links);
};

const controlRemovePanelLink = function (panelToRemoveIndex) {
  model.state.links.splice(panelToRemoveIndex, 1);
  model.state.panels.splice(panelToRemoveIndex, 1);
  // feature to do -> remove correct link form phone mokup
  phoneView.removeLinkFromMokup(panelToRemoveIndex);
  console.log(model.state);
};

const controlSave = function () {
  // store links data in state
  if (!linksView.checkUrl()) return;
  model.state.links = [];
  linksView.storeLinkData(model.state.links);
  console.log(model.state);
};

const controlChoosePlatform = function () {
  // const links = phoneView.createLink(model.state.links);
  dropdownPlatformView.choosePlatform();
  phoneView.changeLinkInMokup(model.state.links);
};

const controlNav = function () {
  profileDetailsView.render();
};

const init = function () {
  view.addHandlerSaveBtn(controlSave);
  navView.addHandlerNav(controlNav);
  linksView.addHandlerAddPanelLink(controlAddPanelLink);
  linksView.addHandlerRemovePanelLink(controlRemovePanelLink);
  dropdownPlatformView.addHandlerDropdownBtn(controlChoosePlatform);
};

init();
