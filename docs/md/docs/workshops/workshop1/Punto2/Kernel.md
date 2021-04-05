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
function preload() {
    img = loadImage('/vc/docs/sketches/lenna.png')
  }
  
  function setup() {
    createCanvas(img.width, img.height);
    pixelDensity(1);
  }
  
  function draw() {
    background(0, 0, 0);
  
    var k1 = [[1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]];
  
    img.loadPixels();
    
    var w = img.width;
    var h = img.height;
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
        var red = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/9;
          
        p0 = img.pixels[ul+1]*k1[0][0]; // upper left
        p1 = img.pixels[uc+1]*k1[0][1]; // upper mid
        p2 = img.pixels[ur+1]*k1[0][2]; // upper right
        p3 = img.pixels[ml+1]*k1[1][0]; // left
        p4 = img.pixels[mc+1]*k1[1][1]; // center pixel
        p5 = img.pixels[mr+1]*k1[1][2]; // right
        p6 = img.pixels[ll+1]*k1[2][0]; // lower left
        p7 = img.pixels[lc+1]*k1[2][1]; // lower mid
        p8 = img.pixels[lr+1]*k1[2][2]; // lower right
        var green = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/9;
          
        p0 = img.pixels[ul+2]*k1[0][0]; // upper left
        p1 = img.pixels[uc+2]*k1[0][1]; // upper mid
        p2 = img.pixels[ur+2]*k1[0][2]; // upper right
        p3 = img.pixels[ml+2]*k1[1][0]; // left
        p4 = img.pixels[mc+2]*k1[1][1]; // center pixel
        p5 = img.pixels[mr+2]*k1[1][2]; // right
        p6 = img.pixels[ll+2]*k1[2][0]; // lower left
        p7 = img.pixels[lc+2]*k1[2][1]; // lower mid
        p8 = img.pixels[lr+2]*k1[2][2]; // lower right
        var blue = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/9;
          
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

Código para video, lo uncio que cambia es el kernel entre ellas (matiz de convolución):


### Boxblur

``` javascript

    var k1 = [[1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]];

``` 

Resultado:

> :P5 sketch=/docs/sketches/kernel.js, width=320, height=240


# Conclusiones

Las máscaras de convolución son útiles para extractar información relevante de una imagen se utilizan para desenfoque, enfoque, realce, detección de bordes y más.

## Fuentes

- https://en.wikipedia.org/wiki/Kernel_(image_processing)

- https://es.wikipedia.org/wiki/Convoluci%C3%B3n

- https://processing.org/examples/edgedetection.html

- https://idmnyu.github.io/p5.js-image/Blur/index.html#kernel
