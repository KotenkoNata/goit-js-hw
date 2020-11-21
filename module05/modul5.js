// ============================================================================
// Задание 1

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return `login: ${this.login}, email: ${this.email}`;
// };

// Write code under this line

// console.log(typeof Account.prototype.getInfo);
// 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

// ============================================================================
// Задание 2

// class
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// console.log(typeof User);
// 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// 'function'

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

// ============================================================================
// Задание 3

// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     this.items = this.items.filter(function (elementInItems) {
//       return elementInItems !== item;
//     });
//   }
// }

// console.log(typeof Storage);
// 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);

// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// ============================================================================
// Задание 4

// переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   value() {
//     return this.value;
//   }

//   append(str) {
//     this.value = `${this.value}${str}`;
//   }
//   prepend(str) {
//     this.value = `${str}${this.value}`;
//   }
//   pad(str) {
//     this.prepend(str);
//     this.append(str);
//   }
// }

// console.log(typeof StringBuilder);
// 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// ============================================================================
// Задание 5

class Car {
  /*
   * Добавь `статический` метод
   * `getSpecs(car)`, который принимает
   * объект-машину как параметр
   * и возвращает шаблонную строку
   * со свойствами и значениями объекта.
   * Свойства:
   *   maxSpeed,
   *   speed,
   *   isOn,
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость,
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль.
   *         Значения `true` или `false`,
   *         начальное значение false
   *  distance - пробег в километрах,
   *             начальное значение `0`
   */
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this._maxSpeed = Math.max(0, maxSpeed);
    this._speed = Math.max(0, speed);
    this._isOn = isOn;
    this._distance = Math.max(0, distance);
    this._price = Math.max(0, price);
  }

  get maxSpeed() {
    return this._maxSpeed;
  }
  get speed() {
    return this._speed;
  }
  get isOn() {
    return this._isOn;
  }
  get distance() {
    return this._distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    this._speed = Math.min(this._maxSpeed, this._speed + value);
  }

  decelerate(value) {
    this._speed = Math.max(0, this._speed - value);
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += Math.max(0, hours * this._speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
