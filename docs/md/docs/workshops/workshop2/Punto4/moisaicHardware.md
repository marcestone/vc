# Problema

Introducir el análisis de imágenes/video al implementar: Conversión de la imagen a un foto-mosaico.

# Información

## Foto-Mosaico

En el campo de las imágenes y la fotografía, un fotomosaico es una imagen usualmente una fotografía que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original. Cuando es vista en detalle, los píxeles individuales se ven como la imagen principal, sin embargo al verla como un todo, es posible apreciar que la imagen está compuesta por cientos de miles de imágenes.

## Espacio de color Lab

El CIE L*a*b* (CIELAB) es el modelo cromático usado normalmente para describir todos los colores que puede percibir el ojo humano. Fue desarrollado específicamente con este propósito por la Commission Internationale d'Eclairage (Comisión Internacional de la Iluminación), razón por la cual se abrevia CIE. Los asteriscos (*) que siguen a cada letra forman parte del nombre, ya que representan L*, a* y b*, de L, a y b.

Los tres parámetros en el modelo representan la luminosidad de color (L*, L*=0 rendimientos negro y L*=100 indica blanca), su posición entre rojo y verde (a*, valores negativos indican verde mientras valores positivos indican rojo) y su posición entre amarillo y azul (b*, valores negativos indican azul y valores positivos indican amarillo).

# Solución

## Proceso

El proceso de creación del mosaico está dividido en 2 fases, la primera es una fase previa de creación del dataset de imágenes utilizadas en el mosaico y la segunda es el proceso de reemplazo de los píxeles de la imagen por otras imágenes que aproximen el color de cada píxel.

Para la primera parte se utilizó un script en Python para descargar imágenes aleatorias de una API publica llamada Pixabay en la cual se permite utilizar un filtro por el color de la imagen, el script hace una serie de peticiones a la API (una por cada color) solicitando un numero determinado de imágenes del color deseado, luego toma las imágenes y les cambia el tamaño para que todas sean imágenes cuadradas, por ultimo se toma el color dominante de cada imagen y se concatenan verticalmente formando una sola imagen diccionario, y para indexar el diccionario se crea simultaneamente una imagen en la que cada píxel es el color dominante de la imagen correspondiente (Esto se hace para poder acceder las imágenes a partir de su color dominante).

La segunda parte del proceso se hace en tiempo real, se cargan la imagen diccionario, la imagen que indexa al diccionario y la imagen que se va a transformar y se envían como variables uniformes al fragment shader, este se encarga de que por cada sección (definida por la resolución) de la imagen original se reemplace por la correspondiente imagen del diccionario, teniendo como color representativo el primer píxel de la región (píxel de la esquina superior izquierda), se busca en el index de colores el color mas cercano utilizando el espacio de color Lab y a partir de este se busca la imagen correspondiente en el diccionario de imágenes.

## Resultado
> :Tabs
> > :Tab title=Mosaico, icon=photo_filter
> > > :P5 sketch=/docs/sketches/mosaicImageHardware.js, width=512, height=564
>
> > :Tab title=Imagen Original, icon=image
> > > :P5 sketch=/docs/sketches/simple_image.js, width=512, height=512

