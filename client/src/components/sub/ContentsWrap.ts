import Component from '@src/core/Component';
import { getState, setState } from '@src/lib/observer';
import { HubContent } from '@src/store/contents';
import Contents from '../common/Contents';

export default class ContentsWrap extends Component<HubContent[]> {
  mountChildComponent() {
    const path = location.pathname.replace('/', '');
    const title = ((path: string) => {
      return {
        lifes: '라이프',
        cultures: '컬처',
        foods: '푸드',
        travels: '여행',
        favorites: '즐겨찾기',
      }[path];
    })(path);

    if (title) new Contents(this.$target, { title, data: this.props });
  }

  useEffect() {}
}
