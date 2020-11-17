const input = document.querySelector("#validation-input");

input.addEventListener("focusout", function (event) {
  const _input = event.currentTarget;
  const nextValue = _input.value;
  const dataLength = parseInt(_input.dataset.length);

  if (dataLength === nextValue.length) {
    _input.classList.remove("invalid");
    _input.classList.add("valid");
  } else {
    _input.classList.remove("valid");
    _input.classList.add("invalid");
  }
});
