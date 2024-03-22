// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.
interface Num {
  length: number;
}

function getLength<T extends Num>(arg: T): number {
    return arg.length;
  }
  