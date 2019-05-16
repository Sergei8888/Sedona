"use strict";

var inputStart = document.getElementById("color-input--first"),
	inputEnd = document.getElementById("color-input--second"),
	doneButton = document.getElementById("done"),
	gradientDiv = document.getElementById("gradient-div"),
	select = document.getElementById("select-dir");

function setGradient(direction, startColor, endColor) {
	gradientDiv.style.backgroundImage = "linear-gradient(" + direction + "," + startColor + "," + endColor + ")";
}