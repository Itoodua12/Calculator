
function printSymbol(e) {
    const result = document.getElementById('result');
    const obj = e.target;

    if(result.value == 0 && obj.textContent == '.') {
        result.value += obj.textContent;
    } else if(result.value == '0.') {
        result.value += obj.textContent;
    } else if(result.value == 0) 
        result.value = obj.textContent;
    else
        result.value += obj.textContent;

}

const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

const symbols = document.getElementsByClassName('symbol');


for(let i = 0; i< symbols.length; i++) {
    symbols[i].addEventListener('click', printSymbol);
}

clear.addEventListener('click', () => document.getElementById('result')
                                .value = 0);
equal.addEventListener('click', e => result.value = eval(result.value));
