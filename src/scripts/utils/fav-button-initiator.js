const { default: FavoriteRestaurantIdb } = require('../data/fav-restaurant-idb');
const { createFavoriteButtonTemplate, createRemoveFromFavoriteButtonTemplate } = require('../views/templates/template-element');

const FavoriteButtonInitiator = {
  async init({ favButton, restaurants }) {
    this._favButton = favButton;
    this._restaurant = restaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderFavorite() {
    this._favButton.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderFavorited() {
    this._favButton.innerHTML = createRemoveFromFavoriteButtonTemplate();
    const favoritedRestaurant = document.querySelector('#remove-favorite');
    favoritedRestaurant.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
