'use strict'

//1- const
//2- let
//3- var

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const calcular = document.getElementById('calcular')
const situacao = document.getElementById('resultado')
const formulario = document.getElementById('formulario')


function somar (){
    //situacao.value = (Number (nota1.value) + Number (nota2.value))
    //formulario.classList.add('sombraVermelha')
}
function situacao (){
    media = (Number (nota1) + Number (nota2)) /2;

    if(media >= 6){
        situacao.value = 'Aprovado'
        formulario.classList.add('sombraAzul')

    }else(media < 6){
        situacao.value = 'Reprovado'
        formulario.classList.add('sombraVermelha')    
    }
    
}

   

calcular.addEventListener('click', somar)

