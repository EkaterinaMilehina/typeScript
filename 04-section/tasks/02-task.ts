// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash",
    "card",
    "credit"
  }
  
  // interface ICustomer {
  //   firstName: string;
  //   lastName: string;
  //   dateBirthday: Date;
  //   deliveryCountry: string;
  //   deliveryCity: string;
  //   deliveryAddress: string;
  //   deliveryBuilding: number | string;
  //   deliveryApartment?: number;
  //   detiveryTime?: string;
  //   paymentType: paymentType;
  //   ordersCount: number;
  //   discountPercent: number;
  //   currency: "EUR" | "USD" | "RUB";
  // }
  
  interface IDeliveryInfo {
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    deliveryTime?: string;
}

interface IClient {
    firstName: string;
    lastName: string;
    dateBirthday: Date;
    deliveryInfo: IDeliveryInfo;
    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency: "EUR" | "USD" | "RUB";
}

type ICust = IDeliveryInfo & IClient;