// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2





let objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const func1 = () => {
for(let propriedade in objeto){
  console.log(objeto[propriedade].toUpperCase())
}
}
func1(objeto)

const func2 = (teste) => {
  const arrayDoObjeto = []
  for(let propriedade in objeto){
    arrayDoObjeto.push(objeto[propriedade])
  }
  return arrayDoObjeto.join()
  }
  console.log(func2(objeto))


  // atividade3 

  const func3 = (func1, func2) => {
    for(let propriedade in objeto){
      console.log(objeto[propriedade].toUpperCase())
    }
    let resultadoFinal = func2(func1)
    return resultadoFinal
  }

  console.log(func3(func1, func2))