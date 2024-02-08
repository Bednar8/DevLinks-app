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

  checkRender() {
    const linksProfileNavs = document.querySelectorAll('.nav__links-profile');
    const phoneMockup = document.querySelector('.phone__mokup');
    const appContent = document.querySelector('#app__content');
    if (this._data.currentPage === 'preview') {
      appContent.classList.add('preview');
      appContent.classList.remove('section');
      phoneMockup.classList.add('hidden');
      linksProfileNavs.forEach(nav => nav.classList.add('hidden'));
    } else {
      phoneMockup.classList.remove('hidden');
      linksProfileNavs.forEach(nav => nav.classList.remove('hidden'));
      appContent.classList.remove('preview');
      appContent.classList.add('section');
    }
  }

  renderSaveMessage(msg) {
    const markup = `
    <div class="copied__link">
      <img src="${savedIcon}" alt="">
      <p>${msg}</p>
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

  _generateMarkupLinks() {
    return this._data.links
      .map((link, i) => {
        return `
            <li class="devlinks__list--item" data-platform="${this._data.links[i].dataPlatform}" data-id="${this._data.links[i].id}">
              <div class="devlinks__list--item-platform">
              <img class="platform__icon" src="${this._data.links[i].iconSrc}" alt="">
                ${this._data.links[i].platform}
              </div>
              <img src="./assets/images/icon-arrow-right.svg" alt="">
            </li>
        `;
      })
      .join('');
  }
}

export const view = new View();
