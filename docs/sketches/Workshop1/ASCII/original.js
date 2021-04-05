function preload() {
    img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example7.jpg');
  }
  
  function setup() {
    createCanvas(640, 480); 
    textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
    noStroke(); fill(255);
    frameRate(30);
  }
  
  function draw() {
      image(img, 0, 0, width, height);
  }