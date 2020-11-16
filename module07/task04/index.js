const counterValue = document.querySelector("#value");
const incBtn = document.querySelector("[data-action=increment]");
const decBtn = document.querySelector("[data-action=decrement]");

const inc = function () {
  counterValue.innerText = parseInt(counterValue.innerText) + 1;
};

const dec = function () {
  counterValue.innerText = parseInt(counterValue.innerText) - 1;
};

incBtn.addEventListener("click", inc);

decBtn.addEventListener("click", dec);
