let number = document.getElementById("number");
counter = 0;

function add() {
    counter++;
    number.innerHTML = counter;
}

function remove() {
    if(counter > 0) {
        counter--;
        number.innerHTML = counter;
    }
    
}