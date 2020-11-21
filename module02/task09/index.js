function isLoginValid(login, min = 4, max = 16) {
  return min <= login.length && login.length <= max;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';

  if (!isLoginValid(login)) {
    return ERROR;
  }
  if (!isLoginUnique(allLogins, login)) {
    return REFUSAL;
  }

  allLogins.push(login);
  return SUCCESS;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
