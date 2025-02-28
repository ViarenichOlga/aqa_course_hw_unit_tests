/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const resultArray = [];
  for (let array of arrays) {
    resultArray.push(...array);
  }
  return resultArray;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const arrSentence = sentence.replace(/\s+/g, ' ').split(' ');
  for (let i = 0; i < arrSentence.length; i++) {
    if (i === 0) {
      arrSentence[i] = arrSentence[i].toLowerCase();
    } else {
      arrSentence[i] = arrSentence[i][0].toUpperCase() + arrSentence[i].substring(1).toLowerCase();
    }
  }
  return arrSentence.join('_');
}
console.log(devideBy('I    am    an     engineer'));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let firstValue = 0;
  let secondValue = 1;
  let result;
  for (let i = 2; i <= n; i++) {
    result = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = result;
  }
  return n === 0 ? firstValue : n === 1 ? secondValue : result;
}

export { mergeArrays, fibonacci, devideBy };
