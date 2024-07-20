interface IRoom {
    width: number;
    height: number;
    windowCount: number;
  }
  
  enum stoveType {
    "electro",
    "gas"
  }
  
  interface IKitchen {
    width: number;
    height: number;
    chairsCount: number;
    hasPlants: boolean;
    stoveType: stoveType;
  }
  
  // Выше приведены два интерфейса IRoom - тип комнаты
  // и IKitchen - тип кухни. Не внося изменений в эти
  // интерфейсы создайте тип KitchenDataType в котором
  // будут присутствовать все свойства IKitchen за
  // исключением тех, которые есть в IRoom
  type KitchenDataType = Omit<IKitchen, keyof IRoom>;


  
  // Проверка типа KitchenDataType
const kitchenData: KitchenDataType = {
  // width: 10,
  chairsCount: 4,
  hasPlants: true,
  stoveType: stoveType.electro
};

// console.log(kitchenData.width);
console.log(kitchenData.chairsCount);
console.log(kitchenData.hasPlants);
console.log(kitchenData.stoveType);