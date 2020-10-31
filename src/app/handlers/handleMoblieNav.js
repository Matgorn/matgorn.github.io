import { toggleHamburger } from './handleHamburger';

export default () => {
  const navEls = document.querySelectorAll('.nav-el');
  const mobileNav = document.querySelector('nav');

  navEls.forEach(el => {
    el.addEventListener('click', () => {
      if (mobileNav.classList.contains('nav-active')) {
        toggleHamburger();
      }
    });
  });
}