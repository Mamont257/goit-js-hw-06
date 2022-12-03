const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput(evt) {

    if (evt.currentTarget.value.length === Number(input.getAttribute('data-length'))) {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        };
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    };
}




// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// * Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// * Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.