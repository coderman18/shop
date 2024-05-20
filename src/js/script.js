import Navigo from 'navigo';

import { getHeader } from './components/header.js';
import {getPageContainer} from './components/pageContainer.js';
// import {getMainTitle} from './components/mainTitle.js';
// import {getDesc} from './components/desc.js';

// страницы
// import { getMainPage } from './pages/mainPages.js';
// import { getProductPage } from '../pages/product.js';
// import {getCatalogPage} from '../js/pages/catalog.js';
// import {getBasketPage} from '../js/pages/basket.js';

const app = document.getElementById("app");

// роутинг на js
export const router = new Navigo('/');

const header = getHeader();
const pageContainer = getPageContainer();

// главная страница
router.on('/', async () => {
  pageContainer.innerHTML = '';
  const moduleMain = await import('../js/pages/mainPages.js');
  const mainPage = moduleMain.getMainPage();
  pageContainer.append(mainPage);
})

// каталог товаров
router.on('/catalog', async () => {
  pageContainer.innerHTML = '';
  const moduleCatalog = await import('../js/pages/catalog.js');
  const catalogPage = moduleCatalog.getCatalogPage();
  pageContainer.append(catalogPage);
})

// корзина
router.on('/basket', async () => {
  pageContainer.innerHTML = '';
  const moduleBasket = await import('../js/pages/basket.js');
  const basketPage = moduleBasket.getBasketPage();
  pageContainer.append(basketPage);
})

// страница товара/
router.on('/product/:title', async ({data}) => {
  console.log(data.title);
  pageContainer.innerHTML = '';
  const moduleProduct = await import('../js/pages/product.js');
  const productPage = moduleProduct.getProductPage(data.title);
  pageContainer.append(productPage);
})

router.resolve();

app.append(header, pageContainer);

