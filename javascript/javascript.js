function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

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

function updateDisplay(event) {
    const targetBtnContent = event.target.textContent;
    if (numbersDisplay.textContent == 0 || isNum1Set === true) {
        isNum1Set = false;
        return numbersDisplay.textContent = targetBtnContent;
    }
    numbersDisplay.textContent += targetBtnContent;
}

function setCurrentOperator(event) {
    const opBtn = event.target.textContent;
    if (isOperatorSet === false) num1 = numbersDisplay.textContent;
    else {
        num2 = numbersDisplay.textContent;
        numbersDisplay.textContent = operate(operator, num1, num2);
        num1 = numbersDisplay.textContent;
    }
    operator = opBtn;
    isNum1Set = true;
    isOperatorSet = true;
}

const numbersDisplay = document.querySelector('.display');
const numBtnNodeList = document.querySelectorAll('.numberSection');
const operatorBtns = document.querySelectorAll('.op');
let operator, num1, num2, displayValue;
let isOperatorSet = false; 
let isNum1Set = false;

numBtnNodeList.forEach( (numBtn) => {
    numBtn.addEventListener('click', updateDisplay);
})

operatorBtns.forEach( (opBtn) => {
    opBtn.addEventListener('click', setCurrentOperator)
})
