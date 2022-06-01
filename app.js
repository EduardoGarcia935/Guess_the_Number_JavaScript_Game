let numAleatorio = Math.round(Math.random() * 100) +1
var qtdPalpites = 0;
let entrada = document.querySelector('#entrada')
let btnSubmit = document.querySelector('.submit')
let listaPalpites = document.querySelector('.listaPalpites')
let resultado = document.querySelector('.resultado')
let distancia = document.querySelector('.distancia')
let label = document.querySelector('.label')




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
        resultado.style.visibility = 'visible'
        btnReTry.style.display = 'inline'
    }
    else if(tentativa < numAleatorio){
        resultado.classList.add('erro')
        resultado.innerHTML = 'Errado !'
        distancia.innerHTML = 'Seu palpite está muito baixo'
        resultado.style.visibility = 'visible'

    }else if(tentativa > numAleatorio){
        resultado.classList.add('erro')
        resultado.innerHTML = 'Errado !'
        distancia.innerHTML = 'Seu palpite está muito alto'
        resultado.style.visibility = 'visible'
    }

    qtdPalpites ++;
    entrada.value = null;

    if(qtdPalpites === 10 ){
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
    label.style.display = 'inline'
    btnSubmit.style.display = 'inline'
    resultado.style.visibility = 'hidden'
    qtdPalpites = 0;
    ultimosPalpites = ""
    distancia.innerHTML = ""
    listaPalpites.innerHTML = null
    numAleatorio = Math.round(Math.random() * 100) +1
}

btnSubmit.addEventListener('click', verificar)
btnReTry.addEventListener('click', reTry)
