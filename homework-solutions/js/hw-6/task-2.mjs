/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  */
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull = null;
let lowercompetitorPizzas = competitorPizzas.join().toLowerCase().split(',');

for (const pizza of myPizzasT1) {
  if (!lowercompetitorPizzas.includes(pizza.toLowerCase())) {
    resultUnique.push(pizza);
  }
}
console.log(resultUnique ? resultUnique : resultNull);

for (const pizzas of myPizzasT2) {
  if (!lowercompetitorPizzas.includes(pizzas.toLowerCase())) {
    resultUnique.push(pizzas);
  }
}
console.log(!resultUnique ? resultUnique : resultNull);

export { resultNull, resultUnique };
