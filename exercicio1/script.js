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
  
  const func1 = (teste) => {
    let maiusculo = `${objeto.nome}\n${objeto.profissao}\n${objeto.username}\n${objeto.senha}`
    return maiusculo.toUpperCase()
  }
  
  console.log(func1(objeto))

  const func2 = (teste) => {
    let corrido = `${objeto.nome}${objeto.profissao}${objeto.username}${objeto.senha}`
    return corrido.toUpperCase()
  }
  
  console.log(func2(objeto))

  const atividade3 = (objeto, func1)=>{

  }