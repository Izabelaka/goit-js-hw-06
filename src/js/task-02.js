const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
const list = [];

ingredients.forEach(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  list.push(liItem);

});
ingredientsList.append(...list);
console.log(ingredientsList)