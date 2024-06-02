import { router } from '/src/js/script';
import './basketBtn.css';
import basketImg from 'bundle-text:/src/assets/img/basketLogo/basket.svg';

export function getBasketBtn () {
  const basketBtn = document.createElement('a');
  basketBtn.href = '/basket';
  basketBtn.classList.add('basket-btn');
  basketBtn.innerHTML = basketImg;
  basketBtn.addEventListener('click', function (e) {
    e.preventDefault();
    router.navigate('/basket');
  })
  return basketBtn;
}