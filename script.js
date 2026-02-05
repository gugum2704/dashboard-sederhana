let output = 0;

function tambahOutput() {
    output++;
    document.getElementById("output").innerText = output;
}

function resetOutput() {
    output = 0;
    document.getElementById("output").innerText = output;
}
function kurangOutput() {
    output--;
    document.getElementById("output").innerText = output;
}
