"use strict";
// 1. Типизируйте функцию calc
function calc(action, a, b) {
    switch (action) {
        case "summ":
            return a + b;
        case "subtraction":
            return a - b;
        case "multiplication":
            return a * b;
        case "division":
            if (b === 0)
                return 0;
            return a / b;
        default:
            return a + b;
    }
}
// 2. Напишите функцию calc2. Данная функция
// должна быть аналогична функции calc,
// но с использованием enum для action
var Action;
(function (Action) {
    Action["Summ"] = "summ";
    Action["Subtraction"] = "subtraction";
    Action["Multiplication"] = "multiplication";
    Action["Division"] = "division";
})(Action || (Action = {}));
function calc2(action, a, b) {
    switch (action) {
        case Action.Summ:
            return a + b;
        case Action.Subtraction:
            return a - b;
        case Action.Multiplication:
            return a * b;
        case Action.Division:
            if (b === 0)
                return 0;
            return a / b;
        default:
            return a + b;
    }
}
