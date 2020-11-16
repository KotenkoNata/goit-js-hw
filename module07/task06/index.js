const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", function (event) {
  const nextValue = event.currentTarget.value;
  if (nextValue === "") {
    output.textContent = "незнакомец";
  } else {
    output.textContent = nextValue;
  }
});
