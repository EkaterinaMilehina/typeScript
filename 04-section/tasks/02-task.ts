// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
  "cash",
  "card",
  "credit",
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

interface IDeliveryDetails {
  country: string;
  city: string;
  address: string;
  building: number | string;
  apartment?: number;
  time?: string;
}

interface ICustomer {
  firstName: string;
  lastName: string;
  dateBirthday: Date;
  deliveryDetails: IDeliveryDetails;
  paymentType: paymentType;
  ordersCount: number;
  discountPercent: number;
  currency: "EUR" | "USD" | "RUB";
}

const d: ICustomer = {
  firstName: "vevef",
  lastName: "eva",
  dateBirthday: new Date(),
  deliveryDetails: {
    country: "string",
    city: "string",
    address: "string",
    building: 7,
  },
  paymentType: paymentType.card,
  ordersCount: 5,
  discountPercent: 4,
  currency: "EUR",
};
console.log(d);
