

function printSymbol(e) {
    const result = document.getElementById('result');
    const obj = e.target;
    result.textContent += obj.textContent;
}

let result = document.getElementById('result');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');


num1.addEventListener('click', printSymbol);
num2.addEventListener('click', printSymbol);
num3.addEventListener('click', printSymbol);
num4.addEventListener('click', printSymbol);
num5.addEventListener('click', printSymbol);
num6.addEventListener('click', printSymbol);
num7.addEventListener('click', printSymbol);
num8.addEventListener('click', printSymbol);
num9.addEventListener('click', printSymbol);


