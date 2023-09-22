const memoryCards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');
    // first click
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        // match card
        console.log(firstCard.dataset.animal)
        console.log(secondCard.dataset.animal)
    }
}

memoryCards.forEach(card => card.addEventListener('click', flipCard))