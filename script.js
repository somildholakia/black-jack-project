let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let newCard = getRandomCard()
let cardsEl = document.getElementById("cards-p")

let message = ""


// let randomNumber = Math.floor(Math.random() * 9)





function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber == 1) {
        return 11
    } else if (randomNumber == 11 || randomNumber == 12 || randomNumber == 13) {
        return 10
    } else {
        return randomNumber
    }
}

function start() {
    render_game()
}


function render_game() {

    cardsEl.textContent = "Cards: "



    if (sum <= 20) {
        message = "Do you want to draw a new card"
        document.getElementById("q-heading").textContent = message
        document.getElementById("sum-p").textContent = "Sum: " + sum
        // document.getElementById("cards-p").textContent = "Cards: " + cards[0] + " and " + cards[1]
    } else if (sum === 21) {
        message = "Wohoo!, you've got BlackJAck"
        hasBlackJack = true
        document.getElementById("q-heading").textContent = message
        document.getElementById("sum-p").textContent = "Sum: " + sum
        // document.getElementById("cards-p").textContent = "Cards: " + firstCard + " and " + secondCard


    } else {
        message = "You're out of the game"
        isAlive = false
        document.getElementById("q-heading").textContent = message
        document.getElementById("sum-p").textContent = "Sum: " + sum
        // document.getElementById("cards-p").textContent = "Cards: " + firstCard + " and " + secondCard



    }


    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])

        cardsEl.textContent += cards[i] + " "
    }


}



function new_card() {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    render_game()
}

