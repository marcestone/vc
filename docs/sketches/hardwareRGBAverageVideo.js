
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