type PaymentInfo = {
    id: string;
    amount: number;
    currency: string;
  };
  
  // 1. Выше описан тип PaymentInfo. Создайте новый
  // тип GenericPaymentInfo который будет способен
  // принимать любой тип для свойства currency.
  // 2. Доработайте GenericPaymentInfo таким образом
  // чтобы поумолчанию тип currency был string.
  type GenericPaymentInfo<T = string> = {
    id: string;
    amount: number;
    currency: T;
  }

  // проверка
const paymentInfo1: GenericPaymentInfo = {
  id: "123",
  amount: 100,
  currency: "USD"
};

const paymentInfo2: GenericPaymentInfo<number> = {
  id: "456",
  amount: 50,
  currency: 123
};
