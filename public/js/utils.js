export function moneyMask(inputElement) {
    inputElement.addEventListener('input', function(e) {
        let valorMascarado = this.value;
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


