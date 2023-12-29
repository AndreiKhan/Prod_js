"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    id: Date.now(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const products = document.getElementById("productsBox")

// создадим блоки товаров
initialData.forEach((product) => {
  products.insertAdjacentHTML(
    'beforeend',
    `
      <div class="productsBox__product">
        <h1 class="productsBox__product__name">
          ${product.product}
        </h1>
        <p id="${product.product}"></p>
        <p id="error__${product.product}" class="error"></p>
        <input id="input__${product.product}" type="text"><br>
        <button class="${product.product}">Добавить отзыв</button>
      </div>
    `
  );
});

// добавим отзывы товаров
initialData.forEach((product) => {
  let comments = document.getElementById(`${product.product}`);

  product.reviews.forEach(review => {
    comments.insertAdjacentHTML(
      'beforeend',
      `
        <p class="productsBox__product__reviews__review">
        Отзыв: ${review.text}
        </p>
      `
    );
  });
});

// Выберем все кнопки
const buttons = document.querySelectorAll('button');

// Зададим им свойства
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(`Добавлен новый отзыв для товара ${button.className}`);

    const reviewInput = document.getElementById(`input__${button.className}`)
    const reviewError = document.getElementById(`error__${button.className}`)
    const review = document.getElementById(`${button.className}`)

    // Проверим соответствует ли условиям новый отзыв
    if(reviewInput.value.length < 50 || reviewInput.value.length > 500) {
      reviewError.innerHTML = "Недопустимый отзыв";

    }else {
      // добавим его в отзывы
      review.insertAdjacentHTML(
        'beforeend',
        `
          <p>
            Отзыв: ${reviewInput.value}
          </p>
        `
      );
  
      reviewInput.value = "";
      reviewError.innerHTML = "";
    }
  });
});