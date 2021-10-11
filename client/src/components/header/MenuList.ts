import Component from '@src/core/Component';

export default class MenuList extends Component {
  htmlTemplate() {
    const menuList = [
      { title: '홈', path: 'home' },
      { title: '라이프', path: 'lifes' },
      { title: '푸드', path: 'foods' },
      { title: '여행', path: 'travels' },
      { title: '즐겨찾기', path: 'favorites' },
    ];

    return `
    <ul class="menu-container">
      ${menuList
        .map(
          ({ title, path }) =>
            `<li class="menu__list" data-path=${path} tabindex="0">${title}</li>`
        )
        .join('')}
    </ul>
    `;
  }
}
