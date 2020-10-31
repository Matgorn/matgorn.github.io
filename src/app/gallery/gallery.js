function gallery(...images) {
  const numberPerCol = Math.floor(images.length / 3)
  const columnOne = [];
  const columnTwo = [];
  const columnThree = [];
  let number = 0;
  
  images.forEach((image, index) => {
    if(index < numberPerCol) {
      
        columnOne.push(`<img id="img-${index + 1}" class="gallery-photo" src=${image} />`);
    
    } else if (index < numberPerCol * 2) {

      columnTwo.push(`<img id="img-${index + 1}"  class="gallery-photo" src=${image} />`);

    } else if(index < numberPerCol * 3) {

      columnThree.push(`<img id="img-${index + 1}"  class="gallery-photo" src=${image} />`);

    } else if (index >= numberPerCol * 3) {

      if(number == 0) {
        columnOne.push(`<img id="img-${index + 1}"  class="gallery-photo" src=${image} />`);
        number++;
      } else if(number == 1) {
        columnTwo.push(`<img id="img-${index + 1}"  class="gallery-photo" src=${image} />`);
        number++;
      } else if(number == 2) {
        columnThree.push(`<img id="img-${index + 1}"  class="gallery-photo" src=${image} />`);
        number = 0;
      }
    }
  });

  if(number == 1) {
    columnTwo.push(`<img id="img-${images.length + 1}" class="gallery-photo" src=${images[0]} />`);
    columnThree.push(`<img id="img-${images.length + 2}" class="gallery-photo" src=${images[1]} />`);
  } 
  if (number == 2) {
    columnThree.push(`<img id="img-${images.length + 1}" class="gallery-photo" src=${images[0]} />`);
  }

  return `
    <a id="galeria"></a>
    <hr class="section-hr">
    <section class="container" id="gallery">
      <h2>GALERIA ZDJĘĆ</h2>
      <div class="gallery-container">
        <div class="column">
          ${columnOne.join('')}
        </div>
        <div class="column">
          ${columnTwo.join('')}
        </div>
        <div class="column">
          ${columnThree.join('')}
        </div>
      </div>
      <div class="gallery-active">
        <div class="exit-gallery">
          <div class="exit-el" id="exit-1"></div>
          <div class="exit-el" id="exit-2"></div>
        </div>
      </div>
    </section>
  `
}



export default gallery(
  './imgs/gallery/image-1.jpg',
  './imgs/gallery/image-2.jpg',
  './imgs/gallery/image-3.jpg',
  './imgs/gallery/image-4.jpg',
  './imgs/gallery/image-5.jpg',
  './imgs/gallery/image-6.jpg',
  './imgs/gallery/image-7.jpg',
  './imgs/gallery/image-8.jpg',
  './imgs/gallery/image-9.jpg',
  './imgs/gallery/image-10.jpg',
);