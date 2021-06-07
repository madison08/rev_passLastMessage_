'use strict'

let button = document.querySelector('button')
let input = document.querySelector('input')
let titlePass = document.querySelector('h3')

function passingMessage(){

    if(input.value){
        titlePass.textContent = input.value
    }else{
        titlePass.textContent = 'Erreur'
        titlePass.classList.add('show')
        
        sleep(2000)

        titlePass.textContent = ''
    }



    input.value = ''
}

button.addEventListener('click', passingMessage)

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        passingMessage()
    }
})
