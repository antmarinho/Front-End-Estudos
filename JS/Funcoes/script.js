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

// filter 

const arr = [1,2,3,4,5,6];

const highNumbers = arr.filter((n) => {
    if(n > 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    {name: "mateus", available: true},
    {name: "jose", available: false},
    {name: "maria", available: true},
    {name: "joao", available: true},
    {name: "ana", available: false},
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// MAP

const products = [
    {name:'camisa', price: 10.5, category : 'roupas'},
    {name:'geladeira', price: 1000.5, category : 'eletro'},
    {name:'fogao', price: 100.5, category : 'eletro'},
    {name:'calca jeans', price: 50.5, category : 'roupas'},
]

products.map((product) => {
    if(product.category === 'roupas') {
        product.onSale = true;
    }
});

console.log(products);

// destructuring

const fruits = ['maca','mamao','laranja'];

const [f1,f2,f3] = fruits;

console.log(f1,f3);

const productDetails = {
    name: 'mouse',
    price: 30,
    category: 'periferico',
    color: 'cinza',
};

const {name: productName, price, category, color} = productDetails;

console.log(`o nome do produto e ${productName}`);

// spread operator serve pra juntar

const a1 = [1,2,3];
const a2 = [3,5,6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = {name: 'gol'};
const carBrand = {brand: 'vw'};
const otherInfos = {km: 10000, price: 450000};

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car);