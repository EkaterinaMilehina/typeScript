const city = "London";
const country = "Great Britain";
let region: any = 161;
region = region.toString() as string;

let isSameTypes = typeof city === typeof country;
console.log(isSameTypes);

isSameTypes = typeof city === typeof region;
console.log(isSameTypes);
console.log(region);



// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes
