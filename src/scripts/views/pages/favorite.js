import FavoriteRestaurantIdb from '../../data/fav-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-element';

const FavoritePages = {
  async render() {
    return `
    <div class="restaurant__container">
      <div class="inner_restaurant">
        <h2>Restoran Favorit anda</h2>
      </div>
      <div class="restaurant-list"></div>
    </div>
      `;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('.restaurant-list');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();

    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default FavoritePages;
