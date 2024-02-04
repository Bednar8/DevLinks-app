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

class PhoneView extends View {
  _phoneMokup = document.querySelector('.phone__mokup');

  changeLinkInMokup(links) {
    const dropdownMenu = document.querySelectorAll('.dropdown__menu');
    dropdownMenu.forEach(menu => {
      menu.addEventListener('click', e => {
        const dropdownItem = e.target.closest('.dropdown__menu--item');
        // if (e.target !== dropdownItem) return;
        this.createLink.bind(this)(links);
      });
    });
  }

  createLink(links) {
    const devLinksList = document.querySelector('.devlinks__list');
    const platformsName = document.querySelectorAll('.platform__name');
    const platformsIcon = document.querySelectorAll('.platform__icon');

    devLinksList.innerHTML = '';
    links.forEach((link, i) => {
      console.log(
        platformsName[i].textContent,
        platformsName[i].dataset.platform,
        platformsIcon
      );
      devLinksList.insertAdjacentHTML(
        'afterbegin',
        this._generateMarkupLink(
          platformsName[i].textContent,
          platformsName[i].dataset.platform,
          platformsIcon
        )
      );
    });
  }

  _generateMarkupLink(platformName, platform, iconUrl = githubIcon) {
    return `
        <li class="devlinks__list--item" data-platform="${platform}">
          <div class="devlinks__list--item-platform">
          <img class="platform__icon" src="${iconUrl}" alt="">
            ${platformName}
          </div>
          <img src="./assets/images/icon-arrow-right.svg" alt="">
        </li>
    `;
  }
}

export default new PhoneView();
