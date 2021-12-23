let button = document.getElementById("anim");

let red = 0;
let green = 0;
let blue = 0;

function changeColor() {
	button.style.backgroundColor = `rgb(${red},${green},${blue})`;
	red++; green++; blue++;

	if (red >= 255) {
		red = 0; green = 0; blue = 0;
	}
}

setInterval(changeColor, 20);