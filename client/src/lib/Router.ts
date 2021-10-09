import type { RoutesStore } from '@src/configs/routes';

type ValueOf<T> = T[keyof T];

export default class Router {
  private routes: RoutesStore;

  constructor(routes: RoutesStore) {
    this.routes = routes;
  }

  init(el: HTMLElement) {
    const { pathname } = location;
    this.renderHTML(el, this.routes[pathname]);
    window.addEventListener('popstate', () =>
      this.renderHTML(el, this.routes[pathname])
    );
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
