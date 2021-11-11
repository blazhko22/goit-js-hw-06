const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("ul#ingredients");

const elements = ingredients.map((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingredientEl.classList.add("item");

  return ingredientEl;
});
console.log(elements);

ingredientsEl.append(...elements);
