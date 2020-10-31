import musicSamples from "./music-samples/musicSamples";

export default ({
  header = '',
  slider = '',
  aboutUs ='',
  gallery = '',
  musicSamples = '',
  contact = ''
} = {}) => {
  return `
    <div class="main-wrapper">
      ${header}
      ${slider}
      ${aboutUs}
      ${gallery}
      ${musicSamples}
      ${contact}
    </div>
  `
};