let img;
let theShader;
let width = 400;
let height = 480;
let caracs = []; 

function preload(){
    theShader = loadShader('/vc/docs/sketches/ascii_images/shader.vert','/vc/docs/sketches/ascii_images/ascii.frag',shaderLoaded);
    img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example8.jpg',ImageLoaded);

    for(let i = 1; i <= 11; i++){
        caracs[i-1]= loadImage('/vc/docs/sketches/ascii_images/'+i+'.png');
    }

}

function setup(){
    createCanvas(width, height, WEBGL); 
    noStroke();
    textureMode(NORMAL);
    shader(theShader);

    theShader.setUniform('img', img);
    for(let i = 1; i <= 11; i++){
        theShader.setUniform('car_'+i, caracs[i-1]);
    }
}

function draw(){


    background(0);
    beginShape();
    vertex(-width/2, -height/2, 0, 0, 0);
    vertex(width/2, -height/2, 0, 1, 0);
    vertex(width/2, height/2, 0, 1, 1);
    vertex(-width/2, height/2, 0, 0, 1);
    endShape(CLOSE);

}

function ImageLoaded(){
    console.log('image loaded textureShader')
  }

function shaderLoaded(){
    console.log('shaderLoaded')
  }

