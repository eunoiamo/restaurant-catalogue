import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import RestaurantAPI from '../../data/restaurant-source';
import {
  createAboutUsElement,
  createHeroElement,
  createRestaurantItemTemplate,
  createRestaurantTitleTemplate,
} from '../templates/template-element';

const MainPages = {
  async render() {
    return `
    <div class="hero"></div>
    <div class="about__us">  </div>

    <div class="restaurant__container">
      <div class="inner_restaurant"></div>
      <div class="restaurant-list"></div>
    </div>


  `;
  },
  async afterRender() {
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about__us');
    const restaurantContainer = document.querySelector('.restaurant-list');
    const titleContainer = document.querySelector('.inner_restaurant');
    const restaurants = await RestaurantAPI.getDataRestaurant();

    hero.innerHTML = createHeroElement();
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });

    titleContainer.innerHTML = createRestaurantTitleTemplate();

    about.innerHTML = createAboutUsElement();
  },
};

export default MainPages;
