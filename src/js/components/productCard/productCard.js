import { router } from "../../script";
import './productCard.css';

// карточки товара
export function getProductCard(product) {
  const item = document.createElement('li');
  item.classList.add('product');

  const productImg = document.createElement('img');
  productImg.classList.add('product-card__img');
  productImg.src = product.thumbnailUrl;

  const productTitle = document.createElement('h2');
  productTitle.classList.add('product__title');
  
  let productLink = document.createElement('a')
  productLink.textContent = product.title;
  productLink.href = "";
  
  productLink.addEventListener('click', function (e) {
    e.preventDefault();
    router.navigate(`/product/${product.id}`);
  });

  productTitle.append(productLink)

  const productPrice = document.createElement('strong');
  productPrice.classList.add('product__price');
  productPrice.textContent = `${product.albumId} руб`;

  const addBasket = document.createElement('button');
  addBasket.classList.add('btn', 'product__add-basket');
  addBasket.textContent = 'Добавить в корзину';

  item.append(productImg, productTitle, productPrice, addBasket);
  return item;
}