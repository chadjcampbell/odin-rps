const rps = ['rock', 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;

// first to 5 wins
function playGame() {
    while (true) {
        if (userScore >= 5) {
            alert('You won the game!');
            break;
        }
        if (compScore >= 5) {
            alert('You lost the game!');
            break;
        }
        switch (playRound()) {
            case 'userWin':
                userScore++;
                break;
            case 'compWin':
                compScore++;
                break;
            case 'tie':
                break;
        }
    }
}

// for compSelect -- rock = 1, paper = 2, scissors = 3
function playRound() {
    let userSelect = prompt('Rock, Paper, or Scissors?');
    userSelect = userSelect.toLowerCase();
    if (!(rps.includes(userSelect))) {
            alert('Please make a valid selection');
            playRound();
        }
    let compSelect = random();
    if (userSelect == 'rock') {
        if (compSelect == 1) {
            alert('Computer picked rock, it\'s a tie')
            return 'tie';
        } 
        if (compSelect == 2) {
            alert('Computer picked paper, computer wins')
            return 'compWin';
        } 
        if (compSelect == 3) {
            alert('Computer picked scissors, you win')
            return 'userWin';
        } 
    }
    if (userSelect == 'paper') {
        if (compSelect == 1) {
            alert('Computer picked rock, you win')
            return 'userWin';
        } 
        if (compSelect == 2) {
            alert('Computer picked paper, it\'s a tie')
            return 'tie';
        } 
        if (compSelect == 3) {
            alert('Computer picked scissors, computer wins')
            return 'compWin';
        } 
    }
    if (userSelect == 'scissors') {
        if (compSelect == 1) {
            alert('Computer picked rock, computer wins')
            return 'compWin';
        } 
        if (compSelect == 2) {
            alert('Computer picked paper, you win')
            return 'userWin';
        } 
        if (compSelect == 3) {
            alert('Computer picked scissors, it\'s a tie')
            return 'tie';
        } 
    }
} 

function random() {
    return Math.floor(Math.random()*3) + 1;
}

playGame();