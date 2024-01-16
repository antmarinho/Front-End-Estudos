// strict

"use strict" //deixa mais rigido o codigo pra evitar erros 

opa = 'teste' //js permite declarar variavel sem o tipo com strict ele n deixa

const op = 'teste' //vai ter q ser asssim o certo com strict.

//debugger

let c = 1
let d = 2

if(c == 1) {
    c = d + 2
}

debugger

for (let i = 0; i < d; i++) {
    c = c + 2;
}

debugger

//tratamento de dados

function checkNumber(a) {
    const result = Number(a);

    if(Number.isNaN(result)) {
        console.log('valor incorreto');
        return;
    }

    console.log('valor corrento');
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber('teste');

// exception

let x = 10;

if(x != 11) {
    throw new Error('valor de x n pode ser diferente de 11');
}

// try catch finally

try {
    const soma = x + y;
} catch (error) {
    console.log(`erro no programa ${error}`);
} finally { // executa sempre msm se de erro ou n
    console.log('o codigo foi executado')
}
