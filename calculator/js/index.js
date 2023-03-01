const output=document.getElementById("output")
const equation=document.getElementById("equation")
let outputvalue=''

function clearScreen() {
    output.innerText = "0";
    equation.innerText='';
}
if (output.innerText == "") {
    output.innerText = "0";
}
function outputValue(value) {
    if (output.innerText != "0" && equation.innerText == '') {
        output.innerText += value;
    }
    else if(output.innerText != '0' ){
        output.innerText += value;
    } 
    else {
        output.innerText = value;
    }
}
let operator = ''
function outputOperator(operatorValue){
    operator = operatorValue
    outputvalue= output.innerText
    if (equation.innerText == ''){
        if (operator == '1/x'){
            outputvalue='1/'
            equation.innerText+=outputvalue 
        }
        else{
            equation.innerText+=outputvalue + operator
        }
    }
    else if (equation.innerText.charAt(equation.innerText.length-1) == operator){
        equation.innerText+=outputvalue
    }
    else if (equation.innerText.charAt(equation.innerText.length-1) != operator){
        equation.innerText+=operator
    }
    output.innerText='0'
    // console.log(operator);
}
function square() {
    let userinput = output.innerText;

    userinput = Number(userinput) ** 2;
    output.innerText = userinput;
}
function squareRoot() {
    let userinput = output.innerText;

    userinput = Number(userinput) ** 0.5;
    output.innerText = userinput;

}
const   pTag =  document.getElementById('p')
function changeContent(element){
    if (element == 'history'){
        pTag.innerText="There's no history yet"
    }
    else if (element == 'memory'){
        pTag.innerText="There's nothing saved in memory"
    }
}

function solve(){
    let equArray = equation.innerText.split(operator)
    outputvalue = output.innerText
    if (operator=='+' && equation.innerText.charAt(equation.innerText.length-1) != operator){
        output.innerText= Number(equArray[0]) + Number(equArray[1])
    }
    else if(equation.innerText.charAt(equation.innerText.length-1) == operator && operator == '+'){
        // console.log('test');
        equation.innerText+=outputvalue
        output.innerText = Number(equArray[0])  + Number(output.innerText)
    }
    else if (operator=='-' && equation.innerText.charAt(equation.innerText.length-1) != operator){
        output.innerText= Number(equArray[0]) - Number(equArray[1])
    }
    else if(equation.innerText.charAt(equation.innerText.length-1) == operator && operator == '-'){
        // console.log('test');
        equation.innerText+=outputvalue
        // console.log(outputvalue);
        output.innerText = Number(equArray[0]) - Number(output.innerText) 
    }
    else if (operator=='*' && equation.innerText.charAt(equation.innerText.length-1) != operator){
        output.innerText= Number(equArray[0]) * Number(equArray[1])
    }
    else if(equation.innerText.charAt(equation.innerText.length-1) == operator && operator == '*'){
        // console.log('test');
        equation.innerText+=outputvalue
        // console.log(outputvalue);
        output.innerText = Number(equArray[0]) * Number(output.innerText) 
    }
    else if (operator=='/' && equation.innerText.charAt(equation.innerText.length-1) != operator){
        output.innerText= Number(equArray[0]) / Number(equArray[1])
    }
    else if(equation.innerText.charAt(equation.innerText.length-1) == operator && operator == '/'){
        equation.innerText+=outputvalue
        output.innerText = Number(equArray[0]) / Number(output.innerText) 
    }
    else if (operator=='%' && equation.innerText.charAt(equation.innerText.length-1) != operator){
        output.innerText= Number(equArray[0]) % Number(equArray[1])
    }
    else if(equation.innerText.charAt(equation.innerText.length-1) == operator && operator == '%'){
        equation.innerText+=outputvalue
        output.innerText = Number(equArray[0]) % Number(output.innerText) 
    }
    else if (operator=='1/x' && equation.innerText != '1/'){
        output.innerText= Number(equArray[0]) / Number(equArray[1])
        console.log('Hey');
    }
    else if(equation.innerText == '1/' && operator == '1/x'){
        equation.innerText+=outputvalue
        // console.log(equArray);
        output.innerText = 1 / Number(output.innerText) 
        // console.log('Hey2');
    }
}
