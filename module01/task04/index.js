const orderPieces = 0; // должно хранить или отказ или кол-во товара

const credits = 23580; //кол-во средств
const pricePerDroid = 3000; // стоимость единицы товара
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; // расчитанная общая цена заказа
let balanceCredit; // разница между credits и totalPrice
let message;
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces <= 7) {
  totalPrice = orderPieces * pricePerDroid;
  balanceCredit = credits - totalPrice;
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (orderPieces >= 8) {
  message = ACCESS_DENIED;
}

console.log(message);
