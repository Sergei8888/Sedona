let BALLS = {
    current: null,
    frames: [],
    colors: {},
    massCenter: []
}

function canvasGetSize() {
    let virtualHeight = windowHeight - 160
    let virtualWidth
    if (windowWidth > 780) {
        virtualWidth = windowWidth - 400
    } else {
        virtualWidth = windowWidth - 340
    }
    return Math.min(virtualWidth, virtualHeight)
}

function setup() {
    let animFrame = document.getElementById('anim-frame')
    let canvas = createCanvas(canvasGetSize(), canvasGetSize())
    canvas.parent('anim-frame')
}

function onData(data) {
    BALLS = {
        current: null,
        frames: [],
        colors: {},
        massCenter: []
    }
    let framesCount = data.frames
    for (let i = 0; i < framesCount; i++) {
        let frame = {}
        for (id in data.objects) {
            frame[id] = data.objects[id][i]
            if (!i) { BALLS.colors[id] = vm.objectList.filter((obj) => (obj.id === id))[0].color }
        }
        BALLS.frames.push(frame)
    }
    BALLS.framesCount = framesCount
    BALLS.current = 0
}

function draw() {
    push()
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

    if (BALLS.current !== null) {

        let massCenterXArray = []
        let massCenterYArray = []

        for (id in BALLS.colors) {
            fill(BALLS.colors[id])
            let angle = BALLS.frames[BALLS.current][id]
            let x = size * 0.5 + Math.cos(angle) * size * 0.4
            let y = size * 0.5 - Math.sin(angle) * size * 0.4
            massCenterXArray.push(x)
            massCenterYArray.push(y)
            circle(x, y, size * 0.07)
        }
        massCenterX = massCenterXArray.reduce((a, b) => a + b) / massCenterXArray.length
        massCenterY = massCenterYArray.reduce((a, b) => a + b) / massCenterYArray.length

        if (BALLS.current > 1) {
            noFill()
            strokeWeight(size * 0.01)
            let dashlength = 1
            for (let i = 0; i < 256 * dashlength; i++) {
                let id = i - 256 * dashlength - 1 + BALLS.current
                if (id > 0) {
                    stroke(255, i / dashlength / 2.55)
                    line(...BALLS.massCenter[id - 1], ...BALLS.massCenter[id])
                }
            }
            noStroke()
        }
        fill(255, 200)
        circle(massCenterX, massCenterY, size * 0.04)

        BALLS.massCenter.push([massCenterX, massCenterY])
        BALLS.current++

            if (BALLS.current === BALLS.framesCount) { BALLS.current = null }
    }
    pop()
}

function windowResized() {
    let animFrame = document.getElementById('anim-frame')
    resizeCanvas(canvasGetSize(), canvasGetSize())
}