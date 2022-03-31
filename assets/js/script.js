

// Set variables
let images = [
  "../img/die-1.svg",
  "../img/die-2.svg",
  "../img/die-3.svg",
  "../img/die-4.svg",
  "../img/die-5.svg",
  "../img/die-6.svg"
]
const btnNewGame = document.querySelector('.content-new-game');
const btnRollDie = document.querySelector('.content-roll-die');
const btnHold = document.querySelector('.number-hold');
const dieImg = document.querySelector('.die-img');


// Player 1
let textNumberPlayer1 = document.querySelector('.number-player-1');
let textNumberCurrentPlayer1 = document.querySelector('.number-current-1');

// Player 2
let textNumberPlayer2 = document.querySelector('.number-player-2');
let textNumberCurrentPlayer2 = document.querySelector('.number-current-2');

// Players
let players = document.querySelectorAll('.container-player');
let textNumberCurrentPlayer = document.querySelector('.active .number-current');

// Function start new game
const newGame = function() {
  textNumberPlayer1.innerHTML = "0";
  textNumberCurrentPlayer1.innerHTML = "0";
  textNumberPlayer2.innerHTML = "0";
  textNumberCurrentPlayer2.innerHTML = "0";
}

// Function roll die
const rollDie = function() {
  let currentPlayer = document.querySelector('.active');
  console.log(currentPlayer);
  if (currentPlayer) {
    let textNumberPlayer = document.querySelector('.active .number-player');
    let numberPlayer = textNumberPlayer.textContent;
    let newNumberPlayer = 0;
    dieValue = Math.floor(Math.random() * 6)
    dieImg.classList.add('roll');

    setTimeout(function() {
      dieImg.classList.remove('roll');
      dieImg.setAttribute("src", images[dieValue]);
      
      newNumberPlayer = parseInt(numberPlayer) + dieValue + 1;
      console.log(dieValue);
      if (dieValue == 0) {
        newNumberPlayer = 0;
        textNumberPlayer.innerHTML = "0";
        players.forEach(function(player) {
          if (player.classList.contains('active')) {
            player.classList.remove('active');
          } else {
            player.classList.add('active');
          }
          
        })
      } else {
        textNumberPlayer.innerHTML = newNumberPlayer;

        return newNumberPlayer;
      }
    }, 1100);
    
  }
  delete(currentPlayer);
}

// Function hold
const hold = function() {
  
}



// Start new game
btnNewGame.addEventListener('click', newGame);

// Roll the die
btnRollDie.addEventListener('click', rollDie);

// Hold
/* btnHold.addEventListener('click', hold); */



