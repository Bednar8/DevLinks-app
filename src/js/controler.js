import * as model from './model.js';
import { view } from './views/View';
import linksView from './views/linksView';
import dropdownPlatformView from './views/dropdownPlatformView.js';

const controlAddPanelLink = function () {
  if (!linksView.checkUrl() && model.state.panels.length > 0) return;
  // add panel link to panels array and append it in browser
  model.state.panels.push(linksView.createPanelLink());
  linksView.appendPanelLink();

  // store links data in state
  model.state.links = [];
  linksView.storeLinkData(model.state.links);
};

const controlRemovePanelLink = function (panelToRemoveIndex) {
  model.state.links.splice(panelToRemoveIndex, 1);
  model.state.panels.splice(panelToRemoveIndex, 1);
  console.log(model.state);
};

const controlSave = function () {
  // store links data in state
  model.state.links = [];
  linksView.storeLinkData(model.state.links);
  console.log(model.state);
};

const controlChoosePlatform = function () {
  dropdownPlatformView.choosePlatform();
};

const init = function () {
  view.addHandlerSaveBtn(controlSave);
  linksView.addHandlerAddPanelLink(controlAddPanelLink);
  linksView.addHandlerRemovePanelLink(controlRemovePanelLink);
  dropdownPlatformView.addHandlerDropdownBtn(controlChoosePlatform);
};

init();
