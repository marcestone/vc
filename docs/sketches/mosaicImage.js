let img, images;
let pixel_size = 16
let newImage = {pixels: [], height: 0, width: 0}
let   files = ["043431.jpg","060505.jpg","061709.jpg","062627.jpg","070504.jpg","07090d.jpg","090605.jpg","09090b.jpg","0b0806.jpg","0b2b36.jpg","0c0d0e.jpg","0e0d0c.jpg","0e3947.jpg","0f0e12.jpg","100f0d.jpg","101010.jpg","103a0e.jpg","121812.jpg","160e10.jpg","163c3a.jpg","182d2c.jpg","1d2318.jpg","222327.jpg","238e92.jpg","25bbbc.jpg","262626.jpg","272c26.jpg","274141.jpg","274c3a.jpg","282124.jpg","2a2a2a.jpg","2a5e4a.jpg","2f3841.jpg","2f6a89.jpg","303b3f.jpg","303c1e.jpg","31233f.jpg","31aa72.jpg","331f44.jpg","343737.jpg","3572d2.jpg","36312f.jpg","368785.jpg","383a3f.jpg","3a2b20.jpg","3a4324.jpg","3c3c3c.jpg","3e3320.jpg","3e8163.jpg","3f3f3f.jpg","3f511f.jpg","40576e.jpg","405d72.jpg","41413b.jpg","414141.jpg","434343.jpg","453f38.jpg","473328.jpg","474735.jpg","476695.jpg","476931.jpg","484d57.jpg","49652e.jpg","4a2c54.jpg","4b4b4b.jpg","4c296d.jpg","4c4c4c.jpg","4d5460.jpg","4d5b17.jpg","4e3f34.jpg","4e563d.jpg","4f2e27.jpg","506e33.jpg","515046.jpg","515f66.jpg","51817a.jpg","524122.jpg","525a45.jpg","55423d.jpg","584f5b.jpg","599b9d.jpg","5a6345.jpg","5b5650.jpg","5b8db8.jpg","5c783b.jpg","5f673f.jpg","60c1e3.jpg","614f42.jpg","616366.jpg","657546.jpg","685435.jpg","685941.jpg","685f56.jpg","68676d.jpg","68809e.jpg","699853.jpg","6ac2e0.jpg","6b5b4b.jpg","6b5b76.jpg","6c4b55.jpg","6d726a.jpg","6e7846.jpg","6e7e8e.jpg","6eadca.jpg","6f18cc.jpg","6f34b7.jpg","6f588a.jpg","6f6f6f.jpg","6f7172.jpg","6fc1b9.jpg","7090a1.jpg","726f65.jpg","747474.jpg","775885.jpg","775c96.jpg","77804f.jpg","77c2c2.jpg","785b89.jpg","787878.jpg","7b6958.jpg","7c7374.jpg","7d6953.jpg","7ed47e.jpg","818a87.jpg","8197b1.jpg","835330.jpg","83aeab.jpg","855bbb.jpg","888988.jpg","89573c.jpg","8a6d69.jpg","8b8787.jpg","8d4d6c.jpg","8d69cd.jpg","8d8a8a.jpg","8eaca3.jpg","908e8d.jpg","939393.jpg","94898a.jpg","955a41.jpg","9d948f.jpg","9e713c.jpg","9f9d9b.jpg","a03638.jpg","a0a7a1.jpg","a0bdbc.jpg","a3688b.jpg","a44543.jpg","a6262e.jpg","a69075.jpg","a7908a.jpg","a81c48.jpg","a8b4b9.jpg","a9528f.jpg","aa0e0b.jpg","aaaaaa.jpg","ac8ac2.jpg","accbce.jpg","af6118.jpg","afafaf.jpg","b17bcd.jpg","b24e78.jpg","b461a0.jpg","b682a3.jpg","b6b7b8.jpg","b82825.jpg","b8b8b8.jpg","b8c1c0.jpg","b92825.jpg","ba723b.jpg","ba9dbd.jpg","baa388.jpg","bababa.jpg","bc7298.jpg","be5e77.jpg","beadb9.jpg","bfbfbf.jpg","c06c80.jpg","c08b3f.jpg","c11010.jpg","c2addb.jpg","c3396d.jpg","c49766.jpg","c4b348.jpg","c51f29.jpg","c5b148.jpg","c696b1.jpg","c6b6bb.jpg","c6d0da.jpg","c8b9a7.jpg","c9c9c9.jpg","ca2031.jpg","cb2b21.jpg","cbbb4e.jpg","ccd9d9.jpg","cd6664.jpg","ce9fb1.jpg","cf4837.jpg","cfa1f2.jpg","d07065.jpg","d13a3a.jpg","d2d3d0.jpg","d2d7df.jpg","d34d4b.jpg","d393b7.jpg","d48b1d.jpg","d56457.jpg","d5cec2.jpg","d62428.jpg","d677ed.jpg","d79828.jpg","d7c2b9.jpg","d886a0.jpg","d8afca.jpg","d8cab2.jpg","d8d2d2.jpg","d8dce6.jpg","da448e.jpg","dacdd4.jpg","dad6d9.jpg","db8704.jpg","dbc1d8.jpg","dc9437.jpg","dcb7ce.jpg","dd9ecc.jpg","dddcdc.jpg","de4446.jpg","dea06b.jpg","dea458.jpg","dedede.jpg","dfb383.jpg","e1ce4b.jpg","e1d5c1.jpg","e1ded9.jpg","e4d233.jpg","e4dfd9.jpg","e5e5e8.jpg","e6cabd.jpg","e6d9da.jpg","e8c549.jpg","e8c641.jpg","e8d18a.jpg","e8dcd6.jpg","e9b44c.jpg","e9e8e9.jpg","ea8531.jpg","eabfcd.jpg","eac00b.jpg","eadb0c.jpg","eae12c.jpg","eae77f.jpg","ebc497.jpg","ebe7e1.jpg","ec8e15.jpg","edae29.jpg","edca79.jpg","ede8e1.jpg","eee8c4.jpg","efd83b.jpg","efde3a.jpg","f0bd0d.jpg","f0f7fa.jpg","f13a40.jpg","f19d2a.jpg","f1e6bf.jpg","f4bd38.jpg","f5f2ea.jpg","f697b9.jpg","f7c038.jpg","f7c604.jpg","f88e3f.jpg","f8c13a.jpg","f8ebc6.jpg","f9c941.jpg","fac43a.jpg","faeab6.jpg","fbdc04.jpg"]
RGBtoXYZ_RtoX = [];
RGBtoXYZ_GtoX = [];
RGBtoXYZ_BtoX = [];
RGBtoXYZ_RtoY = [];
RGBtoXYZ_GtoY = [];
RGBtoXYZ_BtoY = [];
RGBtoXYZ_RtoZ = [];
RGBtoXYZ_GtoZ = [];
RGBtoXYZ_BtoZ = [];

