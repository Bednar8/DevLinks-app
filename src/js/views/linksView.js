import View from './View';
import githubIcon from '../../assets/images/icon-github.svg';
import arrowDownIcon from '../../assets/images/icon-chevron-down.svg';
import frontentMentorIcon from '../../assets/images/icon-frontend-mentor.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import twitchIcon from '../../assets/images/icon-twitch.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import devToIcon from '../../assets/images/icon-devto.svg';
import codewarsIcon from '../../assets/images/icon-codewars.svg';
import codepenIcon from '../../assets/images/icon-codepen.svg';
import freeCodeCampIcon from '../../assets/images/icon-freecodecamp.svg';
import gitlabIcon from '../../assets/images/icon-gitlab.svg';
import hashnodeIcon from '../../assets/images/icon-hashnode.svg';
import stackOverflowIcon from '../../assets/images/icon-stack-overflow.svg';
import linkedInIcon from '../../assets/images/icon-linkedin.svg';

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

  addHandlerRemovePanelLink(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const panels = document.querySelectorAll('.add-link__box--preview');
      panels.forEach((panel, i, arr) => {
        const btnRemove = panel.querySelector('.btn-remove');
        if (e.target !== btnRemove) return;
        const panelEl = btnRemove.closest('.add-link__box--preview');
        handler(i);
        panelEl.remove();
        const panelNum = document.querySelectorAll('.drag-drop__box--text');
        panelNum.forEach((panel, i) => (panel.textContent = `Link #${++i}`));
        if (arr.length === 1) {
          const getStartedBox = document.querySelector(
            '.add-link__box--content'
          );
          getStartedBox.classList.remove('hidden');
        }
      });
    });
  }

  appendPanelLink() {
    const getStartedBox = document.querySelector('.add-link__box--content');
    getStartedBox.classList.add('hidden');
    this._linksBoxEl.append(this.createPanelLink());
    const panels = document.querySelectorAll('.add-link__box--preview');
    panels.forEach((panel, i) => {
      panel.dataset.id = i;
      panel.querySelector('.drag-drop__box--text').textContent = `Link #${++i}`;
    });
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

  storeLinkData(links) {
    const panels = Array.from(
      document.querySelectorAll('.add-link__box--preview')
    );
    panels.forEach((panel, i) => {
      const input = panel.querySelector('.link-input').value;
      const platform = panel.querySelector('.platform__name').textContent;

      links.push({
        url: input,
        platform: platform,
      });
    });
  }

  createPanelLink() {
    const newPanel = document.createElement('div');
    newPanel.classList.add('add-link__box--preview');
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
            <div> 
              <img class="platform__icon" src="${githubIcon}" alt="">
              <p class="platform__name">GitHub</p>
            </div>
            <img src="${arrowDownIcon}" alt="">
          </button>
          <ul class="dropdown__menu hidden scroll">
            <li class="dropdown__menu--item dropdown__menu--item-active"
              data-platform="github">
              <p>
              <img class="dropdown__item--img" src="${githubIcon}" alt="">
                <span class="dropdown__item--name">Github</span>
              </p>
            <li class="dropdown__menu--item"
              data-platform="frontent-mentor">
              <p>
                <img class="dropdown__item--img" src="${frontentMentorIcon}" alt="">
                <span class="dropdown__item--name">Frontend Mentor</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="twitter">
              <p>
                <img class="dropdown__item--img" src="${twitterIcon}" alt="">
                <span class="dropdown__item--name">Twitter</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="linkedIn">
              <p>                
                <img class="dropdown__item--img" src="${linkedInIcon}" alt="">
                <span class="dropdown__item--name">LinkedIn</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="youtube">
              <p>
                <img class="dropdown__item--img" src="${youtubeIcon}" alt="">
                <span class="dropdown__item--name">YouTube</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="fb">
              <p>
                <img class="dropdown__item--img" src="${facebookIcon}" alt="">
                <span class="dropdown__item--name">Facebook</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="twitch">
              <p>
                <img class="dropdown__item--img" src="${twitchIcon}" alt="">
                <span class="dropdown__item--name">Twitch</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="dev-to">
              <p>
                <img class="dropdown__item--img" src="${devToIcon}" alt="">
                <span class="dropdown__item--name">Dev.to</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="codewars">
              <p>
                <img class="dropdown__item--img" src="${codewarsIcon}" alt="">
                <span class="dropdown__item--name">Codewars</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="codepen">
              <p>
                <img class="dropdown__item--img" src="${codepenIcon}" alt="">
                <span class="dropdown__item--name">Codepen</span>
              </p>
            </li>
            <li class="dropdown__menu--item"
              data-platform="freeCodeCamp">
              <p>
                <img class="dropdown__item--img" src="${freeCodeCampIcon}" alt="">
                <span class="dropdown__item--name">freeCodeCamp</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="gitlab">
              <p>
                <img class="dropdown__item--img" src="${gitlabIcon}" alt="">
                <span class="dropdown__item--name">GilLab</span>
              </p>
            </li>
            <li class="dropdown__menu--item" data-platform="hashnode">
              <p>
                <img class="dropdown__item--img" src="${hashnodeIcon}" alt="">
                <span class="dropdown__item--name">Hashnode</span>
              </p>
            </li>
            <li class="dropdown__menu--item"
              data-platform="stack overflow">
              <p>
                <img class="dropdown__item--img" src="${stackOverflowIcon}" alt="">
                <span class="dropdown__item--name">Stack Overflow</span>
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
