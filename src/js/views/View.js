import savedIcon from '../../assets/images/icon-changes-saved.svg';

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

  renderSaveMessage() {
    const markup = `
    <div class="copied__link">
      <img src="${savedIcon}" alt="">
      <p>Your changes have been successfully saved!</p>
    </div>
  `;
    this._parentEl.insertAdjacentHTML('beforeend', markup);
    this._removeSaveMessage();
  }

  _removeSaveMessage() {
    setTimeout(() => {
      this._parentEl.querySelector('.copied__link').remove();
    }, 2000);
  }
}

export const view = new View();
