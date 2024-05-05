const DrawerInitiator = {
  init({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, navbar);
    });
  },

  _toggleDrawer(event, navbar) {
    event.stopPropagation();
    navbar.classList.toggle('active');
  },

  _closeDrawer(event, navbar) {
    event.stopPropagation();
    navbar.classList.remove('active');
  },
};

export default DrawerInitiator;
