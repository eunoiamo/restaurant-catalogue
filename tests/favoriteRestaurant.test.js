/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import * as TestFactories from './helpers/testFacrories';

describe('add to favorite a restaurnat', () => {
  const favoriteButtonContainer = () => {
    document.body.innerHTML = ('<div class="fav-button"></div>');
  };

  beforeEach(() => {
    favoriteButtonContainer();
  });

  it('should show the favorite button when restaurant has not been added to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="Add to Favorite Restaurant"]')).toBeTruthy();
  });

  it('should not show the remove from favorite button when restaurant has not been added before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="Remove From Favorites"]')).toBeFalsy();
  });

  it('should be able to add the restaurant to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add to favorite when restaurant has no id', async () => {
    await TestFactories.createFavoriteButtonPresenter({ });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
