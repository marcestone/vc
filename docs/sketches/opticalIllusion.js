let angle = 0;

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)

  fill(255,0,0)
  stroke('yellow')
  strokeWeight(2)

  push()
  translate(50,150)
  rotate(HALF_PI + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  translate(150,150)
  rotate(HALF_PI * 2 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  translate(150,250)
  rotate(HALF_PI * 3 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  translate(50,250)
  rotate(HALF_PI * 4 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  angle += 0.003;
}

function ImageLoaded(){
  console.log('image loaded')
  img.loadPixels()
  
  pixelDensity(1)

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      const i = 4 * (y * img.width + x);
      const [r, g, b] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]]; // get colors
      average = (r + g + b) / 3
      img.set(x, y, color(average, average, average))
    }
  }
  img.updatePixels()
}