
function setup() {
    let animFrame = document.getElementById('anim-frame')
    let style = getComputedStyle(animFrame)
    let width = parseInt(style.width, 10) - parseInt(style.paddingLeft, 10) - parseInt(style.paddingRight, 10)
    let height = parseInt(style.height, 10) - parseInt(style.paddingTop, 10) - parseInt(style.paddingBottom, 10)
    let canvas = createCanvas(Math.min(width, height), Math.min(width, height))
    canvas.parent('anim-frame')
}

function onData(data) {
	console.log(data.objects)
}

function draw() {
	let size = width
	noStroke()
	fill(34)
	rect(0, 0, size, size, size * 0.04)
	fill(22)
	circle(size * 0.5, size * 0.5, size * 0.9)
	fill(34)
	circle(size * 0.5, size * 0.5, size * 0.7)
	fill(55)
	rectMode('center')
	rect(size * 0.9, size * 0.5, size * 0.08, size * 0.02, size * 0.02)
	rect(size * 0.1, size * 0.5, size * 0.08, size * 0.02, size * 0.02)
}
