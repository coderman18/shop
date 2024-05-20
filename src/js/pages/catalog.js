import {getDesc} from '../components/desc.js';
import {getMainTitle} from '../components/mainTitle.js';
// каталог товаров
export function getCatalogPage() {
  const page = document.createElement('div');
  page.classList.add('page', 'catalog-page', 'container');

  const mainTitle = getMainTitle('Каталог товаров');
  const desc = getDesc('Описание каталога');
 
  page.append(mainTitle, desc);

  return page;
}