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


  
  //image(vid, 0, 0); // Displays the image from point (0,0) 
  vid.loadPixels();

  edgeImg=edge(vid)

  image(edgeImg, 0, 0, edgeImg.width, edgeImg.height);
}


  
function edge(img) { 


  var k1 = [[-1, -1, -1],
            [-1, 8, -1],
            [-1, -1, -1]];
  var pond = 1

  // Create an opaque image of the same size as the original
  auxImg = createImage(img.width, img.height, RGB);
  auxImg.loadPixels();
  // Loop through every pixel in the image.

  var w = img.width;
  var h = img.height;
  for (var x = 1; x < w-1; x++) {
    for (var y = 1; y < h-1; y++) {

      var sumR = 0; // Kernel sum for this pixel
      var sumG = 0; // Kernel sum for this pixel
      var sumB = 0; // Kernel sum for this pixel

      for (var ky = -1; ky <= 1; ky++) {
        for (var kx = -1; kx <= 1; kx++) {
          // Calculate the adjacent pixel for this kernel point
          var pos =   4 *  (((y + ky)) * w + (x + kx)); 
          // Image is grayscale, red/green/blue are identical
          var valR = img.pixels[pos];
          var valG = img.pixels[pos+1];
          var valB = img.pixels[pos+2];
          // Multiply adjacent pixels based on the kernel values
          sumR += k1[ky+1][kx+1] * valR;
          sumG += k1[ky+1][kx+1] * valG;
          sumB += k1[ky+1][kx+1] * valB;
        }
      }
      sumR =sumR/ pond
      sumG =sumG/ pond
      sumB =sumB/ pond

      // For this pixel in the new image, set the gray value
      // based on the sum from the kernel
      auxImg.pixels[4*(y*img.width + x)] = sumR;
      auxImg.pixels[4*(y*img.width + x) + 1] = sumG;
      auxImg.pixels[4*(y*img.width + x) + 2] = sumB;
      auxImg.pixels[4*(y*img.width + x) + 3] = 255;
    }
    
  }
  // State that there are changes to auxImg.pixels[]
  auxImg.updatePixels();
  return auxImg;

}

