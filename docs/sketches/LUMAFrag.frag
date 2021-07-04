precision mediump float;

// texture is sent by the sketch
uniform sampler2D texture;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {
  // texture2D(texture, vTexCoord) samples texture at vTexCoord 
  // and returns the normalized texel color
  // texel color times vVertexColor gives the final normalized pixel color
  vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
  float gray = dot(col.rgb, vec3(0.299, 0.587, 0.0114));
  gl_FragColor = vec4(vec3(gray), 1.0);
  //gl_FragColor = texture2D(texture, vTexCoord) * vVertexColor;  
}