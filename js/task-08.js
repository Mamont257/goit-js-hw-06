const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);
const user ={};

function onSubmit(event){
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;

    if(!email.value || !password.value){
        console.log(alert('Всі поля повинні бути заповненні!!!'));
    } else {
        user.email = email.value;
        user.password = password.value;
        console.log(user);
        form.reset();
    }
    

    // if(!event.currentTarget[0].value || !event.currentTarget[1].value){
    //     console.log(alert('Всі поля повинні бути заповненні!!!'));
    // } else {
    //     user.email = event.currentTarget[0].value;
    //     user.password = event.currentTarget[1].value;
    //     console.log(user);
    // }
}







// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
//    де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
//    Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.