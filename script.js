let userScore = 0;
let compScore = 0;
let userSelect;

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    userSelect = 'rock'
    switch (playRound(userSelect)) {
        case 'userWin':
            userScore++;
            break;
        case 'compWin':
            compScore++;
            break;
        case 'tie':
            break;
    }
    scoreDiv();
    checkWin();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    userSelect = 'paper'
    switch (playRound(userSelect)) {
        case 'userWin':
            userScore++;
            break;
        case 'compWin':
            compScore++;
            break;
        case 'tie':
            break;
    }
    scoreDiv();
    checkWin();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    userSelect = 'scissors'
    switch (playRound(userSelect)) {
        case 'userWin':
            userScore++;
            break;
        case 'compWin':
            compScore++;
            break;
        case 'tie':
            break;
    }
    scoreDiv();
    checkWin();
});

// for compSelect -- rock = 1, paper = 2, scissors = 3
function playRound(userSelect) {
    let compSelect = random();
    if (userSelect == 'rock') {
        if (compSelect == 1) {
            winDiv('Computer picked rock, it\'s a tie');
            return 'tie';
        } 
        if (compSelect == 2) {
            winDiv('Computer picked paper, computer wins');
            return 'compWin';
        } 
        if (compSelect == 3) {
            winDiv('Computer picked scissors, you win this round');
            return 'userWin';
        } 
    }
    if (userSelect == 'paper') {
        if (compSelect == 1) {
            winDiv('Computer picked rock, you win this round');
            return 'userWin';
        } 
        if (compSelect == 2) {
            winDiv('Computer picked paper, it\'s a tie');
            return 'tie';
        } 
        if (compSelect == 3) {
            winDiv('Computer picked scissors, computer wins this round');
            return 'compWin';
        } 
    }
    if (userSelect == 'scissors') {
        if (compSelect == 1) {
            winDiv('Computer picked rock, computer wins this round');
            return 'compWin';
        } 
        if (compSelect == 2) {
            winDiv('Computer picked paper, you win this round');
            return 'userWin';
        } 
        if (compSelect == 3) {
            winDiv('Computer picked scissors, it\'s a tie');
            return 'tie';
        } 
    }
} 

function random() {
    return Math.floor(Math.random()*3) + 1;
}

function winDiv(text) {
    document.getElementById('winner').textContent = text;
}

function scoreDiv() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('compScore').textContent = compScore;
}

function checkWin() {
    if (userScore>5 || compScore>5) {
        winDiv('You can keep playing with the random function, or reset the game to play again!')
    }
    else if (userScore==5) {
        winDiv('You won the game!');
    }
    else if (compScore==5) {
        winDiv('The computer won the game!');
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    scoreDiv();
    winDiv('First to 5 wins!');

}