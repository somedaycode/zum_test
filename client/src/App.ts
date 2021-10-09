import Component from './core/Component';
import { getState } from './lib/observer';
import { pageStore } from './store/pages';
import { _ } from './utils/myUtils';

export default class App extends Component {
  constructor($target: HTMLDivElement) {
    super($target);
    this.componentId = 'AppComponent';
    this.keys = [pageStore];
    this.subscribe();
  }
  htmlTemplate() {
    return '<div class="pageContainer"></div>';
  }

  mountChildComponent() {
    const $pageContainer = _.$('.pageContainer', this.$target);
    const { CurrentPage } = getState(pageStore);
    new CurrentPage($pageContainer);
  }
}
