//Задание 1 ---------------

/* 
Пример с деструктуризации - 


function getname (user) { return user.name; }

            user = { name : 2 }
             { name } = user

function getname ({ name }) { return name; }


console.log(getname(user)) // 2
*/

// const getUserNames = function (коробочки) {
//   return коробочки.map(function (коробочка) {
//     return коробочка.имя_телефона_в_коробочке;
//   });
// };

/*

1. до декструктуризации:
коробочка = { имя_телефона_в_коробочке: "Apple Iphone" };

2. после декструктуризации:
{ имя_телефона_в_коробочке } = коробочка;



коробочки = [коробочка1, коробочка2, ...];

/* 

const users = [
  { name: "Moore Hensley" },
  { name: "Sharlene Bush" },
  { name: "Ross Vazquez" },
  { name: "Elma Head" },
  { name: "Carey Barr" },
  { name: "Blackburn Dotson" },
  { name: "Sheree Anthony" },
];

console.log(getUserNames(users));

*/

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */

//Задание 2 ---------------

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
// ];

// Write code under this line

// const getUserNames = function (коробочки) {
//   return коробочки.map(function (коробочка) {
//     return коробочка.имя_телефона_в_коробочке;
//   });
// };

// const getUsersWithEyeColor = users.filter(function (user) {
//   return user.eyeColor.includes('blue');
// });

// const getUsersWithEyeColor = function (array, color) {
//   return array.filter(function ({ eyeColor }) {
//     return eyeColor.includes(color);
//   });
// };

// console.log(getUsersWithEyeColor(users, 'blue'));

//Задание 3 ---------------

// const users = [
//   { name: 'Moore Hensley', gender: 'male' },
//   { name: 'Ross Vazquez', gender: 'male' },
//   { name: 'Carey Barr', gender: 'female' },
//   { name: 'Blackburn Dotson', gender: 'male' },
// ];

// const getUsersWithGender = function (array, gender) {
//   return array
//     .filter(function (user) {
//       return user.gender === gender;
//     })
//     .map(function ({ name }) {
//       return name;
//     });
// };

// console.log(getUsersWithGender(users, 'male'));

//Задание 4 ---------------

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
// ];

// const getInactiveUsers = function (array) {
//   return array.filter(function ({ isActive }) {
//     return !isActive;
//   });
// };

// console.log(getInactiveUsers(users));

//Задание 5 ---------------

// Write code under this line

// const users = [
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
// ];

// const getUserWithEmail = function (array, mail) {
//   return array.find(function ({ email }) {
//     return email === mail;
//   });
// };

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */

//Задание 6 ---------------

// const users = [
//   { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com', age: '40' },
//   { name: 'Elma Head', email: 'elmahead@omatom.com', age: '25' },
//   { name: 'Carey Barr', email: 'careybarr@nurali.com', age: '28' },
// ];

// const getUsersWithAge = function (array, min, max) {
//   return array
//     .filter(function ({ age }) {
//       return age < max && age > min;
//     })
//     .map(function ({ name, email }) {
//       return {
//         name: name,
//         email: email,
//       };
//     });
// };

// console.log(getUsersWithAge(users, 20, 30));

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

//Задание 7 ---------------

// const users = [
//   { name: 'User 1', balance: 112.325 },
//   { name: 'User 2', balance: 162.325 },
//   { name: 'User 3', balance: 1532.325 },
// ];
// const calculateTotalBalance = function (array) {
//   return array.reduce(function (sum, { balance }) {
//     return sum + balance;
//   }, 0);
// };

// console.log(calculateTotalBalance(users));
// 20916

//Задание 8 ---------------

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUsersWithFriend = function (array, friendName) {
//   return array
//     .filter(function ({ friends }) {
//       return friends.includes(friendName);
//     })
//     .map(function ({ name }) {
//       return name;
//     });
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

//Задание 9 ---------------

// const getNamesSortedByFriendsCount = function (array) {
//   array = [...array];

//   array.sort(function (prevUser, nextUser) {
//     return prevUser.friends.length - nextUser.friends.length;
//   });

//   return array.map(function ({ name }) {
//     return name;
//   });
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Задание 10 ---------------

// const calculateTotalBalance = function (array) {
//   return array.reduce(function (sum, { balance }) {
//     return sum + balance;
//   }, 0);
// };

// const getSortedUniqueSkills = function (array) {
//   let allSkills = array.reduce(function (_allSkills, { skills }) {
//     return [..._allSkills, ...skills];
//   }, []);

//   allSkills = allSkills.filter(function (skill, index, _allSkills) {
//     return _allSkills.indexOf(skill) === index;
//   });

//   allSkills.sort();
//   return allSkills;
// };

// console.log(getSortedUniqueSkills(users));

/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
