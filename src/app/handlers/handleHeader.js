export default () => {
    const header = document.querySelector('.header-wrapper');
    const slider = document.querySelector('.slide-content');
    const aboutUs = document.querySelector('#about-us');
    const aboutUsMembers = document.querySelector('#about-us-2');

    window.addEventListener('scroll', (event) => {
        const headerPos = header.getBoundingClientRect().top;
        const sliderHeight = parseInt(window.getComputedStyle(slider).height);
        const headerHeight = parseInt(window.getComputedStyle(header).height);
        const sliderPos = sliderHeight - headerHeight;
        const aboutUsPos = aboutUs.getBoundingClientRect().top + parseInt(window.getComputedStyle(aboutUsMembers).height) * 2;

        if(headerPos <= 0) {
            header.style.position = 'fixed';
            header.style.top = 0;
            header.style.background = 'black';
        }

        if(window.pageYOffset < sliderPos) {
            header.style.position = 'absolute';
            header.style.top = '88vh';
            header.style.background = 'transparent';
        }

        if(window.pageYOffset > aboutUsPos && !checkIfAnimated()) {
            animate('add');
        } else if (window.pageYOffset < aboutUsPos / 2 && checkIfAnimated) {
            animate('remove');
        }

    });
};

function checkIfAnimated() {
    const members = document.querySelectorAll('.members-grid-el');
    let animated = false;

    members.forEach((member, index) => {
        if(member.classList.contains(`animate-member-${index + 1}`)) {
            animated = true;
        }
    })

    return animated;
}

function animate(action) {
    const members = document.querySelectorAll('.members-grid-el');

    members.forEach((member, index) => {
        if(action == 'add') {
            member.classList.add(`animate-member-${index + 1}`);
        } else if (action == 'remove') {
            member.classList.remove(`animate-member-${index + 1}`);
        }
    });
}