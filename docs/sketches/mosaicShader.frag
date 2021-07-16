precision mediump float;

// texture is sent by the sketch
uniform sampler2D image;
uniform sampler2D symbol;
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {

  vec2 symbolCoord = vTexCoord * resolution;
  vec2 imageCoord = floor(symbolCoord);

  symbolCoord = symbolCoord - imageCoord;

  imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

  vec4 index = texture2D(image, imageCoord);

  gl_FragColor = texture2D(symbol, symbolCoord);
}

  
