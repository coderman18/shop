import {getMainTitle} from '/src/js/components/mainTitle/mainTitle.js';
import {getProductList} from '/src/js/components/productsList/productsList.js';

// каталог товаров
export function getCatalogPage() {
  const page = document.createElement('div');
  page.classList.add('page', 'catalog-page');

  const mainTitle = getMainTitle('Каталог товаров');

  const product = getProductList();
  product.getProducts()
  
 
  page.append(mainTitle, product.productsList);
  return page;
}