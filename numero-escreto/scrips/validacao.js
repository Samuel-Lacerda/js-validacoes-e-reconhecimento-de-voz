function verificaSeOChutePossuiValorValido(chute){
    if (chute == 'game over'){
        document.body.innerHTML = `
        <h1>Game Over!</h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.style.backgroundColor = '#EF5A6F'
    } else{
        const numero = parseInt(chute)

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor é inválido</div>`
    }

    if(numeroMaiorOuMenorQueOPermitido(numero)){

        elementoChute.innerHTML += `<div>Valor é inválido. O número está entre ${menorValor} e ${maiorValor} </div>`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numero}.</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if( numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
    }
    
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})