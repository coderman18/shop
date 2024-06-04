import {getProductCard} from '/src/js/components/productCard/productCard.js';
import './productsList.css';

// компонент списка товаров
export function getProductList() {
  const productsList = document.createElement('div');
  productsList.classList.add('product-list');

  const getProducts = async function (URI) {

    try {
      // делаем запрос на сервер
    const response = await fetch(URI)
      if (!response.ok) {
        throw new Error('Извините, на сайте проводятся профилатические работы!)')
      }
      if (response.status === 404) {
        throw new Error('Это не наш косяк... это у них там!');
      }

    const data = await response.json()
    
    const list = document.createElement('ul');
    list.classList.add('product-list__list');


    // создаем карточку товара
    for (const product of data) {
      console.log(product);
      const productCard = getProductCard(product)
      list.append(productCard)
    }

    productsList.append(list);
    } catch (error) {
      const msg = document.createElement('span')
      msg.classList.add('error-msg')
      msg.textContent = error.message
      productsList.append(msg)
    }
    
  }

  // возвращаем обьект с данными и функцию getProducts
  return {
    productsList,
    getProducts
  };
}