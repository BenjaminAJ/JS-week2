const output=document.getElementById("output")

function clearScreen() {
    output.innerText = "0";
}
if (output.innerText == "") {
    output.innerText = "0";
}
function outputValue(value) {
    if (output.innerText != "0") {
        output.innerText += value;
    } else {
        output.innerText = value;
    }
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
// console.log("" == "");
