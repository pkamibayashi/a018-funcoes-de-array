// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

let numeros = [1,2,3,4,5,6,7,8]

const func1 = numeros.map((number1) =>{
  return number1*3
})
console.log (func1)

const func2 = numeros.map((number2) =>{
  const metades = number2/2
  return metades
})

console.log(func2)