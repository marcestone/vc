let img;

function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png', ImageLoaded)
}

function setup() {
  createCanvas(512, 512)
}

function draw() {
  image(img, 0, 0)
  noLoop();
}

function ImageLoaded(){
  console.log('image loaded')
  img.loadPixels()
  pixelDensity(1)
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      const i = 4 * (y * img.width + x);
      const [r, g, b] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]]; 
      luma = r*0.299 + g*0.587 + b*0.0114;
      img.set(x, y, color(luma, luma, luma))
    }
  }
  img.updatePixels()
}