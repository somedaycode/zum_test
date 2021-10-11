import ContentsWrap from '@src/components/sub/ContentsWrap';
import Component from '@src/core/Component';
import { _ } from '@src/utils/myUtils';
import {
  culturesData,
  foodsData,
  lifesData,
  travelsData,
} from '@src/store/contents';
import type { ContentsState } from '@src/store/contents';
import { getState } from '@src/lib/observer';

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
    const contents = this.getCurrentSubPageStore();
    if (contents.length > 0) return;
  }

  mountChildComponent() {
    const $contentsWrap = _.$('.contents-wrap', this.$target);
    const contents = this.getCurrentSubPageStore();
    new ContentsWrap($contentsWrap, contents);
  }

  getCurrentSubPageStore() {
    const currentKey = `${location.pathname.replace('/', '')}Data`;
    const store: StoreKey = { culturesData, foodsData, lifesData, travelsData };
    const storeKey = store[currentKey];
    const { data } = getState<ContentsState>(storeKey);
    return data;
  }
}
