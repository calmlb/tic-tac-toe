//*------constants-----*//

const gameBoard = [
    {topL, topM, topR},
    {midL, midM, midR},
    {bottomL, bottomM, bottomR},
]

const players = {
    '1': {
        name: '',
        score: 0
    }
    '-1': {
        name: '',
        score: 0
    }
};

const winningCombos = {
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
};

//*------app state-----*//

let board, turn, winner;

//*------cached elements-----*//

document.getElementByClass('data-cell-1');
document.getElementByClass('data-cell-2');
document.getElementByClass('data-cell-3');
document.getElementByClass('data-cell-4');
document.getElementByClass('data-cell-5');
document.getElementByClass('data-cell-6');
document.getElementByClass('data-cell-7');
document.getElementByClass('data-cell-8');
document.getElementByClass('data-cell-9');

let cell1 = document.getElementByClass('data-cell-1');
let cell2 = document.getElementByClass('data-cell-2');
let cell3 = document.getElementByClass('data-cell-3');
let cell4 = document.getElementByClass('data-cell-4');
let cell5 = document.getElementByClass('data-cell-5');
let cell6 = document.getElementByClass('data-cell-6');
let cell7 = document.getElementByClass('data-cell-7');
let cell8 = document.getElementByClass('data-cell-8');
let cell9 = document.getElementByClass('data-cell-9');

let display = document.getElementById('game-over');
let playerTurn = document.getElementById('player-turn');
let restart = document.getElementById('restart');

//*------event listeners-----*//

restart.addEventListener('click', init);
    /* add listeners here */ }
//listen for click
cell1.addEventListener('click', function(event) {
        cell1.event.target.innerHTML = (players)
}
(class=“gameBoard” element)

// gameBoard.forEach(i = 0, i < gameBoard.length, i++){
//Need to store player choice in cell
//check cell for existing letter
//if letter, return try again -- if no letter, add letter from player click and switch turns
//run winlogic



//*------functions-----*//

initialize();

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}

function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

//winner logic
    //determine possible winning sequences
    //compare the board to possible winning sequences after every turn 
    //on winner, display, "PlayerXY is the winner!" and update score