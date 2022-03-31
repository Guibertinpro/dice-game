$(window).on('load', function() {

  let images = [
    "../img/die-1.svg",
    "../img/die-2.svg",
    "../img/die-3.svg",
    "../img/die-4.svg",
    "../img/die-5.svg",
    "../img/die-6.svg"
  ]

  // Set variables
  const btnNewGame = $('.content-new-game');
  const btnRollDie = $('.content-roll-die');
  const btnHold = $('.number-hold');

  // Player 1
  const numberPlayer1 = $('.number-player-1');
  const numberCurrentPlayer1 = $('.number-current-1');
  
  // Player 1
  const numberPlayer2 = $('.number-player-2');
  const numberCurrentPlayer2 = $('.number-current-2');

  // Function start new game
  const newGame = function() {
    numberPlayer1.text('0');
    numberCurrentPlayer1.text('0');
    numberPlayer2.text('0');
    numberCurrentPlayer2.text('0');
  }

  // Function roll die
  const rollDie = function() {
    numberPlayer1.text('0');
    numberCurrentPlayer1.text('0');
    numberPlayer2.text('0');
    numberCurrentPlayer2.text('0');
  }

  // Function hold
  const hold = function() {
    numberPlayer1.text('0');
    numberCurrentPlayer1.text('0');
    numberPlayer2.text('0');
    numberCurrentPlayer2.text('0');
  }


  
  // Start new game
  btnNewGame.click(newGame);
  
  // Roll the die
  btnRollDie.click(rollDie);

  // Hold
  btnHold.click(hold);

});


