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

const lifeData = initState({
  key: 'lifeData',
  value: { isLoading: true, title: '라이프', data: [] },
});

const cultureData = initState({
  key: 'cultureData',
  value: { isLoading: true, title: '컬쳐', data: [] },
});

const foodData = initState({
  key: 'foodData',
  value: { isLoading: true, title: '푸드', data: [] },
});

const travelData = initState({
  key: 'travelData',
  value: { isLoading: true, title: '여행', data: [] },
});

export { lifeData, cultureData, foodData, travelData };
