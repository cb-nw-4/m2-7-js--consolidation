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
  restartBtn.addEventListener('click',()=> { 
    location.reload();
  })
};
const toggleRestartBtn = () => {
  // enable the restart btn
  restartBtn.removeAttribute("disabled");
};
const win = () => {
  // stop board from being clickable
  board.removeEventListener('click', handleClick);
  // print the winner to the screen
  endMessageDiv.innerText=`Winner is Player ${winner}`; 
  // activate the restart btn
  toggleRestartBtn();
};
let winner = "";
const verifyWin = () => {
  // Use the game array to determine the winner.
  if (game[0] === game[1] && game[1] === game[2]){ 
    if(game[0]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  if (game[3] === game[4] && game[4] === game[5]){
    if(game[3]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  if (game[6] === game[7] && game[7] === game[8]){
    if(game[6]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  //vertical
  if (game[0] === game[3] && game[3] === game[6]){
    if(game[0]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  if (game[1] === game[4] && game[4] === game[7]){
    if(game[1]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  if (game[2] === game[5] && game[5] === game[8]){
    if(game[2]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  //diagonal
  if (game[0] === game[4] && game[4] === game[8]){
    if(game[0]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
  if (game[2] === game[4] && game[4] === game[6]){
    if(game[2]==="X") { winner="Player 1"} else { winner="Player 2" };
    return win();
  }
};
const togglePlayer = () => {
  console.log(COUNTER);
  if(COUNTER %2===0) {
    currentPlayer = '2';
    player2.classList.add('active');
    player1.classList.remove('active');
  } else { 
    currentPlayer = '1';
    player1.classList.add('active');
    player2.classList.remove('active');
  }; 
  COUNTER ++; 
};
const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;
  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;
    console.log(cell,"currentPlayer",currentPlayer, icon,currentCellDiv, "HERE");
    game[cellId] = icon;
    togglePlayer();
    verifyWin();
    // so much missing here...
  }
};
board.addEventListener('click', handleClick);


