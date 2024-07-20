// 1. Опиши типизацию юзера
// 2. Замени все unknown описанным типом
// 3. Проверь работоспособность кода

type User = {
  name: string;
  age: number;
  occupation: string;
};

const users: User[] = [
  
];
users.push({
  name: "Антон",
  age: 25,
  occupation: "Водитель"
},
{
  name: "Амир",
  age: 23,
  occupation: "Программист"
})

function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
