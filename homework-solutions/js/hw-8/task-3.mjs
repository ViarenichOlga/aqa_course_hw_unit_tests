/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const expectedLength = numbers.length + 1;
  const expectedSum = (expectedLength * (expectedLength + 1)) / 2;
  return expectedSum - numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

}

export { findMissingNumber };
