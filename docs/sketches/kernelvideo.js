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


  var k1 = [[1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]];

  vid.loadPixels();

  var w = vid.width;
  var h = vid.height;
  var pond = 9;
  for (var x = 0; x < w; x++) {
  for (var y = 0; y < h; y++) {
  var ul = ((x-1+w)%w + w*((y-1+h)%h))*4; // location of the UPPER LEFT
  var uc = ((x-0+w)%w + w*((y-1+h)%h))*4; // location of the UPPER CENTER
  var ur = ((x+1+w)%w + w*((y-1+h)%h))*4; // location of the UPPER RIGHT
  var ml = ((x-1+w)%w + w*((y+0+h)%h))*4; // location of the LEFT
  var mc = ((x-0+w)%w + w*((y+0+h)%h))*4; // location of the CENTER PIXEL
  var mr = ((x+1+w)%w + w*((y+0+h)%h))*4; // location of the RIGHT
  var ll = ((x-1+w)%w + w*((y+1+h)%h))*4; // location of the LOWER LEFT
  var lc = ((x-0+w)%w + w*((y+1+h)%h))*4; // location of the LOWER CENTER
  var lr = ((x+1+w)%w + w*((y+1+h)%h))*4; // location of the LOWER RIGHT

  p0 = vid.pixels[ul]*k1[0][0]; // upper left
  p1 = vid.pixels[uc]*k1[0][1]; // upper mid
  p2 = vid.pixels[ur]*k1[0][2]; // upper right
  p3 = vid.pixels[ml]*k1[1][0]; // left
  p4 = vid.pixels[mc]*k1[1][1]; // center pixel
  p5 = vid.pixels[mr]*k1[1][2]; // right
  p6 = vid.pixels[ll]*k1[2][0]; // lower left
  p7 = vid.pixels[lc]*k1[2][1]; // lower mid
  p8 = vid.pixels[lr]*k1[2][2]; // lower right
  var red = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/pond;

  p0 = vid.pixels[ul+1]*k1[0][0]; // upper left
  p1 = vid.pixels[uc+1]*k1[0][1]; // upper mid
  p2 = vid.pixels[ur+1]*k1[0][2]; // upper right
  p3 = vid.pixels[ml+1]*k1[1][0]; // left
  p4 = vid.pixels[mc+1]*k1[1][1]; // center pixel
  p5 = vid.pixels[mr+1]*k1[1][2]; // right
  p6 = vid.pixels[ll+1]*k1[2][0]; // lower left
  p7 = vid.pixels[lc+1]*k1[2][1]; // lower mid
  p8 = vid.pixels[lr+1]*k1[2][2]; // lower right
  var green = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/pond;

  p0 = vid.pixels[ul+2]*k1[0][0]; // upper left
  p1 = vid.pixels[uc+2]*k1[0][1]; // upper mid
  p2 = vid.pixels[ur+2]*k1[0][2]; // upper right
  p3 = vid.pixels[ml+2]*k1[1][0]; // left
  p4 = vid.pixels[mc+2]*k1[1][1]; // center pixel
  p5 = vid.pixels[mr+2]*k1[1][2]; // right
  p6 = vid.pixels[ll+2]*k1[2][0]; // lower left
  p7 = vid.pixels[lc+2]*k1[2][1]; // lower mid
  p8 = vid.pixels[lr+2]*k1[2][2]; // lower right
  var blue = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/pond;

  vid.pixels[mc] = red;
  vid.pixels[mc+1] = green;
  vid.pixels[mc+2] = blue;
  vid.pixels[mc+3] = vid.pixels[lc+3];
  }
  }	

  vid.updatePixels();
  image(vid, 0, 0, width, height);
}

