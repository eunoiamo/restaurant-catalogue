/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import * as TestFactories from './helpers/testFacrories';

describe('Remove from favorite', () => {
  const favoriteButtonContainer = () => {
    document.body.innerHTML = ('<div class="fav-button"></div>');
  };

  beforeEach(async () => {
    favoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display remove from favorite button when restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="Remove From Favorites"]')).toBeTruthy();
  });

  it('should not display favorite button when restaurant has been added to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="Add to Favorite Restaurant"]')).toBeFalsy();
  });

  it('should be able to remove restaurant from the favorite', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    document.querySelector('[aria-label="Remove From Favorites"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when click remove favorite button if the restaurant not in the favorited', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="Remove From Favorites"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
