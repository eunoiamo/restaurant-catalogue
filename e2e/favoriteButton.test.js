/* eslint-disable no-undef */
const assert = require('assert');

Feature('favorite restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.dontSeeElement('card');
});

Scenario('Favorite and Unfavorite a restaurant', async ({ I }) => {
  I.amOnPage('/');
  const firstRestaurant = locate('.card').first();
  const firstRestaurantName = await I.grabTextFrom('.card .restaurant__name');

  I.seeElement(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const favoriteRestaurantName = await I.grabTextFrom('.card .restaurant__name');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);

  I.amOnPage('/');
  I.seeElement(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#remove-favorite');
  I.click('#remove-favorite');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});
