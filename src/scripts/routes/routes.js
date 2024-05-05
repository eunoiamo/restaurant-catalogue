import MainPages from '../views/pages/main-pages';
import DetailPages from '../views/pages/detail';
import FavoritePages from '../views/pages/favorite';

const routes = {
  '/': MainPages,
  '/main-pages': MainPages,
  '/detail/:id': DetailPages,
  '/favorite': FavoritePages,
};

export default routes;
