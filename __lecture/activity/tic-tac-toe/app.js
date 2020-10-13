// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 5, 5, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0; // track game progress

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');

const handleRestart = () => {
  // reload the page
  // feels like cheating but it WILL reset the game
  restartBtn.removeEventListener('click', handleRestart);
  location.reload();
};

const toggleRestartBtn = () => {
  // enable the restart btn
  restartBtn.disabled = false;
  restartBtn.addEventListener('click', handleRestart);
};

const win = (theWinner) => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
  board.removeEventListener('click', handleClick);
  endMessageDiv.innerText = `The winner is: Player ${theWinner}`;
  toggleRestartBtn();
};

const verifyWin = () => {
  let theWinner = '';
  gameWon = false;

  // winner by row
  if (game[0] === game[1] && game[0] === game[2]) {
    gameWon = true;
    theWinner = game[0];
  }

  if (game[3] === game[4] && game[3] === game[5]) {
    gameWon = true;
    theWinner = game[3];
  }

  if (game[6] === game[7] && game[6] === game[8]) {
    gameWon = true;
    theWinner = game[6];
  }

  // winner by column
  if (game[0] === game[3] && game[0] === game[6]) {
    gameWon = true;
    theWinner = game[0];
  }

  if (game[1] === game[4] && game[1] === game[7]) {
    gameWon = true;
    theWinner = game[1];
  }

  if (game[2] === game[5] && game[2] === game[8]) {
    gameWon = true;
    theWinner = game[2];
  }

  // winner by diagonal
  if (game[0] === game[4] && game[0] === game[8]) {
    gameWon = true;
    theWinner = game[0];
  }

  if (game[2] === game[4] && game[2] === game[6]) {
    gameWon = true;
    theWinner = game[0];
  }

  return [gameWon, theWinner];
};

const togglePlayer = () => {
  if (currentPlayer === '1') {
    currentPlayer = '2';
    player1.classList.remove('active');
    player2.classList.add('active');
  } else {
    currentPlayer = '1';
    player2.classList.remove('active');
    player1.classList.add('active');
  }
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    game[cellId] = currentPlayer;
    gameResult = verifyWin();

    if (gameResult[0]) {
      win(gameResult[1]);
    } else {
      togglePlayer();
    }
  }
};

board.addEventListener('click', handleClick);
