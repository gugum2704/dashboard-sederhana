let output = 0;
let output1 = 0;
let output2 = 0;

function tambahOutput() {
    output++;
    document.getElementById("output").innerText = output;
}
function tambahOutput1() {
    output1++;
    document.getElementById("output1").innerText = output1;
}
function tambahOutput2() {
    output2++;
    document.getElementById("output2").innerText = output2;
}

function resetOutput() {
    output = 0;
    document.getElementById("output").innerText = output;
}
function resetOutput1() {
    output1 = 0;
    document.getElementById("output1").innerText = output1;
}
function resetOutput2() {
    output2 = 0;
    document.getElementById("output2").innerText = output2;
}

function kurangOutput() {
    output--;
    document.getElementById("output").innerText = output;
}
function kurangOutput1() {
    output1--;
    document.getElementById("output1").innerText = output1;
}
function kurangOutput2() {
    output2--;
    document.getElementById("output2").innerText = output2;
}
