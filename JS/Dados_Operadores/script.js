//number

console.log(typeof 2);
console.log(typeof 2.5);
console.log(typeof -2);

// operacoes

console.log(2+4)
console.log(2-4)
console.log(2/4)
console.log(2*4)

// especial number

console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(12 * 'ffff')
console.log(typeof NaN)

//string

console.log(typeof "teste")
console.log(typeof 'teste')
console.log(typeof `teste`)

console.log("teste \n quebrou linha")
console.log("espacamento \t de tab")

console.log("oi" + " tudo" + " bem")

//template string entre crase ``

console.log(`a soma de 2 + 2 e ${2+2}`)

// booelan

console.log(true)
console.log(5 > 20)
console.log(30 > 20)

//comparacoes 

console.log(5 <= 5)
console.log(5 < 5)
console.log(10 == 10)
console.log(10 == 9)
console.log(10 != 9)

//comparacao de identico

console.log(9 == '9') // da true pq o valor e igual desconsidera o tipo
console.log(9 === '9') //da falso pq ele considera o tipo e o valor

console.log(9 != '9') //da falso pq ele considera o valor e nao o tipo diferente
console.log(9 !== '9') //o valor e igual mas o tipo e diferente da true


//operadores logicos

console.log(5 > 2 && 2 < 10)
console.log(5 > 1 && 'asjaisas' === 1)
console.log(5 > 1 || 'asjaisas' === 1)
console.log(5 < 1 || 5 > 10)
console.log(!true)
console.log(!5 < 1)

//empty values

console.log(typeof null, typeof undefined)
console.log(null === undefined) //tipo diferente valor igual falso
console.log(null == undefined) //aqui so considera o valor como e igual e true

//mudanca de tipo

console.log(5 * null)
console.log('teste' * 'ae')
console.log('10' - 9)
console.log('10' + 1)
