# Problema:

Introducir el análisis de imágenes/video al implementar: Conversión de la imagen a ASCII Art Hardware.

# Información

## ASCII Art

El arte ASCII es una técnica de diseño gráfico que consta de imágenes ensambladas a partir de los 95 caracteres de impresión  (de un total de 128) definidos por el estándar ASCII de 1963, adicionando los conjuntos de caracteres compatibles con ASCII con caracteres extendidos patentados (más allá de los 128 caracteres de ASCII estándar de 7 bits).


# Solución

## Conversión a ASCII Art

Javascript:

``` javascript


let img;
let theShader;
let width = 400;
let height = 480;
let caracs = []; 

function preload(){
    theShader = loadShader('/vc/docs/sketches/ascii_images/shader.vert','/vc/docs/sketches/ascii_images/ascii.frag',shaderLoaded);
    img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example8.jpg',ImageLoaded);

    for(let i = 1; i <= 11; i++){
        caracs[i-1]= loadImage('/vc/docs/sketches/ascii_images/'+i+'.png');
    }

}

function setup(){
    createCanvas(width, height, WEBGL); 
    noStroke();
    textureMode(NORMAL);
    shader(theShader);

    theShader.setUniform('img', img);
    for(let i = 1; i <= 11; i++){
        theShader.setUniform('car_'+i, caracs[i-1]);
    }
}

function draw(){


    background(0);
    beginShape();
    vertex(-width/2, -height/2, 0, 0, 0);
    vertex(width/2, -height/2, 0, 1, 0);
    vertex(width/2, height/2, 0, 1, 1);
    vertex(-width/2, height/2, 0, 0, 1);
    endShape(CLOSE);

}

function ImageLoaded(){
    console.log('image loaded textureShader')
  }

function shaderLoaded(){
    console.log('shaderLoaded')
  }



``` 
Código fragment shader:

``` javascript

precision mediump float;

uniform sampler2D img;

uniform sampler2D car_1,car_2,car_3,car_4,car_5,car_6,car_7,car_8,car_9,car_10,car_11;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {

  vec2 pixelCoord = vTexCoord * 100.0;

  pixelCoord = pixelCoord - floor(pixelCoord); 

  vec4 car = texture2D(img, vTexCoord) * vVertexColor;

  float grey = (car.r + car.g + car.b)/3.0;
  int indexasd = int(11.0* grey);

  if(indexasd == 1){
    car = texture2D(car_1, pixelCoord);
  } else if(indexasd == 2){
    car = texture2D(car_2, pixelCoord);
  }else if(indexasd == 3){
    car = texture2D(car_3, pixelCoord);
  } else if(indexasd == 4){
    car = texture2D(car_4, pixelCoord);
  } else if(indexasd == 5){
    car = texture2D(car_5, pixelCoord);
  } else if(indexasd == 6) {
    car = texture2D(car_6, pixelCoord);
  }else if(indexasd == 7)  {
    car = texture2D(car_7, pixelCoord);
  } else if(indexasd == 8) {
    car = texture2D(car_8, pixelCoord);
  } else if(indexasd == 9) {
    car = texture2D(car_9, pixelCoord);
  } else if(indexasd == 10) {
    car = texture2D(car_10, pixelCoord);
  }else {
    car = texture2D(car_5, pixelCoord);
  }
  
  gl_FragColor = car;
  
}



``` 

Imagen Original:

> :P5 sketch=/docs/sketches/Workshop1/ASCII/original.js, width=400, height=500

Resultado:

> :P5 lib1=https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js, sketch=/docs/sketches/ascii_hardware.js, width=400, height=480



## Fuentes

- https://en.wikipedia.org/wiki/ASCII_art

- https://www.tetoki.eu/asciiart/