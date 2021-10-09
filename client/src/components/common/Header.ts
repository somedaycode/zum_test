import Component from '@src/core/Component';

export default class Header extends Component {
  htmlTemplate() {
    const menuList = ['HOME', '라이프', '푸드', '여행', '컬쳐', '즐겨찾기'];

    return `
    <header>
      <div>
        <a href="/">
          <img src="https://hub.zum.com/resources/pc/images/logo_zum_2x_20210429-047bb40d62fc256b0d38d0359520856e.png">
        </a>
        <div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
      <nav>
        <ul>
          ${menuList.map((menu) => `<li>${menu}</li>`).join('')}
        </ul>
      </nav>
    </header>`;
  }
}
