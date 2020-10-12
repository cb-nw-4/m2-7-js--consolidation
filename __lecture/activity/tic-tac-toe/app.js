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
  location.reload();
};

const toggleRestartBtn = () => {
  restartBtn.disabled = false;  
};

const win = () => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
  board.removeEventListener('click', handleClick);
  toggleRestartBtn();  
  endMessageDiv.innerText = "The winner is player " + currentPlayer;
};

const verifyWin = () => {
  // Use the game array to determine the winner.   
  let win = false; 
  if (game[0] === game[1] && game[1] === game[2]) 
    win = true;        
    
  if (game[3] === game[4] && game[4] === game[5]) 
    win = true; 

  if (game[6] === game[7] && game[7] === game[8]) 
    win = true; 
 
  if (game[0] === game[3] && game[3] === game[6]) 
    win = true; 

  if (game[1] === game[4] && game[4] === game[7]) 
    win = true;          
  
  if (game[2] === game[5] && game[5] === game[8]) 
    win = true;    
 
  if (game[0] === game[4] && game[4] === game[8]) 
    win = true;  
  
  if (game[2] === game[4] && game[4] === game[6]) 
    win = true;
 
  return win;  
};

const togglePlayer = () => {
 
   currentPlayer = currentPlayer === "1" ? currentPlayer = "2" :currentPlayer = '1';
player1.classList.toggle('active');
player2.classList.toggle('active');

  // use .active to show active player visually...
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    game[cellId] = icon;
    COUNTER += 1;    
    let isWinner = verifyWin();
    if(COUNTER <= 9 && isWinner) {
        win();
    }
    else if (COUNTER === 9) {
      toggleRestartBtn();  
      endMessageDiv.innerText = "You lose! ";
    }     
    // so much missing here...
  }
  togglePlayer();
};

board.addEventListener('click', handleClick);
restartBtn.addEventListener('click', handleRestart);