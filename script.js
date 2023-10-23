const colors = ["red", "blue", "green", "yellow", "purple", "pink",];
let currentIndex = 0;

const colorBox = document.getElementById("color-box");
const changeColorButton = document.getElementById("change-color-button");

changeColorButton.addEventListener("click", changeColor);

function changeColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentIndex];
}