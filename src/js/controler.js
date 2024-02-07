import * as model from './model.js';
import { view } from './views/View';
import linksView from './views/linksView';
import dropdownPlatformView from './views/dropdownPlatformView.js';
import phoneView from './views/phoneView.js';
import navView from './views/navView.js';
import profileDetailsView from './views/profileDetailsView.js';
import previewView from './views/previewView.js';

const controlAddPanelLink = function () {
  if (!linksView.checkUrl() && model.state.panels.length > 0) return;
  // add panel link to panels array and append it in browser
  model.state.panels.push(linksView.createPanelLink());
  linksView.appendPanelLink();

  // store links data in state
  model.state.links = [];
  linksView.storeLinkData(model.state.links, model.state.panels);
  console.log(model.state);

  // add link to phone mokup
  phoneView.createLink(model.state.links);
};

const controlRemovePanelLink = function (panelToRemoveIndex) {
  model.state.links.splice(panelToRemoveIndex, 1);
  model.state.panels.splice(panelToRemoveIndex, 1);

  phoneView.removeLinkFromMokup(panelToRemoveIndex);
  console.log(model.state);
};

const controlSave = function () {
  // store links data in state
  if (!linksView.checkUrl()) return;

  switch (model.state.currentPage) {
    case 'links':
      view.renderSaveMessage('Your changes have been successfully saved!');
      model.state.links = [];
      linksView.storeLinkData(model.state.links, model.state.panels);
      break;
    case 'profile details':
      if (!profileDetailsView.formValidation(model.state)) return;
      profileDetailsView.saveProfileDetailsData(model.state);
      view.renderSaveMessage('Your changes have been successfully saved!');
      break;
  }

  console.log(model.state);
};

const controlChoosePlatform = function () {
  dropdownPlatformView.choosePlatform();
  phoneView.changeLinkInMokup(model.state.links);
};

const controlProfileDetails = function () {
  console.log(model.state);
  profileDetailsView.render(model.state);
};

const controlLinks = function () {
  linksView.render(model.state);
};

const controlPreview = function () {
  previewView.render(model.state);
};

const init = function () {
  view.addHandlerSaveBtn(controlSave);
  navView.addHandlerProfileDetails(controlProfileDetails);
  navView.addHandlerLinks(controlLinks);
  navView.addHandlerPreview(controlPreview);
  linksView.addHandlerAddPanelLink(controlAddPanelLink);
  linksView.addHandlerRemovePanelLink(controlRemovePanelLink);
  dropdownPlatformView.addHandlerDropdownBtn(controlChoosePlatform);
  profileDetailsView.addHandlerInputs();
};

init();
