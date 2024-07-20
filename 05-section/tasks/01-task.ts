interface ITruck {
    brand: string;
    model: string;
    hasTrailer: boolean;
  }
  
  // Выше описан интерфейс грузовика ITruck.
  // Создайте тип обычного авто ICar убрав из
  // интерфейса поле hasTrailer
  type ICars = Omit<ITruck, 'hasTrailer'>;

  // Проверка типа ICars
const car: ICars = {
  brand: 'Toyota',
  model: 'Corolla',
  hasTrailer: true;
};

console.log(car.brand);
console.log(car.model);
// console.log(car.hasTrailer);