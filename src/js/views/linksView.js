import View from './View';

class LinksView extends View {
  _parentElement = document.querySelector('.app__content--stepLinks');
  addLinkPanel() {
    const link = document.querySelector('add-link__box--preview');
    if (!link) this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML(
      'beforebegin',
      this._generateMarkup()
    );
  }

  _generateMarkup() {
    return `
    <div class="add-link__box--preview" draggable="true">
                <div class="drag-drop__box" data-link="1">
                  <p class="drag-drop__btn">
                    <img class="drag-drop__box--icon"
                      src="./assets/images/icon-drag-and-drop.svg" alt="">
                    <span class="drag-drop__box--text">Link #1</span>
                  </p>
                  <button class="btn-remove">Remove</button>
                </div>
                <div class="dropdown">
                  <p class="dropdown__text text-s">Platform</p>
                  <button class="dropdown__btn">
                    <p>
                      <img src="./assets/images/icon-github.svg" alt="">
                      GitHub
                    </p>
                    <img src="./assets/images/icon-chevron-down.svg" alt="">
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
                    class="link-input link-input--error"
                    placeholder="e.g. https://www.github.com/Bednar8">
                  <p class="input__error">Can't be empty</p>

                </div>
              </div>
    `;
  }
}

export default new LinksView();
