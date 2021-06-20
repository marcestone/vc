# Conclusiones taller 1:

* Las dos técnicas del promedio RGB y Luma, nos proveen un resultado que funciona muy bien para generar un equivalente en escala de grises de la imágen y el video. Además, es fácil de procesar en cuanto a costos computacionales necesarios para realizar las operaciones. 

* Las máscaras de convolución son útiles para extractar información relevante de una imagen se utilizan para desenfoque, enfoque, realce, detección de bordes y más.

* La técnica de conversion ASCII Art se basa en la creacion de una matriz de pesos la cual asigna a cada pixel en pantalla un caracter ASCII, teniendo en cuenta los pixeles adyacentes al momento de hacerlo. 

* La producción de mosaicos es en general una tarea ardua, por ello hacerlo computacionalmente es muy importante.

* Tomando una imagen con mayor resolución permitiría apreciar mejor las imágenes que conforman el mosaico, pero dado que se están haciendo los cálculos secuencialmente la operación es demasiado pesada para esta página.

* Es importante a la hora de escoger las imágenes que mejor aproximan al color de la imagen original tener en cuenta la representación del color que se usa para hallar la distancia entre los colores promedio de las imágenes y el color deseado, en este caso se utilizó la representación CIELAB porque esta aproxima de mejor forma a la vista humana, lo que nos permite buscar de mejor manera colores aproximados.
