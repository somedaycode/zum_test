import { initState } from '@src/lib/observer';
import HomePage from '@src/pages/HomePage';

const pageStore = initState({
  key: 'pageStore',
  value: {
    CurrentPage: HomePage,
  },
});

export { pageStore };
