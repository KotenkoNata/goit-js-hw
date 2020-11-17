const input = document.querySelector("#controls input");
const createBtn = document.querySelector("#controls [data-action=render]");
const clearBtn = document.querySelector("#controls [data-action=destroy]");
const output = document.querySelector("div#boxes");

const destroyBoxes = function () {
  output.innerHTML = "";
};

const createBoxes = function (amount) {
  let resize = 30;
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");

    div.style.backgroundColor = `#${(Math.random().toString(16) + "000000")
      .substring(2, 8)
      .toUpperCase()}`;
    div.style.height = resize + `px`;
    div.style.width = resize + `px`;
    resize = resize + 10;
    output.append(div);
  }
};

createBtn.addEventListener("click", function (event) {
  const amount = parseInt(input.value);
  destroyBoxes();
  createBoxes(amount);
});

clearBtn.addEventListener("click", destroyBoxes);
