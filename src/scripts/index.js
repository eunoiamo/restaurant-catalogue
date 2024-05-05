import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/swRegister';

const button = document.querySelector('.burger__menu');
const navbar = document.querySelector('.menu');
const content = document.querySelector('#main-content');

const app = new App({
  button,
  navbar,
  content,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
