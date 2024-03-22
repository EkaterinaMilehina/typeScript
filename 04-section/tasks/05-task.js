"use strict";
// 1. Опиши типизацию юзера
// 2. Замени все unknown описанным типом
// 3. Проверь работоспособность кода
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: "Антон",
        age: 25,
        occupation: "Водитель"
    },
    {
        name: "Амир",
        age: 23,
        occupation: "Программист"
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log("Users:");
exports.users.forEach(logPerson);
