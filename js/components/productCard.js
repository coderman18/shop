// карточки товара

export function getProductCard(title, price, img) {
  const item = document.createElement('li');
  item.classList.add('product-list__item');

  const productImg = document.createElement('img');
  productImg.classList.add('product-card__img');
  productImg.src = '../../img/product-img/flower.jpg';

  const productTitle = document.createElement('h2');
  productTitle.classList.add('product-list__title');
  productTitle.textContent = title;

  const productPrice = document.createElement('strong');
  productPrice.classList.add('product-list__price');
  productPrice.textContent = `${price} руб`;

  const addBasket = document.createElement('button');
  addBasket.classList.add('btn');
  addBasket.textContent = 'Добавить в корзину';

  item.append(productImg, productTitle, productPrice, addBasket);
  return item;
}