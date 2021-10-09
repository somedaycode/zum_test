import ErrorPage from '@src/pages/ErrorPage';
import HomePage from '@src/pages/HomePage';

export type RoutesStore = {
  '/': typeof HomePage;
  '/error': typeof ErrorPage;
  [key: string]: any;
};

export const routesConfig: RoutesStore = {
  '/': HomePage,
  '/error': ErrorPage,
};
