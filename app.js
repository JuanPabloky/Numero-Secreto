let listaDeNumeroSorteados = [];
let limiteMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'Numero secreto é menor');
        } else{
            exibirTextoNaTela('p','o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *limiteMaximo + 1);
    let quantidadeDeElementos = listaDeNumeroSorteados.length;
    if(quantidadeDeElementos == limiteMaximo) {
        listaDeNumeroSorteados = []
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}