let numAleatorio = Math.round(Math.random() * 100) +1

let entrada = document.querySelector('#entrada')
let btnSubmit = document.querySelector('.submit')

let listaPalpites = document.querySelector('.listaPalpites')

var qtdPalpites = 0;

let resultado = document.querySelector('.resultado')

let distancia = document.querySelector('.distancia')



let ultimosPalpites = 'Palpites Anteriores';

let btnReTry = document.querySelector('.retry')

function verificar(){
    let tentativa = entrada.value

    ultimosPalpites += "  " + tentativa

    listaPalpites.innerHTML = ultimosPalpites

    if(tentativa == numAleatorio){

        if(resultado.classList.contains('erro')){
            resultado.classList.remove('erro')
        }
        resultado.classList.add('acerto')
        resultado.innerHTML = 'Parabéns! Seu número está correto!'
        distancia.innerHTML = ''
    }
    else if(tentativa < numAleatorio){
        resultado.classList.add('erro')
        resultado.innerHTML = 'Errado !'
        distancia.innerHTML = 'Seu palpite está muito baixo'

    }else if(tentativa > numAleatorio){
        resultado.classList.add('erro')
        resultado.innerHTML = 'Errado !'
        distancia.innerHTML = 'Seu palpite está muito alto'
        
    }

    qtdPalpites ++;
    entrada.value = null;

    if(qtdPalpites === 10 ){
        label = document.querySelector('.label')
        label.style.display = 'none'
        btnSubmit.style.display = 'none'

        entrada.style.display = 'none'
        alert('Acabaram as suas tentativas')
        btnReTry.style.display = 'inline'
    }
}

function reTry(){
    entrada.style.display = 'inline'
    btnReTry.style.display = 'none'
    resultado.style.display = 'none'
    qtdPalpites = 0;
}

btnSubmit.addEventListener('click', verificar)
btnReTry.addEventListener('click', reTry)



console.log(numAleatorio)
