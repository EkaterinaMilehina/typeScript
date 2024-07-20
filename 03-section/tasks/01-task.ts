// 1. Нуже приведена не типизированная функция
// для обрезки текста cutText принимающая два
// аргумента текст: и его максимальную длину.
// Типизируйте данную функцию

function cutText(text: string, size: number): string {
  if (text.length <= size) return text;

  return `${text.slice(0, size)}...`;
}

console.log(cutText('ffsdve', 4));
console.log(cutText('ff', 4));


// 2. Функция numbersToText принимает два аргумента
// числа numbers и разделитель delimer. В случае
// если числел больше 5, функция возвращает false.
// Типизируйте функцию.

const numbersToText = (numbers: number[] | number, delimer: string): string | boolean => {
  if (!Array.isArray(numbers)) return `${numbers}`;

  if (numbers.length > 5) return false;

  return numbers.join(delimer);
};

console.log(numbersToText(4, ','));
console.log(numbersToText([4, 3, 2, 2, 4, 6, 7], ','));
console.log(numbersToText([7, 5], ','));
