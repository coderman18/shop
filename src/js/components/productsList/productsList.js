import './productsList.css';

// компонент списка товаров
export function getProductList() {
  const productsList = document.createElement('div');
  productsList.classList.add('product-list');

  const getProducts = async function (URI) {
    // делаем запрос на сервер
    const response = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')

    const data = await response.json()
    
    for (const abc of data) {
      console.log(abc);
    }
  }

  // возвращаем обьект с данными и функцию getProducts
  return {
    productsList,
    getProducts
  };
}