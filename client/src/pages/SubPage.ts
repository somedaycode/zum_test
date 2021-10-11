import Component from '@src/core/Component';

export default class SubPage extends Component {
  htmlTemplate() {
    return `
      <main class="main-wrap">
        <section class="contents-wrap">서브페이지</section>
      <main>
    `;
  }
}
