let img, files, images;
let pixel_size = 16

function setup() {
  createCanvas(512, 512)
  loadImage("/vc/docs/sketches/lenna.png", (loadedImage) => {
    img = loadedImage 
    preProcessImage()
    image(img, 0, 0);
  })
}

function draw() {
  noLoop();
}

function preProcessImage(){
  var new_pixels = []
  pixelDensity(1)
  img.loadPixels()

  for (let h = 0; h < img.height; h+=pixel_size) {
    for (let w = 0; w < img.width; w+=pixel_size) {
      new_pixels.push([0,0,0])

      for (let j = 0; j < pixel_size; j++) {
        const wihi = 4 * ((h + j) * img.width + w)
        const wfhi = 4 * ((h + j) * img.width + (w + pixel_size))

        for (let i = wihi; i < wfhi; i+=4) {
          const [r, g, b] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]] // get pixel rgb
          new_pixels[new_pixels.length -1][0] = new_pixels[new_pixels.length -1][0] + r 
          new_pixels[new_pixels.length -1][1] = new_pixels[new_pixels.length -1][1] + g 
          new_pixels[new_pixels.length -1][2] = new_pixels[new_pixels.length -1][2] + b 
        }
      }
      
      new_pixels[new_pixels.length -1][0] = new_pixels[new_pixels.length -1][0] / (pixel_size * pixel_size) 
      new_pixels[new_pixels.length -1][1] = new_pixels[new_pixels.length -1][1] / (pixel_size * pixel_size)
      new_pixels[new_pixels.length -1][2] = new_pixels[new_pixels.length -1][2] / (pixel_size * pixel_size)


      for (let j = 0; j < pixel_size; j++) {
        const wihi = 4 * ((h + j) * img.width + w)
        const wfhi = 4 * ((h + j) * img.width + (w + pixel_size))

        for (let i = wihi; i < wfhi; i+=4) {
          img.pixels[i] = new_pixels[new_pixels.length -1][0]
          img.pixels[i+1] = new_pixels[new_pixels.length -1][1]
          img.pixels[i+2] = new_pixels[new_pixels.length -1][2]
        }
      }

    }
  }
  img.updatePixels()
}