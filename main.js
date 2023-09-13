// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
let num3 = +prompt('Enter third number');

let result = (num1 + num2 + num3) / 3;
alert(result);