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

/*
We are going to create a updateDisplay function that updates the display of the calculator when a number is clicked

*/

function domLogic() {

    function updateDisplay(event) {
        const calcDisplay = document.querySelector('.display');
        numClicked = event.target.textContent;
        if (needBoardReset) {
            calcDisplay.textContent = numClicked;
            calcDisplayValue = calcDisplay.textContent;
            needBoardReset = false;
        }
        else if (calcDisplay.textContent == 0) {
            calcDisplay.textContent = numClicked;
            calcDisplayValue = calcDisplay.textContent;
        } 
        else {
            calcDisplay.textContent += numClicked;
            calcDisplayValue = calcDisplay.textContent;
        }
    }
    
    function setOperator() {
        if (isOperatorSet) return -1;
        operator = this.textContent;
        isOperatorSet = true;
    }

    function setFirstOperand() {
        firstOperand = calcDisplayValue;
        isFirstOperandSet = true;
        needBoardReset = true;
    }

    function setSecondOperand() {
        secondOperand = calcDisplayValue;
        isSecondOperandSet = true;
    }

    function checkForOperation() {
        if (isFirstOperandSet && isOperatorSet && isSecondOperandSet) calculateOperation();
        else if (isFirstOperandSet) setSecondOperand();
    }

    function calculateOperation() {
        const operationResult = operate(operator, firstOperand, secondOperand);
        firstOperand = operationResult;
        isOperatorSet = false;
        setOperator();
        isSecondOperandSet = false;
        displayResult();
    }

    function displayResult() {
        const calcDisplay = document.querySelector('.display');
        calcDisplay.textContent = firstOperand;
    }
    let calcDisplayValue, operator, firstOperand, secondOperand; 
    let needBoardReset = false;
    let isFirstOperandSet = false;
    let isOperatorSet = false;
    let isSecondOperandSet = false;
    
    const numButtonsContainer = document.querySelector('.numbers');
    numButtonsContainer.addEventListener('click', updateDisplay);

    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((button) => {
        button.addEventListener('click', setOperator);
        button.addEventListener('click', setFirstOperand);
        button.addEventListener('click', checkForOperation);
    })
}

domLogic();