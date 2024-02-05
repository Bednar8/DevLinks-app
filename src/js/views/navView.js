import View from './View';

class Nav {
  _parentEl = document.querySelector('.container-app');
  addHandlerNav(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const navLinks = document.querySelectorAll('.nav__link--profile-details');
      const link = e.target.closest('.nav__link--profile-details');
      if (!link) return;
      console.log('asdd');
      handler();
    });
  }
}

export default new Nav();
