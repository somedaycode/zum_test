import ErrorPage from '@src/pages/ErrorPage';
import HomePage from '@src/pages/HomePage';
import SubPage from '@src/pages/SubPage';

export type RoutesStore = {
  '/': typeof HomePage;
  '/lifes': typeof SubPage;
  '/travels': typeof SubPage;
  '/foods': typeof SubPage;
  '/cultures': typeof SubPage;
  '/error': typeof ErrorPage;
  [key: string]: any;
};

export const routesConfig: RoutesStore = {
  '/': HomePage,
  '/lifes': SubPage,
  '/travels': SubPage,
  '/foods': SubPage,
  '/cultures': SubPage,
  '/error': ErrorPage,
};
