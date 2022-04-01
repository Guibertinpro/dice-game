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
const newGame = (currentPlayer) => {
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

  winner.innerHTML = "";
  
}

// Function roll die
const rollDie = (currentPlayer) => {
  
  // Get the actual round number
  let textROUND = document.querySelector('.active .number-player');
  let ROUND = textROUND.textContent;
  // Initialize the new round number
  let newROUND = 0;
  // Random a number
  dieValue = Math.floor(Math.random() * 6)
  // Roll the die image
  dieImg.classList.add('roll');
  
  // Actions if we are in the current player
  if (currentPlayer) {
    
    // Actions after 1.1s
    setTimeout( () => {
      // Stop roll
      dieImg.classList.remove('roll');
      // Show the corresponding image
      dieImg.setAttribute("src", images[dieValue]);
      // Set the new round number
      newROUND = parseInt(ROUND) + dieValue + 1;
      
      // Actions if new round number = 0
      if (dieValue == 0) {

        // Set the new round number to 0
        newROUND = 0;
        textROUND.innerHTML = "0";

        // Change the current player
        players.forEach( (player) => {
          if (player.classList.contains('active')) {
            player.classList.remove('active');
          } else {
            player.classList.add('active');
          }
          
        })
      } else {
        let currentCount = parseInt(document.querySelector('.active .number-current').textContent);
        let totalCount = currentCount + newROUND;
        
        if(totalCount > 100){
          // Insert the winner
          winner.innerHTML = document.querySelector('.active .text-player').textContent;
          // Show the winner modal
          winnerModal.classList.add('show');
          overlay.classList.add('show');
          // Show the new round number
          textROUND.innerHTML = newROUND;
        } else {
          // Show the new round number
          textROUND.innerHTML = newROUND;
        }

      }
    }, 1100);
    
  }
  delete(currentPlayer);

}

// Function hold
const hold = (currentPlayer) => {

  // Initialize the new current number
  let newGLOBAL = 0;

  // Actions if we are in the current player
  if (currentPlayer) {
    // Get the actual round and current numbers
    let textGLOBAL = document.querySelector('.active .number-current');
    let textActiveROUND = document.querySelector('.active .number-player');
    let holdROUND = textActiveROUND.textContent;
    let GLOBAL = textGLOBAL.textContent;

    // Set the new current number
    newGLOBAL = parseInt(holdROUND) + parseInt(GLOBAL);
    textGLOBAL.innerHTML = newGLOBAL;
    
    // Set the new round number to 0
    newROUND = 0;
    textActiveROUND.innerHTML = "0";

    // Change the current player
    players.forEach((player) => {
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
btnsNewGame.forEach((btn) => {
  btn.addEventListener('click', newGame);
});

// Roll the die
btnRollDie.addEventListener('click', rollDie);

// Hold
btnHold.addEventListener('click', hold);





