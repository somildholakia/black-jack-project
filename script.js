let count = 0;
let count_el = document.getElementById("count")

function add() {
    if(count >= 10){
        console.log("count excedded 10, game over: " + count)
        count = 0;
        count_el.textContent = 0;
        return;
    }
    count += 3
    count_el.textContent = count; 
    console.log("count after adding 3: " + count)
}

function sub() {
    count -= 1;
    count_el.textContent = count;
    console.log("The count after subtracting 1: " + count)
}