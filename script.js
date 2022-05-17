'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // For no input
  if (!guess) {
    displayMessage('No Number!');
  }

  // For when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    } else {
      displayMessage('You Lost! Try Again?');
      document.querySelector('.score').textContent = 0;
    }
  }

  // For when guess is correct / Player wins
  else {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  // Reset secret number and score
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Reset messages and input
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
