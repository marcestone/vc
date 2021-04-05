# Problema:

(imágenes/video) Aplicación de algunas máscaras de convolución.

# Información

## Máscaras de convolución - Kernel (image processing) 

En procesamiento de imagen, un núcleo, kernel, matriz de convolución o máscara es una matriz pequeña que se utiliza para desenfoque, enfoque, realce, detección de bordes y más. Esto se logra realizando una convolución entre un núcleo y una imagen. 

En matemáticas, y en particular análisis funcional, una convolución es un operador matemático que transforma dos funciones f y g en una tercera función que en cierto sentido representa la magnitud en la que se superponen f y una versión trasladada e invertida de g. Una convolución es un tipo muy general de media móvil, como se puede observar si una de las funciones se toma como la función característica de un intervalo. 



# Solución

## Imagenes

Código para imagenes, lo uncio que cambia es el kernel entre ellas (matiz de convolución):

``` javascript
let img;

function preload() {
    img = loadImage('/vc/docs/sketches/lenna.png')
  }
  
  function setup() {
    createCanvas(img.width, img.height);
    pixelDensity(1);
  }
  
  function draw() {
  
    var k1 = [[1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]];
  
    var pond = 9

    //image(img, 0, 0); // Displays the image from point (0,0) 
    img.loadPixels();
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
        //auxImg.pixels[4*(y*img.width + x)] = color(sumR, sumG, sumB)
        auxImg.pixels[4*(y*img.width + x)] = sumR;
        auxImg.pixels[4*(y*img.width + x) + 1] = sumG;
        auxImg.pixels[4*(y*img.width + x) + 2] = sumB;
        auxImg.pixels[4*(y*img.width + x) + 3] = 255;
            }
    
    }
    // State that there are changes to auxImg.pixels[]
    auxImg.updatePixels();
    //img.updatePixels();
    //image(auxImg, width/2, 0); // Draw the new image
    image(auxImg, 0, 0, img.width, img.height);
    noLoop(); // we want you to have control of the blur
  }


``` 

### Identidad

``` javascript

    var k1 = [[0, 0, 0],
              [0, 1, 0],
              [0, 0, 0]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernel4.js, width=512, height=512

### Boxblur

``` javascript

    var k1 = [[1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernel.js, width=512, height=512

### Edge detection

``` javascript

    var k1 = [[-1, -1, -1],
            [-1, 8, -1],
            [-1, -1, -1]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernel2.js, width=512, height=512


### Sharpen

``` javascript

    var k1 = [[0, -1, 0],
            [-1, 5, -1],
            [0, -1, 0]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernel3.js, width=512, height=512


## Video

Código para video, lo unico que cambia es el kernel entre ellas (matriz de convolución):



``` javascript

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

  blurImg=blur(blur(blur(blur(vid))))


  image(blurImg, 0, 0, blurImg.width, blurImg.height);
}


  
function blur(img) { 


  var k1 = [[1, 2, 1],
  [2, 4, 2],
  [1, 2, 1]];
  var pond = 16

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



``` 

### Gaussian blur

``` javascript

  var k1 = [[1, 2, 1],
            [2, 4, 2],
            [1, 2, 1]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernelvideo.js, width=320, height=512


### Edge Detection

``` javascript

  var k1 = [[-1, -1, -1],
            [-1, 8, -1],
            [-1, -1, -1]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernelvideo2.js, width=320, height=512


# Conclusiones

Las máscaras de convolución son útiles para extractar información relevante de una imagen se utilizan para desenfoque, enfoque, realce, detección de bordes y más.

## Fuentes

- https://en.wikipedia.org/wiki/Kernel_(image_processing)

- https://es.wikipedia.org/wiki/Convoluci%C3%B3n

- https://processing.org/examples/edgedetection.html

- https://idmnyu.github.io/p5.js-image/Blur/index.html#kernel
