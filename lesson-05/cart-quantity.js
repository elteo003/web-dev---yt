let quant = 0;

function showQuantity() {

    alert("Qunatity in cart : " + quant);

}

function addQuant(n) {

    if (n == 1) {

        quant++;

    }
    else {

        quant += n;


    }
}

function resetQuant() {
    quant = 0;
}