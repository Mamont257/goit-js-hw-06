function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

btn.addEventListener('click', onButton);

function onButton(){
  let colorBody = body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = colorBody;
}





// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
// на button.change-color і виводить значення кольору в span.color.