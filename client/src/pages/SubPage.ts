import ContentsWrap from '@src/components/sub/ContentsWrap';
import Component from '@src/core/Component';
import { _ } from '@src/utils/myUtils';
import {
  culturesData,
  foodsData,
  HubContent,
  lifesData,
  travelsData,
} from '@src/store/contents';
import type { ContentsState } from '@src/store/contents';
import { getState, setState } from '@src/lib/observer';
import { request } from '@src/utils/request';

type StoreKey = {
  culturesData: string;
  foodsData: string;
  lifesData: string;
  travelsData: string;
  [key: string]: string;
};

export default class SubPage extends Component {
  constructor($target: HTMLElement) {
    super($target);
    this.componentId = 'SubPage';
    this.keys = [lifesData, culturesData, foodsData, travelsData];
    this.subscribe();
  }

  htmlTemplate() {
    return `
      <main class="main-wrap">
        <section class="contents-wrap"></section>
      <main>
    `;
  }

  async initializeState() {
    const { data } = this.getCurrentSubPageStore();
    if (data.length > 0) return;

    const path = location.pathname.replace('/', '');
    const contentsData = await request(`/api/content/${path}`);

    const storeKey = this.getStoreKey();
    const currentData = getState<ContentsState>(storeKey);
    const setContents = setState(storeKey);
    setContents({
      ...currentData,
      data: contentsData,
      page: 1,
    });
  }

  mountChildComponent() {
    const $contentsWrap = _.$('.contents-wrap', this.$target);
    const { data, page } = this.getCurrentSubPageStore();

    if (!page) return;
    new ContentsWrap($contentsWrap, {
      setContent: this.setStoreContents.bind(this),
      data,
      page,
    });
  }

  getCurrentSubPageStore() {
    const storeKey = this.getStoreKey();
    const { data, page } = getState<ContentsState>(storeKey);
    return { data, page };
  }

  getStoreKey() {
    const currentKey = `${location.pathname.replace('/', '')}Data`;
    const store: StoreKey = { culturesData, foodsData, lifesData, travelsData };
    return store[currentKey];
  }

  setStoreContents(page: number) {
    const storeKey = this.getStoreKey();
    const currentData = getState<ContentsState>(storeKey);
    const setContents = setState(storeKey);
    setContents({
      ...currentData,
      page,
    });
  }
}
