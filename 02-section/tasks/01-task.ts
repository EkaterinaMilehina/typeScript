// 1. Создайте 3 массива: массив из имен 3 ваших
// лучших друзей, массив из их возрастов, массив
// в котором будет указано есть ли у них автомобиль
// 2. Укажите в явной тип массивов
// 3. Заполните данные

const friends: string[] = ['Tanya', 'Natasha', 'Arina'];
const year: number[] = [24, 25, 24];
const hasCar: boolean[] = [false, true, true];

// 4. Добавьте в каждый из массивов информацию
// о вашем четвертом друге

friends.push('Radmir');
year.push(24);
hasCar.push(true);
console.log(hasCar);


// 5. Раскомментируйте строки ниже исправьте их
// таким образом чтобы не возникало ошибок

friends.push("Ваня");
year.push(22);
hasCar.push(true);

// 6. Создайте кортеж массивов, перенесите данные
// о ваши друзьях в него

const friendsData: [string[], number[], boolean[]] = [friends, year, hasCar];
console.log(friendsData);

