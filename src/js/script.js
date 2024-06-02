import Navigo from 'navigo';

import { getHeader } from '/src/js/components/header/header.js';
import {getPageContainer} from '/src/js/components/pageContainer/pageContainer.js';
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
  const moduleMain = await import('/src/js/pages/mainPages.js');
  const mainPage = moduleMain.getMainPage();
  pageContainer.append(mainPage);
  header.setActiveLink('home');
})

// каталог товаров
router.on('/catalog', async () => {
  pageContainer.innerHTML = '';
  const moduleCatalog = await import('/src/js/pages/catalog.js');
  const catalogPage = moduleCatalog.getCatalogPage();
  pageContainer.append(catalogPage);
  header.setActiveLink('catalog');
})

// страница товара/
router.on('/product/:title', async ({data}) => {
  console.log(data.title);
  pageContainer.innerHTML = '';
  const moduleProduct = await import('/src/js/pages/product.js');
  const productPage = moduleProduct.getProductPage(data.title);
  pageContainer.append(productPage);
  header.setActiveLink();
})

// корзина
router.on('/basket', async () => {
  pageContainer.innerHTML = '';
  const moduleBasket = await import('/src/js/pages/basket.js');
  const basketPage = moduleBasket.getBasketPage();
  pageContainer.append(basketPage);
  header.setActiveLink('basket');
})

// оформление заказа
router.on('/order', async () => {

  if (true) {
    router.navigate('/');
    return;
  }
  pageContainer.innerHTML = '';
  const moduleOrder = await import('/src/js/pages/order.js');
  const orderPage = moduleOrder.getOrderPage();
  pageContainer.append(orderPage);
  header.setActiveLink();
})

// страница не найдена
router.notFound(async () => {
  pageContainer.innerHTML = '';
  const moduleNotFound = await import('/src/js/pages/notFound.js');
  const notFoundPage = moduleNotFound.getNotFoundPage();
  pageContainer.append(notFoundPage);
  header.setActiveLink();
})

router.resolve();

app.append(header.header, pageContainer);

