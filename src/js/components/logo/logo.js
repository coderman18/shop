import './logo.css';
import logoImg from '/src/assets/img/logo/shopping.svg'

// создаем логотип
export function getLogo() {
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = logoImg;
  logo.alt = 'Логотип';
  return logo;
}