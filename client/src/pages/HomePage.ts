import Rankings from '@src/components/home/Rankings';
import Component from '@src/core/Component';
import { _ } from '@src/utils/myUtils';

export default class HomePage extends Component {
  htmlTemplate() {
    return `
      <main class="main-wrap">
        <section class="contents-wrap"></section>
        <section class="rankings-wrap"></section>
      </main>
      `;
  }

  mountChildComponent() {
    const $rankings = _.$('.rankings-wrap', this.$target);
    new Rankings($rankings);
  }
}
