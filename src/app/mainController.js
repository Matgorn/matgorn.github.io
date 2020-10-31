function mainController ({
  body = document.querySelector('body'),
  mainLayout,
  header,
  slider,
  aboutUs,
  gallery,
  musicSamples,
  contact,
  handleSlider,
  handleHamburger,
  handleHeader,
  handleGallery,
  handleMobileNav,
  setDocHeight,
  handleMessage
}) {
  body.innerHTML = mainLayout({
    header,
    slider,
    aboutUs,
    gallery,
    musicSamples,
    contact
  });
    setDocHeight();
    window.addEventListener('load', () => {
      setDocHeight();
      handleSlider();
      handleHamburger();
      handleHeader();
      handleGallery();
      handleMobileNav();
      handleMessage();
    });
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);
};

export default mainController;