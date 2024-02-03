import View from './View';
import githubIcon from '../../assets/images/icon-github.svg';
import arrowDownIcon from '../../assets/images/icon-chevron-down.svg';

class LinksView extends View {
  _linksBoxEl = document.querySelector('.app__content--stepLinks');
  _panelDataID = 0;

  addHandlerAddPanelLink(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btnAddLink = document.querySelector('.btn-add-link');
      if (e.target !== btnAddLink) return;
      handler();
    });
  }

  appendPanelLink() {
    const getStartedBox = document.querySelector('.add-link__box--content');
    getStartedBox.classList.add('hidden');
    this._linksBoxEl.append(this.createPanelLink());
  }

  checkUrl() {
    const inputs = document.querySelectorAll('.link-input');
    let correctUrl;

    inputs.forEach(input => {
      try {
        new URL(input.value);
        correctUrl = true;
      } catch (err) {
        correctUrl = false;
      }
    });

    return correctUrl;
  }

  storeLinkData() {
    const panels = document.querySelectorAll('.add-link__box--preview');
    let linkData;
    panels.forEach(panel => {
      if (!panel) return;
      const url = panel.querySelector('.link-input').value;
      linkData = {
        url: url,
      };
    });
    return linkData;
  }

  createPanelLink() {
    const newPanel = document.createElement('div');
    newPanel.classList.add('add-link__box--preview');
    newPanel.dataset.id = this._panelDataID++;
    newPanel.innerHTML = `
    <div class="drag-drop__box">
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
            class="link-input"
            placeholder="e.g. https://www.github.com/Bednar8">
          <p class="input__error">Can't be empty</p>

        </div>
    `;
    return newPanel;
  }
}

export default new LinksView();