## Codigo
> :Tabs
> > :Tab title=Código p5js, icon=code
> > ``` javascript
> > let mosaicImages
> > let indexImages
> > let theShader
> > let img
> > 
> > function preload(){
> >     theShader = loadShader('/vc/docs/sketches/shader.vert', '/vc/docs/sketches/mosaicShader.frag')
> >     img = loadImage('/vc/docs/sketches/lenna.png')
> >     mosaicImages = loadImage('/vc/docs/sketches/mosaicImages.jpg')
> >     indexImages = loadImage('/vc/docs/sketches/indexImage.jpg')
> > }
> > 
> > function setup(){   
> >     createCanvas(512, 512,WEBGL);
> >     noStroke();
> >     textureMode(NORMAL);
> >     shader(theShader);
> > 
> >     theShader.setUniform('image', img)
> >     theShader.setUniform('mosaicImages', mosaicImages)
> >     theShader.setUniform('indexImages', indexImages)
> >     theShader.setUniform('resolution', 20)
> > 
> > 
> >     slider = createSlider(3, 512, 100, 2);
> >     slider.position(150, 552);
> >     slider.style('width', '40%');
> >     slider.input(() => {
> >         theShader.setUniform('resolution', slider.value())
> >         redraw()
> >     })
> >     let div = createDiv('Resolution');
> >     div.style('font-size', '18px');
> >     div.position(220, 532);
> > }
> > 
> > function draw() {
> >     background(0);
> >     beginShape();
> >     vertex(-width/2, -height/2,0,0,0);
> >     vertex(width/2, -height/2,0,1,0);
> >     vertex(width/2, height/2,0,1,1);
> >     vertex(-width/2, height/2,0,0,1);
> >     endShape(CLOSE);
> > 
> >     noLoop();
> > }
> > ```
>
> > :Tab title=Código de preparación de imagenes, icon=code
> > ``` python
> > import json
> > import requests
> > import shutil
> > from os import listdir
> > from os.path import isfile, join
> > from colorthief import ColorThief
> > from tqdm import tqdm
> > import cv2
> > import tempfile
> > import numpy as np
> > 
> > def get_files(dir):
> >     return [f for f in listdir(dir) if isfile(join(dir, f))]
> > 
> > def resize_images(folder, destination_folder):
> >     img_list = [(destination_folder + file, cv2.imread(folder + file)) for file in get_files(folder)]
> >     
> >     minh = min([img.shape[0] for img_name, img in img_list])
> >     minw = min([img.shape[1] for img_name, img in img_list])
> >     dim = min(minh, minw)
> >     
> >     for img_name, img in tqdm(img_list):
> >         resized = cv2.resize(img, (dim, dim), interpolation = cv2.INTER_AREA)
> >         cv2.imwrite(img_name, resized)
> > 
> > def concat_images(folder):
> >     img_list = []
> >     file_list = get_files(folder)
> >     indexImage = np.zeros((len(file_list) * 44, 44, 3), np.uint8)
> >     for i, file in tqdm(enumerate(file_list)):
> >         color_thief = ColorThief(folder + file)
> >         r,g,b = color_thief.get_color(quality=1)
> >         indexImage[i*44: (i+1)*44, :, 0] = b
> >         indexImage[i*44: (i+1)*44, :, 1] = g
> >         indexImage[i*44: (i+1)*44, :, 2] = r
> >         img = cv2.imread(folder + file)
> >         img_list.append(img)
> > 
> >     result_img = cv2.vconcat(img_list)
> >     cv2.imwrite('result.jpg',result_img)
> >     cv2.imwrite('indexImage.jpg', indexImage)
> > 
> > def download_images(folder):
> >     key = "20977986-3000fea631f919184c7949341"
> >     image_type = "photo"
> >     per_page = 200
> >     page = 1
> >     orientation = "horizontal"
> >     base_url = f'https://pixabay.com/api/?key={key}&image_type={image_type}&per_page={per_page}&page={page}&orientation={orientation}&> > colors='
> > 
> >     colors = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", > > "black", "brown" ]
> >     for color in colors:
> >         URL = base_url + color
> >         res = requests.get(URL)
> >         res_data = json.loads(res.text)
> >         for image in tqdm(res_data['hits']):
> >             # save the image
> >             url = image['webformatURL']
> >             name = folder + str(image['id']) + '.jpg'
> >             r = requests.get(url, stream=True)
> >             if r.status_code == 200:
> >                 with open(name, 'wb') as f:
> >                     r.raw.decode_content = True
> >                     shutil.copyfileobj(r.raw, f)
> > 
> > 
> > dd = tempfile.TemporaryDirectory()
> > rd = tempfile.TemporaryDirectory()
> > fd = tempfile.TemporaryDirectory()
> > 
> > download_images(dd.name + '/')
> > resize_images(dd.name + '/', rd.name + '/')
> > concat_images(rd.name + '/')
> > 
> > rd.cleanup()
> > fd.cleanup()
> > ```

