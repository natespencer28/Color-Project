const colors = ["Red", "Blue", "Pink", "Yellow", "Green", "Black", "Orange", "Purple"];
let currentIndex = 0; 

const colorBox = document.getElementsByClassName("color-box");
const colorChange = document.getElementsByClassName("color-change");

colorChange.addEventListener("click", changeColor);

function changeColor() {
    currentIndex = (currentIndex + 1) % colors.length; 
    colorBox.style.backgroundColor = colors[currentIndex];
    
}