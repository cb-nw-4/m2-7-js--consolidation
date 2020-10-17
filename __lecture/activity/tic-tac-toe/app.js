// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
let game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
  let allCells = document.querySelectorAll(".cell");
  allCells.forEach(cell => {
    cell.innerText = "";
  });
  currentPlayer = '1';
  player1.classList.add('active');
  player2.classList.remove('active');
};

restartBtn.addEventListener('click', handleRestart);

const toggleRestartBtn = () => {
  restartBtn.disabled = false;
};

const win = () => {
  alert("You win!");
};



const verifyWin = (num) => {
  let newArray = game.slice('');
  let [a, b, c, d, e, f, g, h, i] = newArray;


  if (a==b && a==c || d==e && d==f || g==h && g==i) {
    alert("You win!");
  } else if (a==d && a==g || b==e && d==h || c==f && c==i) {
    alert("You win!");
  } else if (a==e && a==i || c==e && c==g) {
    alert("You win!");
  // } else {
  //   alert("You lose!");
  }

  // Use the game array to determine the winner. 
  // let win = false;
  // if (document.getElementById(`cell-0`) === document.getElementById(`cell-1`) && document.getElementById(`cell-1`) === document.getElementById(`cell-2`)) {
  //   win = true;
  // } else if (document.getElementById(`cell-3`) === document.getElementById(`cell-4`) === document.getElementById(`cell-5`)) {
  //   win = true;
  // } else if (document.getElementById(`cell-6`) === document.getElementById(`cell-7`) === document.getElementById(`cell-8`)) {
  //   win = true;
  //  } else if (document.getElementById(`cell-0`) === document.getElementById(`cell-3`) === document.getElementById(`cell-6`)) {
  //   win = true;
  // } else if (document.getElementById(`cell-1`) === document.getElementById(`cell-4`) === document.getElementById(`cell-7`)) {
  //   win = true;
  //  } else if (document.getElementById(`cell-2`) === document.getElementById(`cell-5`) === document.getElementById(`cell-8`)) {
  //  win = true;
  // } else if (document.getElementById(`cell-0`) === document.getElementById(`cell-4`) === document.getElementById(`cell-8`)) {
  //   win = true;
  // } else if (document.getElementById(`cell-2`) === document.getElementById(`cell-4`) === document.getElementById(`cell-6`)) {
  //   win = true;
  // }
};

const togglePlayer = () => {
  currentPlayer = currentPlayer === "1" ? currentPlayer = "2" : currentPlayer = '1';
  player2.classList.toggle('active');  
  player1.classList.toggle('active');
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;
  togglePlayer();
  verifyWin();
  win();

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;

    // so much missing here...
  }
};

board.addEventListener('click', handleClick);
