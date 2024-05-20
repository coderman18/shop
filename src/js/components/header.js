import { router } from "../script.js";

// создаем шапку
export function getHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const container = document.createElement("div");
  container.classList.add('container', 'header__container');

  // создаем навигацию
  const nav = document.createElement('nav');
  nav.classList.add('navigation');

  // создаем кнопки навигации
  let link1 = document.createElement('a');
  link1.href = "/";
  link1.classList.add('btn');
  link1.textContent = 'Главная';

  link1.addEventListener('click', (event) => {
    event.preventDefault();
    router.navigate('/');
  });

  let link2 = document.createElement('a');
  link2.href = "";
  link2.classList.add('btn');
  link2.textContent = 'Каталог';

   link2.addEventListener('click', (event) => {
    event.preventDefault();
    router.navigate('/catalog');
  });

  let link3 = document.createElement('a');
  link3.href = "";
  link3.classList.add('btn');
  link3.textContent = 'Корзина';

   link3.addEventListener('click', (event) => {
    event.preventDefault();

    router.navigate('/basket');
  });

  // добавляем ссылки в контейнер
  nav.append(link1, link2, link3);
  container.append(nav);

  header.append(container);
  return header;
}