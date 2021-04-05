let white, black, gray, blue, yellow
let posX, barWidth, boxWidth, boxHeight
let show

function setup() {
    createCanvas(800, 300)
    white = color(255,255,255)
    gray = color(127,127,127)
    black = color(0,0,0)
    yellow = color(255, 255, 135)
    blue = color(0, 0, 135) 
    posX = 0
    barWidth = 15
    boxWidth = 4 * barWidth
    boxHeight = 2 * barWidth
    show = false
    noStroke()
}

function mouseOver(){
    return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height
}

function mouseClicked() {
    if (mouseOver()){
        show = !show
    }
    // prevent default
    return false;
}

function draw() {
    if (show){
        background(gray);
    }else{
        // DRAW THE STRIPED BACKGROUND
        for (let x = 0; x <= width / barWidth; x++) {
            fill(black);
            rect(x * barWidth, 0, barWidth, height);
            fill(white);
            rect(++x * barWidth, 0, barWidth, height);
        }
    }
    // DRAW THE MOVING RECTANGLES
    fill(yellow);
    rect(Math.max(posX-boxWidth, 0), height/3 - boxHeight/2, Math.min(boxWidth, posX), boxHeight);

    fill(blue);
    rect(Math.max(posX-boxWidth, 0), 2*height/3 - boxHeight/2, Math.min(boxWidth, posX), boxHeight);

    posX = ((posX + 1) % (width + boxWidth + 2));
}