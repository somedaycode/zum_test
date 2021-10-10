import Component from '@src/core/Component';

export default class Rankings extends Component {
  htmlTemplate() {
    return `
      <h2 class="ranking__h2">실시간 TOP 12</h2>
      <ul class="ranking-container">
        <li class="ranking__list">
          <div class="ranking-text-wrap">
            <h3>10억년 신비 품은 해변 신비 품은 해변 신비 품은 해변 따라 삼각산 돌아보니 황제의 氣 꿈틀</h3>
            <span class="ranking__span-media">media</span>
            <span class="rank-number">1</span>
          </div>
        </li>
      </ul>
    `;
  }
}
