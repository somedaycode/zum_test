import CulturePage from '@src/pages/CulturePage';
import ErrorPage from '@src/pages/ErrorPage';
import FoodPage from '@src/pages/FoodPage';
import HomePage from '@src/pages/HomePage';
import LifePage from '@src/pages/LifePage';
import TravelPage from '@src/pages/TravelPage';

export type RoutesStore = {
  '/': typeof HomePage;
  '/lifes': typeof LifePage;
  '/travels': typeof TravelPage;
  '/foods': typeof FoodPage;
  '/cultures': typeof CulturePage;
  '/error': typeof ErrorPage;
  [key: string]: any;
};

export const routesConfig: RoutesStore = {
  '/': HomePage,
  '/lifes': LifePage,
  '/travels': TravelPage,
  '/foods': FoodPage,
  '/cultures': CulturePage,
  '/error': ErrorPage,
};
