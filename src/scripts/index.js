import { validarEntrada } from "./validarEntrada.js";

document.getElementById('btn-converter').addEventListener('click', converter)

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
            <p>Número: ${inputValue.toUpperCase()} na base ${inputBase}</p>
            <div class='registroConversao'>${outputHTML}</div>
        </div>
    `;
}