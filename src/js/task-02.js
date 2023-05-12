const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItems = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  return list;
});

ingredientsList.append(...listItems);

console.log(ingredientsList);
