'use strict';

let randomNum = Math.trunc(Math.random()* 20 + 1);

function message(msg) {
    document.querySelector('.message').textContent = msg;
}

function scorer(score) {
    score--;
    document.querySelector('.score').textContent = score;
}

function disable(value) {
    document.querySelector('.guess').disabled = value;
    document.querySelector('.check').disabled = value;
}

function setBg(color) {
    document.querySelector('body').style.backgroundColor = color;
}

// When push 'check' button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);
    let highscore = Number(document.querySelector('.highscore').textContent);

    // When guess is wrong
    if (guess !== randomNum){
        if (!guess) {
            message('⛔ No number!');
        }
        else if (guess < 1 || guess > 20) {
            message('⛔ Not a valid number!');
        }
        else if (guess > randomNum) {
            message('📈 Too high...');
        }
        else if (guess < randomNum) {
            message('📉 Too low...');
        }
        scorer(score);
    }

    //When guess is right
    else  {
        message('🥳 You WON!!!');
        disable(true);
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('.number').style.width = '30rem';
        setBg('#60b347');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        };
    }

    //When score reaches 0
    if (score === 1 ) {
        message('😭 You LOST...');
        disable(true)
        setBg('#ff4f00');
    }
}) 

//When push 'again' button
document.querySelector('.again').addEventListener('click', function() {
    let score = 20;
    message('Start guessing...');
    disable(false);
    randomNum = Math.trunc(Math.random()* 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = undefined;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    setBg('#222');
});
