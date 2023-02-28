function clearScreen() {
    document.getElementById("output").innerText = "0";
}

if (document.getElementById("output").innerText == "") {
    document.getElementById("output").innerText = "0";
}
function outputValue(value) {
    if (document.getElementById("output").innerText != "0") {
        document.getElementById("output").innerText += value;
    } else {
        document.getElementById("output").innerText = value;
    }
}
function square() {
    let userinput = document.getElementById("output").innerText;

    userinput = Number(userinput) ** 2;
    document.getElementById("output").innerText = userinput;
}
function squareRoot() {
    let userinput = document.getElementById("output").innerText;

    userinput = Number(userinput) ** 0.5;
    document.getElementById("output").innerText = userinput;

}
console.log("" == "");
