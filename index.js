const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = [
    {
        icon: '♥',
        color: 'red',
    },
    {
        icon: '♣',
        color: 'black',
    },
    {
        icon: '♦',
        color: 'red',
    },
    {
        icon: '♠',
        color: 'black',
    }
];

function createCard(numbers, suits) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    let cardTopNumber = document.createElement('span');
    cardTopNumber.classList.add('number', 'top');

    let cardBottomNumber = document.createElement('span');
    cardBottomNumber.classList.add('number', 'bottom');
    
    let cardSuit = document.createElement('p');
    cardSuit.classList.add('suit');

    cardEl.appendChild(cardTopNumber);
    cardEl.appendChild(cardBottomNumber);
    cardEl.appendChild(cardSuit);
    container.appendChild(cardEl);

    if(suits.color === 'red'){
        cardEl.classList.add('red');
    };
    


    cardTopNumber.innerHTML = numbers[0];
}   

numbers.forEach(number => {
    suits.forEach(suit => {
        createCard(suit, number);
    });
});
