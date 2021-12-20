
let saveEl = document.getElementById("save-el")
let count = 0;

function increment(){
    count +=1;
    document.getElementById("count-el").textContent = count;
}

function save(){
    let save = count + " - "
    saveEl.textContent += save 
    console.log(count)
    document.getElementById("count-el").textContent = 0
    count = 0
}




