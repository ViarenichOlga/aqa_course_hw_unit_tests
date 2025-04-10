/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  const { name, age } = character;
  if (typeof name === 'string' && typeof age === 'number') {
    characters.push(character);
    return character;
  } else {
    throw new Error('Error! Invalid input');
  }
}

function getCharacter(name) {
  let character = characters.find((character) => character.name === name);
  return character;
}

function getCharactersByAge(minAge) {
  if (typeof minAge === 'number') {
    let resultCharacters = characters.filter((character) => character.age >= minAge);
    return resultCharacters;
  } else {
    throw new Error('Error! Invalid input');
  }
}

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);

  if (character) {
    Object.assign(character, newCharacter);
  } else {
    throw new Error('Error! Invalid input');
  }
}

function removeCharacter(name) {
  const index = characters.findIndex((character) => character.name === name);

  if (index !== -1) {
    const index = characters.findIndex((character) => character.name === name);
  }
  if (index !== -1) {
    characters.splice(index, 1);
    return characters.length;
  } else {
    throw new Error('Error! Invalid input');
  }
}
  

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
