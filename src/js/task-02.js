const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  ingredientsList.appendChild(list);

});
console.log(ingredientsList)