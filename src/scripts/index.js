// função para converter os valores
function converter() {
    var inputValue = document.getElementById('inputValue').value; // obtém o valor de entrada
    var inputBase = document.getElementById('inputBase').value; // obtém a base de entrada
    var inputsToConvert = document.querySelectorAll("input[type='checkbox']");

    // valida a entrada de acordo com a base selecionada
    if (!validarEntrada(inputValue, inputBase)) {
        alert('Por favor, insira um número válido para a base selecionada.');
        return;
    }

    // converte o valor para decimal, com base na base de entrada selecionada
    var decimalValue = parseInt(inputValue, inputBase === 'hexadecimal' ? 16 : inputBase === 'octal' ? 8 : inputBase === 'binario' ? 2 : 10);
    var outputHTML = ''; // inicializa a variável para armazenar o html de saída

    // verifica se cada opção de conversão está selecionada e adiciona o resultado ao html de saída
    if (document.getElementById('convertDecimal').checked) {
        output.style.display = 'block'; // exibe a saída
        outputHTML += `<p>Decimal: ${decimalValue}</p>`; // adiciona o resultado ao html
    }
    if (document.getElementById('convertHexadecimal').checked) {
        output.style.display = 'block'; // exibe a saída
        outputHTML += `<p>Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`; // converte para hexadecimal e adiciona ao html
    }
    if (document.getElementById('convertOctal').checked) {
        output.style.display = 'block'; // exibe a saída
        outputHTML += `<p>Octal: ${decimalValue.toString(8)}</p>`; // converte para octal e adiciona ao html
    }
    if (document.getElementById('convertBinario').checked) {
        output.style.display = 'block'; // exibe a saída
        outputHTML += `<p>Binário: ${decimalValue.toString(2)}</p>`; // converte
    }
    document.getElementById('output').innerHTML = outputHTML; // atualiza o conteúdo da saída com o html gerado

    if(outputHTML === '') {
        output.style.display = 'block';
        output.innerHTML = '<p>Nenhuma base selecionada para converter!</p>'
    }
}

function validarEntrada(inputValue, inputBase) {

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

    // Verifica se cada caractere da entrada está presente na lista de caracteres válidos
    for (var i = 0; i < inputValue.length; i++) {
        if (validChars.indexOf(inputValue[i]) === -1) { // Se o caractere não for encontrado na lista de caracteres válidos
            return false;
        }
    }
    return true;
}