function handleGallery() {
  const galleryActive = document.querySelector('.gallery-active');
    const galleryPhotos = document.querySelectorAll('.gallery-photo');
    const exitGallery = document.querySelector('.exit-gallery');
    let showPhoto;

    galleryPhotos.forEach(photo => {
      photo.addEventListener('click', () => {
        showPhoto = photo.cloneNode();

        if (galleryActive.childNodes[3] && galleryActive.childNodes[3] != showPhoto) {
          galleryActive.removeChild(galleryActive.childNodes[3]);
        }

        galleryActive.appendChild(showPhoto);
        showPhoto.classList.add('gallery-photo-active');
        galleryActive.style.visibility = 'visible';

        exitGallery.style.top = showPhoto.getBoundingClientRect().top + 'px';
        exitGallery.style.left = showPhoto.getBoundingClientRect().right + 'px';
      });
    });

    galleryActive.addEventListener('click', (e) => {
      if (showPhoto.offsetLeft != e.target.x
        && showPhoto.offsetLeft != e.target.x - 1
        && showPhoto.offsetLeft != e.target.x + 1
        ) {
        galleryActive.style.visibility = 'hidden';
      }
    });
};

export default handleGallery;