import CONFIG from '../../globals/config';

const createHeroElement = () => `

<div class="hero-container">
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
      <img class="hero__image" src="./images/heros/hero-image_2-large.jpg" 
        alt="banner gambar restoran" srcset="" />
    </picture>
    <div class="hero__inner">
      <div class="img__logo">
        <img src="./images/logo/png/logo-tr.png" alt="Gambar Logo Restaurant" />
      </div>
      <h1 class="hero__title">Restaurant</h1>
      <p class="tagline">
        Selamat datang di Dine Ease, platform terbaik untuk menemukan berbagai
        pilihan restoran terkemuka di berbagai kota! Temukan pengalaman kuliner
        yang tak terlupakan dengan berbagai pilihan hidangan yang lezat dari
        restoran-restoran terbaik yang telah kami kurasi.
      </p>
    </div>
</div>

`;

const createRestaurantTitleTemplate = () => `
<h2>Daftar Restaurant</h2>
<p>Berikut merupakan daftar restaurant kami, silakan</p>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
  <div class="skeleton"></div>
  <div class="card-content">
  <div class="card">
    <img src="${CONFIG.BASE_IMAGE_MEDIUM_URL}/${restaurant.pictureId}" alt="${restaurant.name} image"
      class="lazyload restaurant__image" />
    <a href="/#/detail/${restaurant.id}">
      <p class="blurry"></p>
    </a>
  <h2 class="restaurant__name">
  <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
  </h2>
  <p class="city"><i class="fa-solid fa-location-dot"></i>${restaurant.city}</p>
  <p class="rating">⭐ ${restaurant.rating}</p>
  </div>
  </div>
</div>
`;
const createAboutUsElement = () => `

  <div class="about__content">
    <h3 class="tagline">Discover Culinary Delights with Dine Ease!</h3>
    <h2 class="about__title">About Us</h2>
    <p>
      Dine Ease adalah teman kuliner terbaik Anda, yang berkomitmen untuk memberikan pengalaman makan yang luar biasa. Kami hadir dengan misi menyediakan akses mudah ke restoran terbaik di berbagai kota, dengan menyajikan informasi yang akurat dan relevan tentang restoran favorit, menu mereka, dan ulasan dari para pelanggan. Tim kami berusaha keras untuk terus meningkatkan platform kami demi memenuhi kebutuhan dan harapan Anda. Terima kasih telah memilih Dine Ease sebagai panduan kuliner Anda. Temukan restoran terbaik bersama kami dan nikmati petualangan kuliner yang tak terlupakan!
    </p>
  </div>
  <div class="image__container">
  <img src="./images/food/food-2.jpg" alt="gambar makanan spagetti">
  <img src="./images/food/r-1.jpg" alt="gambar ilustrasi restaurant">
  </div>

`;

const createRestaurantHeader = (restaurant) => `
    <div class="detail__header__info">
        <h2 class="detail__header__title">${restaurant.name}</h2>
        <p class="detail__header__description">${restaurant.description}</p>
        </div>
    <div class="detail__header__banner">
        <img src="${CONFIG.BASE_IMAGE_MEDIUM_URL}/${restaurant.pictureId}" alt="${restaurant.name} image">
        <p class="location"><i class="fa-solid fa-location-dot"></i>${restaurant.address}, ${restaurant.city}</p>
        <p class="rating">⭐${restaurant.rating}</p>
    </div>
`;

const createRestaurantCategories = (categori) => `
<div class= "categori__item" >${categori.name}</div>
`;

const createRestaurantMenusFood = (foods) => `
<p class= "food__item" >${foods.name}</p>
`;
const createRestaurantMenusDrinks = (drinks) => `
<p class= "drink__item" >${drinks.name}</p>
`;

const createRestaurantReviews = (review) => `
<div class="review__card">
  <h2 class="name">${review.name}</h2>
  <p class="review">${review.review}</p>
  <p class="date"><i class="fa-regular fa-calendar-days"></i>${review.date}</p>
</div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="Add to Favorite Restaurant" id="favorite-button" class="favorite">
  <p>Add To Favorite</p><i class="fa-regular fa-star"></i>
  </button>
`;

const createRemoveFromFavoriteButtonTemplate = () => `
  <button aria-label="Remove From Favorites" id="remove-favorite" class="favorite">
   <P>Remove From Favorite</p><i class="fa-solid fa-star"></i>
  </button>
`;

const createFormReviewTemplate = () => `
    <form id="review-form">
        <h2>Berikan tanggapan anda!</h2>
        <div class="form-group">
        <input type="text" id="name" name="name" required>
        <label for="name">Your Name:</label>
        </div>
        <div class="form-group">
        <textarea id="review" name="review" rows="4" required></textarea>
        <label for="review">Your Review:</label>
        </div>
        <button type="submit" class="submit-button-review">Submit Review</button>
    </form>
`;

export {
  createHeroElement,
  createAboutUsElement,
  createRestaurantItemTemplate,
  createRestaurantHeader,
  createRestaurantCategories,
  createRestaurantMenusFood,
  createRestaurantReviews,
  createFavoriteButtonTemplate,
  createRemoveFromFavoriteButtonTemplate,
  createRestaurantMenusDrinks,
  createFormReviewTemplate,
  createRestaurantTitleTemplate,
};