function preload() {
  // TODO: find a way to use fs library :|
  for(var i = 0; i < 256; i++){  //i from 0 to 255
    r = parseFloat(i/255) ;    //r from 0 to 1
 
    if (r > 0.04045 )
        r = Math.pow((r+0.055)/1.055 ,  2.4);
    else
        r = r/12.92;
 
    r = r * 100
 
    var ref_X =  95.047;
    var ref_Y = 100.000;
    var ref_Z = 108.883;
 
    RGBtoXYZ_RtoX[i] = r * 0.4124/ref_X;
    RGBtoXYZ_GtoX[i] = r * 0.3576/ref_X;
    RGBtoXYZ_BtoX[i] = r * 0.1805/ref_X;
    RGBtoXYZ_RtoY[i] = r * 0.2126/ref_Y;
    RGBtoXYZ_GtoY[i] = r * 0.7152/ref_Y;
    RGBtoXYZ_BtoY[i] = r * 0.0722/ref_Y;
    RGBtoXYZ_RtoZ[i] = r * 0.0193/ref_Z;
    RGBtoXYZ_GtoZ[i] = r * 0.1192/ref_Z;
    RGBtoXYZ_BtoZ[i] = r * 0.9505/ref_Z;
  }
  images = {}
  for (var t = 0; t < files.length; t++) {
    const file = files[t];
    images[file] = loadImage("/vc/docs/sketches/assets/mosaic_images/" + file)
  }
  img = loadImage("/vc/docs/sketches/lenna.png")
}

