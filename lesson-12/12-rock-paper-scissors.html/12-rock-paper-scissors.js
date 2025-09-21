let score={

    win: 0,
    loss: 0,
    tie : 0

}

document.querySelector(".score").innerHTML = `Wins: ${score.win} Lose: ${score.loss} Tie: ${score.tie}`;



function changeStatus(n){

    const btn = document.querySelector(n);

    btn.classList.toggle("btn-red");

    if(btn.innerText === "RESET"){

        btn.innerText  = "RESETTED";

    }else{

         btn.innerText  = "RESET";

    }

}