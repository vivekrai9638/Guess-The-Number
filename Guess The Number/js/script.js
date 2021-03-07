'use strict';
let score = 50;
let number = Math.trunc(Math.random() * 40) + 1;
const message = document.querySelector('.message').innerHTML;
const wrapperStyle = document.querySelector('.wrapper').style;
const messageStyle = document.querySelector('.message').style;
const secretNumber = document.querySelector('.number').textContent;
const secretNumberStyle = document.querySelector('.number').style;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (number === guess) {
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style = 'background:rgba(0,0,0,.4);z-index:10;';
        sessionStorage.setItem('high-score', score);
        document.querySelector('.high-score').innerHTML = `<strong>Highest Score:</strong> ${score}`;
        document.querySelector('.wrapper').style.background = 'rgba(0,255,0,0.2)';
        document.querySelector('.message').textContent = '🎉 Correct Number';
    }
    else if (number > guess) {
        document.querySelector('.wrapper').style.background = 'rgba(255,0,0,0.2)';
        score -= 5;
        document.querySelector('.message').textContent = '📉 Too Low !';
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
    else if (number < guess) {
        document.querySelector('.wrapper').style.background = 'rgba(255,0,0,0.2)';
        document.querySelector('.message').textContent = '📈 Too High !';
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
});

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


});