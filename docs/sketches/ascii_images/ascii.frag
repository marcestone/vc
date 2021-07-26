precision mediump float;

uniform int image_mode;

// Base image
uniform sampler2D base_img;

// Images list of symbols to replace;
uniform float carac[69];

uniform float resolution;

uniform vec4 asd;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {

  vec2 symbolCoord = vTexCoord * resolution;
  //[0, Resolution] (R)
  vec2 imageCoord = floor(symbolCoord); 
  //[0, Resolution] (Z)
  symbolCoord = symbolCoord - imageCoord; 
  //[0, 0.99] (R)
  imageCoord = imageCoord*vec2(1.0)/vec2(resolution);
  //[0, 0.99] (R)

  vec4 color = texture2D(base_img, imageCoord) * vVertexColor;

  // Get gray color of image by Luma
  float colorgrey = (color.r + color.g + color.b)/3.0;
  int indexasd = int(68.0 * colorgrey);
  // Set symbol by gray color
  // if(indexasd == 1){
  //   color = texture2D(caracter_1, symbolCoord);
  // } else if(indexasd == 2){
  //   color = texture2D(caracter_2 symbolCoord);
  // }else if(indexasd == 3){
  //   color = texture2D(caracter_3 symbolCoord);
  // }else if(indexasd == 4){
  //   color = texture2D(caracter_4 symbolCoord);
  // }else if(indexasd == 5){
  //   color = texture2D(caracter_5 symbolCoord);
  // }else if(indexasd == 6){
  //   color = texture2D(caracter_6 symbolCoord);
  // }else if(indexasd == 7){
  //   color = texture2D(caracter_7 symbolCoord);
  // }else if(indexasd == 8){
  //   color = texture2D(caracter_8 symbolCoord);
  // }else if(indexasd == 9){
  //   color = texture2D(caracter_9 symbolCoord);
  // }else if(indexasd == 10){
  //   color = texture2D(caracter_10 symbolCoord);
  // }else if(indexasd == 11){
  //   color = texture2D(caracter_11 symbolCoord);
  // }else if(indexasd == 12){
  //   color = texture2D(caracter_12 symbolCoord);
  // }else if(indexasd == 13){
  //   color = texture2D(caracter_13 symbolCoord);
  // }else if(indexasd == 14){
  //   color = texture2D(caracter_14 symbolCoord);
  // }else if(indexasd == 15){
  //   color = texture2D(caracter_15 symbolCoord);
  // }else if(indexasd == 16){
  //   color = texture2D(caracter_16 symbolCoord);
  // }else if(indexasd == 17){
  //   color = texture2D(caracter_17 symbolCoord);
  // }else if(indexasd == 18){
  //   color = texture2D(caracter_18 symbolCoord);
  // }else if(indexasd == 19){
  //   color = texture2D(caracter_19 symbolCoord);
  // }else if(indexasd == 20){
  //   color = texture2D(caracter_20 symbolCoord);
  // }else if(indexasd == 21){
  //   color = texture2D(caracter_21 symbolCoord);
  // }else if(indexasd == 22){
  //   color = texture2D(caracter_22 symbolCoord);
  // }else if(indexasd == 23){
  //   color = texture2D(caracter_23 symbolCoord);
  // }else if(indexasd == 24){
  //   color = texture2D(caracter_24 symbolCoord);
  // }else if(indexasd == 25){
  //   color = texture2D(caracter_25 symbolCoord);
  // }else if(indexasd == 26){
  //   color = texture2D(caracter_26 symbolCoord);
  // }else if(indexasd == 27){
  //   color = texture2D(caracter_27 symbolCoord);
  // }else if(indexasd == 28){
  //   color = texture2D(caracter_28 symbolCoord);
  // }else if(indexasd == 29){
  //   color = texture2D(caracter_29 symbolCoord);
  // }else if(indexasd == 30){
  //   color = texture2D(caracter_30 symbolCoord);
  // }else if(indexasd == 31){
  //   color = texture2D(caracter_31 symbolCoord);
  // }else if(indexasd == 32){
  //   color = texture2D(caracter_32 symbolCoord);
  // }else if(indexasd == 33){
  //   color = texture2D(caracter_33 symbolCoord);
  // }else if(indexasd == 34){
  //   color = texture2D(caracter_34 symbolCoord);
  // }else if(indexasd == 35){
  //   color = texture2D(caracter_35 symbolCoord);
  // }else if(indexasd == 36){
  //   color = texture2D(caracter_36 symbolCoord);
  // }else if(indexasd == 37){
  //   color = texture2D(caracter_37 symbolCoord);
  // }else if(indexasd == 38){
  //   color = texture2D(caracter_38 symbolCoord);
  // }else if(indexasd == 39){
  //   color = texture2D(caracter_39 symbolCoord);
  // }else if(indexasd == 40){
  //   color = texture2D(caracter_40 symbolCoord);
  // }
  gl_FragColor = color;
  
}