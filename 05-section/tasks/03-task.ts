interface IShop {
    id: number;
    name: string;
    employeesCount: number;
    ceo: string;
    address: string;
    isOpen: boolean;
  }
  
  // В данном файле описаны 2 типа IShop - модель
  // данных магазина и IShopListItem - данные
  // магазина использующиеся в списке магазинов.
  // Перепишите IShopListItem создав еще 2 типа:
  // IShopListItem1 - используя утилиту которая
  // удаляет указанные свойства и IShopListItem2
  // - используя утилиту, которая удаляет все
  // свойства, кроме указанных.
  
  type IShopListItem = {
    id: IShop["id"];
    name: IShop["name"];
    address: IShop["address"];
  };
  
  type IShopListItem1 = Omit<IShop, keyof IShopListItem>;
  type IShopListItem2 = Pick<IShop, keyof IShopListItem>;

  // Проверка типа IShopListItem1
const shopListItem1: IShopListItem1 = {
  // id: 1,
  // name: "Shop 1",
  employeesCount: 10, 
  ceo: "gnyj", 
  // address: "gneng",
  isOpen: true
};

// Проверка типа IShopListItem2
const shopListItem2: IShopListItem2 = {
  id: 2,
  name: "Shop 2",
  address: "fteb ft",
  // employeesCount: 5,
  // ceo: "fbe",
  // isOpen: false
};
