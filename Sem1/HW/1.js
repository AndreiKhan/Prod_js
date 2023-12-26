"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "title album 1",
      artist: "artist album 1",
      year: "year album 1"
    },
    {
      title: "title album 2",
      artist: "artist album 2",
      year: "year album 2"
    },
    {
      title: "title album 3",
      artist: "artist album 3",
      year: "year album 3"
    },
    {
      title: "title album 4",
      artist: "artist album 4",
      year: "year album 4"
    },
    {
      title: "title album 5",
      artist: "artist album 5",
      year: "year album 5"
    },
  ],
  *[Symbol.iterator]() {
    for (const el of albums) {
      yield el
    }
  }
}


// Первое задание:
console.log("Первое задание:");

for (const el of musicCollection.albums) {
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}