import FavoriteButtonInitiator from '../../src/scripts/utils/fav-button-initiator';

const createFavoriteButtonPresenter = async (restaurants) => {
  await FavoriteButtonInitiator.init({
    favButton: document.querySelector('.fav-button'),
    restaurants,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenter };
