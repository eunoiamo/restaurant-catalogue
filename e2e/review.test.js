/* eslint-disable no-undef */
const assert = require('assert');

const firstRestaurant = locate('.card').first();
Feature('review restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add Review', ({ I }) => {
  I.seeElement(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#review-form');
  I.fillField('#review-form .form-group #name', 'John Doe');
  I.fillField('#review-form .form-group #review', 'Makanan disini Enak Sekali');
  I.click('.submit-button-review');
});

Scenario('Make sure the review is added', async ({ I }) => {
  I.seeElement(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('.review__card');

  const lastRestaurantName = locate('.review__card .name').last();
  const lastReviewName = await I.grabTextFrom(lastRestaurantName);

  assert.strictEqual(lastReviewName, 'John Doe');
});
