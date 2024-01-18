//movendo pelo dom

console.log(document.body);

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// selecionando elementos por tag

const listaItens = document.getElementsByTagName('li');

console.log(listaItens);

// selecionando elementos por id

const title = document.getElementById("title");

console.log(title);

// selecionando elementos por classe

const produto = document.getElementsByClassName("product");

console.log(produto);

// selecionando elementos por css

const produtoCss = document.querySelectorAll(".product");

console.log(produtoCss);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// insertbefora cria um elemento antes de um outrp

const p = document.createElement("p");

//acesando o pai do titulo q e o header
const header = title.parentElement;

//vai inserir no header o paragrafo p antes do titulo
header.insertBefore(p,title);

//appendchild adicionar um elementro dentro do outro

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replacchild usado pra trocar um elemento

const h2 = document.createElement("h2");
h2.textContent = "meu novo titulo"; // adiciona o texto

header.replaceChild(h2,title);

// createtextnode

const myText = document.createTextNode("agora vamos colocar mais um titulo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// criando e editando atributos

const firstLink = navLinks.querySelector("a"); //pega primeiro elemento

firstLink.setAttribute("href", "https://google.com.br");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target","_blank");

// altura e largura dos elementos

const footer = document.querySelector("footer");

//tamanho com a borda
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

//tamanho sem a borda
console.log(footer.clientHeight);
console.log(footer.clientWidth);

// posicao do elemento

const product1 = produto[0];

console.log(product1.getBoundingClientRect());

// css com js

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "50px";

// alterando estilo com varios elementos

for(const li of listaItens) {
    li.style.backgroundColor = "red";
}