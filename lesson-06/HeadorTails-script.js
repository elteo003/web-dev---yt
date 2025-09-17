function setStatus(n) {

    let win;
    let tie;
    let pcm = Math.random();
    let pcMove = "";

    pcMove = (pcm < 0.5 ? "Head" : "Tail");


    n === pcMove ? alert("You had selected: " + n + " and u have won;") : alert("You lose, gay");


}
