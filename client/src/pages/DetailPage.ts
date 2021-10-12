import Component from '@src/core/Component';

import { contentsDetailData } from '@src/store/contentsDetail';
import { getDetailContents } from '@src/api/detailContents';

export default class DetailPage extends Component {
  constructor($target: HTMLElement) {
    super($target);
    this.componentId = 'DetailPage';
    this.keys = [contentsDetailData];
    this.subscribe();
  }

  htmlTemplate() {
    return `
      여기는 상세페이지 입니다.
    `;
  }

  async initializeState() {
    const url = 'https://hub.zum.com';
    const params = location.pathname.replace('/detail', '');
    const originalUrl = url + params;
    const data = await getDetailContents(originalUrl);
    console.log(data);
  }
}
