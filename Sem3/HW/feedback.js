const button = document.getElementById("saveScript")
const storageKey = "storage"

// Зададим им свойства
button.addEventListener('click', () => {

    const feedbackInput = document.getElementById("feedbackInput")
    const productInput = document.getElementById("productInput")
    const feedbackError = document.getElementById("feedbackError")

    // Проверим соответствует ли условиям новый отзыв
    if(productInput.value.length == 0 || feedbackInput.value.length == 0) {
        feedbackError.innerHTML = "Заполните все поля";

    }else {
        // Создаем если необходимо
        if (!localStorage.getItem(storageKey)) {
            localStorage.setItem(
                storageKey,
                JSON.stringify([{product: productInput.value, feedback: []}])
            );
        }

        const db = JSON.parse(localStorage.getItem(storageKey));
        let exist = true

        // Если товар существует то добавляем отзыв к нему
        db.forEach(feedbackEl => {
            if(feedbackEl.product == productInput.value){
                feedbackEl.feedback.push(feedbackInput.value)
                exist = false
            }
        });

        // Если нет то создаем новую строку
        if(exist){
            db.push({ product: productInput.value, feedback: [feedbackInput.value] })
        }
        
        // Сохраняем изменения
        localStorage.setItem(storageKey, JSON.stringify(db));

        feedbackInput.value = "";
        feedbackError.innerHTML = "";
    }
});