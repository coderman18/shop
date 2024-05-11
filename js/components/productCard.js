// карточки товара

export function getProductCard(title, price) {
  const item = document.createElement('li');
  item.classList.add('product-list__item');

  // const img = document.createElement('img');
  // img.classList.add('product-card__img');
  // img.src = product.img;

  const productTitle = document.createElement('h2');
  productTitle.classList.add('product-list__title');
  productTitle.textContent = title;

  const productPrice = document.createElement('strong');
  productPrice.classList.add('product-list__price');
  productPrice.textContent = `${price} руб`;

  const addBasket = document.createElement('button');
  addBasket.classList.add('btn');
  addBasket.textContent = 'Добавить в корзину';

  item.append(productTitle, productPrice, addBasket);
  return item;
}