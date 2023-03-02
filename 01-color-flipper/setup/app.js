const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    const randomNumber = getRandom();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}