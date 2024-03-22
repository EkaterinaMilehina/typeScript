function getPropertyValue<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    return obj[key];
  }
  
  // Функция getPropertyValue принимает 2 аргумента:
  // Объект и ключ свойства этого объекта, который
  // необходимо вернуть. Типизируйте данную функцию
  // таким образом чтобы код ниже вызвал ошибку только
  // в том случае когда у объекта нет указанного
  // свойства (второй вызов).
  
  const Car = {
    brand: "Ford",
    model: "Mustang",
    yearOfIssue: 1967,
    engine: "V8",
    hp: 115
  };
  
  getPropertyValue(Car, "brand");
  // getPropertyValue(Car, "nickname");
  