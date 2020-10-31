const handleHamburger = () => {
    document.querySelector('.hamburger-wrapper').addEventListener('click', toggleHamburger)
};

function toggleHamburger() {
  const el1 = document.querySelector('#hamburger-1');
        const el2 = document.querySelector('#hamburger-2');
        const el3 = document.querySelector('#hamburger-3');
        const navMenu = document.querySelector('nav');
    
        el1.classList.toggle('active-1');
        el2.classList.toggle('active-2');
        el3.classList.toggle('active-3');
        navMenu.classList.toggle('nav-active');
}

export {handleHamburger as default, toggleHamburger}