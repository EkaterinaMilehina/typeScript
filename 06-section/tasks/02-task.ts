// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.

function echo<T, >(something: T): T {
    return something;
  }
  
  // 2. Создайте стрелочную функцию echo2 c
  // аналогичным функционалом.

const echo2 = <T, >(something: T) => something;

// Проверка функции echo
const str: string = "Hello";
const num: number = 123;
const bool: boolean = true;

console.log(echo(str)); 
console.log(echo(num)); 
console.log(echo(bool)); 

// Проверка функции echo2

console.log(echo2(str));
console.log(echo2(num)); 
console.log( echo2(bool));