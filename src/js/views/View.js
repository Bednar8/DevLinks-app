export default class View {
  _parentElement = document.querySelector('.container-app');
  _appContent = document.querySelector('#app__content');
  _data;

  addHandlerSaveBtn(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btnSave = this.querySelector('.btn-save');
      if (e.target !== btnSave) return;
      console.log(e.target);
      handler();
    });
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}

export const view = new View();
