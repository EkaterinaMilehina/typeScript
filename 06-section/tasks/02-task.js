"use strict";
// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.
function echo(something) {
    return something;
}
// 2. Создайте стрелочную функцию echo2 c
// аналогичным функционалом.
const echo2 = (something) => something;
// Проверка функции echo
const str = "Hello";
const num = 123;
const bool = true;
console.log(echo(str));
console.log(echo(num));
console.log(echo(bool));
// Проверка функции echo2
console.log(echo2(str));
console.log(echo2(num));
console.log(echo2(bool));
