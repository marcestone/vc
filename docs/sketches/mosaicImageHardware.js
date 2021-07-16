// let img, images;
// let pixel_size;
// let newImage = {pixels: [], height: 0, width: 0}
// let files = ["043431.jpg","060505.jpg","061709.jpg","062627.jpg","070504.jpg","07090d.jpg","090605.jpg","09090b.jpg","0b0806.jpg","0b2b36.jpg","0c0d0e.jpg","0e0d0c.jpg","0e3947.jpg","0f0e12.jpg","100f0d.jpg","101010.jpg","103a0e.jpg","121812.jpg","160e10.jpg","163c3a.jpg","182d2c.jpg","1d2318.jpg","222327.jpg","238e92.jpg","25bbbc.jpg","262626.jpg","272c26.jpg","274141.jpg","274c3a.jpg","282124.jpg","2a2a2a.jpg","2a5e4a.jpg","2f3841.jpg","2f6a89.jpg","303b3f.jpg","303c1e.jpg","31233f.jpg","31aa72.jpg","331f44.jpg","343737.jpg","3572d2.jpg","36312f.jpg","368785.jpg","383a3f.jpg","3a2b20.jpg","3a4324.jpg","3c3c3c.jpg","3e3320.jpg","3e8163.jpg","3f3f3f.jpg","3f511f.jpg","40576e.jpg","405d72.jpg","41413b.jpg","414141.jpg","434343.jpg","453f38.jpg","473328.jpg","474735.jpg","476695.jpg","476931.jpg","484d57.jpg","49652e.jpg","4a2c54.jpg","4b4b4b.jpg","4c296d.jpg","4c4c4c.jpg","4d5460.jpg","4d5b17.jpg","4e3f34.jpg","4e563d.jpg","4f2e27.jpg","506e33.jpg","515046.jpg","515f66.jpg","51817a.jpg","524122.jpg","525a45.jpg","55423d.jpg","584f5b.jpg","599b9d.jpg","5a6345.jpg","5b5650.jpg","5b8db8.jpg","5c783b.jpg","5f673f.jpg","60c1e3.jpg","614f42.jpg","616366.jpg","657546.jpg","685435.jpg","685941.jpg","685f56.jpg","68676d.jpg","68809e.jpg","699853.jpg","6ac2e0.jpg","6b5b4b.jpg","6b5b76.jpg","6c4b55.jpg","6d726a.jpg","6e7846.jpg","6e7e8e.jpg","6eadca.jpg","6f18cc.jpg","6f34b7.jpg","6f588a.jpg","6f6f6f.jpg","6f7172.jpg","6fc1b9.jpg","7090a1.jpg","726f65.jpg","747474.jpg","775885.jpg","775c96.jpg","77804f.jpg","77c2c2.jpg","785b89.jpg","787878.jpg","7b6958.jpg","7c7374.jpg","7d6953.jpg","7ed47e.jpg","818a87.jpg","8197b1.jpg","835330.jpg","83aeab.jpg","855bbb.jpg","888988.jpg","89573c.jpg","8a6d69.jpg","8b8787.jpg","8d4d6c.jpg","8d69cd.jpg","8d8a8a.jpg","8eaca3.jpg","908e8d.jpg","939393.jpg","94898a.jpg","955a41.jpg","9d948f.jpg","9e713c.jpg","9f9d9b.jpg","a03638.jpg","a0a7a1.jpg","a0bdbc.jpg","a3688b.jpg","a44543.jpg","a6262e.jpg","a69075.jpg","a7908a.jpg","a81c48.jpg","a8b4b9.jpg","a9528f.jpg","aa0e0b.jpg","aaaaaa.jpg","ac8ac2.jpg","accbce.jpg","af6118.jpg","afafaf.jpg","b17bcd.jpg","b24e78.jpg","b461a0.jpg","b682a3.jpg","b6b7b8.jpg","b82825.jpg","b8b8b8.jpg","b8c1c0.jpg","b92825.jpg","ba723b.jpg","ba9dbd.jpg","baa388.jpg","bababa.jpg","bc7298.jpg","be5e77.jpg","beadb9.jpg","bfbfbf.jpg","c06c80.jpg","c08b3f.jpg","c11010.jpg","c2addb.jpg","c3396d.jpg","c49766.jpg","c4b348.jpg","c51f29.jpg","c5b148.jpg","c696b1.jpg","c6b6bb.jpg","c6d0da.jpg","c8b9a7.jpg","c9c9c9.jpg","ca2031.jpg","cb2b21.jpg","cbbb4e.jpg","ccd9d9.jpg","cd6664.jpg","ce9fb1.jpg","cf4837.jpg","cfa1f2.jpg","d07065.jpg","d13a3a.jpg","d2d3d0.jpg","d2d7df.jpg","d34d4b.jpg","d393b7.jpg","d48b1d.jpg","d56457.jpg","d5cec2.jpg","d62428.jpg","d677ed.jpg","d79828.jpg","d7c2b9.jpg","d886a0.jpg","d8afca.jpg","d8cab2.jpg","d8d2d2.jpg","d8dce6.jpg","da448e.jpg","dacdd4.jpg","dad6d9.jpg","db8704.jpg","dbc1d8.jpg","dc9437.jpg","dcb7ce.jpg","dd9ecc.jpg","dddcdc.jpg","de4446.jpg","dea06b.jpg","dea458.jpg","dedede.jpg","dfb383.jpg","e1ce4b.jpg","e1d5c1.jpg","e1ded9.jpg","e4d233.jpg","e4dfd9.jpg","e5e5e8.jpg","e6cabd.jpg","e6d9da.jpg","e8c549.jpg","e8c641.jpg","e8d18a.jpg","e8dcd6.jpg","e9b44c.jpg","e9e8e9.jpg","ea8531.jpg","eabfcd.jpg","eac00b.jpg","eadb0c.jpg","eae12c.jpg","eae77f.jpg","ebc497.jpg","ebe7e1.jpg","ec8e15.jpg","edae29.jpg","edca79.jpg","ede8e1.jpg","eee8c4.jpg","efd83b.jpg","efde3a.jpg","f0bd0d.jpg","f0f7fa.jpg","f13a40.jpg","f19d2a.jpg","f1e6bf.jpg","f4bd38.jpg","f5f2ea.jpg","f697b9.jpg","f7c038.jpg","f7c604.jpg","f88e3f.jpg","f8c13a.jpg","f8ebc6.jpg","f9c941.jpg","fac43a.jpg","faeab6.jpg","fbdc04.jpg"]
// let RGBtoXYZ_RtoX = [];
// let RGBtoXYZ_GtoX = [];
// let RGBtoXYZ_BtoX = [];
// let RGBtoXYZ_RtoY = [];
// let RGBtoXYZ_GtoY = [];
// let RGBtoXYZ_BtoY = [];
// let RGBtoXYZ_RtoZ = [];
// let RGBtoXYZ_GtoZ = [];
// let RGBtoXYZ_BtoZ = [];
// let slider;


let theShader;
let img;

function preload(){
    theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/mosaicShader.frag',shaderLoaded);
    img = loadImage('/vc/docs/sketches/lenna.png', ImageLoaded)
    symbol = loadImage('/vc/docs/sketches/lenna.png', ImageLoaded)
}

function setup(){   
    createCanvas(512, 512,WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(theShader);
    theShader.setUniform('image', img)
    theShader.setUniform('symbol', img)
    theShader.setUniform('resolution', 10)
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