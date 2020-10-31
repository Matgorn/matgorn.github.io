export default (logoUrl = '') => {
  if(logoUrl.includes('imgs')) {
    return `
      <div class="logo">
        <img src="${logoUrl}" alt="logo" id="logo">
      </div>
    `
  } else {
    return `
      <div class="logo">
        <h1>${logoUrl}</h1>
      </div>
    `
  }
};