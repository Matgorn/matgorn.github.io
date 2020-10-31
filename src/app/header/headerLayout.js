import logo from './logo';
import createNavEls from './createNavEls';
import hamburgerMenu from './hamburgerMenu';

function headerLayout (logo, createNavEls, hamburgerMenu) {
  return `
    <div class="header-wrapper">
      <header class="container">
        ${logo}
        ${createNavEls}
        ${hamburgerMenu}
      </header>
    </div>
  `
};

export default headerLayout(
  logo('Młyn Ubogich'), 
  createNavEls(
    'Start',
    'O nas',
    'Galeria',
    'Galeria Muzyki',
    'Kontakt'
  ),
  hamburgerMenu()
);