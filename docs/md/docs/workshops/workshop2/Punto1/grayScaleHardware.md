# Problema:

Introducir el análisis de imágenes/video al implementar: Conversión a escala de grises: promedio rgb y LUMA por hardware.

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

Código shader:

``` javascript
precision highp float;

attribute vec3 aPosition;

attribute vec2 aTexCoord;

attribute vec4 aVertexColor;

uniform mat4 uProjectionMatrix;

uniform mat4 uModelViewMatrix;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {
  vVertexColor = aVertexColor;
  vTexCoord = aTexCoord;
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
}
``` 

## Conversión a escala de grises: promedio RGB

Código para una imagen:

``` javascript
let theShader;
let img;

function preload(){
    theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/RGBFrag.frag',shaderLoaded);
    img = loadImage('/vc/docs/sketches/lenna.png', ImageLoaded)
}

function setup(){   
    createCanvas(512, 512,WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(theShader);
    theShader.setUniform('texture', img)
}

function draw(){
    background(0);
    beginShape();
    vertex(-width/2, -height/2,0,0,0);
    vertex(width/2, -height/2,0,1,0);
    vertex(width/2, height/2,0,1,1);
    vertex(-width/2, height/2,0,0,1);
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

uniform sampler2D texture;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {
  vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
  float RGBAverage = (col.r + col.g + col.b) * 0.33;
  gl_FragColor = vec4(vec3(RGBAverage, RGBAverage, RGBAverage), 1.0);
}
``` 

Resultado:
> :P5 sketch=/docs/sketches/hardwareRGBAverage.js, width=512, height=512

Código para un video:

``` javascript

 let theShader;
 let vid;

 function preload(){
    theShader = loadShader('/vc/docs/sketches/shader2.vert', '/vc/docs/sketches/videoRGBFrag.frag');
 }

 function setup() {
   createCanvas(320, 240, WEBGL);
   vid = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
   vid.hide();
   vid.loop();
   fill(0);
 }

 function draw() {
   shader(theShader);
   theShader.setUniform('texture', vid);
   rect(0,0,width,height);
 }
```

Código fragment shader:

``` javascript
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D texture;

varying vec4 vVertexColor;


void main() {
  
  vec4 tex = texture2D(texture, 1.0 - vTexCoord);

  float RGBAverage = (tex.r + tex.g + tex.b) * 0.333;

  gl_FragColor = vec4(vec3(RGBAverage, RGBAverage, RGBAverage), 1.0);
}
``` 

Resultado video:
> :P5 sketch=/docs/sketches/hardwareRGBAverageVideo.js, width=320, height=240
 

## Conversión a escala de grises: Luma

Código para una imagen:


``` javascript
let theShader;
let img;

function preload(){
    theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/LUMAFrag.frag',shaderLoaded);
    img = loadImage('/vc/docs/sketches/lenna.png', ImageLoaded)
}

function setup(){   
    createCanvas(512, 512,WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(theShader);
    theShader.setUniform('texture', img)
}

function draw(){
    background(0);
    beginShape();
    vertex(-width/2, -height/2,0,0,0);
    vertex(width/2, -height/2,0,1,0);
    vertex(width/2, height/2,0,1,1);
    vertex(-width/2, height/2,0,0,1);
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

uniform sampler2D texture;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {
  vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
  float gray = dot(col.rgb, vec3(0.299, 0.587, 0.0114));
  gl_FragColor = vec4(vec3(gray), 1.0);
}
```

Resultado:

> :P5 sketch=/docs/sketches/hardwareLUMA.js, width=512, height=512


Código para un video:

``` javascript

 
 let theShader;
 let vid;

 function preload(){
    theShader = loadShader('/vc/docs/sketches/shader2.vert', '/vc/docs/sketches/videoLUMAFrag.frag');
 }

 function setup() {
   createCanvas(320, 240, WEBGL);
   vid = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
   vid.hide();
   vid.loop();
   fill(0);
 }

 function draw() {
   shader(theShader);
   theShader.setUniform('texture', vid);
   rect(0,0,width,height);
 }
```

Código fragment shader:

``` javascript
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D texture;


void main() {

  vec4 col = texture2D(texture, 1.0 - vTexCoord);

  float gray = dot(col.rgb, vec3(0.299, 0.587, 0.0114));
  
  gl_FragColor = vec4(vec3(gray), 1.0);
}
``` 

Resultado video:
> :P5 sketch=/docs/sketches/hardwareLUMAVideo.js, width=320, height=240



## Fuentes

- https://es.wikipedia.org/wiki/RGB

- https://es.wikipedia.org/wiki/Luma_(video)
