let firstCard = 6
let secondCard = 3

let sum = firstCard + secondCard

if(sum <= 20) {
    console.log("Do you want to draw a new card")
} else if(sum === 21) {
    console.log("Wohoo!, you've got BlackJAck")
} else {
    console.log("You're out of the game")
}