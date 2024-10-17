/*
Your calculator is going to contain functions for all of the basic math operators you
typically find on calculators, so start by creating functions for the following items 
and testing them in your browser’s console.

add
subtract
multiply
divide

*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1, num2, operator;

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const buttons = document.querySelectorAll('.num');
let displayVal = 0;
let firstNum, secondNum;

function populateDisplay(event) {
    const display = document.querySelector('.display');
    const btnValue = event.target.textContent;
    if (display.textContent == 0) display.textContent = btnValue;
    else {
        display.textContent += btnValue;
        displayVal = display.textContent;
    } 
}

const numberSection = document.querySelectorAll('.numberSection');
numberSection.forEach((div) => {
    div.addEventListener('click', populateDisplay)
})