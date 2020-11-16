const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const liList = ingredients.map(function (liText) {
  const li = document.createElement("li");
  li.textContent = liText;
  return li;
});

const eleRef = document.querySelector("ul#ingredients");
eleRef.append(...imgList);
