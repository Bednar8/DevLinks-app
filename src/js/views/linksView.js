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
import dragAndDropIcon from '../../assets/images/icon-drag-and-drop.svg';
import illustrationEmptyIcon from '../../assets/images/illustration-empty.svg';

class LinksView extends View {
  _linksBoxEl = document.querySelector('.app__content--stepLinks');
  _appContent = document.querySelector('#app__content');
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

  render(data) {
    this._data = data;
    this._appContent.innerHTML = '';
    const markup = this._generateMarkup();
    this._appContent.insertAdjacentHTML('afterbegin', markup);
    this._generatePanelsLinks();
    this._data.currentPage = 'links';
  }

  appendPanelLink() {
    const box = document.querySelector('.app__content--stepLinks');
    const getStartedBox = document.querySelector('.add-link__box--content');
    getStartedBox.classList.add('hidden');
    box.append(this.createPanelLink());
    const panels = document.querySelectorAll('.add-link__box--preview');
    panels.forEach((panel, i) => {
      panel.dataset.id = i;
      panel.querySelector('.drag-drop__box--text').textContent = `Link #${++i}`;
    });
  }

  checkUrl() {
    const inputs = document.querySelectorAll('.link-input');
    const input__error = document.querySelectorAll('.input__error');
    let correctUrl;

    inputs.forEach((input, i) => {
      try {
        new URL(input.value);
        correctUrl = true;
        input.classList.remove('link-input--error');
        input__error[i].classList.add('hidden');
      } catch (err) {
        input.classList.add('link-input--error');
        input__error[i].classList.remove('hidden');
        correctUrl = false;
        if (input.value.trim() === '')
          input__error[i].textContent = `Can't be empty`;
        else input__error[i].textContent = `Incorrect URL`;
      }
    });
    if (inputs.length === 0) correctUrl = true;

    return correctUrl;
  }

  storeLinkData(links, panels) {
    const panelsEl = Array.from(
      document.querySelectorAll('.add-link__box--preview')
    );
    panels.forEach((panel, i) => {
      if (!panelsEl[i]) return;
      const input = panelsEl[i].querySelector('.link-input').value;
      const platform = panelsEl[i].querySelector('.platform__name').textContent;
      const dataPlatform =
        panelsEl[i].querySelector('.platform__name').dataset.platform;
      const id = panelsEl[i].dataset.id;
      const icon = panelsEl[i]
        .querySelector('.dropdown__btn')
        .querySelector('img').src;
      const text = panelsEl[i].querySelector(
        '.drag-drop__box--text'
      ).textContent;
      links.push({
        url: input,
        platform: platform,
        id: id,
        iconSrc: icon,
        text: text,
        dataPlatform: dataPlatform,
      });
    });
  }

  dragAndDropPanels() {
    const panelList = document.querySelector('.app__content--stepLinks');
    const panels = document.querySelectorAll('.add-link__box--preview');

    panels.forEach(panel => {
      panel.addEventListener('dragstart', function () {
        console.log('drag start');
        panel.classList.add('dragging');
      });

      panel.addEventListener('dragend', function () {
        panel.classList.remove('dragging');
      });
    });

    panelList.addEventListener('dragover', function (e) {
      e.preventDefault();
      const afterElement = getDragAfterElement(panelList, e.clientY);
      const draggable = document.querySelector('.dragging');
      console.log(afterElement);
      if (afterElement == null) {
        panelList.appendChild(draggable);
      } else {
        panelList.insertBefore(draggable, afterElement);
      }
    });

    const getDragAfterElement = function (container, y) {
      const draggableElements = [
        ...container.querySelectorAll('.add-link__box--preview:not(.dragging)'),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        {
          offset: Number.NEGATIVE_INFINITY,
        }
      ).element;
    };
  }

  createPanelLink() {
    const newPanel = document.createElement('div');
    newPanel.classList.add('add-link__box--preview');
    newPanel.draggable = true;
    newPanel.innerHTML = `
    <div class="drag-drop__box">
          <p class="drag-drop__btn">
            <img class="drag-drop__box--icon"
              src="${dragAndDropIcon}" alt="">
            <span class="drag-drop__box--text">Link #1</span>
          </p>
          <button class="btn-remove">Remove</button>
        </div>
        <div class="dropdown">
          <p class="dropdown__text text-s">Platform</p>
          <button class="dropdown__btn">
            <div> 
              <img class="platform__icon" src="${githubIcon}" alt="">
              <p class="platform__name" data-platform="github">GitHub</p>
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
              data-platform="frontend-mentor">
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
            <li class="dropdown__menu--item" data-platform="facebook">
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
            <li class="dropdown__menu--item" data-platform="devto">
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
              data-platform="stackoverflow">
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
          <p class="input__error hidden">Can't be empty</p>

        </div>
    `;
    return newPanel;
  }

  _generatePanelsLinks() {
    return this._data.panels
      .map(
        (panel, i) => `
    <div class="add-link__box--preview" data-id="${this._data.links[i].id}">
    <div class="drag-drop__box">
          <p class="drag-drop__btn">
            <img class="drag-drop__box--icon"
              src="${dragAndDropIcon}" alt="">
            <span class="drag-drop__box--text">${this._data.links[i].text}</span>
          </p>
          <button class="btn-remove">Remove</button>
        </div>
        <div class="dropdown">
          <p class="dropdown__text text-s">Platform</p>
          <button class="dropdown__btn">
            <div> 
              <img class="platform__icon" src="${this._data.links[i].iconSrc}" alt="">
              <p class="platform__name" data-platform="${this._data.links[i].dataPlatform}">${this._data.links[i].platform}</p>
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
              data-platform="frontend-mentor">
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
            <li class="dropdown__menu--item" data-platform="facebook">
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
            <li class="dropdown__menu--item" data-platform="devto">
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
              data-platform="stackoverflow">
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
          value="${this._data.links[i].url}"
            class="link-input"
            placeholder="e.g. https://www.github.com/Bednar8">
          <p class="input__error hidden">Can't be empty</p>

        </div>
        </div>
    `
      )
      .join('');
  }

  _generateMarkup() {
    return `
    <div class="section__box customize__links--box">
    <div class="header__text">
      <h1 class="heading-M">Customize your links</h1>
      <p class="header__text--description">Add/edit/remove links below
        and
        then share
        all your profiles with the
        world!</p>
    </div>
    <div class="add-link__box">
      <button class="btn btn-secondary btn-add-link">+ Add new
        link</button>
      <div class="app__content--stepLinks scroll">
        <div class="add-link__box--content text-center ${
          this._data.links.length === 0 ? '' : 'hidden'
        }">
          <img src="${illustrationEmptyIcon}" alt="">
          <h2 class="heading-M">Let's get you started</h2>
          <p class="add-link__box--text">Use the “Add new link” button
            to
            get started. Once you have
            more
            than one
            link,
            you can reorder and edit them. We're here to help you share
            your
            profiles
            with
            everyone!</p>
        </div>

        ${this._generatePanelsLinks()}
      </div>
      </div>
    </div>
  </div>
  <div class="btn__box"><button
      class="btn btn-primary btn-save">Save</button>
  </div>
    `;
  }
}

export default new LinksView();
