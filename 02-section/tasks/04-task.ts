let cars: Cars | null = null;

enum Cars {
    mercedes = "mercedes", 
    bmw = "bmw", 
    tesla = "tesla"
}


// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку

cars = Cars.bmw
console.log(cars);

//cars = Cars.nissan
console.log(cars);
