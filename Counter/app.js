let count = 0
let valueEl = document.getElementById("value")

function increase() {
    count+=1;
    valueEl.textContent = count
    if(count > 0){
        valueEl.style.color = "green"
    }
}

function reset(){
    count = 0
    valueEl.textContent = count
    if (count===0){
        valueEl.style.color = "black"
    }
}

function decrease() {
    count-=1;
    valueEl.textContent = count
    if(count < 0){
        valueEl.style.color = "red"
    }
}