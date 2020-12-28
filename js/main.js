const DOM_num1 = document.querySelector('#num1');
const DOM_num2 = document.querySelector('#num2');
const DOM_operation = document.querySelector('#operation');
const DOM_button = document.querySelector('button');
const DOM_answer = document.querySelector('#answer');

const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calcFactory = (num1, operation, num2) => {
    const mathFunction = {
        '+': sum,
        '-': minus,
        '*': multiply,
        '/': divide,
    }

    const func = mathFunction[operation];

    return func(num1, num2);
}

function calcExpresion() {
    const num1 = parseInt(DOM_num1.value);
    const num2 = parseInt(DOM_num2.value);
    const operation = DOM_operation.value;

    const rez = calcFactory(num1, operation, num2);

    console.log(num1, operation, num2, '=', rez);

}


DOM_button.addEventListener('click', event => {
    event.preventDefault();
    calcExpresion();
})