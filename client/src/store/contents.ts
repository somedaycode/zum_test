import { initState } from '@src/lib/observer';

const lifeData = initState({
  key: 'lifeData',
  value: { isLoading: true, data: [] },
});

const cultureData = initState({
  key: 'cultureData',
  value: { isLoading: true, data: [] },
});

const foodData = initState({
  key: 'foodData',
  value: { isLoading: true, data: [] },
});

const travelData = initState({
  key: 'travelData',
  value: { isLoading: true, data: [] },
});

export { lifeData, cultureData, foodData, travelData };
