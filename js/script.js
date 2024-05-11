import { getHeader } from './components/header.js';
import {getPageContainer} from './components/pageContainer.js';
// import {getMainTitle} from './components/mainTitle.js';
// import {getDesc} from './components/desc.js';

// страницы
import { getMainPage } from './pages/mainPages.js';
// import { getProductPage } from '../pages/product.js';
import {getCatalogPage} from '../js/pages/catalog.js';
import {getBasketPage} from '../js/pages/basket.js';

const app = document.getElementById("app");

const header = getHeader();
const pageContainer = getPageContainer();

export function navigation(page) {
  pageContainer.innerHTML = '';
  switch (page) {
    case 'catalog':
      const catalogPage = getCatalogPage();
      pageContainer.append(catalogPage);
      break;
    case 'basket':
      const basketPage = getBasketPage();
      pageContainer.append(basketPage);
      break;
    default:
      const mainPage = getMainPage();
      pageContainer.append(mainPage);
      break;
  }
}

navigation();

app.append(header, pageContainer);

