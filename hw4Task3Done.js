
/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;
let age = '17';


if (typeof(age) != "number" && typeof(age) != "string" || isNaN(age)){
    console.log("Incorrect data type")
}
else if (Number(age) < Number(minAge)){
    console.log(`You don't have access cause your age is ${age} It's less then ${minAge}`)
}
else if ((Number(age) >= Number(minAge)) && (Number(age) < Number(maxAge))){
    console.log("Welcome  !")
}
else if (Number(age) > Number(maxAge)){
    console.log("Keep calm and look Culture channel")
}
else{
    console.log("Technical work")
};
