/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:

```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```

Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const inputEl = document.querySelector(".number-input");
const buttonEl = document.querySelector(".check-button");
const elDivError = document.querySelector(".message");

buttonEl.addEventListener("click", () => {
  const number = Number(inputEl.value);

  try {
    if (!Number.isFinite(number)) {
      throw new Error("введено  не число");
    }
    elDivError.textContent = "введено  число";
  } catch (error) {
    elDivError.textContent = error.message;
  }
});