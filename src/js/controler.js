import * as model from './model.js';
import { view } from './views/View';
import linksView from './views/linksView';

const controlAddPanelLink = function () {
  if (!linksView.checkUrl() && model.state.panels.length > 0) return;
  // add panel link to panels array and append it in browser
  model.state.panels.push(linksView.createPanelLink());
  linksView.appendPanelLink();

  // add link data (url, platfrom) to links array
  model.state.links.push(linksView.storeLinkData());
  // linksView.storeLinkData();
  console.log(model.state);
};

const init = function () {
  linksView.addHandlerAddPanelLink(controlAddPanelLink);
};

init();
