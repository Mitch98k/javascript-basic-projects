const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("#btn");
const inverter = document.querySelector("#invert");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

inverter.addEventListener("click", function () {
    let inverted = invert();

    document.body.style.backgroundColor = inverted;
    color.textContent = inverted;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

function invert() {
    console.log(color.textContent);
    let colorArray = color.textContent.split('');
    let inverted = "#";

    for (let i = 1; i < 7; i++) {
        inverted += hex[Math.abs(hex.length-1 - hex.indexOf(colorArray[i]))];
    }
    return inverted;
}