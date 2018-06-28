// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!

// Declaration of localized variables
let sizePicker = document.getElementById("sizePicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let color = document.getElementById("colorPicker");
let canvas = document.getElementById("pixelCanvas");

// A function to listen for selection of color
color.addEventListener("click", function(){});

// On submit clear existing grid then create a new one with new values
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};
// Create grid function and listens for cell clicks to fill color
function makeGrid() {
    for (let r = 0; r < height.value; r++){
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

// Fill cells function
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
// Clear grid function
function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}



