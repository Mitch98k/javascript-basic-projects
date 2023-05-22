const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
let num = document.getElementById('value');
let count = 0;

increase.addEventListener('click', add);
decrease.addEventListener('click', subtract);
reset.addEventListener('click', zero);

function add() {
    count += 1;
    num.textContent = count;
}

function subtract() {
    count -= 1;
    num.textContent = count;
}

function zero() {
    count = 0;
    num.textContent = count;
}

