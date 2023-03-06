const output = document.getElementById("output");
const equation = document.getElementById("equation");
let outputvalue;

// clear the output
function clearScreen() {
    output.innerText = "0";
    equation.innerText = '';
}
// clear the output
function clearOutput() {
    output.innerText = "0";
}
if (output.innerText == "") {
    output.innerText = "0";
}

// append the value of the clicked button to the output
function outputValue(value) {
    if (output.innerText != "0" && equation.innerText == '') {
        output.innerText += value;
    }
    else if (output.innerText != '0' && equation.innerText != '') {
        // output.innerText += value;
        let equArray = equation.innerText.split(operator); // split the equation into an array of characters
        // check if the solve function has been used
        if (evaluateExpression(equation.innerText) == output.innerText && equArray.length >= 2) {
            console.log(equArray);
            clearScreen();
            output.innerText = value;
            // console.log('hey');
        }
        else {
            output.innerText += value;
            // console.log('hey2');
        }

    }
    else {
        output.innerText = value;
    }
}
// This function is safer than using the `eval` function because it only evaluates mathematical expressions and doesn't execute arbitrary code
function evaluateExpression(expression) {
    let result = 0;
    let operator = '+';
    let number = '';
    for (let i = 0; i < expression.length; i++) {
      const char = expression.charAt(i);
      if (/\d/.test(char)) {
        number += char;
      } else {
        number = parseFloat(number);
        if (operator === '+') {
          result += number;
        } else if (operator === '-') {
          result -= number;
        } else if (operator === '*') {
          result *= number;
        } else if (operator === '/') {
          result /= number;
        }
        number = '';
        operator = char;
      }
    }
    number = parseFloat(number);
    if (operator === '+') {
      result += number;
    } else if (operator === '-') {
      result -= number;
    } else if (operator === '*') {
      result *= number;
    } else if (operator === '/') {
      result /= number;
    }
    return result;
  }
  

let operator;
function outputOperator(operatorValue) {
    let equArray = equation.innerText.split(operator); // split the equation into an array of characters
    operator = operatorValue; // get the value of the clicked button
    outputvalue = output.innerText;
    if (equation.innerText == '') {
        if (operator == '1/x') {
            outputvalue = '1/';
            equation.innerText += outputvalue;
        }
        else {
            equation.innerText += outputvalue + operator;
            output.innerText = '0';
        }
    }
    else if (equation.innerText.charAt(equation.innerText.length - 1) == operator) {
        equation.innerText += outputvalue;
        solve();
        // console.log('Hey');

    }
    else if (equation.innerText.charAt(equation.innerText.length - 1) != operator && equArray.length == 2) {
        // console.log('Hey');
        // console.log(equation.innerText);
        equation.innerText = output.innerText;
        equation.innerText += operator;
        output.innerText = '0';
    }
    // output.innerText='0'
    // console.log(operator);
}
function square() {
    let userinput = output.innerText;
    equation.innerText = 'sqr' + '(' + userinput +')';
    userinput = Number(userinput) ** 2;
    output.innerText = userinput;
}
function squareRoot() {
    let userinput = output.innerText;
    equation.innerText = '√' + '(' + userinput +')';
    userinput = Number(userinput) ** 0.5;

    if (+userinput % 1 != 0) {
        output.innerText = (+userinput).toFixed(2);
    }
    else {
        output.innerText = userinput;
    }


}
const pTag = document.getElementById('p');
function changeContent(element) {
    if (element == 'history') {
        pTag.innerText = "There's no history yet";
    }
    else if (element == 'memory') {
        pTag.innerText = "There's nothing saved in memory";
    }
}

// evaluate the equation and display the result in the output
function solve() {
    let equArray = equation.innerText.split(operator); // split the equation into an array of characters
    let lastChar = equArray[equArray.length - 1]; // get the last character of the equation
    outputvalue = output.innerText;
    if (operator == '+' && lastChar != operator) {
        output.innerText = Number(equArray[0]) + Number(equArray[1]);
    }
    else if (lastChar == operator && operator == '+') {
        // console.log('test');
        equation.innerText += outputvalue;
        output.innerText = Number(equArray[0]) + Number(output.innerText);
    }
    else if (operator == '-' && lastChar != operator) {
        output.innerText = Number(equArray[0]) - Number(equArray[1]);
    }
    else if (lastChar == operator && operator == '-') {
        // console.log('test');
        equation.innerText += outputvalue;
        // console.log(outputvalue);
        output.innerText = Number(equArray[0]) - Number(output.innerText);
    }
    else if (operator == '*' && lastChar != operator) {
        output.innerText = Number(equArray[0]) * Number(equArray[1]);
        // console.log('Hey');

    }
    else if (lastChar == operator && operator == '*') {
        // console.log('test');
        equation.innerText += outputvalue;
        // console.log(outputvalue);
        output.innerText = Number(equArray[0]) * Number(output.innerText);
    }
    else if (operator == '÷' && lastChar != operator) {
        if ((Number(equArray[0]) / Number(equArray[1])) % 1 != 0) {
            output.innerText = (Number(equArray[0]) / Number(equArray[1])).toFixed(2);
        }
        else {
            output.innerText = Number(equArray[0]) / Number(equArray[1]);
        }

    }
    else if (equation.innerText.charAt(equation.innerText.length - 1) == operator && operator == '÷') {
        equation.innerText += outputvalue;
        if ((Number(equArray[0]) / Number(output.innerText)) % 1 != 0) {
            output.innerText = (Number(equArray[0]) / Number(output.innerText)).toFixed(2);
        }
        else {
            output.innerText = Number(equArray[0]) / Number(output.innerText);
        }

    }
    else if (operator == '%' && equation.innerText.charAt(equation.innerText.length - 1) != operator) {
        output.innerText = Number(equArray[0]) % Number(equArray[1]);
    }
    else if (equation.innerText.charAt(equation.innerText.length - 1) == operator && operator == '%') {
        equation.innerText += outputvalue;
        output.innerText = Number(equArray[0]) % Number(output.innerText);
    }
    else if (operator == '1/x' && equation.innerText != '1/') {
        output.innerText = (Number(equArray[0]) / Number(equArray[1])).toFixed(2);
        // console.log('Hey');
    }
    else if (equation.innerText == '1/' && operator == '1/x') {
        equation.innerText += outputvalue;
        // console.log(equArray);
        output.innerText = 1 / Number(output.innerText);
        // console.log('Hey2');
    }
}
// remove the last character from the output
function backspace() {
    let outputarray = output.innerText; // split the output into an array of characters
    outputarray = outputarray.slice(0, -1); // remove the last character from the output array
    if (outputarray == '') {
        output.innerText = '0';
    }
    else {
        output.innerText = outputarray;
    }
}

