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