import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ button, navbar, content }) {
    this._button = button;
    this._navbar = navbar;
    this._content = content;

    this._initiatorAppShell();
  }

  _initiatorAppShell() {
    DrawerInitiator.init({
      button: this._button,
      navbar: this._navbar,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
