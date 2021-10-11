import Component from '@src/core/Component';
import { getState, setState } from '@src/lib/observer';

import { getRankingListApi } from '@src/api/rankingApi';

import { rankingData } from '@src/store/rankings';
import type { RankingContent, RankingState } from '@src/store/rankings';

export default class Rankings extends Component {
  constructor($target: HTMLElement) {
    super($target);
    this.componentId = 'Rankings';
    this.keys = [rankingData];
    this.subscribe();
  }

  htmlTemplate() {
    const { isLoading, data: rankingList } =
      getState<RankingState>(rankingData);

    const rankingListTemplate = this.getRankingListTemplate(rankingList);

    return `
      <h2 class="ranking__h2">실시간 TOP 12</h2>
      ${
        isLoading
          ? '<div class="loading-spinner"><div>'
          : `<ul class="ranking-container">
              ${rankingListTemplate}
             </ul>`
      }`;
  }

  async initializeState() {
    this.loadingRankingList();
    const setRankingList = setState(rankingData);
    const rankingList = await getRankingListApi();
    setRankingList({
      isLoading: false,
      data: rankingList,
    });
  }

  loadingRankingList() {
    const setRankingList = setState(rankingData);
    setRankingList({
      isLoading: true,
      data: [],
    });
  }

  getRankingListTemplate(rankingList: RankingContent[]) {
    return rankingList
      .map(
        ({ idx, mediaName, title, url }: RankingContent, rank: number) => `
      <li class="ranking__list" data-id=${idx} data-url=${url}>
        <div class="ranking-text-wrap">
          <h3>${title}</h3>
          <span class="ranking__span-media">${mediaName}</span>
          <span class="rank-number">${rank + 1}</span>
        </div>
      </li>`
      )
      .join('');
  }
}
