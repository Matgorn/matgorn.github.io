function slideshowLayout(...backgroundUrls) {
  const content = backgroundUrls.map(url => {
    return `
      <li 
        class="slide-content"
        style="
          background-image: linear-gradient(0deg, rgba(0,0,0,0.91415313225058) 50%, rgba(0,0,0,0) 100%), url(${url})
        "
      >
      </li>
    `
  }).join('');

  return `
    <a id="start"></a>
    <div class="intro-slider">
      <div class="slideshow">
        <h1 class="white__text">lorem ipsum sit dolor a met</h1>
        <ul class="slides">
          ${content}
        </ul>
      </div>
    </div>
  `
};

export default slideshowLayout(
  './imgs/background.jpg',
  './imgs/background-2.jpg',
  './imgs/background-3.jpg'
);