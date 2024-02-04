import View from './View';

class DropdownPlatformView extends View {
  addHandlerDropdownBtn(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btnsDropdown = document.querySelectorAll('.dropdown__btn');
      btnsDropdown.forEach(btn => {
        if (e.target !== btn) return;
        const dropdown = btn.closest('.dropdown');
        const menuDropdown = dropdown.querySelector('.dropdown__menu');
        menuDropdown.classList.toggle('hidden');
        handler();
      });
    });
  }

  choosePlatform() {
    const dropdownMenu = document.querySelectorAll('.dropdown__menu');
    dropdownMenu.forEach(menu => {
      if (!menu) return;
      menu.addEventListener('click', e => {
        const dropdown = menu.closest('.dropdown');
        let platformName = dropdown.querySelector('.platform__name');
        let platformIcon = dropdown.querySelector('.platform__icon');
        const choosenPlatform = e.target.closest('.dropdown__menu--item');
        const choosenPlatformName = choosenPlatform.querySelector(
          '.dropdown__item--name'
        );
        const choosenPlatformIcon = choosenPlatform.querySelector(
          '.dropdown__item--img'
        );
        const choosenPlatformDataset = choosenPlatform.dataset.platform;
        platformName.dataset.platform = choosenPlatformDataset;
        platformName.textContent = choosenPlatformName.textContent;
        platformIcon.src = choosenPlatformIcon.src;
        menu.classList.add('hidden');
        const allPlatforms = document.querySelectorAll('.dropdown__menu--item');
        allPlatforms.forEach(platform => {
          platform.classList.remove('dropdown__menu--item-active');
        });
        choosenPlatform.classList.add('dropdown__menu--item-active');
      });
    });
  }
}

export default new DropdownPlatformView();
