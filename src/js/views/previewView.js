import View from './View';

class Preview extends View {
  _appContent = document.querySelector('#app__content');

  addHandlerBackToProfile(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btnBackToEditor = e.target.closest('.btn__back-to-editor');
      if (!btnBackToEditor) return;
      handler();
    });
  }

  render(data) {
    this._data = data;
    this._appContent.innerHTML = '';
    const markup = this._generateMarkup();
    this._appContent.insertAdjacentHTML('afterbegin', markup);
    this._data.currentPage = 'preview';
    this.checkRender();
  }

  _generateMarkup() {
    return `
    <div class="bg-decoration__profile"></div>
    <div class="container-app">
        <nav class="nav nav__mobile">
            <div class="nav__preview ">
                <a href="#"
                    class="nav__preview--btn btn-secondary heading-S btn__back-to-editor">Back
                    to
                    Editor</a>
                <a href="#"
                    class="nav__preview--btn btn-primary heading-S">Share
                    Link</a>
            </div>
        </nav>
        <div class="container">
            <nav class="nav nav__desktop">
                <div class="nav__preview ">
                    <a href="#"
                        class="nav__preview--btn btn-secondary heading-S btn__back-to-editor">Back
                        to
                        Editor</a>
                    <a href="#"
                        class="nav__preview--btn btn-primary heading-S">Share
                        Link</a>
                </div>
            </nav>

            <main class="app">
        </div>
    </div>

    <section class="preview">
        <div class="preview__container">
            <div class="preview__profile">
                <div class="preview__profile--img ${
                  this._data.user.imgUrl === '' ? 'hidden' : ''
                }">
                    <img src="${this._data.user.imgUrl}"
                        alt="">
                </div>
                <h1 class="preview__profile--name heading-M">
                ${this._data.user.name} ${this._data.user.lastName}</h1>
                <p class="preview__profile--mail">${this._data.user.email}
                </p>
            </div>
            <ul class="devlinks__list">
            ${this._generateMarkupLinks()}
            </ul>
        </div>
    </section>
    </div>

    </main>
    <footer>
        <p>Coded by Paweł Bednarski</p>
    </footer>
    `;
  }
}

export default new Preview();
