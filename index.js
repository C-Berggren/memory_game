const memoryCards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        console.log({hasFlippedCard, firstCard});
    }
}

memoryCards.forEach(card => card.addEventListener('click', flipCard))