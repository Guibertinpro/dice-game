// Set variables
let images = [
  "../img/die-1.svg",
  "../img/die-2.svg",
  "../img/die-3.svg",
  "../img/die-4.svg",
  "../img/die-5.svg",
  "../img/die-6.svg"
]

const btnsNewGame = document.querySelectorAll('.content-new-game');
const btnRollDie = document.querySelector('.content-roll-die');
const btnHold = document.querySelector('.content-hold');
const dieImg = document.querySelector('.die-img');
let players = document.querySelectorAll('.container-player');
let player1 = document.querySelector('.container-player-1');
let player2 = document.querySelector('.container-player-2');
const winnerModal = document.querySelector('.winner-modal');
const winner = document.querySelector('.winner');
const overlay = document.querySelector('.overlay');
// Initialize the current player
let currentPlayer = document.querySelector('.active');

// Function start new game
const newGame = function(currentPlayer) {
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

  // Hide modal winner if game finished
  winnerModal.classList.remove('show');
  overlay.classList.remove('show');

  // Initialize current player to player 1
  if(currentPlayer != player1) {
    player1.classList.add('active');
    player2.classList.remove('active');
  }
  
}

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
        let currentCount = parseInt(document.querySelector('.active .number-current').textContent);
        let totalCount = currentCount + newNumberPlayer;
        console.log('total ' + totalCount);
        if(totalCount > 10){
          // Insert the winner
          winner.innerHTML = document.querySelector('.active .text-player').textContent;
          // Show the winner modal
          winnerModal.classList.add('show');
          overlay.classList.add('show');
          // Show the new round number
          textNumberPlayer.innerHTML = newNumberPlayer;
        } else {
          // Show the new round number
          textNumberPlayer.innerHTML = newNumberPlayer;
        }

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
    let textCurrentNumberOfCurrentPlayer = document.querySelector('.active .number-current');
    let textRoundNumberPlayer = document.querySelector('.active .number-player');
    let numberToHold = textRoundNumberPlayer.textContent;
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

  }
  delete(currentPlayer);
}


// Start new game
btnsNewGame.forEach(function(btn) {
  btn.addEventListener('click', newGame);
});

// Roll the die
btnRollDie.addEventListener('click', rollDie);

// Hold
btnHold.addEventListener('click', hold);





