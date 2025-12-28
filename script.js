let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let thirdCard = 1

let message = ""


function start(){
    render_game()
}


function render_game() {
    if (sum <= 20) {
        message = "Do you want to draw a new card"
        document.getElementById("q-heading").textContent = message
        document.getElementById("sum-p").textContent = "Sum: " + sum
        document.getElementById("cards-p").textContent = "Cards: " + firstCard + " and " + secondCard
    } else if (sum === 21) {
        message = "Wohoo!, you've got BlackJAck"
        hasBlackJack = true
        document.getElementById("q-heading").textContent = message
        document.getElementById("sum-p").textContent = "Sum: " + sum
        document.getElementById("cards-p").textContent = "Cards: " + firstCard + " and " + secondCard


    } else {
        message = "You're out of the game"
        isAlive = false
        document.getElementById("q-heading").textContent = message
        document.getElementById("sum-p").textContent = "Sum: " + sum
        document.getElementById("cards-p").textContent = "Cards: " + firstCard + " and " + secondCard



    }

    console.log("Has BlackJAck: " + hasBlackJack)
    console.log("is Alive: " + isAlive)
    console.log(message)
}



function new_card() {
    sum += thirdCard
   render_game()


    console.log("New card drawn")
}

