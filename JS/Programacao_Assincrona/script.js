// setTimeout

console.log('ainda n executou');

setTimeout(function() {
    console.log('requisicao assincrona')
}, 2000); //depois de 2s ele executa

console.log('ainda n executou2');

// setinterval e um loop infinito fica executnado de tempos em tempos

/*console.log('ainda n executou');

setInterval(function() {
    console.log('requisicao assincrona')
}, 3000); //depois de 2s ele executa

console.log('ainda n executou2');*/

// promises 

const promessa = Promise.resolve(5 + 5);

console.log('algum codigo');

promessa
    .then((value) => {
    console.log(`a soma e ${value}`);
    return value;
})
    .then((value) => value - 1)
    .then((value) => console.log(`agora e ${value}`));

console.log('algum codigo');

Promise.resolve(4 * 'adads')
    .then((n) => {
        if(Number.isNaN(n)) {
            throw new Error('valores invalidos');
        }
    })
    .catch((err) => console.log(`um erro ocorreu ${err}`));

//rejeicao

function checkNumber(n) {
    return new Promise((resolve,reject) => {
        if(n > 10) {
            resolve(`o numero e maior q 10`);
        } else {
            reject(new Error("numero muito baixo"));
        }
    });
}

const a = checkNumber(200);
const b = checkNumber(10);

a.then((v) => console.log(`o resultado e ${v}`)).catch((err) => console.log(`um erro aconteceu ${err}`));
b.then((v) => console.log(`o resultado e ${v}`)).catch((err) => console.log(`um erro aconteceu ${err}`));


// resolvendo varias promises

const p1 = new Promise((resolve,reject) => {
    setTimeout((function() {
        resolve(10)
    }), 3000)
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve,reject) => {
    if(30 > 10) {
        resolve(30)
    } else {
        reject('erro')
    }
});

Promise.all([p1,p2,p3]).then((value) => console.log(value));

// async functions async await

async function somarDelay(a,b) {
    return a + b;
}

somarDelay(2,4).then((value) => {
    console.log(`o valor da soma e ${value}`);
});


function resolveDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolveu a promise');
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log('chamando a promise e esperando resultado');
    
    const result = await resolveDelay();

    console.log(`o resultado chegou ${result}`);
}

chamadaAsync();

// generators

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);