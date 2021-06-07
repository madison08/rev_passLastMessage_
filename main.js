let button = document.querySelector('button')
let input = document.querySelector('input')
let titlePass = document.querySelector('h3')

function passingMessage(){
    titlePass.textContent = input.value

    input.value = ''
}

button.addEventListener('click', passingMessage)

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        passingMessage()
    }
})
