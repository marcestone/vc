let img, my_shader, ascii_img;
let width = 400;
let height = 700;
let resolution = 100.0;
let symbol = []; 

let symbol_links = [
    "/vc/docs/sketches/ascii_images/symbol1.png",
    "/vc/docs/sketches/ascii_images/symbol2.png",
    "/vc/docs/sketches/ascii_images/symbol3.png",
    "/vc/docs/sketches/ascii_images/symbol4.png",
    "/vc/docs/sketches/ascii_images/symbol5.png",
    "/vc/docs/sketches/ascii_images/symbol6.png",
    "/vc/docs/sketches/ascii_images/symbol7.png",
    "/vc/docs/sketches/ascii_images/symbol8.png",
    "/vc/docs/sketches/ascii_images/symbol9.png",
    "/vc/docs/sketches/ascii_images/symbol10.png"
]  

function preload(){
    img = loadImage('/vc/docs/sketches/Workshop1/ASCII/example8.jpg');
    ascii_img = loadImage('/vc/docs/sketches/ascii_images/ascii_char4.jpg');
    my_shader = loadShader('/vc/docs/sketches/ascii_images/shader.vert','/vc/docs/sketches/ascii_images/ascii.frag');
    let counter = 0;
    for(let i = 0; i<10;i++){
        for(j = 0; j<= 6; j++){
            let offset = 1;
            if(j==6){
                offset=0;
            }
            let c = ascii_img.get(61*i+(30+(1*i)),18*j+offset,10,13)
            symbol[counter]= loadImage(symbol_links[i]);
            counter++;
        }
    }
    
}

function setup(){
    createCanvas(400, 700, WEBGL); 
    textureMode(NORMAL);
    noStroke();
    shader(my_shader);
    
    my_shader.setUniform('base_img', img);

    // Set symbol image 
   
    my_shader.setUniform('carac', symbol);
    my_shader.setUniform('resolution', resolution);
}

function draw(){

    let side = width/2;

    background(255);

    beginShape();
        vertex(-side, -side, 0, 0, 0);
        vertex(side, -side, 0, 1, 0);
        vertex(side, side, 0, 1, 1);
        vertex(-side, side, 0, 0, 1);
    endShape();

}

// let img, my_shader;
// let width = 200;
// let height = 1000;
// let resolution = 100.0;
// let symbol = []; 
// function preload(){
//     img = loadImage('/vc/docs/sketches/ascii_images/ascii_char4.jpg');
//     my_shader = loadShader('/vc/docs/sketches/ascii_images/shader.vert','/vc/docs/sketches/ascii_images/ascii.frag');

//     for(let i = 0; i < 10; i++){
//         symbol[i]= loadImage(symbol_links[i]);
//     }
// }

// function setup(){
//     createCanvas(1000, 1050); 
//     textureMode(NORMAL);
//     // noStroke();
//     // shader(my_shader);
    
//     // my_shader.setUniform('base_img', img);

//     // // Set symbol image 
//     // for(let i = 1; i < Object.keys(symbol).length; i++){
//     //     my_shader.setUniform('symbol_'+i, symbol[i]);
//     // }
//     // my_shader.setUniform('resolution', resolution);
    
//     for(let i = 0; i<10;i++){
//         for(j = 0; j<= 6; j++){
//             let offset = 1;
//             if(j==6){
//                 offset=0;
//             }
//             let c = img.get(61*i+(30+(1*i)),18*j+offset,10,13)
//             image(c, j*60, i*30, 30, 30);
//         }
        
//     }

   
// }

// function draw(){

//     // let side = width/2;

//     // background(255);

//     // beginShape();
//     //     vertex(-side, -side, 0, 0, 0);
//     //     vertex(side, -side, 0, 1, 0);
//     //     vertex(side, side, 0, 1, 1);
//     //     vertex(-side, side, 0, 0, 1);
//     // endShape();
   
// }