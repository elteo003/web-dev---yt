
let score = {

    win: 0,
    loss: 0,
    tie: 0

}

let message = {

    m: ""

}

let status = {

    u: "",
    pc: ""

}



function game(n) {

    

    let pcm = Math.random();

    let pcMove = (pcm >= 0 && pcm < 1 / 3) ? 'rock' : ((pcm >= 1 / 3 && pcm < 2 / 3) ? 'paper' : 'scissors');

    console.log(pcMove);

    ((n === "rock" && pcMove === "scissors") || (n === "scissors" && pcMove === "paper") || (n === "paper" && pcMove === "rock")) ? (score.win++, status.u = n, status.pc = pcMove, message.m = "You win") : ((n === "scissors" && pcMove === "rock") || (n === "paper") && pcMove === "scissors" || (n === "rock" && pcMove === "paper")) ? (score.loss++, status.u = n, status.pc = pcMove, message.m = "You lose") : (score.tie++, status.u = n, status.pc = pcMove, message.m = "oh oh oh");

    document.querySelector('.congrats-message').innerHTML = message.m;

    document.querySelector('.status-message').innerHTML = `Your move: <img src="img/${status.u}-emoji.png" class="icon"> - PC move: <img src="img/${status.pc}-emoji.png" class="icon">`;

    document.querySelector('.js-score').innerHTML = `You win: ${score.win} times, You loses: ${score.loss} times, tie ${score.tie}`;

}

function reset() {

    score.win = 0;
    score.loss = 0;
    score.tie = 0;

    document.querySelector('.js-score').innerHTML = `You win: ${score.win} times, You loses: ${score.loss} times, tie ${score.tie}`;

    document.querySelector('.congrats-message').innerHTML = "";

    document.querySelector('.status-message').innerHTML = ``;

}

function changButtonStyle() {

    document.getElementById("reset").classList.toggle("green");

}


function changeButtonStatus(id) {
    const btn = document.getElementById(id);
    const textSpan = btn.querySelector("span:last-child"); // prende il testo, non l’icona



    if (btn.classList.contains("green")) {
        // se è verde, torna rosso

        textSpan.innerText = "RESET";

    } else {
        // se è rosso, diventa verde

        textSpan.innerText = "RESETTED";

    }
    changButtonStyle();
}


