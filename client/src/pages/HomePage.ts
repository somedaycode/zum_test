import Component from '@src/core/Component';

export default class HomePage extends Component {
  htmlTemplate() {
    return `
      <main class="main-wrap">
        <section class="contents-wrap"></section>
        <section class="rankings-wrap"></section>
      </main>
      `;
  }
}
