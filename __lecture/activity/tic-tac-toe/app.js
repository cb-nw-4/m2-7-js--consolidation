// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
};

const toggleRestartBtn = () => {
  // enable the restart btn
};

const win = () => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
};

const verifyWin = () => {
  // Use the game array to determine the winner.
};

const togglePlayer = () => {
  // use .active to show active player visually...
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;

    // so much missing here...
  }
};

board.addEventListener('click', handleClick);
