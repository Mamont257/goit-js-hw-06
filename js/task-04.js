
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')

const value = document.querySelector('#value');
let counterValue = 0;


decrement.addEventListener('click', dec);

function dec(evt){
    counterValue -= 1;
    value.textContent = counterValue;
}

increment.addEventListener('click', inc);

function inc(){
    counterValue += 1;
    value.textContent = counterValue;
}




// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та 
// ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.