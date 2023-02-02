

// function printSymbol(e) {
//     const result = document.getElementById('result');
//     const obj = e.target;

//     result.value += obj.textContent;

// }

function printSymbol(e) {
    const result = document.getElementById('result');
    const obj = e.target;

    if(result.value == 0) 
        result.value = obj.textContent;
    else
        result.value += obj.textContent;

}


const result = document.getElementById('result');
const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const sub = document.getElementById('sub');
const plus = document.getElementById('plus');
const mult = document.getElementById('mult');
const div = document.getElementById('div');
const decimal = document.getElementById('decimal');
const leftp = document.getElementById('leftp');
const rightp = document.getElementById('rightp');

const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

const symbols = document.getElementsByClassName('symbol');

// const symbols = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9,
//             plus,mult,sub,div,decimal,rightp,leftp];

for(let i = 0; i< symbols.length; i++) {
    symbols[i].addEventListener('click', printSymbol);
}

clear.addEventListener('click', () => document.getElementById('result')
                                .value = 0);
equal.addEventListener('click', e => result.value = eval(result.value));
