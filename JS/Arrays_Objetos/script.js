// arrays

const list = [1,2,5,6];

console.log(list);
console.log(typeof list)

// propriedades

const numeros = [1,2,5,6];
console.log(numeros.length);

const name = 'ricardo'
console.log(name.length);

const arr = ['a','b','c','f','g'];
console.log(arr[0]);
console.log(arr[3]);

// metodos

const outrosNumeros = [1,2,5];

const allNumeros = numeros.concat(outrosNumeros);

console.log(allNumeros);

const text = 'algum texto';

console.log(text.toLocaleUpperCase());
console.log(text.indexOf('g'));

//objeto

const person = {
    name: 'jose',
    age: 31,
    job: 'programador',
};

console.log(person);
console.log(person.job);
console.log(person.name.length);

// criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: 'vw',
    model: 'tiguan',
    km: 20000,
}

console.log(car);

car.doors = 4;
console.log(car);

delete car.km
console.log(car);

// mais objetos

const obj = {
    a: 'teste',
    b: true,
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2,obj); // copia o q tem no obj pro obj2
console.log(obj2);

// conhecendo melhor objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2)); // mostra as propriedades do objetos

console.log(Object.entries(obj)); // mostra as propriedades do objetos e o valor em forma de array
console.log(Object.entries(obj2)); 

// mutacao referencia a o msm objeto toda alteracao vai pros 2

const a = {
    name: 'jose',
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);
console.log(a);

delete b.age;

console.log(b);
console.log(a);

// push e pop 

const array = ['a','b','c']
array.push('d'); //add no fim da lista pode ser mais de 1

console.log(array);

array.pop(); // remove no fim da lista e retorna o item removido

console.log(array);

const removido = array.pop();

console.log(removido);

// shift unshift 

const array1 = ['a','b','c']
const letra = array1.shift(); //remove no inicio da lista e retorna o item removido

console.log(letra);
console.log(array1);

array1.unshift('j'); // add no inicio da lista pode ser mais de 1

console.log(array1);

// indexof lastindexof


const array2 = ['a','d','c','d']

console.log(array2.indexOf('c')); // retorna o indice do elemento
console.log(array2.lastIndexOf('d')); //retorna -1 se n existir e utilizado se tem repeticao de elemento e retorna o indice do ultimo da repeticao


//slice 
//divide a lista no tamanho escolhido e o ultimo valor ele pega o anterior se quiser incluir ele e so somar +1

const teste = ['1','2','3','4','5','6','7','8','9','0']

const subarray = teste.slice(2,5);

console.log(teste);
console.log(subarray);


const subarray2 = teste.slice(2,5+1);
console.log(subarray2);

const subarray3 = teste.slice(2,20); //lista vazia se o intervalo n existe
console.log(subarray3);

const subarray4 = teste.slice(3); // pega todos elementos apartir da posicao indicada
console.log(subarray4);

// foreach

const num = [1,2,4,5,8,9,6]

num.forEach((numero) => {
    console.log(numero)
})

const posts = [
    {title: 'primeiro post', category: 'php'},
    {title: 'segundo post', category: 'js'},
    {title: 'terceiro post', category: 'java'}
]

posts.forEach((post) => {
    console.log(`titulo e ${post.title} e a categoria e ${post.category}`)
})


// includes  verifica se existe

const brands = ['bmw','wm','fiat'];

console.log(brands.includes('fiat'));

// reverse inverte o elementos da lista 

const num1 = [1,2,4,5,8,9,6]

console.log(num1)

num1.reverse();

console.log(num1)

//trim remove tudo q n e texto em uma string

const trimtest = ' testando \n  '

console.log(trimtest)
console.log(trimtest.length)
console.log(trimtest.trim())
console.log(trimtest.trim().length)


// padStart add no inicio da string
// padEnd add no fim da string

const testPad = '1';

const newnumber = testPad.padStart(4,'0'); //informa o tamanho da  nova string e vai adicionar o valo no inicio ate atingir o tamanho 

console.log(testPad);
console.log(newnumber);

const testPade = '1';

const newnumber1 = testPade.padEnd(4,'0'); //informa o tamanho da  nova string e vai adicionar o valo no fim ate atingir o tamanho 

console.log(testPade);
console.log(newnumber1);


// split divide em uma lista de acordo o q foi informado

const frase = 'o rato roeu a roupá do rei de roma'

const arrayfrase = frase.split(' ');

console.log(frase)
console.log(arrayfrase);

// join une um array em uma string de acordo o q foi informado

const frasenova = arrayfrase.join(' ');
console.log(frasenova);

// repeat repete o texto n vezes

const palavra = 'teste ';

console.log(palavra.repeat(3));


// rest operator para receber indefinidos parametros

const somainfinita = (...args) => {
    let total = 0

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

console.log(somainfinita(1,2,3));
console.log(somainfinita(1,2,3,5,9,78));

//for of

const somainfinita2 = (...args) => {
    let total = 0

    for(n of args) {
        total += n;
    }

    return total;
}

console.log(somainfinita2(1,2,3));
console.log(somainfinita2(1,2,3,5,9,78));


// destructuring em objetos

const user = {
    firstname: 'jose',
    lastname: 'joao',
    job: 'programador'
}

const {firstname,lastname,job} = user; //cria variaveis com elementos dos objetos

console.log(firstname,lastname,job);

//pode renomear

const {firstname: primeironome} = user;

console.log(primeironome);

// destructuring em arrays

const mylist = ['aviao','carro','trem'];

const [veiculoa,veiculob,veiculoc] = mylist;

console.log(veiculoa,veiculob,veiculoc);

//json

const myjson = '{"name": "jose", "age": 31, "skill": ["php","java"]}';

console.log(myjson);

// json pra objeto e objeto para json

const myObject = JSON.parse(myjson); // de json para objeto
console.log(myObject);

//json invalido 
const badjson = '{"name": jose}';

//const mybadjson = JSON.parse(badjson); // da erro

myObject.isOpenToWork = true;
console.log(myObject);

const mynewjson = JSON.stringify(myObject); // de objeto para json
console.log(mynewjson);

