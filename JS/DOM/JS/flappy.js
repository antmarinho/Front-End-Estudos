function novoElemento(tagName,className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div','barreira');

    const borda = novoElemento('div','borda');
    const corpo = novoElemento('div','corpo');

    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

function parBarreira(altura,abertura,x) {
    this.elemento = novoElemento('div','par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura- abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}

function Barreiras(altura,largura,abertura,espaco,notificarPonto) {
    this.pares = [
        new parBarreira(altura,abertura,largura),
        new parBarreira(altura,abertura,largura + espaco),
        new parBarreira(altura,abertura,largura + espaco * 2),
        new parBarreira(altura,abertura,largura + espaco * 3)
    ]

    const deslocamento = 3;

    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            //quando elemento sair da area do jogo

            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length);
                par.sortearAbertura();
            }

            const meio = largura/2;
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio;

            if(cruzouMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voand = false;

    this.elemento = novoElemento('img','passaro');
    this.elemento.src = "imgs/passaro.png";

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMax = alturaJogo - this.elemento.clientHeight;

        if(novoY <= 0) {
            this.setY(0);
        } else if (novoY >= alturaMax) {
            this.setY(alturaMax);
        } else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo/2);
}

function Progresso() {
    this.elemento = novoElemento('span','progresso');
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }

    this.atualizarPontos(0);
}

function colisao(elementoA,elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

    return horizontal && vertical
}

function colidiu(passaro,barreiras) {
    let colidiu = false;

    barreiras.pares.forEach(parBarreira => {
        if(!colidiu) {
            const superior = parBarreira.superior.elemento;
            const inferior = parBarreira.inferior.elemento;
            colidiu = colisao(passaro.elemento,superior) || colisao(passaro.elemento,inferior);
        }
    })

    return colidiu;
}

function FlappyBird() {
    let pontos = 0;

    const areaJogo = document.querySelector('[wm-flappy]');
    const altura = areaJogo.clientHeight;
    const largura = areaJogo.clientWidth;

    const progresso = new Progresso();
    const barreiras = new Barreiras(altura,largura,200,400, () => progresso.atualizarPontos(++pontos));
    const passaro = new Passaro(altura);

    areaJogo.appendChild(progresso.elemento);
    areaJogo.appendChild(passaro.elemento);
    barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento));

    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar();
            passaro.animar();

            if(colidiu(passaro,barreiras)) {
                clearInterval(temporizador);
            }
        },20);
    }
}

new FlappyBird().start();

//const barreiras = new Barreiras(700,1200,250,400);
//const passaro = new Passaro(700);
//const areaJogo = document.querySelector('[wm-flappy]');

//areaJogo.appendChild(passaro.elemento);
//areaJogo.appendChild(new Progresso().elemento);
//barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento));

//setInterval(() => {
   // barreiras.animar();
   // passaro.animar();
//}, 20);



//testes

//const b = new parBarreira(700,250,400);
//document.querySelector('[wm-flappy]').appendChild(b.elemento);

//const b = new Barreira(true);
//b.setAltura(200);
//document.querySelector('[wm-flappy]').appendChild(b.elemento);