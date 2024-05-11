import {getDesc} from '../components/desc.js';
import {getMainTitle} from '../components/mainTitle.js';

// корзина

export function getBasketPage() {
  const page = document.createElement('div');
  page.classList.add('page', 'basket-page', 'container');

  const mainTitle = getMainTitle('Корзина');
  const desc = getDesc('Описание корзины');

  page.append(mainTitle, desc);

  return page;
}