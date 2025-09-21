document.querySelector('.btn-calculate').addEventListener('click', function() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const total = input1 + input2; // Modifica secondo la tua logica
    document.querySelector('.total-price').textContent = `Totale: ${total}`;
});