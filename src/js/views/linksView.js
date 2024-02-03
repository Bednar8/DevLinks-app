import View from './View';
import githubIcon from '../../assets/images/icon-github.svg';
import arrowDownIcon from '../../assets/images/icon-chevron-down.svg';

class LinksView extends View {
  _parentElement = document.querySelector('.section__box');
  _linksEl = document.querySelector('.app__content--stepLinks');
  _linkNumber = 0;

  // btnAddLink.addEventListener('click', function () {
  //   linksView.addLinkPanel();
  // });

  addHandlerAddPanelLink(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btnAddLink = document.querySelector('.btn-add-link');
      if (e.target !== btnAddLink) return;
      handler();
    });
  }

  addHandlerRemovePanelLink(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btnsRemove = document.querySelectorAll('.btn-remove');
      btnsRemove.forEach(btn => {
        if (e.target !== btn) return;
        const currentPanel = e.target.closest('.add-link__box--preview');
        console.log(currentPanel);
        handler();
      });
    });
  }

  addLinkPanel() {
    this._linksEl.innerHTML = '';
    this._linksEl.insertAdjacentHTML('beforebegin', this._generateMarkup());
    const links = document.querySelectorAll('.add-link__box--preview');
    return Array.from(links);
  }

  removeLinkPanel(data) {
    this._data = data;
    console.log(this._data);
  }

  checkURL() {
    const input = document.querySelector('.link-input');
    try {
      new URL(input.value);
      input.classList.remove('link-input--error');
      return true;
    } catch (err) {
      input.classList.add('link-input--error');
      return false;
    }
  }

  _generateMarkup() {
    return `
    <div class="add-link__box--preview" draggable="true" data-link="${this
      ._linkNumber++}">
                <div class="drag-drop__box" >
                  <p class="drag-drop__btn">
                    <img class="drag-drop__box--icon"
                      src="./assets/images/icon-drag-and-drop.svg" alt="">
                    <span class="drag-drop__box--text">Link #${
                      this._linkNumber
                    }</span>
                  </p>
                  <button class="btn-remove">Remove</button>
                </div>
                <div class="dropdown">
                  <p class="dropdown__text text-s">Platform</p>
                  <button class="dropdown__btn">
                    <p>
                      <img src="${githubIcon}" alt="">
                      GitHub
                    </p>
                    <img src="${arrowDownIcon}" alt="">
                  </button>
                  <ul class="dropdown__menu hidden scroll">
                    <li class="dropdown__menu--item dropdown__menu--item-active"
                      data-platform="frontent-mentor">
                      <p>
                        <img src="./assets/images/icon-frontend-mentor.svg"
                          alt="">
                        Frontend Mentor
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="twitter">
                      <p>
                        <img src="./assets/images/icon-twitter.svg" alt="">
                        Twitter
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="linkedIn">
                      <p>
                        <img src="./assets/images/icon-linkedin.svg" alt="">
                        LinkedIn
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="youtube">
                      <p>
                        <img src="./assets/images/icon-youtube.svg" alt="">
                        YouTube
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="fb">
                      <p>
                        <img src="./assets/images/icon-facebook.svg" alt="">
                        Facebook
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="twitch">
                      <p>
                        <img src="./assets/images/icon-twitch.svg" alt="">
                        Twitch
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="dev-to">
                      <p>
                        <img src="./assets/images/icon-devto.svg" alt="">
                        Dev.to
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="codewars">
                      <p>
                        <img src="./assets/images/icon-codewars.svg" alt="">
                        Codewars
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="codepen">
                      <p>
                        <img src="./assets/images/icon-codepen.svg" alt="">
                        Codepen
                      </p>
                    </li>
                    <li class="dropdown__menu--item"
                      data-platform="freeCodeCamp">
                      <p>
                        <img src="./assets/images/icon-freecodecamp.svg" alt="">
                        freeCodeCamp
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="gitlab">
                      <p>
                        <img src="./assets/images/icon-gitlab.svg" alt="">
                        GilLab
                      </p>
                    </li>
                    <li class="dropdown__menu--item" data-platform="hashnode">
                      <p>
                        <img src="./assets/images/icon-hashnode.svg" alt="">
                        Hashnode
                      </p>
                    </li>
                    <li class="dropdown__menu--item"
                      data-platform="stack overflow">
                      <p>
                        <img src="./assets/images/icon-stack-overflow.svg"
                          alt="">
                        Stack Overflow
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <p class="dropdown__text text-s">Link</p>
                  <input id="link-input" type="text"
                    class="link-input"
                    placeholder="e.g. https://www.github.com/Bednar8">
                  <p class="input__error">Can't be empty</p>
                </div>
              </div>
    `;
  }
}

export default new LinksView();
