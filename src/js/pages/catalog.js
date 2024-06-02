import {getDesc} from '/src/js/components/desc/desc.js';
import {getMainTitle} from '/src/js/components/mainTitle/mainTitle.js';
// каталог товаров
export function getCatalogPage() {
  const page = document.createElement('div');
  page.classList.add('page', 'catalog-page', 'container');

  const mainTitle = getMainTitle('Каталог товаров');
  const desc = getDesc('Описание каталога');
 
  page.append(mainTitle, desc);

  return page;
}