function setup() {
  createCanvas(512, 512)
  newImage = preProcessImage()
  debugger
  for (var k = 0; k < newImage.pixels.length; k++) {
    const [R,G,B] = newImage.pixels[k];
    const filename = getClosestColor(R,G,B)
    image(images[filename], (k % newImage.width) *pixel_size, int(k / newImage.height) *pixel_size, pixel_size, pixel_size);
  }
}

function draw() {
  noLoop()
}

function preProcessImage(){
  var new_pixels = []
  pixelDensity(1)
  img.loadPixels()

  for (let h = 0; h < img.height; h+=pixel_size) {
    for (let w = 0; w < img.width; w+=pixel_size) {
      new_pixels.push([0,0,0])

      for (let j = 0; j < pixel_size; j++) {
        const wihi = 4 * ((h + j) * img.width + w)
        const wfhi = 4 * ((h + j) * img.width + (w + pixel_size))

        for (let i = wihi; i < wfhi; i+=4) {
          const [R,G,B] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]] // get pixel rgb
          new_pixels[new_pixels.length -1][0] = new_pixels[new_pixels.length -1][0] + R 
          new_pixels[new_pixels.length -1][1] = new_pixels[new_pixels.length -1][1] + G 
          new_pixels[new_pixels.length -1][2] = new_pixels[new_pixels.length -1][2] + B 
        }
      }
      
      new_pixels[new_pixels.length -1][0] = int(new_pixels[new_pixels.length -1][0] / (pixel_size * pixel_size))
      new_pixels[new_pixels.length -1][1] = int(new_pixels[new_pixels.length -1][1] / (pixel_size * pixel_size))
      new_pixels[new_pixels.length -1][2] = int(new_pixels[new_pixels.length -1][2] / (pixel_size * pixel_size))
    }
  }
  return {pixels:new_pixels, height: img.height/pixel_size, width: img.width/pixel_size}
}

function getClosestColor(R,G,B){
  debugger
  var minDiff = 10000
  var closest
  var [L,a,b] = RGBtoLAB(R,G,B)

  for (let i = 0; i < files.length; i++) {
    const color = files[i].replace(".jpg","")
    var cr = parseInt(color.substring(0,2), 16)
    var cg = parseInt(color.substring(2,4), 16)
    var cb = parseInt(color.substring(4), 16)
    
    var [cL,ca,cb] = RGBtoLAB(cr,cg,cb)
      
    var diff = Math.sqrt( Math.pow(L - cL, 2) + Math.pow(a - ca, 2) + Math.pow(b - cb, 2) )
    if (diff < minDiff){
      minDiff = diff
      closest = files[i]
    }
  }
  return closest
}

function RGBtoLAB(r,g,b){
  //RGBtoXYZ
  var x = RGBtoXYZ_RtoX[r] + RGBtoXYZ_GtoX[g] + RGBtoXYZ_BtoX[b];
  var y = RGBtoXYZ_RtoY[r] + RGBtoXYZ_GtoY[g] + RGBtoXYZ_BtoY[b];
  var z = RGBtoXYZ_RtoZ[r] + RGBtoXYZ_GtoZ[g] + RGBtoXYZ_BtoZ[b];

  if (x > 0.008856)
      x = Math.cbrt(x);
  else
      x = (7.787 * x) + 0.13793103448275862;

  if (y > 0.008856)
      y = Math.cbrt(y);
  else
      y = (7.787 * y) + 0.13793103448275862;

  if (z > 0.008856)
      z = Math.cbrt(z);
  else
      z = (7.787 * z) + 0.13793103448275862;

  L = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [L,a,b];
}