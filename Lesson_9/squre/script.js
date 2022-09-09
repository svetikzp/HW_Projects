let rectangle = document.getElementById('squareId');

let newTsvet = prompt('What color is the figure?');
rectangle.style.background= newTsvet;

let newWidth = prompt("Set the width (in pixels)");
rectangle.style.width = newWidth + "px";

let newHeight = prompt("Set the height (in pixels)");
rectangle.style.height = newHeight + "px";

let newBorder = prompt("Select border: dashed, double, ridge");

rectangle.style.border = newBorder;