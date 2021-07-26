let theShader;
let img;

function preload(){
    theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/RGBFrag.frag',shaderLoaded);
    img = loadImage('/vc/docs/sketches/lenna.png', ImageLoaded)
}

function setup(){   
    createCanvas(512, 512,WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(theShader);
    theShader.setUniform('texture', img)
}

function draw(){
    background(0);
    beginShape();
    vertex(-width/2, -height/2,0,0,0);
    vertex(width/2, -height/2,0,1,0);
    vertex(width/2, height/2,0,1,1);
    vertex(-width/2, height/2,0,0,1);
    endShape(CLOSE);
}

function ImageLoaded(){
    console.log('image loaded textureShader')
  }

function shaderLoaded(){
    console.log('shaderLoaded')
  }