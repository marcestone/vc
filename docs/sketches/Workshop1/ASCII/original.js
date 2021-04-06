function preload() {
    img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example8.jpg');
  }
  
  function setup() {
    createCanvas(400, 480); 
    noStroke(); fill(255);
    frameRate(30);
  }
  
  function draw() {
      image(img, 0, 0, width, height);
  }