const buttons = document.querySelectorAll('.btn');
const num = document.getElementById('value');
let count = 0;


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
       const styles = e.currentTarget.classList;
       if (styles.contains('increase')) {
        count++;
       } else if (styles.contains('decrease')) {
        count--;
       } else {
        count = 0;
       }
       
       if (count > 0) {
        num.style.color = 'green';
       } else if (count < 0) {
        num.style.color = 'red';
       } else {
        num.style.color = 'black'
       }
       
       num.textContent = count;
    });
});

// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
// let num = document.getElementById('value');
// let count = 0;

// increase.addEventListener('click', add);
// decrease.addEventListener('click', subtract);
// reset.addEventListener('click', zero);

// function add() {
//     count += 1;
//     num.textContent = count;
// }

// function subtract() {
//     count -= 1;
//     num.textContent = count;
// }

// function zero() {
//     count = 0;
//     num.textContent = count;
//}

