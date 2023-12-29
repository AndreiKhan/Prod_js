"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];


    constructor(books) {
        const ifUnic = new Set(books);

        if(books.length != ifUnic.size) {
            throw new Error("Список книг не уникальный");
        }

        this.#books = books;
    }

    allBooks() {
        return this.#books;
    }

    addBook(title) {
        if(this.#books.includes(title)) {
            throw new Error( "Такая книга уже есть");
        }

        this.#books.push(title);
    }

    removeBook(title) {
        if(this.#books.includes(title)) {

            this.#books.splice(this.#books.indexOf(title), 1);

        }else {
            throw new Error( "Такой книги нет");
        }
        
        
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}



let lib = new Library(["title_1", "title_2", "title_3", "title_4", "title_5"]);


console.log(lib.allBooks());

lib.addBook("title_6")
console.log("Есть ли title_6 в списке " + lib.hasBook("title_6"));

lib.removeBook("title_6")
console.log("Есть ли title_6 в списке " + lib.hasBook("title_6"));

console.log(lib.allBooks());
