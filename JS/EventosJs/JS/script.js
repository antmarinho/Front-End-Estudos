// adicionand eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("clicou aqui");
});

// removendo eventos

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log('teste');
}

secondBtn.addEventListener("click",imprimirMensagem);

const terBtn = document.querySelector("#other-btn");

terBtn.addEventListener("click", () => {
    console.log('evento removido');

    secondBtn.removeEventListener("click",imprimirMensagem);
})

// argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// propagacao

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log('evento 1')
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log('evento 2')
});

// removendo evento padrao

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('nao alterou a pagina');
});

// eventos de tecla
//keyup ativa quando solta a tecla
//keydown quando pressionado

document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`);
})

document.addEventListener("keydown", (e) => {
    console.log(`apertou a tecla ${e.key}`);
})

//eventos dfe mouse

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("pressionou o botao");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botao");
})


mouseEvents.addEventListener("dblclick", () => {
    console.log("duplo click");
})

/*// movimento do mouse

document.addEventListener("mousemove", (e) => {
    console.log(`no eixo x ${e.x}`);
    console.log(`no eixo y ${e.y}`);
})*/

// evento scroll 

window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log('passou de 200px');
    }
})

// evento de foco 

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => { 
    console.log('entrou no input');
})

input.addEventListener("blur", (e) => {
    console.log('saiu no input');
})

// evento de carregamento

window.addEventListener("load", () => {
    console.log('a pagina carregou')
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
})

//debounce para evtar q evento dispare muita vezes

const debounce = (f,delay) => {
    let timeout;

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log('executando a cada 400ms');
},400 ));