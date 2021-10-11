import { initState } from '@src/lib/observer';

export type ContentsState = {
  isLoading: boolean;
  title: string;
  data: HubContent[];
};

export type HubContent = {
  idx: Number;
  mediaName: String;
  title: String;
  summaryContent: String;
  url: String;
  imageUrl: String;
};

export type HomeContents = HubContent[];

const lifesData = initState({
  key: 'lifeData',
  value: { isLoading: true, title: '라이프', data: [] },
});

const culturesData = initState({
  key: 'cultureData',
  value: { isLoading: true, title: '컬쳐', data: [] },
});

const foodsData = initState({
  key: 'foodData',
  value: { isLoading: true, title: '푸드', data: [] },
});

const travelsData = initState({
  key: 'travelData',
  value: { isLoading: true, title: '여행', data: [] },
});

export { lifesData, culturesData, foodsData, travelsData };
