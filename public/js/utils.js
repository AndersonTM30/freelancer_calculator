export function moneyMask(inputElement) {
    inputElement.addEventListener('input', function(e) {
        let valorMascarado = this.value;
        if(valorMascarado.trim() === '') {
            valorMascarado = '0,00';
        }
        valorMascarado = valorMascarado.replace(/\D/g, "");
        valorMascarado = parseFloat(valorMascarado);
        valorMascarado = String(valorMascarado)
        while(valorMascarado.length < 3) {
            valorMascarado = "0" + valorMascarado;
        }
        if(valorMascarado.length >=2) {
            valorMascarado = valorMascarado.replace(/(\d+)(\d{2})$/, "$1,$2");
            valorMascarado = valorMascarado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            
        }
        this.value = valorMascarado;
        this.setSelectionRange(this.value.length, this.value.length);
    });
}

export function showModal(message) {
    let modal = document.querySelector('#modal');
    modal.classList.remove('hidden_modal')
    modal.classList.add('modal')
    document.querySelector('.message').innerHTML = `<span>${message}</span>`;
}

export function hideModal(e) {
    e.preventDefault();
    let modal = document.querySelector('.modal');
    modal.classList.remove('modal');
    modal.classList.add('hidden_modal');
}
