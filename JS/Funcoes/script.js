// crinado uma funcao

function minhaFuncao() {
    console.log('testando')
};

minhaFuncao();

const minhaFuncaoVariavel = function() {
    console.log('funcao em variavel');
};

minhaFuncaoVariavel();

function funcaoParametro(txt) {
    console.log(`imprimindo ${txt}`)
};

funcaoParametro('teste funcao parametro');

// return

const a = 10;
const b = 20;
const c = 30;

function soma(n1,n2) {
    return n1 + n2;
};

const resultado = soma(a,b);

console.log(resultado);
console.log(soma(c,b));

// escopo da funcao

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`y dentro da funcao e ${y}`);
};

testandoEscopo();

console.log(`y fora da funcao e ${y}`);

testandoEscopo();

// escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;

    if(true) {
        let m = 30
        if(true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }

    console.log(m)

}

escopoAninhado();

console.log(m);

// arrow function

const testArrow = () => {
    console.log('esta e uma arrwo function')
}

testArrow();

const parOuImpa = (n) => {
    if(n%2 === 0) {
        console.log('par');
        return;
    }
    
    console.log('impar');
};

parOuImpa(5);
parOuImpa(10);

const potenciaQuadrada = (x) => {
    return x * x;
}

console.log(potenciaQuadrada(4));

const potenciaQuadrada2 = (x) => x * x;

console.log(potenciaQuadrada2(5));

const helloworld = () => console.log('hello world');

helloworld();

// paramentro opcional

const multiplicacao = function(m,n) {
    if(n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplicacao(5));
console.log(multiplicacao(2,4));

const greeting = (name) => {
    if(!name) {
        console.log('ola');
        return;
    }

    console.log(`ola ${name}`);
}

greeting();
greeting('jose');

// valor default

const customGreeting = (name, greet = 'ola') => {
    return `${greet}, ${name}`
}

console.log(customGreeting('jose'));
console.log(customGreeting('jose','bom dia'));

const repeatText = (text, repeat = 2) => {

    for (let i = 0; i < repeat; i++) {
        
        console.log(text);
        
    }    
}

repeatText('testando');
repeatText('agora repete 5x',5);

// closure

function someFunction() {
    let txt = 'alguma coisa'

    function display() {
        console.log(txt)
    }

    display();
}

someFunction();

const multiplicacaoClosure = (n) => { //variavel como funcao
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicacaoClosure(5);
const c2 = multiplicacaoClosure(10);

console.log(5); //aqui salva primeira variavel
console.log(10);

console.log(c1(5)); // segunda variavel e da o resultado
console.log(c2(10));

// recursao

const untilTen = (n,m) => {
    if(n < 10) {
        console.log('a funcao parou');
    } else {
        const x = n - m ;

        console.log(x);

        untilTen(x,m);
    }
}

untilTen(100,7);

function fatorial(x) {
    if(x === 0) {
        return 1
    } else {
        return x * fatorial(x-1);
    }
}

const result = fatorial(6);

console.log(result);