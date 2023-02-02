

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
