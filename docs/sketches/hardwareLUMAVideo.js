
 let theShader;
 let vid;

 function preload(){
    theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/videoLUMAFrag.frag');
 }

 function setup() {
   createCanvas(320, 240, WEBGL);
   vid = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
   vid.loop();
   noStroke();
   fill(0);
 }

 function draw() {
   shader(theShader);
   theShader.setUniform('texture', vid);
   rect(0,0,width,height);
 }