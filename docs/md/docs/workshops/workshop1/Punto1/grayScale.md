# Problema:

Introducir el análisis de imágenes/video al implementar: Conversión a escala de grises: promedio rgb y lumaaa.

# Información

## RGB

RGB es la composición del color en términos de la intensidad de los colores primarios de la luz. Es un modelo de color basado en la síntesis aditiva, con el que es posible representar un color mediante la mezcla por adición de los tres colores de luz primarios. El modelo de color RGB no define por sí mismo lo que significa exactamente rojo, verde o azul, por lo que los mismos valores RGB pueden mostrar colores notablemente diferentes en distintos dispositivos que usen este modelo de color. Aunque utilicen un mismo modelo de color, sus espacios de color pueden variar considerablemente.

Una de las opciones para realizar una conversión de una imagen a su equivalente en escala de grises es calculando el promedio de los valores RGB de cada pixel y definiendo los valores de dichos pixeles con el promedio calculado. 

## Luma

En una transmisión de señal de vídeo, luma es la componente que codifica la información de luminosidad de la imagen. En términos generales, es algo muy similar a la versión en blanco y negro de la imagen original. Luma y crominancia combinadas proporcionan la señal denominada señal de vídeo compuesto, utilizada en multitud de aplicaciones; pueden enviarse conjuntamente o transmitirse independientemente. Forman parte de la codificación de vídeo en los estándares de TV NTSC y PAL, entre otros.

Para generar la imagen equivalente en escala de grises, se operan los valores RGB de cada pixel por unos coeficientes predeterminados: 

- R: 0.299 
- G: 0.587 
- B: 0.0.0114


# Solución

## Conversión a escala de grises: promedio RGB

Código para una imagen:

``` javascript
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
      average = (r + g + b) / 3
      img.set(x, y, color(average, average, average))
    }
  }
  img.updatePixels()
}
``` 
Resultado:

> :P5 sketch=/docs/sketches/imageRGBAverage.js, width=512, height=512

Código para un video:

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
  vid.loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      const i = 4 * (y * vid.width + x);
      const [r, g, b] = [vid.pixels[i], vid.pixels[i + 1], vid.pixels[i + 2]]; 
      average = (r + g + b) / 3
      vid.pixels[i] = average;
      vid.pixels[i + 1] = average;
      vid.pixels[i + 2] = average;
    }
  }
  vid.updatePixels();
  image(vid, 0, 0, width, height);
}

``` 

Resultado:

> :P5 sketch=/docs/sketches/videoRGBAverage.js, width=320, height=240

## Conversión a escala de grises: Luma

Código para una imagen:


``` javascript
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
``` 


Resultado:

> :P5 sketch=/docs/sketches/imageLUMA.js, width=512, height=512

Código para un video:

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
``` 

Resultado:

> :P5 sketch=/docs/sketches/videoLUMA.js, width=320, height=240

# Conclusiones

Las dos técnicas anteriores nos proveen un resultado que funciona muy bien para generar un equivalente en escala de grises de la imágen y el video. Además, es fácil de procesar en cuanto a costos computacionales necesarios para realizar las operaciones. 

## Fuentes

- https://es.wikipedia.org/wiki/RGB

- https://es.wikipedia.org/wiki/Luma_(video)
