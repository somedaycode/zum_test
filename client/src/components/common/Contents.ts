import Component from '@src/core/Component';
import type { ContentsState } from '@src/store/contents';
import { _ } from '@src/utils/myUtils';

import { router } from '../../../index';

//<i class="fas fa-heart"></i> solid

export default class Contents extends Component<ContentsState> {
  htmlTemplate() {
    const { isLoading, title: categoryTitle, data } = this.props;
    if (isLoading) return '<div class="loading-spinner"><div>';

    return `
    <div>
      <h2 class="contents-category-title">${categoryTitle}</h2>
      <ul class="contents-container">
        ${data
          .map(
            ({ idx, mediaName, title, summaryContent, url, imageUrl }) => `
        <li class="contents-card" tabindex="0" data-id=${idx} data-url=${url}>
          <img class="contents__img" src=${imageUrl} loading="lazy" alt="콘텐츠">
          <div class="text-wrap">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${summaryContent}</p>
            <span class="card-media">${mediaName}<span>
            <button class="favorite-btn" aria-label="즐겨찾기">
              <i class="far fa-heart fa-2x"></i>
            </button>
          </div>
        </li>
        `
          )
          .join('')}
      </ul>
    </div>     
    `;
  }

  setEvent() {
    _.on(this.$target, 'click', this.handleClickContents.bind(this));
  }

  handleClickContents(e: MouseEvent) {
    const target = e.target as HTMLLIElement;
    if (!target.closest('.contents-card')) return;

    const targetContents = target.closest('.contents-card') as HTMLLIElement;
    const targetUrl = targetContents.dataset.url;
    const originalUrl = 'https://hub.zum.com';
    const url = targetUrl?.replace(originalUrl, '');
    router.push('/detail', url);
  }
}