## Shaders
> :Tabs
> > :Tab title=Fragment shader, icon=texture
> > ```cpp
> > precision highp float;
> > 
> > uniform sampler2D image;
> > uniform sampler2D mosaicImages;
> > uniform sampler2D indexImages;
> > uniform float resolution;
> > 
> > varying vec2 vTexCoord;
> > 
> > vec3 rgb2xyz( vec3 c ) {
> >     vec3 tmp;
> >     tmp.x = ( c.r > 0.04045 ) ? pow( ( c.r + 0.055 ) / 1.055, 2.4 ) : c.r / 12.92;
> >     tmp.y = ( c.g > 0.04045 ) ? pow( ( c.g + 0.055 ) / 1.055, 2.4 ) : c.g / 12.92,
> >     tmp.z = ( c.b > 0.04045 ) ? pow( ( c.b + 0.055 ) / 1.055, 2.4 ) : c.b / 12.92;
> >     const mat3 mat = mat3(
> > 		0.4124, 0.3576, 0.1805,
> >         0.2126, 0.7152, 0.0722,
> >         0.0193, 0.1192, 0.9505 
> > 	);
> >     return 100.0 * tmp * mat;
> > }
> > 
> > vec3 xyz2lab( vec3 c ) {
> >     vec3 n = c / vec3(95.047, 100, 108.883);
> >     vec3 v;
> >     v.x = ( n.x > 0.008856 ) ? pow( n.x, 1.0 / 3.0 ) : ( 7.787 * n.x ) + ( 16.0 / 116.0 );
> >     v.y = ( n.y > 0.008856 ) ? pow( n.y, 1.0 / 3.0 ) : ( 7.787 * n.y ) + ( 16.0 / 116.0 );
> >     v.z = ( n.z > 0.008856 ) ? pow( n.z, 1.0 / 3.0 ) : ( 7.787 * n.z ) + ( 16.0 / 116.0 );
> >     return vec3(( 116.0 * v.y ) - 16.0, 500.0 * ( v.x - v.y ), 200.0 * ( v.y - v.z ));
> > }
> > 
> > vec3 rgb2lab( vec3 c ) {
> >     vec3 lab = xyz2lab( rgb2xyz( c ) );
> >     return vec3( lab.x / 100.0, 0.5 + 0.5 * ( lab.y / 127.0 ), 0.5 + 0.5 * ( lab.z / 127.0 ));
> > }
> > 
> > vec3 lab2xyz( vec3 c ) {
> >     float fy = ( c.x + 16.0 ) / 116.0;
> >     float fx = c.y / 500.0 + fy;
> >     float fz = fy - c.z / 200.0;
> >     return vec3(
> >          95.047 * (( fx > 0.206897 ) ? fx * fx * fx : ( fx - 16.0 / 116.0 ) / 7.787),
> >         100.000 * (( fy > 0.206897 ) ? fy * fy * fy : ( fy - 16.0 / 116.0 ) / 7.787),
> >         108.883 * (( fz > 0.206897 ) ? fz * fz * fz : ( fz - 16.0 / 116.0 ) / 7.787)
> >     );
> > }
> > 
> > vec3 xyz2rgb( vec3 c ) {
> > 	const mat3 mat = mat3(
> >         3.2406, -1.5372, -0.4986,
> >         -0.9689, 1.8758, 0.0415,
> >         0.0557, -0.2040, 1.0570
> > 	);
> >     vec3 v = (c / vec3(100.0)) * mat;
> >     vec3 r;
> >     r.x = ( v.r > 0.0031308 ) ? (( 1.055 * pow( v.r, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.r;
> >     r.y = ( v.g > 0.0031308 ) ? (( 1.055 * pow( v.g, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.g;
> >     r.z = ( v.b > 0.0031308 ) ? (( 1.055 * pow( v.b, ( 1.0 / 2.4 ))) - 0.055 ) : 12.92 * v.b;
> >     return r;
> > }
> > 
> > vec3 lab2rgb( vec3 c ) {
> >     return xyz2rgb( lab2xyz( vec3(100.0 * c.x, 2.0 * 127.0 * (c.y - 0.5), 2.0 * 127.0 * (c.z - 0.5)) ) );
> > }
> > 
> > int getClosestColor(vec4 indexColor){
> >   int closest = 0;
> >   float minDiff = distance(vec4(1.0), vec4(0.0));
> > 
> >   vec3 indexColorLab = rgb2lab(vec3(indexColor.r, indexColor.g, indexColor.b));
> > 
> >   for (int i = 0; i < 276; i++) {
> >     vec4 color = texture2D(indexImages, vec2(float(i) + 0.5) / vec2(1.0, 276.0));
> >     vec3 colorLab = rgb2lab(vec3(color.r, color.g, color.b));
> >     float diff = distance(indexColorLab, colorLab);
> >     if(diff <= minDiff) {
> >       minDiff = diff;
> >       closest = i;
> >     }
> >   }
> > 
> >   return closest;
> > }
> > 
> > 
> > void main() {
> > 
> >   vec2 symbolCoord = vTexCoord * resolution;
> >   vec2 imageCoord = floor(symbolCoord);
> > 
> >   symbolCoord = (symbolCoord - imageCoord) / vec2(1.0, 276.0);
> > 
> >   imageCoord = imageCoord / vec2(resolution);
> > 
> >   vec4 indexColor = texture2D(image, imageCoord);
> > 
> >   int closest = getClosestColor(indexColor);
> > 
> >   float imageHeight = (float(closest)) / 276.0;
> > 
> >   gl_FragColor = texture2D(mosaicImages, symbolCoord + vec2(0.0, imageHeight));
> > }
> > ```
>
> > :Tab title=Vertex shader, icon=scatter_plot
> > ```cpp
> > precision highp float;
> > 
> > attribute vec3 aPosition;
> > 
> > attribute vec2 aTexCoord;
> > 
> > attribute vec4 aVertexColor;
> > 
> > uniform mat4 uProjectionMatrix;
> > 
> > uniform mat4 uModelViewMatrix;
> > 
> > varying vec4 vVertexColor;
> > 
> > varying vec2 vTexCoord;
> > 
> > void main() {
> >   vVertexColor = aVertexColor;
> >   vTexCoord = aTexCoord;
> >   gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
> > }
> > ```

## Fuentes

* https://en.wikipedia.org/wiki/Photographic_mosaic

* https://en.wikipedia.org/wiki/CIELAB_color_space

* https://web.archive.org/web/20070928151739/http://www.hunterlab.com/appnotes/an02_01.pdf
