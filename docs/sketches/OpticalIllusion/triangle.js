let img;

function preload() {
  img = loadImage('/vc/docs/sketches/OpticalIllusion/triangle.jpg')
}

function setup() {
  createCanvas(512, 512)
}

function draw() {
  image(img, 0, 0)
  noLoop();
}