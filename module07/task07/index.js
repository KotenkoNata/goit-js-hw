const input = document.querySelector("#font-size-control");

const output = document.querySelector("#text");

input.addEventListener("input", function (event) {
  const _input = event.currentTarget;
  const nextValue = _input.value;
  output.style.fontSize = `${nextValue}px`;
});
