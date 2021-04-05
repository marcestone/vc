
function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png')
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
}

function draw() {

  var k1 = [[0, 0, 0],
              [0, 1, 0],
              [0, 0, 0]];

  img.loadPixels();

  var w = img.width;
  var h = img.height;
  var pond = 1;
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
        
      p0 = img.pixels[ul]*k1[0][0]; // upper left
      p1 = img.pixels[uc]*k1[0][1]; // upper mid
      p2 = img.pixels[ur]*k1[0][2]; // upper right
      p3 = img.pixels[ml]*k1[1][0]; // left
      p4 = img.pixels[mc]*k1[1][1]; // center pixel
      p5 = img.pixels[mr]*k1[1][2]; // right
      p6 = img.pixels[ll]*k1[2][0]; // lower left
      p7 = img.pixels[lc]*k1[2][1]; // lower mid
      p8 = img.pixels[lr]*k1[2][2]; // lower right
      var red = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/pond;
        
      p0 = img.pixels[ul+1]*k1[0][0]; // upper left
      p1 = img.pixels[uc+1]*k1[0][1]; // upper mid
      p2 = img.pixels[ur+1]*k1[0][2]; // upper right
      p3 = img.pixels[ml+1]*k1[1][0]; // left
      p4 = img.pixels[mc+1]*k1[1][1]; // center pixel
      p5 = img.pixels[mr+1]*k1[1][2]; // right
      p6 = img.pixels[ll+1]*k1[2][0]; // lower left
      p7 = img.pixels[lc+1]*k1[2][1]; // lower mid
      p8 = img.pixels[lr+1]*k1[2][2]; // lower right
      var green = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/pond;
        
      p0 = img.pixels[ul+2]*k1[0][0]; // upper left
      p1 = img.pixels[uc+2]*k1[0][1]; // upper mid
      p2 = img.pixels[ur+2]*k1[0][2]; // upper right
      p3 = img.pixels[ml+2]*k1[1][0]; // left
      p4 = img.pixels[mc+2]*k1[1][1]; // center pixel
      p5 = img.pixels[mr+2]*k1[1][2]; // right
      p6 = img.pixels[ll+2]*k1[2][0]; // lower left
      p7 = img.pixels[lc+2]*k1[2][1]; // lower mid
      p8 = img.pixels[lr+2]*k1[2][2]; // lower right
      var blue = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/pond;
        
      img.pixels[mc] = red;
      img.pixels[mc+1] = green;
      img.pixels[mc+2] = blue;
      img.pixels[mc+3] = img.pixels[lc+3];
    }
    }	
  
  img.updatePixels();
  image(img, 0, 0, img.width, img.height);
  noLoop(); // we want you to have control of the blur
}
