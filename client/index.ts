import './index.scss';
import { _ } from '@src/utils/myUtils';
import Router from '@src/lib/Router';
import { routesConfig } from '@src/configs/routes';

import App from '@src/App';

export const $root = _.$('#root', document);
export const router = new Router(routesConfig);

router.init($root);

function init() {
  new App($root);
}

init();
