export default class View {
  _parentEl = document.querySelector('.app');
  _data;

  addHandlerSaveBtn(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btnSave = document.querySelector('.btn-save');
      if (e.target !== btnSave) return;
      handler();
    });
  }
}

export const view = new View();
