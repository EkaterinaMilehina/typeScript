// 1. Ниже приведен список переменных из
// первого урока. На их основе создайте
// интерфейс IUser.
interface IUser {
    firstName: string;
    lastName: string;
    sex: string;
    age: number;
    hometown: string;
    isMarried: boolean;
    hasPets: boolean;
}


// 2. Не меняя написанный вами интерфейс
// IUser, добавьте в него опциональную
// переменную hasCar
interface IUser {
    hasCar?: boolean;
}
// 3. Создайте новый интерфейс ICustomer,
// поля которого будут наследоваться от IUser.
// ICustomer также должен содержать поля с
// количеством заказов, а также со способом оплаты
// (cash, card или credit)
interface ICustomer extends IUser {
    cash: number;
    card: number;
    credit: number;
}