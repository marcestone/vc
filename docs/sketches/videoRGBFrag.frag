precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D texture;

varying vec4 vVertexColor;


void main() {
  
  vec4 tex = texture2D(texture, 1.0 - vTexCoord);

  float RGBAverage = (tex.r + tex.g + tex.b) * 0.333;

  gl_FragColor = vec4(vec3(RGBAverage, RGBAverage, RGBAverage), 1.0);
}