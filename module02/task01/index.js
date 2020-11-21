const getItemsString = function (array) {
  'use strict';
  let result;

  for (let i = 0; i < array.length; i += 1) {
    result = `${i + 1} - ` + array[i]\n');
  }
if (array.length === 0) {
  console.log(' ');
}
console.log(result);
console.log(typeof result);
};

console.log(getItemsString([]));
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

// const clients = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

// let result;

// for (let i = 0; i < clients.length; i += 1) {
//   clients[i] = `${i + 1} - ` + clients[i];
//   result = clients.join('\n');
// }
// console.log(result);

// последняя рабочая версия

//const getItemsString = function (array) {
//   'use strict';
//   let result = '';

//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
