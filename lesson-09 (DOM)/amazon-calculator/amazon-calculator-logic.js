let total = {

    cost: 0

}


function calculateTotal(n) {

    const num = document.querySelector(n);
    total.cost=0;
    num.value >= 40 ? total.cost = num.value : total.cost =  Number(num.value) + 10;
    document.querySelector('.total').innerHTML = `Totale: ${total.cost}`;
}

function handelCostKeydown(event){

    (event.code==='Enter') ? calculateTotal('.js-cost-input') : null;

}