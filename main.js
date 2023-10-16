// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)

let tries = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickEnterReset)

// Funções
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(inputNumber.value == "") {
        alert("Can't be empty!")
        
    } else if(inputNumber.value < 0 || inputNumber.value > 10) {
        alert("Number must be positive between 0 and 10")

        inputNumber.value = ""
    } else {
        if(Number(inputNumber.value) == randomNumber) {
            toggleScreen()
    
            screen2.querySelector("h2").innerText = `Guessed right in ${tries} tries!`
        }
    
        inputNumber.value = ""
    
        tries++
    }




}

function handleResetClick() {
    toggleScreen()

    randomNumber = Math.round(Math.random() * 10)

    tries = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function clickEnterReset(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
