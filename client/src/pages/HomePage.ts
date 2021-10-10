import Component from '@src/core/Component';

export default class HomePage extends Component {
  htmlTemplate() {
    return `
      <main class="main-wrap">
        <section class="contents-wrap">
        <div>
          <h2 class="contents-category-title">#라이프</h2>
          <ul class="contents-container">
            <li class="contents-card">
              <img class="contents__img" src="https://thumb.zumst.com/270x200/https://static.hubzum.zumst.com/hubzum/2021/03/24/13/f9ea2c54c3264be795d6126be3e2b955.jpg" alt="콘텐츠">
              <div class="text-wrap">
                <h3 class="card-title">어쩌구 저쩌구 쏼라어쩌구 저쩌구 쏼라쏼라어쩌구 저쩌구 쏼라쏼라어쩌구 저쩌구 쏼라쏼라쏼라</h3>
                <p class="card-description">쏼라쏼라라라라어쩌구 저쩌구 쏼라쏼라어쩌구 저쩌구 쏼라쏼라어쩌구 저쩌구 쏼라쏼라어쩌구 저쩌구 쏼라쏼라어쩌구 저쩌구 쏼라쏼라라</p>
                <span class="card-media">작가머시기<span>
                <button class="favorite-btn"></button>
              </div>
            </li>
          </ul>
        </div>  
        </section>
        <section class="rankings-wrap"></section>
      </main>
      `;
  }
}
