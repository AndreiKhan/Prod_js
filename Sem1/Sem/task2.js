/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

const library = {
    name: "Hello",
    books,
    // [Symbol.iterator]() {
    //     let index = 0;
    //     return {
    //         next: () => {
    //             if (index < this.books.length) {
    //                 return { done: false, value: this.books[index++] };
    //             }
    //             return { done: true };
    //         }
    //     }
    // }
    *[Symbol.iterator]() {
        for (const el of books) {
            yield el;
        }
    }
};


for (const el of library) {
    console.log(el);
}