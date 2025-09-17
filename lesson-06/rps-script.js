let userMove = '';
let win = false;
let tie = false;
let pcMove = '';
let nWin = 0;
let nLoss = 0;



function defUserMove(m) {

    if (m === "Rock") {

        userMove = "Rock";

    } else if (m === "Paper") {


        userMove = "Paper";

    } else if (m === "Scissors") {

        userMove = "Scissors";

    }
}


function computerMove() {

    let n = Math.random();

    if (n >= 0 && n < 1 / 3) {

        pcMove = "Rock";

    } else if (n >= 1 / 3 && n < 2 / 3) {

        pcMove = "Paper";

    } else if (n >= 2 / 3 && n <= 1) {

        pcMove = "Scissors";

    }
}

function defWinner() {

    resetPlay();

    if ((userMove === "Rock" && pcMove === "Scissors") || (userMove === "Paper" && pcMove === "Rock") || (userMove === "Scissors" && pcMove === "Paper")) {

        win = true;
        nWin++;

    } else if ((userMove === "Rock" && pcMove === "Paper") || (userMove === "Paper" && pcMove === "Scissors") || (userMove === "Scissors" && pcMove === "Rock")) {

        win = false;
        nLoss++;

    } else {

        tie = true;

    }
}


function whoIsTheWinner() {

    if (tie) {

        alert("No one won, retry");
        console.log("User:", userMove, "PC:", pcMove);

    } else if (win) {

        alert("You have won, score: " + nWin);
        console.log("User:", userMove, "PC:", pcMove);
        console.log(nWin);


    } else {

        alert("You have lose, you total loss: " + nLoss);
        console.log("User:", userMove, "PC:", pcMove);
        console.log(nLoss);
    }
}


function resetPlay() {

    tie = false;
    win = false;

}

function resetGame() {

    nLoss = 0;
    nWin = 0;

}
