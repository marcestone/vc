let vid;

function setup() {
  createCanvas(320, 240);
  vid = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  vid.loop();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  vid.loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      const i = 4 * (y * vid.width + x);
      const [r, g, b] = [vid.pixels[i], vid.pixels[i + 1], vid.pixels[i + 2]]; 
      luma = r * 0.299 + g * 0.587 + b * 0.0114;
      vid.pixels[i] = luma;
      vid.pixels[i + 1] = luma;
      vid.pixels[i + 2] = luma;
    }
  }
  vid.updatePixels();
  image(vid, 0, 0, width, height);
}