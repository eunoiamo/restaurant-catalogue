import Swal from 'sweetalert2';
import RestaurantAPI from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/fav-button-initiator';
import {
  createFormReviewTemplate,
  createRestaurantCategories,
  createRestaurantHeader,
  createRestaurantMenusDrinks,
  createRestaurantMenusFood,
  createRestaurantReviews,
} from '../templates/template-element';

const DetailPages = {
  async render() {
    return `
    <div class="detail__container">
    <div class="fav-button"></div>
    <div class="detail__header"></div>
    <div class="detail__content" id="main-content"> <!-- Tambahkan ID main-content di sini -->
      <div class="categories"></div>
      <div class="menus">
        <h2 class="menu-heading">Our Menu</h2>
        <img src="./images/food/food-detail.png" alt="Gambar Makanan Untuk Menu ">
        <div class="menu-item">
          <div class="foods">
            <h3>Foods</h3>
            <div class="food-list"></div>
          </div>
          <div class="drinks">
            <h3>Drinks</h3>
            <div class="drink-list"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews">
      <h2 class="review-heading">Consumer Responses</h2>
      <div class="review-list"></div>
      <div class="form-review"></div>
    </div>
  </div>`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantAPI.getDetailRestaurant(url.id);
    const detailContainer = document.querySelector('.detail__header');
    const categories = document.querySelector('.categories');
    const foodContainer = document.querySelector('.food-list');
    const drinkContainer = document.querySelector('.drink-list');
    const reviewContainer = document.querySelector('.review-list');
    const formContainer = document.querySelector('.form-review');

    restaurants.restaurant.menus.foods.forEach((food) => {
      foodContainer.innerHTML += createRestaurantMenusFood(food);
    });
    restaurants.restaurant.menus.drinks.forEach((drink) => {
      drinkContainer.innerHTML += createRestaurantMenusDrinks(drink);
    });

    restaurants.restaurant.categories.forEach((categori) => {
      categories.innerHTML += createRestaurantCategories(categori);
    });
    restaurants.restaurant.customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createRestaurantReviews(review);
    });
    detailContainer.innerHTML = createRestaurantHeader(restaurants.restaurant);

    FavoriteButtonInitiator.init({
      favButton: document.querySelector('.fav-button'),
      restaurants: {
        id: restaurants.restaurant.id,
        name: restaurants.restaurant.name,
        description: restaurants.restaurant.description,
        city: restaurants.restaurant.city,
        address: restaurants.restaurant.address,
        pictureId: restaurants.restaurant.pictureId,
        rating: restaurants.restaurant.rating,
      },
    });

    formContainer.innerHTML = createFormReviewTemplate();

    const formElement = formContainer.querySelector('form#review-form');
    const nameField = formElement.querySelector('#name');
    const reviewField = formElement.querySelector('#review');

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameValue = nameField.value;
      const reviewValue = reviewField.value;

      const newReview = {
        id: restaurants.restaurant.id,
        name: nameValue,
        review: reviewValue,
      };
      if (!newReview.name || !newReview.review) {
        console.error('Name and review are required');
        return;
      }
      RestaurantAPI.insertDataReview(newReview)
        .then(() => {
          nameField.value = '';
          reviewField.value = '';
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Data berhasil ditambahkan',
            timer: 2500,
            timerProgressBar: true,
            showConfirmButton: false,
            showClass: {
              popup: 'swal2-noanimation',
              backdrop: 'swal2-noanimation',
            },
            hideClass: {
              popup: '',
              backdrop: '',
            },
          });
        })
        .catch((error) => {
          console.log(error);
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menambah ulasan',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            showClass: {
              popup: 'swal2-noanimation',
              backdrop: 'swal2-noanimation',
            },
            hideClass: {
              popup: '',
              backdrop: '',
            },
          });
        });
    });
  },
};

export default DetailPages;
