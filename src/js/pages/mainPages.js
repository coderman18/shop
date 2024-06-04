import {getMainTitle} from '/src/js/components/mainTitle/mainTitle.js';
import {getProductList} from '/src/js/components/productsList/productsList.js';
import { URL } from '/src/js/config.js';

// главная страница
export function getMainPage() {
  const page = document.createElement('div');
  page.classList.add('main-page', 'page', 'container');

  const mainTitle = getMainTitle('Главная страница');

  const product = getProductList();
  product.getProducts(`${URL}/posts?userId=2`)
  
  page.append( mainTitle, product.productsList );

  return page;
}