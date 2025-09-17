function pickaMove() {

    let um = Math.random();

    let uMove = "";


    uMove = (um < 0.5 ? "Head" : "tails");

    alert("Result: " + uMove);
}