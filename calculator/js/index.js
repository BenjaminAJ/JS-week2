const output=document.getElementById("output")
const equation=document.getElementById("equation")
let outputvalue=''

function clearScreen() {
    output.innerText = "0";
    equation.innerText='';
}
function clearOutput() {
    output.innerText = "0";
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
    let equArray = equation.innerText.split(operator)
    operator = operatorValue
    outputvalue= output.innerText
    if (equation.innerText == ''){
        if (operator == '1/x'){
            outputvalue='1/'
            equation.innerText+=outputvalue 
        }
        else{
            equation.innerText+=outputvalue + operator
            output.innerText='0'
        }
    }
    else if (equation.innerText.charAt(equation.innerText.length-1) == operator){
        equation.innerText+=outputvalue
        solve()
        // console.log('Hey');

    }
    else if (equation.innerText.charAt(equation.innerText.length-1) != operator && equArray.length == 2){
        // console.log('Hey');
        // console.log(equation.innerText);
        equation.innerText=output.innerText
        equation.innerText+=operator
        output.innerText='0'
    }
    // output.innerText='0'
    // console.log(operator);
}
function square() {
    let userinput = output.innerText;
    equation.innerText= userinput
    userinput = Number(userinput) ** 2;
    output.innerText = userinput;
}
function squareRoot() {
    let userinput = output.innerText;
    equation.innerText= userinput
    userinput = Number(userinput) ** 0.5;

    if (+userinput % 1 != 0){
        output.innerText = (+userinput).toFixed(2);
    }
    else{
        output.innerText = userinput;
    }


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
        // console.log('Hey');

    }
    else if(equation.innerText.charAt(equation.innerText.length-1) == operator && operator == '*'){
        // console.log('test');
        equation.innerText+=outputvalue
        // console.log(outputvalue);
        output.innerText = Number(equArray[0]) * Number(output.innerText) 
    }
    else if (operator=='/' && equation.innerText.charAt(equation.innerText.length-1) != operator){
        output.innerText= (Number(equArray[0]) / Number(equArray[1])).toFixed(2)
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
        output.innerText= (Number(equArray[0]) / Number(equArray[1])).toFixed(2)
        // console.log('Hey');
    }
    else if(equation.innerText == '1/' && operator == '1/x'){
        equation.innerText+=outputvalue
        // console.log(equArray);
        output.innerText = 1 / Number(output.innerText) 
        // console.log('Hey2');
    }
}
function deleteItem() {
    let outputarray = output.innerText
    outputarray = outputarray.slice(0, -1)
    if(outputarray == ''){
        output.innerText='0'
    }
    else{
        output.innerText=outputarray
    }
}

