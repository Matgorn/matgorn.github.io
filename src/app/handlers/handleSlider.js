export default () => {
    const slides = document.querySelectorAll('.slide-content');
    const logo = document.querySelector('.logo');
    let index = 0;

    setInterval(() => {
        index = checkSlideIndex(index, slides);
        switchSlide(index, slides);
        index++;
    }, 8000);

    window.addEventListener('scroll', () => {
        let scrollToTop = document.scrollingElement.scrollTop;
        let slider = document.querySelectorAll('.slide-content');
        const factor = 0.6;
        let value = scrollToTop * factor;
        slider.forEach(slide => {
            slide.style.backgroundPosition = `center ${value}px`;
        });
    });
};

function switchSlide(index, slides) {
    slides.forEach(slide => {
        slide.style.opacity = 0;
    });

    slides[index].style.opacity = 1;
};

function checkSlideIndex(index, slides) {
    return index == slides.length ? 0 : index;
}