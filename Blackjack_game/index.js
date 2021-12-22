let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let rupee = '\u20B9';

let player = {
    name: "Aksh",
    chips: 500
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": " + rupee + player.chips

// This function generates a random card between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    //if 1 -> return 11
    //if 10 -> return 10
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }   
    if(sum <= 20){
        message = "Do you want to draw a card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "you are out of game!"
        isAlive = false
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
