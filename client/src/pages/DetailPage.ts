import Component from '@src/core/Component';

import { contentsDetailData } from '@src/store/contentsDetail';
import { getDetailContents } from '@src/api/detailContents';
import { getState, setState } from '@src/lib/observer';

export default class DetailPage extends Component {
  constructor($target: HTMLElement) {
    super($target);
    this.componentId = 'DetailPage';
    this.keys = [contentsDetailData];
    this.subscribe();
  }

  htmlTemplate() {
    const originalUrl = this.getOriginalUrl();
    const contentsHTML = getState<any>(contentsDetailData);
    const html = contentsHTML[originalUrl];
    if (!html) return '<div class="loading-spinner"></div>';

    const { title, writer, body } = html;
    return `
    <main class="main-wrap">
      <div class="detail-header">
        <h2 class="detail-title">${title}</h2>
        <div class="detail-writer">
          <span>by ${writer}</span>
        </div>
      </div>
      <section class="detail-body">${body}</section>
    </main>
    `;
  }

  async initializeState() {
    const originalUrl = this.getOriginalUrl();
    const data = await getDetailContents(originalUrl);
    const currentContents = getState<any>(contentsDetailData);
    const setDetailContents = setState(contentsDetailData);
    setDetailContents({
      ...currentContents,
      [originalUrl]: data,
    });
  }

  getOriginalUrl() {
    const url = 'https://hub.zum.com';
    const params = location.pathname.replace('/detail', '');
    const originalUrl = url + params;
    return originalUrl;
  }
}
