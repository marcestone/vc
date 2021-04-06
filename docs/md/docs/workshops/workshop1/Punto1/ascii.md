# Problema:

Introducir el análisis de imágenes/video al implementar: Conversión de la imagen a ASCII Art.

# Información

## ASCII Art

El arte ASCII es una técnica de diseño gráfico que consta de imágenes ensambladas a partir de los 95 caracteres de impresión  (de un total de 128) definidos por el estándar ASCII de 1963, adicionando los conjuntos de caracteres compatibles con ASCII con caracteres extendidos patentados (más allá de los 128 caracteres de ASCII estándar de 7 bits).


# Solución

## Conversión a ASCII Art


``` javascript


let img;
const caracteres =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

function preload() {
    img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example8.jpg');
}

function setup() {
  
  createCanvas(400, 700);
  ConvertToText(img)
}


function ConvertToText(img) {
  img.resize(160, 200)
  textFont("monospace")
  textSize(4)
  textLeading(3)

  grices = []
  for (let j = 0; j < img.height; j++) {
      for (let i = 0; i < img.width; i++) {
          tono = img.get(i, j);
          grices.push(tono[0])
      }
  }

  ascii = "";
  for( var i = 0; i<grices.length;i++){
    let Siguiente = caracteres[Math.ceil(((caracteres.length - 1) * grices[i]) / 255)];
    Siguiente = (i + 1) % img.width == 0 ? "\n" : Siguiente;
    ascii += Siguiente;
  }

  text(ascii, 0, 0);

}

``` 

Imagen Original:

> :P5 sketch=/docs/sketches/Workshop1/ASCII/original.js, width=400, height=500

Resultado:

> :P5 sketch=/docs/sketches/Workshop1/ASCII/sol.js, width=400, height=700


# Conclusiones

Esta tecnica de conversion se basa en la creacion de una matriz de pesos la cual asigna a cada pixel en pantalla un caracter ASCII, teniendo en cuenta los pixeles adyacentes al momento de hacerlo. 

## Fuentes

- https://en.wikipedia.org/wiki/ASCII_art

- https://www.tetoki.eu/asciiart/
