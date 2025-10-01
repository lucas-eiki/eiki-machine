function converter() {
    var inputValue = document.getElementById('inputValue').value;
    var inputBase = document.getElementById('inputBase').value;

    if (!validarEntrada(inputValue, inputBase)) {
        return;
    }

    var decimalValue = parseInt(inputValue, inputBase === 'hexadecimal' ? 16 : inputBase === 'octal' ? 8 : inputBase === 'binario' ? 2 : 10);
    var outputHTML = '';

    if (document.getElementById('convertDecimal').checked) {
        output.style.display = 'flex';
        outputHTML += `<p>Decimal: ${decimalValue}</p>`;
    }
    if (document.getElementById('convertHexadecimal').checked) {
        output.style.display = 'flex';
        outputHTML += `<p>Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`;
    }
    if (document.getElementById('convertOctal').checked) {
        output.style.display = 'flex';
        outputHTML += `<p>Octal: ${decimalValue.toString(8)}</p>`;
    }
    if (document.getElementById('convertBinario').checked) {
        output.style.display = 'flex'; 
        outputHTML += `<p>Binário: ${decimalValue.toString(2)}</p>`;
    }
    document.getElementById('output').innerHTML = outputHTML;

    
    if (outputHTML === '') {
        output.style.display = 'block';
        output.innerHTML = '<p>Nenhuma base selecionada para converter!</p>'
        return
    }

    divHistorico.style.display = 'block';
    document.getElementById('historico').innerHTML += `
        <div class='registro'>
            <p>Número: ${inputValue} na base ${inputBase}</p>
            <div class='registroConversao'>${outputHTML}</div>
        </div>
    `;
}

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