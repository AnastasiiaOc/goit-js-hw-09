
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { images } from "./gallery-items";

const gallery = document.querySelector(".gallery-item");//hTML

const pictures = images.map(({ preview, original, description }) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");//pour obtenir string on utilise join

gallery.insertAdjacentHTML("beforeend", pictures);  

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// lightbox.next();



// const showImages  = JSON.parse(localStorage.getItem('images'));








// const value = 100; RYSITCH

// function add(a, b) {
//   return a + b;
// }

// function sum(a, b) {
//   return a * b + value;
// }

// // export { add, sum };

// const a = 15;
// const b = 20;

// DEFAULT EXPORT
// export { add, sum };
// export default a;
// console.log('hello');






// На що буде звертати увагу ментор при перевірці:

// На живій сторінці відображається галерея зображень із масиву даних images
// Галерея зображень стилізована згідно з макетом
// Дані для галереї створені динамічно в JS
// Відсутні власні слухачі
// Підключена бібліотека SimpleLightbox з використанням npm
// Екземпляр бібліотеки ініціалізований після додавання елементів галереї у DOM і поза межами будь-яких функцій
// При кліку по елементу галереї відкривається модальне вікно підключеної бібліотеки, в якому міститься збільшена версія зображення, по якому клікнули. Весь базовий функціонал бібліотеки працює
// Через 250 мілісекунд після відкривання модального вікна вміст атрибута alt з’являється знизу, як підпис до зображення