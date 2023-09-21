const memoryCards = document.querySelectorAll('.card');

function flipCard() {
    console.log('I was clicked')
}

memoryCards.forEach(card => card.addEventListener('click', flipCard))