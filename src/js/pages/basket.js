import { router } from "../script.js";
import {getDesc} from '/src/js/components/desc/desc.js';
import {getMainTitle} from '/src/js/components/mainTitle/mainTitle.js';


// корзина

export function getBasketPage() {
  const page = document.createElement('div');
  page.classList.add('page', 'basket-page', 'container');

  const mainTitle = getMainTitle('Корзина');
  const desc = getDesc('Описание корзины');

   // оформление заказа
  let linkOrder = document.createElement('a');
  linkOrder.href = '/order';
  linkOrder.classList.add('btn');
  linkOrder.textContent = 'Оформление заказа';

  linkOrder.addEventListener('click', function (event) {
    event.preventDefault();
    router.navigate('/order');
  })

  page.append(mainTitle, desc, linkOrder);

  return page;
}