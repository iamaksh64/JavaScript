let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add(){
    document.getElementById("sum-el").textContent = num1 + num2;
}

function sub(){
    document.getElementById("sum-el").textContent = num1 - num2;
}

function mul(){
    document.getElementById("sum-el").textContent = num1 * num2;
}

function div(){
    document.getElementById("sum-el").textContent = num1 / num2;
}

