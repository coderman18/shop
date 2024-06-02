import {getMainTitle} from '/src/js/components/mainTitle/mainTitle.js';
import {getDesc} from '/src/js/components/desc/desc.js';

// каталог товаров
export function getOrderPage() {
  const page = document.createElement('div');
  page.classList.add('page', 'catalog-page', 'container');

  const mainTitle = getMainTitle('Оформление заказа');
  const desc = getDesc('Ваш заказ находится в разработке...');
 
  page.append(mainTitle, desc);

  return page;
}