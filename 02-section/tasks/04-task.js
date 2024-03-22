"use strict";
let cars = null;
var Cars;
(function (Cars) {
    Cars["mercedes"] = "mercedes";
    Cars["bmw"] = "bmw";
    Cars["tesla"] = "tesla";
})(Cars || (Cars = {}));
// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку
// cars = "nissan";
