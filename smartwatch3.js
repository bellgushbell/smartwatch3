
let ownername = document.getElementById("ownername");
let bankname = document.getElementById("bankname");
let cardnumber = document.getElementById("cardnumberinput");
let date = document.getElementById("mmyy");
let cvc = document.getElementById("cvcinput");



let t1 = ownername.addEventListener("pay", getInput());
function getInput(t1) {
    document.getElementById("front").innerHTML = t1;
}






