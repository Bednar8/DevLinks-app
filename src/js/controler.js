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

  // add link to phone mokup
  phoneView.createLink(model.state.links);
};

const controlRemovePanelLink = function (panelToRemoveIndex) {
  model.state.links.splice(panelToRemoveIndex, 1);
  model.state.panels.splice(panelToRemoveIndex, 1);

  phoneView.removeLinkFromMokup(panelToRemoveIndex);
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
};

const controlChoosePlatform = function () {
  dropdownPlatformView.choosePlatform();
  phoneView.changeLinkInMokup(model.state.links);
};

const controlProfileDetails = function () {
  profileDetailsView.render(model.state);
};

const controlLinks = function () {
  linksView.render(model.state);
};

const controlPreview = function () {
  if (model.state.currentPage === 'links' && !linksView.checkUrl()) return;
  if (
    model.state.currentPage === 'profile details' &&
    !profileDetailsView.formValidation(model.state)
  )
    return;
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
  previewView.addHandlerBackToProfile(controlProfileDetails);
};

init();
