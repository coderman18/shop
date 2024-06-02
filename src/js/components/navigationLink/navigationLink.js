import { router } from "../../script";
import './navigationLink.css';

export function getNavigationLink (path, title = '') {
  let link = document.createElement('a');
  link.href = path;
  link.classList.add('navigation-link');
  link.textContent = title;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    router.navigate(path);
  });

  return link
}