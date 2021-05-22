let BALLS = {
    current: null,
    frames: [],
    colors: {}
}

function setup() {
    let animFrame = document.getElementById('anim-frame')
    let style = getComputedStyle(animFrame)
    let width = parseInt(style.width, 10) - parseInt(style.paddingLeft, 10) - parseInt(style.paddingRight, 10)
    let height = parseInt(style.height, 10) - parseInt(style.paddingTop, 10) - parseInt(style.paddingBottom, 10)
    let canvas = createCanvas(Math.min(width, height), Math.min(width, height))
    canvas.parent('anim-frame')
}

function onData(data) {
    let framesCount

    //////////////////////////////////////////////////////////////////

    // framesCount = data.framesCount
    framesCount = 1200

    //////////////////////////////////////////////////////////////////

    for (let i = 0; i < framesCount; i++) {
        let frame = {}
        for (id in data.objects) {
            frame[id] = data.objects[id][i]

            //////////////////////////////////////////////////////////////////

            // if (!i) {BALLS.colors[id] = data.colors[id]}
            if (!i) { BALLS.colors[id] = vm.objectList.filter((obj) => (obj.id === id))[0].color }

            //////////////////////////////////////////////////////////////////
        }
        BALLS.frames.push(frame)
    }
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
        let frame = BALLS.current
        for (id in BALLS.colors) {
            fill(BALLS.colors[id])
            let angle = BALLS.frames[frame][id]
            circle(
                size * 0.5 + Math.cos(angle) * size * 0.4,
                size * 0.5 - Math.sin(angle) * size * 0.4,
                size * 0.07,
            )
        }
        BALLS.current++
    }
    pop()
}
