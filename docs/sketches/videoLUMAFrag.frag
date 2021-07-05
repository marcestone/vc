precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D texture;


void main() {

  vec4 col = texture2D(texture, 1.0 - vTexCoord);

  float gray = dot(col.rgb, vec3(0.299, 0.587, 0.0114));
  
  gl_FragColor = vec4(vec3(gray), 1.0);
}