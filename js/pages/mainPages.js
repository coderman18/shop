import {getMainTitle} from '../components/mainTitle.js';
import {getProductCard} from '../components/productCard.js';

// главная страница
export function getMainPage() {
  const page = document.createElement('div');
  page.classList.add('main-page', 'page', 'container');

  const mainTitle = getMainTitle('Главная страница');
  const list = document.createElement('ul');
  list.classList.add('product-list', 'list-reset');

  list.append(
    getProductCard('Товар 1', 1000), 
    getProductCard('Товар 2', 2000), 
    getProductCard('Товар 3', 3000)
    );
  page.append( mainTitle, list);

  return page;
}