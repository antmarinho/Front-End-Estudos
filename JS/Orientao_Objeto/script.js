//metodos

const animal = {
    nome: 'bob',
    latir: function() {
        console.log('au au');
    }
}

animal.latir();

const pessoa = {
    nome: 'jose',

    getNome: function() {
        return this.nome;
    },

    setNome: function(novonome) {
        this.nome = novonome;
    }
}

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome('joao');
console.log(pessoa.getNome());

// prototype 

const text = 'ddd';

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const myobject = {
    a: 'b',
}

const mysecondobject = Object.create(myobject);

console.log(mysecondobject);
console.log(mysecondobject.a);

// clssses

const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'pastor alemao';

console.log(pastorAlemao);

const bulldog = Object.create(cachorro);

bulldog.raca = 'bulldog';

// funcao como classe funcao contrutora

function criarCachorro(nome,raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro('bob','vira lata');

console.log(bob);

// funcao construtora 

function Cachorro(nome,raca) { //letra maiscula e uma classe
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro('ozzy','husk');

console.log(husky);

Cachorro.prototype.uivar = function() {
    console.log('auuuuuuuu');
};

husky.uivar();

// classes 

class CachorroClasse {

    constructor(nome,raca) {
        this.nome = nome;
        this.raca = raca;

    }
}

const jeff = new CachorroClasse('jeff','labrador');

console.log(Object.getPrototypeOf(jeff));

class Caminhao {

    constructor(eixos,cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`este caminhao tem ${this.eixos} eixos e e da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, 'vermelho');
console.log(scania);

scania.descreverCaminhao();

// symbol // constante dentro de classe n pode ser modificado

class Aviao {
    constructor(marca,turbinas){
        this.marca = marca;
        this.turbinas= turbinas;
    }      
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boeing = new Aviao('boeind',10);

console.log(boeing);

console.log(boeing[asas]);

// get e set

class Post {
    constructor(titulo,descricao,tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `vc esta lendo ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(', ');
        this.tags = tagsArrays;
    }
}

const myPost = new Post('algum post','e um post sobre programacao');

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = 'programacao, js, js';

console.log(myPost.tags);

// heranca 

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas,nome) {
        super(patas,patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4,'shark');

console.log(shark);

// instanceof verifica se e filho de alguma classe

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

