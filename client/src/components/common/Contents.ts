import Component from '@src/core/Component';
import type { ContentsState } from '@src/store/contents';

//<i class="fas fa-heart"></i> solid

export default class Contents extends Component<ContentsState> {
  htmlTemplate() {
    const { isLoading, title: categoryTitle, data } = this.props;
    if (isLoading) return '<div>loading...<div>';

    return `
    <div>
      <h2 class="contents-category-title">${categoryTitle}</h2>
      <ul class="contents-container">
        ${data
          .map(
            ({ idx, mediaName, title, summaryContent, url, imageUrl }) => `
        <li class="contents-card" data-id=${idx} data-url=${url}>
          <img class="contents__img" src=${imageUrl} alt="콘텐츠">
          <div class="text-wrap">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${summaryContent}</p>
            <span class="card-media">${mediaName}<span>
            <button class="favorite-btn" aria-label="즐겨찾기"><i class="far fa-heart fa-2x"></i></button>
          </div>
        </li>
        `
          )
          .join('')}
      </ul>
    </div>     
    `;
  }
}
