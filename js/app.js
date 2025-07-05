function comprar() {
    let tipo =  document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value, 10);

    // Validação de entrada
    if(isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent, 10);
    if(qtd > qtdPista) {
        alert('Quantidade indisponível para tipo Pista');
    } else {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent, 10);
    if(qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo Superior');
    } else {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent, 10);
    if(qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo Inferior');
    } else {
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}