"use strict";
alert( 1 / 0 ); // Infinity
alert( "не число" / 2 ); // NaN, такое деление является ошибкой
const bigInt1 = 1234567890123456789012345678901234567890n;
alert( `результат: ${1 + 2}` );
let isGreater1 = 4 < 1;

alert( isGreater1 );
alert('Привет');
alert('Мир');
alert(3 +
1
+ 2);
[1, 2].forEach(alert);

let namee = 'Djon';
let admin;
admin = namee;
alert(admin);
alert( `Привет, ${namee}!` ); 

let age = null; //значение переменной age неизвестно.
let age1;
alert(age1); // выведет "undefined" - значение не было присвоено
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE;
alert(color);
// const pageLoadTime = FF7F00/* время, потраченное на загрузку веб-страницы */;

let planetaZemlya;
let usename;
alert( 1 / 0 ); // Infinity
alert( "не число" / 2 ); // NaN, такое деление является ошибкой
const bigInt = 1234567890123456789012345678901234567890n;
alert( `Привет, ${namee}!` ); 
alert( `результат: ${1 + 2}` );
let isGreater = 4 < 1;

alert( isGreater );
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
/*Семь из них называют «примитивными» типами данных:
number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
bigint для целых чисел произвольной длины.
string для строк.
Строка может содержать ноль или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
symbol для уникальных идентификаторов.
И один не является «примитивным» и стоит особняком:
object для более сложных структур данных.
Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
Имеет две формы: typeof x или typeof(x).
Возвращает строку с именем типа. Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект. 

*/
let age11 = prompt('What is your name?', name);
let test = prompt("Test", ''); // <-- для IE

let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK

let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string
//Мы можем использовать функцию Number(value), чтобы явно преобразовать value к числу:
let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number
let agee = Number("Любая строка вместо числа");

alert(agee); // NaN, преобразование не удалось
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
//Учтите, что null и undefined ведут себя по-разному. Так, null становится нулём, тогда как undefined приводится к NaN.
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false
alert( 6 - 'z2' ); // Nan
alert( '6' / '2' ); // 3, оба операнда приводятся к числам
// Не влияет на числа
alert( 6 - 'z2' ); // Nan
alert( '6' / '2' ); // 3, оба операнда приводятся к числам
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки
// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5
let counter = 1;
let a1 = ++counter; // (*)

alert(a1); // 2 
//В строке (*) префиксная форма ++counter увеличивает counter и возвращает новое значение 2. Так что alert покажет 2.
//Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, тогда без разницы, какую форму использовать:
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же
//Если нужно увеличить и при этом получить значение переменной до увеличения – нужна постфиксная форма:
alert( counter++ ); // 0
alert( 2 * counter++ ); // 2, потому что counter++ возвращает "старое" значение
let a = 1, b = 1;
let c = ++a; 
let d = b++; 
/*a = 2
b = 2
c = 2
d = 1 */
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
/* "" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)*/
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
/*сравнение null/undefined*/
alert( null >= 0 ); // true
alert( null == undefined ); // true
alert( null === undefined ); // false
let condition = (year == 2015); // преобразуется к true или false

if (condition) {
  
}

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

/*if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
===
let accessAllowed = age > 18 ? true : false;
===
let accessAllowed = age > 18;

 */

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

  let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
  alert('Верно!') : alert('Неправильно.');
//В зависимости от условия company == 'Netscape', будет выполнена либо первая, либо вторая часть после ?.
// let message = prompt ('какое офицальное название жабыскрипта?', '');
// if (message == 'ECMAScript'){
//   alert('yes');
// } else if (message == 'ecmascript'){
//   alert('pochti');
// } else{
//   alert('no');
// }


// let message1 = prompt ('input number', '');
// if (message1 > 0){
//   alert('1');
// } else if (message1 < 0){
//   alert('-1');
// } else {
//   alert('0')
// }


// let result;

// // if (a + b < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Много';
// // }

// let b = Number(prompt('input number b'));
// let a = Number(prompt('input number a'));
// result = (a + b < 10) ? 'Мало' : 'Много';
// alert(result);


// let login = prompt('login');
// // if (login == 'Сотрудник') {
// //   message = 'Привет';
// // } else if (login == 'Директор') {
// //   message = 'Здравствуйте';
// // } else if (login == '') {
// //   message = 'Нет логина';
// // } else {
// //   message = '';
// // }
// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';
// alert( message );

// let x;

// false || true || (x = 1) ; 

// alert(x); 

// alert( "pepe" && "no matter what" ); 
// alert( 1 && 0 ); 
// alert( 1 && -1 && 5 ); 

// const age = 2;

// if (age < 14 || age > 90){
//   alert(age);
// }
// if (age != 14 || age != 90 && age < 14 || age > 90){
//   alert(age);
// }



// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }


// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );
// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Значение на координатах (${i},${j})`, '');

//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)

//     // сделать что-нибудь со значениями...
//   }
// }

// alert('Готово!');

// for (let i = 2; i < 10; i++) {

//   if (i % 2 === 1) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }


// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }


// let num;

// do {
//   num = +prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i );
// }


// const browser = prompt('input word');
// if (browser === 'Edge') {
//   alert('You ve got the Edge!');
// } else if (browser === 'Chrome' 
// || browser === 'Firefox' 
// || browser === 'Safari' 
// || browser === 'Opera') { 
//   alert('Okay we support these browsers too'); 
// } else alert('We hope that this page looks ok!');

// const number = +prompt('Введите число между 0 и 3');
// switch (number){
//   case 0:
//     alert('Вы ввели число 0');
//   break;
//   case 1:
//     alert('Вы ввели число 1');
//   break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// function showMessage(from, text = anotherFunction()) {
// //  anotherFunction() выполнится только если не передан text
// //  результатом будет значение text
// }


// Функции, начинающиеся с…
// "get…" – возвращают значение,
// "calc…" – что-то вычисляют,
// "create…" – что-то создают,
// "check…" – что-то проверяют и возвращают логическое значение, и т.д.

// function showMessage(from, text) {

//   from = '*' + from + '*'; // немного украсим "from"

//   alert( from + ': ' + text );
// }

// let from = "Аня";

// showMessage(from, "Привет"); // *Аня*: Привет

// // значение "from" осталось прежним, функция изменила значение локальной переменной
// alert( from ); // Аня

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
//   }
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }



// function min(a, b) {
//   return (a < b) ?  a :  b;
// }
// alert(min(2,3));

// function pow(x,n){
//   let result = x;
//   for (let i = 1; i<n; i++){
//     result *= x;
//   }
//   return result;
// }
// alert(pow(3, 2));

// function sayHi() {   // (1) создаём
//   alert( "Привет" );
// }

// let func = sayHi;    // (2) копируем

// func(); // Привет    // (3) вызываем копию (работает)!
// sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };

// welcome();


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );

// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");

// alert( "Посетитель: " + userName ); 
// alert( "Чай: " + isTeaWanted ); 
// чтобы увидеть результат, сначала откройте консоль


// console.log();
