import Component from '@src/core/Component';

export default class Header extends Component {
  htmlTemplate() {
    const menuList = ['홈', '라이프', '푸드', '여행', '컬쳐', '즐겨찾기'];

    return `
      <div class="header-top">
        <h1 class="header-title">
          허브
          <a href="/" class="logo">
            <img src="https://hub.zum.com/resources/pc/images/logo_zum_2x_20210429-047bb40d62fc256b0d38d0359520856e.png" alt="로고">
          </a>
        </h1>
        <div class="header-buttons">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
      <nav class="nav-container">
        <ul class="menu-container">
          ${menuList
            .map((menu) => `<li class="menu__list">${menu}</li>`)
            .join('')}
        </ul>
      </nav>
    `;
  }
}
