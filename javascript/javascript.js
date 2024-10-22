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

function domLogic() {
    function populateDisplay(event) {
        btnCliked = event.target;
        displayValueHolder += btnCliked.textContent
        display.textContent = displayValueHolder;
    }

    function setOperator() {
        if (!isOperatorSet) {
            operator = this.textContent;
            isOperatorSet = true;
        }
        else if (isFirstOperandSet && displayValueHolder !== '') {
            calculateResult();
            operator = this.textContent;
            isOperatorSet = true;
        }
    }

    function setFirstOperand() {
        if (!isFirstOperandSet) {
            firstOperand = displayValueHolder;
            displayValueHolder = '';
            isFirstOperandSet = true;
        }
    }

    function calculateResult() {
        if (isFirstOperandSet && isOperatorSet) {
            secondOperand = displayValueHolder;
            if (firstOperand == 0 || secondOperand == 0) {
                return display.textContent = "Can\'t divide by 0!";
            }
            const result = operate(operator, firstOperand, secondOperand).toFixed(2);
            displayValueHolder = result;
            display.textContent = result;
            isFirstOperandSet = false
            isOperatorSet = false;
        }
    }

    function resetCalculator() {
        display.textContent = 0
        displayValueHolder = '';
        operator = null;
        firstOperand = null;
        secondOperand = null;
        isFirstOperandSet = false;
        isOperatorSet = false;
    }

    const display = document.querySelector('.display');
    const numberButtonsContainer = document.querySelector('.numbers');
    numberButtonsContainer.addEventListener('click', populateDisplay);

    let displayValueHolder = '';
    let operator, firstOperand, secondOperand;
    let isFirstOperandSet = false;
    let isOperatorSet = false;

    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((button) => {
        button.addEventListener('click', setOperator);
        button.addEventListener('click', setFirstOperand);   
    })

    const equalButton = document.querySelector('.equalBtn');
    equalButton.addEventListener('click', calculateResult);

    const clearButton = document.querySelector('.clearButton');
    clearButton.addEventListener('click', resetCalculator);
}

domLogic();