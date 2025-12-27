let no1 = 6
let no2 = 6
let sum = document.getElementById("sum")

document.getElementById("no1").innerText = 6
document.getElementById("no2").innerText = 6


let count = 0

function add(){
    let result = no1 + no2 
    count = result
    sum.innerText = count

}

function sub(){
    count = no1 - no2
    sum.innerText = count
}

function mul(){
    count = no1 * no2
    sum.innerText = count
}

function divide(){
    count = no1 / no2
    sum.innerText = count
}