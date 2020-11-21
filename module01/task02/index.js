const invoice = 150; //кол-во еданиц товара в заказе
const stock = 100; //кол-во товара на складе

const message =
  invoice > stock
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с Вами свяжется менеджер';

console.log(message);
