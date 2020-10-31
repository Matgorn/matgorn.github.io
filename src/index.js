import './main.scss';
import mainLayout from './app/mainLayout';
import mainController from './app/mainController';
import header from './app/header/headerLayout';
import slider from './app/slider/slider';
import aboutUs from './app/about-us/aboutUs';
import gallery from './app/gallery/gallery';
import musicSamples from './app/music-samples/musicSamples';
import contact from './app/contact/contact';
import handleSlider from './app/handlers/handleSlider';
import handleHamburger from './app/handlers/handleHamburger';
import handleHeader from './app/handlers/handleHeader';
import handleGallery from './app/handlers/handleGallery';
import handleMobileNav from './app/handlers/handleMoblieNav';
import setDocHeight from './app/handlers/setDocHeight';
import handleMessage from './app/handlers/handleMessage';

mainController({
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
});