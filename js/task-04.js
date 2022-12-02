
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')

const value = document.querySelector('#value');

// Number(value.childElementCount);
// console.dir(value);
// Number(value.textContent)+1;
// console.log(increment);


decrement.addEventListener('click', dec);

function dec(evt){
    // evt.value
    // console.dir(evt.currentTarget.nextSibling)
    Number(value.textContent -= 1);
}

increment.addEventListener('click', inc);

function inc(){
    // console.log('ty')
    Number(value.textContent += 1);
}












// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та 
// ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.