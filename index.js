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

        // check if cards match
        if (firstCard.dataset.animal === secondCard.dataset.animal) {
            // if cards match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            // not a match
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }, 1500);
        }
    }
}

memoryCards.forEach(card => card.addEventListener('click', flipCard))