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
  allCells.forEach(cell=>{
    cell.innerText = "";
  });

  currentPlayer = '1';
  player1.classList.add('active');
  player2.classList.remove('active');
  game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

};

restartBtn.addEventListener("click",handleRestart);

const toggleRestartBtn = () => {
  // enable the restart btn
  restartBtn.disabled =false;
};

const win = function() {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
  if(currentPlayer == '1'){
    console.log(`The winner is: Player 1!`);
  } else{
    console.log(`The winner is: Player 2!`);
  }
};

const verifyWin = function(){
  // Use the game array to determine the winner.

  let newArray = game.slice('');
  let [a,b,c,d,e,f,g,h,i] = newArray;

  if(a==b && a==c || d==e && d==f ||g==h && g==i
    || a==d && a==g || b==e && d==h ||c==f && c==i
    || a==e && a==i || c==e && c==g ){

    console.log("win!");
    win;
  }
  else
  {
    console.log("not win yet");
  }

};

const togglePlayer = () => {
  // use .active to show active player visually...
  
  // Change player
  if(currentPlayer =='1'){
    currentPlayer ='2';
  }else{
    currentPlayer ='1';
  }

  player2.classList.toggle('active');
  player1.classList.toggle('active');
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    game[cellId] = icon;

    verifyWin();


  }

  togglePlayer();
};

board.addEventListener('click', handleClick);

toggleRestartBtn();
