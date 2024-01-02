/*
Задание 2: 
Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. 
Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для 
своего гарнитура. После того как пользователь собрал свой комплект и сохраняет 
свой выбор, информация о нем сохраняется в localStorage. При следующем посещении 
сайта их индивидуальные настройки автоматически загружаются, и они видят ранее 
созданный мебельный комплект.
 
1. Создайте базовую HTML-структуру с различными элементами мебели (например, 
стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой
мебельный гарнитур.
3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить 
комплект", которая сохраняет текущий выбор пользователя в localStorage.
4. При следующем посещении сайта автоматически загрузите сохраненные параметры 
из localStorage и отобразите ранее созданный комплект.
5. Убедитесь, что у пользователей есть возможность очистить сохраненные 
настройки (очистить localStorage).
*/
// localStorage.clear();
const btnSaveEl = document.querySelector("#save-btn");
const tableEl = document.getElementById("table-color");
const chairEl = document.getElementById("chair-material");
const btnClearEl = document.getElementById("clear-btn");

btnSaveEl.addEventListener("click", saveOrder);
const orderKey = 'order'

function saveOrder() {
  const tableColor = tableEl.value;
  const chairMaterial = chairEl.value;
  const order = {
    table: tableColor,
    chair: chairMaterial,
  };
  localStorage.setItem(orderKey, JSON.stringify(order));
}

if (localStorage.getItem(orderKey)) {
  const lastOrder = JSON.parse(localStorage.getItem(orderKey));
  tableEl.value = lastOrder.table;
  chairEl.value = lastOrder.chair;
}

btnClearEl.addEventListener("click", () => {
  localStorage.removeItem(orderKey);
});