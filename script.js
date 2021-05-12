'use strict';

let secertNumber = Math.trunc(Math.random() * 20) + 1; //Generate a random number between 1,20


let score = 20; //To reduce score by 1
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //Event listener method, when click event triggered on button, function gets executed.

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Empty value.

  if (!guess) {
    //document.querySelector('.message').//textContent = 'Blocked operation';
    displayMessage('Blocked operation');
  }

  //Correct choice
  else if (guess === secertNumber) {
    //document.querySelector('.message').textContent = 'Yeayy you won';
    displayMessage('Yeayy you won');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secertNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

else if(guess!==secertNumber){
  if (score > 1) {
   // document.querySelector('.message').textContent = guess>secertNumber ? 'Too high' : 'Too low';
   displayMessage(guess>secertNumber ? 'Too high' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    //document.querySelector('.message').textContent = 'You lost';
    displayMessage('You lost');
    document.querySelector('.score').textContent = 0;
  }
}
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});

