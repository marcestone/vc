let mosaicImages
let indexImages
let theShader
let img

function preload(){
    theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/mosaicShader.frag')
    img = loadImage('/vc/docs/sketches/lenna.png')
    mosaicImages = loadImage('/vc/docs/sketches/mosaicImages.jpg')
    indexImages = loadImage('/vc/docs/sketches/indexImage.jpg')
}

function setup(){   
    createCanvas(512, 512,WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(theShader);

    theShader.setUniform('image', img)
    theShader.setUniform('mosaicImages', mosaicImages)
    theShader.setUniform('indexImages', indexImages)
    theShader.setUniform('resolution', 200)

    background(0);
    beginShape();
    vertex(-width/2, -height/2,0,0,0);
    vertex(width/2, -height/2,0,1,0);
    vertex(width/2, height/2,0,1,1);
    vertex(-width/2, height/2,0,0,1);
    endShape(CLOSE);
}