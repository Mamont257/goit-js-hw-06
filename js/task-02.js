const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');
const array = [];

for (const el of ingredients) {
  let addElement = document.createElement('li');
  addElement.classList.add('item');
  addElement.textContent = el;
  // ul.append(addElement);
  array.push(addElement);
}

ul.append(...array);





// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй 
// метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.