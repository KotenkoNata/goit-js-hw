/// Посчитает и выведет в консоль количество категорий

const countLisItem = document.querySelectorAll(".item");
console.log(`В списке ${countLisItem.length} категории.`);

/// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const titleRef = document.querySelectorAll(".item");
titleRef.forEach(function (elementOfArray) {
  const h2 = elementOfArray.children[0].innerText;
  const countItems = elementOfArray.children[1].children.length;

  console.log(`Категория: ${h2}`);
  console.log(`Количество: ${countItems}`);
});
