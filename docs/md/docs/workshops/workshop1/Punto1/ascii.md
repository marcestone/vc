# Problema:

Introducir el análisis de imágenes/video al implementar: Conversión de la imagen a ASCII Art.

# Información

## ASCII Art

El arte ASCII es una técnica de diseño gráfico que consta de imágenes ensambladas a partir de los 95 caracteres de impresión  (de un total de 128) definidos por el estándar ASCII de 1963, adicionando los conjuntos de caracteres compatibles con ASCII con caracteres extendidos patentados (más allá de los 128 caracteres de ASCII estándar de 7 bits).


# Solución

## Conversión a ASCII Art


``` javascript
function preload() {
  img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example7.jpg');

}

function setup() {
  createCanvas(640, 480); 
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);
  myAsciiArt = new AsciiArt(this);
  myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
  noStroke(); fill(255);
  frameRate(30);
}

function draw() {
    background(0);
    gfx.image(img, 0, 0, gfx.width, gfx.height);
    gfx.filter(POSTERIZE, 3);
    ascii_arr = myAsciiArt.convert(gfx);
    myAsciiArt.typeArray2d(ascii_arr, this);
    tint(255, 1);
    image(img, 0, 0, width, height);
}
``` 

Imagen Original:

> :P5 sketch=/docs/sketches/Workshop1/ASCII/original.js, width=640, height=500

Resultado:

> :P5 sketch=/docs/sketches/Workshop1/ASCII/sol.js, width=640, height=500


# Conclusiones

Esta tecnica de conversion se basa en la creacion de una matriz de pesos la cual asigna a cada pixel en pantalla un caracter ASCII, teniendo en cuenta los pixeles adyacentes al momento de hacerlo. 

## Fuentes

- https://en.wikipedia.org/wiki/ASCII_art

- https://www.tetoki.eu/asciiart/
