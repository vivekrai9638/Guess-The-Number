'use strict';
let score = 50;
let number = Math.trunc(Math.random() * 40) + 1;
// console.log(number);
const message = document.querySelector('.message').innerHTML;
const wrapperStyle = document.querySelector('.wrapper').style;
const messageStyle = document.querySelector('.message').style;
const secretNumber = document.querySelector('.number').textContent;
const secretNumberStyle = document.querySelector('.number').style;
sessionStorage.setItem('high-score', 0);


// Event Listener on check-btn
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    if (number === guess) {
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style = 'background:rgba(0,0,0,.4);z-index:10;';
        if (score > sessionStorage.getItem('high-score')) {
            sessionStorage.setItem('high-score', score);
        }
        document.querySelector('.high-score').innerHTML = `<strong>Highest Score:</strong> ${sessionStorage.getItem('high-score')}`;
        document.querySelector('.wrapper').style.background = 'rgba(0,255,0,0.2)';
        document.querySelector('.message').textContent = '🎉 Correct Number';
    }
    else if (guess < number) {
        lowGuess();
        if (guess <= number - 10) {
            document.querySelector('.message').textContent = '📉 Too Low !';
        } else if (guess <= number - 3 && guess > number - 10) document.querySelector('.message').textContent = "😁 Not Bad, You're Getting closer!";
        else document.querySelector('.message').textContent = "😯 Woahh! You're damn Close.";
    }
    else if (guess > number) {
        highGuess();
        if (guess >= number + 10) {
            document.querySelector('.message').textContent = '📉 Too High !';
        } else if (guess >= number + 3 && guess < number + 10) document.querySelector('.message').textContent = "😁 Not Bad, You're Getting closer!";
        else document.querySelector('.message').textContent = "😯 Woahh! You're damn Close.";
    }

    // console.log(score);
});


// Event Listener on tryAgain-btn
document.querySelector('.try').addEventListener('click', function () {
    score = 50;
    if (sessionStorage.getItem('high-score') == null) {
        document.querySelector('.high-score').innerHTML = `<strong>Highest Score:</strong> 0`;
    }
    else {
        document.querySelector('.high-score').innerHTML = `<strong>Highest Score:</strong> ${sessionStorage.getItem('high-score')}`;
    }
    document.querySelector('.wrapper').style = wrapperStyle;
    document.querySelector('.message').style = messageStyle;
    document.querySelector('.message').innerHTML = message;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style = secretNumberStyle;
    document.querySelector('.score').innerHTML = `<strong>Score:</strong> ${score}`;
    number = Math.trunc(Math.random() * 40) + 1;
    document.querySelector('.guess').value = '';
    console.log(number);


});

// If guess is high
function highGuess() {
    document.querySelector('.wrapper').style.background = 'rgba(255,0,0,0.2)';
    score -= 5;
    if (score > 0) {
        document.querySelector('.score').innerHTML = `<strong>Score:</strong> ${score}`;
    }
    else {
        document.querySelector('.number').textContent = number;
        document.querySelector('.score').innerHTML = `<strong>Score:</strong> 0`;
        document.querySelector('.message').textContent = ' 🎇 You Lost the Game !';
        document.querySelector('.message').style.background = 'rgba(255,0,0,0.2)';
        document.querySelector('.wrapper').style = wrapperStyle;
    }
}

// If guess is low
function lowGuess() {
    document.querySelector('.wrapper').style.background = 'rgba(255,0,0,0.2)';
    score -= 5;
    if (score > 0) {
        document.querySelector('.score').innerHTML = `<strong>Score:</strong> ${score}`;
    }
    else {
        document.querySelector('.number').textContent = number;
        document.querySelector('.score').innerHTML = `<strong>Score:</strong> 0`;
        document.querySelector('.message').textContent = ' 🎇 You Lost the Game !';
        document.querySelector('.message').style.background = 'rgba(255,0,0,0.2)';
        document.querySelector('.wrapper').style = wrapperStyle;
    }
}

