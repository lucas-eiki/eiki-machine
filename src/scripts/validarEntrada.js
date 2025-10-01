function validarEntrada(inputValue, inputBase) {

    if(inputValue === '') {
        alert('Insira um valor')
        return false;
    } else if(inputValue < 0) {
        alert('Insira um valor positivo')
        return false;
    }

    var validChars = '';

    if (inputBase === 'decimal') {
        validChars = '0123456789';
    } else if (inputBase === 'hexadecimal') {
        validChars = '0123456789ABCDEFabcdef';
    } else if (inputBase === 'octal') {
        validChars = '01234567';
    } else if (inputBase === 'binario') {
        validChars = '01';
    }

    for (var i = 0; i < inputValue.length; i++) {
        if (validChars.indexOf(inputValue[i]) === -1) {
            alert('Por favor, insira um número válido para a base selecionada.')
            return false;
        }
    }
    return true;
}

export {validarEntrada}