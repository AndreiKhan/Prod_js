/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  class RegularUser extends User {}
  
  class PremiumUser extends User {
    constructor(firstName, lastName, premiumExpiration) {
      super(firstName, lastName);
      this.premiumExpiration = premiumExpiration;
    }
  }
  
  function getAccountInfo(user) {
    if (user instanceof RegularUser) {
      console.log("нет премиум доступа");
    }
    if (user instanceof PremiumUser) {
      console.log(user.premiumExpiration);
    }
  }
  
  const user1 = new RegularUser("Ivan", "Ivanov");
  const user2 = new PremiumUser(
    "Petr",
    "Petrov",
    new Date("December 17, 2025 03:24:00")
  );
  
  getAccountInfo(user1);
  getAccountInfo(user2);