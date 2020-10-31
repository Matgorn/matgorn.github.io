function musicSamples(...songs) {
  const musicGallery = songs.map(song => {
    const { name, url } = song;
    return `
      <div class="sample">
        <h4>${name}</h4>
        <audio controls>
        <source src="${url}" type="audio/mpeg">
          Twoja przeglądarka nie posiada funkcji odtwarzania muzyki
        </audio>
      </div>
    `
  }).join('')

  return `
    <a id="galeriamuzyki"></a> 
    <hr class="section-hr">
    <section id="music-samples" class="container">
      <h2>Galeria utworów muzycznych</h2>
      <div class="music-gallery">
        ${musicGallery}
      </div>
    </section>
  `
};

export default musicSamples(
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  },
  {
    name: 'Justin Bieber - Holy',
    url: './music/JB.mp3'
  }
);