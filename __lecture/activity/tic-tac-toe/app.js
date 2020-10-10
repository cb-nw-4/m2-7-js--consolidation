// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');
//restartBtn.addEventListener('click', handleRestart);

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
  location.reload();

};

const toggleRestartBtn = () => {
  // enable the restart btn
  restartBtn.removeAttribute('disabled');
  restartBtn.addEventListener('click', handleRestart);
};

const win = () => {
  // stop board from being clickable
  board.style.pointerEvents="none";

  // print the winner to the screen
  endMessageDiv.innerText=`Player ${currentPlayer} has won`;//needs work
  // activate the restart btn
  toggleRestartBtn();
};

const verifyWin = () => {
  // Use the game array to determine the winner.
  if(game[0]===game[1] && game[1]===game[2]||
  game[3]===game[4] && game[4]===game[5]||
  game[6]===game[7] && game[7]===game[8]||
  
  game[0]===game[3] && game[3]===game[6]||
  game[1]===game[4] && game[4]===game[7]||
  game[2]===game[5] && game[5]===game[8]||

  game[0]===game[4] && game[4]===game[8]||
  game[2]===game[4] && game[4]===game[6]){
    win();
  } 
};

const togglePlayer = () => {
  // use .active to show active player visually...
  if(currentPlayer==='1'){
    currentPlayer='2';
    player1.classList.remove('active')
    player2.classList.add('active')

  }
  else{
    currentPlayer='1';
    player2.classList.remove('active')
    player1.classList.add('active')
  }
};

const handleClick = (event) => {
  const cell = event.target.id;
  console.log(cell);
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  console.log(cellId);

  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;
  togglePlayer();
  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    game[cellId]=icon;
    console.log(game);
    // so much missing here...
  }
  else{
    verifyWin();
  }
  
};

board.addEventListener('click', handleClick);
