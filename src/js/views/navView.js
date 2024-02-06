import View from './View';

class Nav {
  _parentEl = document.querySelector('.container-app');
  addHandlerProfileDetails(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const link = e.target.closest('.nav__link--profile-details');
      const links = document.querySelectorAll('.nav__item--link');
      if (!link) return;
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
      handler();
    });
  }

  addHandlerLinks(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const link = e.target.closest('.nav__link--links');
      const logo = e.target.closest('.nav__logo');
      const links = document.querySelectorAll('.nav__item--link');
      if (!link && !logo) return;
      links.forEach(link => link.classList.remove('active'));

      if (link) link.classList.add('active');
      if (logo) {
        const links = document.querySelectorAll('.nav__link--links');
        links.forEach(link => link.classList.add('active'));
      }
      handler();
    });
  }
}

export default new Nav();
