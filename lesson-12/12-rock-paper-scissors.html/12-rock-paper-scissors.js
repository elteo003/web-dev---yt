let score = {

    win: 0,
    loss: 0,
    tie: 0

}

let isAutoPlay = false;
let intervalId = 0;



function changeStatus(n) {

    const btn = document.querySelector(n);

    // Cambio subito stato
    btn.classList.add("btn-red");
    btn.innerText = "RESETTED";


    score.win = 0;
    score.loss = 0;
    score.tie = 0;

    document.querySelector(".score").innerHTML = "";
    document.querySelector(".selection").innerHTML = "";
    document.querySelector(".result").innerHTML = "";

    setTimeout(() => {
        btn.classList.remove("btn-red");
        btn.innerText = "RESET";
    }, 1000); // 2000 ms = 2 secondi
}

/* pensiamo a cosa dovrebbe fare il gioco
  
    user clicca un bottone ->  la funzione playGame("mossa_dello_user") genera la mossa del computer e genera il risultato della partita

    -> aggiorna il punteggio
    -> aggiorna l'html
    -> mostra il risultato della partita
    -> mostra la mossa del computer
    -> mostra la mossa dell'user

*/

function playGame(userMove) {

    // genero la mossa del computerMove

    // con la funzione Math.random() genero un numero casuale tra 0 e 1

    // con la scorciatoia dell' if -> confronto le soluzioni e genero il risultato della partita

    const n = Math.random();

    let computerMove = "";

    computerMove = (n < 0.33 ? "rock" : n < 0.66 ? "paper" : "scissors");

    if (userMove === "rock" && computerMove === "scissors" || userMove === "paper" && computerMove === "rock" || userMove === "scissors" && computerMove === "paper") {

        score.win += 1;
        document.querySelector(".result").innerHTML = `YOU WIN`;


    } else if (userMove === "rock" && computerMove === "paper" || userMove === "scissors" && computerMove === "rock" || userMove === "paper" && computerMove === "scissors") {

        score.loss += 1;
        document.querySelector(".result").innerHTML = `YOU LOSE`;

    } else {

        score.tie += 1;
        document.querySelector(".result").innerHTML = `NOTHIN TO DO`;

    }

    document.querySelector(".score").innerHTML = `Wins: ${score.win} Lose: ${score.loss} Tie: ${score.tie}`;
    document.querySelector(".selection").innerHTML = `You picked <img class="move-icon" src="../../images/${userMove}-emoji.png"> The pc picked <img class="move-icon" src="../../images/${computerMove}-emoji.png">`;


}


function autoPlay() {
    const btn = document.querySelector("#autoplay");

    if (!isAutoPlay) {
        intervalId = setInterval(() => {
            let n = Math.random();
            if (n < 0.33) {
                playGame("rock");
            } else if (n < 0.66) {
                playGame("paper");
            } else {
                playGame("scissors");
            }
        }, 1000);

        isAutoPlay = true;

        // 🔹 Attivo animazione
        btn.querySelector(".text").innerText = "PLAYING";
        btn.classList.add("playing");

    } else {
        isAutoPlay = false;
        clearInterval(intervalId);

        // 🔹 Disattivo animazione
        btn.classList.remove("playing");
        btn.querySelector(".text").innerText = "AUTOPLAY";
    }
}

