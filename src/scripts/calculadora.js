import { validarEntrada } from "./validarEntrada.js"

document.getElementById('btn-somar').addEventListener('click', () => calcular('somar'))
document.getElementById('btn-subtrair').addEventListener('click', () => calcular('subtrair'))
document.getElementById('btn-multiplicar').addEventListener('click', () => calcular('multiplicar'))
document.getElementById('btn-dividir').addEventListener('click', () => calcular('dividir'))

const inputs = document.querySelectorAll('.ipt-number')
inputs.forEach(input => {
    input.addEventListener('input', () => estilizarInput(input))
});

function calcular(operacao) {
    const num1 = document.getElementById("ipt-number-1").value
    const num2 = document.getElementById("ipt-number-2").value

    const base1 = document.getElementById("select-base-1").value
    const base2 = document.getElementById("select-base-2").value

    if (!validarEntrada(num1, base1) || !validarEntrada(num2, base2)) {
        return;
    }

    const num1decimal = parseInt(num1, base1 === 'hexadecimal' ? 16 : base1 === 'octal' ? 8 : base1 === 'binario' ? 2 : 10)
    const num2decimal = parseInt(num2, base2 === 'hexadecimal' ? 16 : base2 === 'octal' ? 8 : base2 === 'binario' ? 2 : 10)
    let resultadoDecimal

    if (operacao === 'somar') {
        resultadoDecimal = num1decimal + num2decimal
    } else if (operacao === 'subtrair') {
        resultadoDecimal = num1decimal - num2decimal
    } else if (operacao === 'multiplicar') {
        resultadoDecimal = num1decimal * num2decimal
    } else if (operacao === 'dividir') {
        resultadoDecimal = Math.floor(num1decimal / num2decimal)
    }

    const resultadoBinario = resultadoDecimal.toString(2)
    const resultadoOctal = resultadoDecimal.toString(8)
    const resultadoHexadecimal = resultadoDecimal.toString(16)

    document.getElementById('resultado').innerHTML = `
        <div class='resultado-calculo'>
            <span>Decimal:</span><span>${resultadoDecimal}</span>
        </div>
        <div class='resultado-calculo'>
            <span>Hexadecimal:</span><span>${resultadoHexadecimal.toUpperCase()}</span>
        </div>
        <div class='resultado-calculo'>
            <span>Octal:</span><span>${resultadoOctal}</span>
        </div>
        <div class='resultado-calculo'>
            <span>Binário:</span><span>${resultadoBinario}</span>
        </div>
    `
}

function estilizarInput(input) {
    if (input.value === '') {
        input.style.textAlign = 'start'
    } else {
        input.style.textAlign = 'end'
    }

}