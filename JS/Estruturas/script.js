// variaveis

let nome = 'jose';
console.log(nome)

nome = 'jose joao'
console.log(nome)

const idade = 31 //constante n muda de valor
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

// pegar valor do usuario

const age = prompt('digite sua idade')
console.log(`sua idade e ${age}`)

// alert

alert('testando')

const z = 10
alert(`o numero e ${z}`)

// math

console.log(Math.max(5,4,1,10))
console.log(Math.floor(5.41))
console.log(Math.ceil(5.4))

// console

console.warn('aviso')
console.error('erro')

//if else

const m = 10

if(m > 5) {
    console.log('m e maior q 5')
}

const n = 2

if(n > 5) {
    console.log('n e maior q 5')
} else {
    console.log('n e menor q 5')
}

if(1 > 2) {
    console.log('teste')
} else if(2 > 3) {
    console.log('teste')
} else if(5 > 1) {
    console.log('teste')
}

// while do while e for

let i = 0

while(i < 5) {
    console.log(i)
    i++
}

let j = 10

do {
    console.log(j)
    j--
} while (j > 1);

for (let i = 0; i < 8; i++) {
    console.log(i)
}

i = 5

while(i <= 5) {
    console.log(i)
    i--

    if(i === 2) { //pra sair do loop
        console.log('i e = 2')
        break
    }
}

k = 1

for (let i = 0; i < 6; i++) {
   
    if(i === 2) {
        continue
    }

    console.log(i)

}

// switch

const job = 'advogado'

switch (job) {

    case 'programador':
        console.log('vc e um programador')    
        break;

    case 'advogado':
        console.log('vc e um advogado')    
        break;

    default:
        console.log('profisso nao foi encontrado')
}