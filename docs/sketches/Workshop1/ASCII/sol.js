

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


