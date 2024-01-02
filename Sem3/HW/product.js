const storageKey = "storage"
const products = document.getElementById("productBox")

const db = JSON.parse(localStorage.getItem(storageKey));

// создадим блоки товаров
db.forEach((product) => {
    // Сама карточка товара с уникальными id для работы с ними
    products.insertAdjacentHTML(
        'beforeend',
        `
        <div id="productBox__product__${product.product}">
            <h1 class="productBox__product__name">
                ${product.product}
            </h1>
            <button id="feedback__${product.product}">Скрыть отзывы</button>
            <div id="feedbacks_${product.product}"></div>
        </div>
        `
    );
    
    const feedbacks = document.getElementById(`feedbacks_${product.product}`)
    
    // Добавим все отзывы которые есть у каждого товара и уникальные id для них
    product.feedback.forEach((feedback) => {
        feedbacks.insertAdjacentHTML(
          'beforeend',
          `
            <p id="productBox__product__feedback__${feedback}">
            Отзыв: ${feedback}
            <button id="${feedback}">Удалить</button>
            </p>
          `
        );
        
        // Сразу же зададим кнопке для удаления отзыва нужный скрипт
        const buttonDelete = document.getElementById(`${feedback}`);
        const feedbackDelete = document.getElementById(`productBox__product__feedback__${feedback}`);
        const productBlock = document.getElementById(`productBox__product__${product.product}`);

        buttonDelete.addEventListener('click', () => {

            feedbackDelete.style.display = "none";

            product.feedback.splice(product.feedback.indexOf(`${feedback}`), 1);

            // Если массив отзывов пустой то товар удаляется из localstorage
            if(product.feedback.length == 0) {
                db.splice(db.indexOf(product), 1);
                productBlock.style.display = "none";
            }

            // Сохраняем изменения
            localStorage.setItem(storageKey, JSON.stringify(db));
        });
    });

    const buttonHide = document.getElementById(`feedback__${product.product}`);

    // Если этой строчки не будет кнопка по скрытию элемента срабатывает только со втрого раза
    feedbacks.style.display = "block"

    // Скрипт для скрытия всех отзывов определенного товара
    buttonHide.addEventListener('click', () => {

        if(feedbacks.style.display == "block") {
            feedbacks.style.display = "none"
            buttonHide.innerHTML = "Показать отзывы"

        }else {
            feedbacks.style.display = "block"
            buttonHide.innerHTML = "Скрыть отзывы"
        }
    });
});