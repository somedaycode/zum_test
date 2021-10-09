import type { RoutesStore } from '@src/configs/routes';
import { setState } from './observer';

type ValueOf<T> = T[keyof T];

export default class Router {
  private routes: RoutesStore;
  public pageState: string;
  public setPage: (args: any) => void;

  constructor(routes: RoutesStore, pageState: string) {
    this.routes = routes;
    this.pageState = pageState;
    this.setPage = setState(pageState);
  }

  init() {
    this.handlePopState();
    window.addEventListener('popstate', this.handlePopState.bind(this));
  }

  handlePopState() {
    const { pathname } = location;
    let Page;
    for (const [routePath, component] of Object.entries(this.routes)) {
      if (routePath === pathname) {
        Page = component;
        break;
      }
    }
    if (!Page) Page = this.routes['/error'];
    this.setPage({ CurrentPage: Page });
  }

  push(el: HTMLElement, pathName: string, query: string = '') {
    window.onpopstate = (e) => {
      return this.renderHTML(el, this.routes[location.pathname]);
    };
    window.history.pushState(
      {},
      pathName,
      `${location.origin}${pathName}/${query}`
    );
    this.renderHTML(el, this.routes[pathName]);
  }

  renderHTML(el: HTMLElement, route: ValueOf<RoutesStore>) {
    if (route) new route(el);
    else new this.routes['/error'](el);
  }
}
