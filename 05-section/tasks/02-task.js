"use strict";
var stoveType;
(function (stoveType) {
    stoveType[stoveType["electro"] = 0] = "electro";
    stoveType[stoveType["gas"] = 1] = "gas";
})(stoveType || (stoveType = {}));
// Проверка типа KitchenDataType
const kitchenData = {
    // width: 10,
    chairsCount: 4,
    hasPlants: true,
    stoveType: stoveType.electro
};
// console.log(kitchenData.width);
console.log(kitchenData.chairsCount);
console.log(kitchenData.hasPlants);
console.log(kitchenData.stoveType);
