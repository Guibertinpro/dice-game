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
const btnHold = document.querySelector('.content-hold');
const dieImg = document.querySelector('.die-img');
let players = document.querySelectorAll('.container-player');
const winnerModal = document.querySelector('.winner-modal');
const winner = document.querySelector('.winner');


// Function start new game
const newGame = function() {
  // Set variables of numbers
  let textNumberPlayer1 = document.querySelector('.number-player-1');
  let textNumberPlayer2 = document.querySelector('.number-player-2');
  let textNumberCurrentPlayer1 = document.querySelector('.number-current-1');
  let textNumberCurrentPlayer2 = document.querySelector('.number-current-2');

  // Set all numbers to 0
  textNumberPlayer1.innerHTML = "0";
  textNumberCurrentPlayer1.innerHTML = "0";
  textNumberPlayer2.innerHTML = "0";
  textNumberCurrentPlayer2.innerHTML = "0";
}

// Initialize the current player
let currentPlayer = document.querySelector('.active');


// Function roll die
const rollDie = function(currentPlayer) {
  
  // Get the actual round number
  let textNumberPlayer = document.querySelector('.active .number-player');
  let numberPlayer = textNumberPlayer.textContent;
  // Initialize the new round number
  let newNumberPlayer = 0;
  // Random a number
  dieValue = Math.floor(Math.random() * 6)
  // Roll the die image
  dieImg.classList.add('roll');
  
  // Actions if we are in the current player
  if (currentPlayer) {
    
    // Actions after 1.1s
    setTimeout(function() {
      // Stop roll
      dieImg.classList.remove('roll');
      // Show the corresponding image
      dieImg.setAttribute("src", images[dieValue]);
      // Set the new round number
      newNumberPlayer = parseInt(numberPlayer) + dieValue + 1;
      
      // Actions if new round number = 0
      if (dieValue == 0) {

        // Set the new round number to 0
        newNumberPlayer = 0;
        textNumberPlayer.innerHTML = "0";

        // Change the current player
        players.forEach(function(player) {
          if (player.classList.contains('active')) {
            player.classList.remove('active');
          } else {
            player.classList.add('active');
          }
          
        })
      } else {
        // Show the new round number
        textNumberPlayer.innerHTML = newNumberPlayer;

      }
    }, 1100);
    
  }
  delete(currentPlayer);

}

// Function hold
const hold = function(currentPlayer) {

  // Initialize the new current number
  let newCurrentNumber = 0;

  // Actions if we are in the current player
  if (currentPlayer) {
    // Get the actual round and current numbers
    let textRoundNumberPlayer = document.querySelector('.active .number-player');
    let numberToHold = textRoundNumberPlayer.textContent;
    let textCurrentNumberOfCurrentPlayer = document.querySelector('.active .number-current');
    let currentNumber = textCurrentNumberOfCurrentPlayer.textContent;

    // Set the new current number
    newCurrentNumber = parseInt(numberToHold) + parseInt(currentNumber);
    textCurrentNumberOfCurrentPlayer.innerHTML = newCurrentNumber;
    
    // Set the new round number to 0
    newNumberPlayer = 0;
    textRoundNumberPlayer.innerHTML = "0";

    // Change the current player
    players.forEach(function(player) {
      if (player.classList.contains('active')) {
        player.classList.remove('active');
      } else {
        player.classList.add('active');
      }
      
    })

    if(newCurrentNumber > 10){
      winner.innerHTML = document.querySelector('.active .text-player').textContent;
      winnerModal.classList.toggle('hide');
    }
  }
  delete(currentPlayer);
}


// Start new game
btnNewGame.addEventListener('click', newGame);

// Roll the die
btnRollDie.addEventListener('click', rollDie);

// Hold
btnHold.addEventListener('click', hold);



