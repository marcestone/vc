# RAY TRACING

## Introducción

Gracias a las mejoras que se han presentado en los últimos años en materia de hardware y las diferentes investigaciones de técnicas de visualización gráfica, se ha logrado la implementación de técnicas derivadas de modelos físicos y matemáticos más avanzados, que han ido tomando fuerza dentro de la comunidad de gráficos computacionales. 
En el siglo XVI, Albrecht Dürer describió la técnica de Ray Tracing en una de sus obras. En esta él describe un artefacto llamado puerta de Dürer, en la cual se usa un hilo atado al extremo de un lápiz que otra persona mueve sobre el contorno de un objeto a dibujar. El hilo pasa a través del marco de la puerta y luego a través de un gancho en la pared. El hilo forma un rayo y el gancho actúa como centro de proyección y corresponde a la posición de la cámara en el Ray Tracing. 


![Image 1 failed load](/docs/sketches/renderingImage1.jpg)

El uso de la técnica en computación para generar imágenes sombreadas fue en principio propuesta en 1971 por Robert Goldstein y Roger Nagel del Grupo de Aplicaciones Matemáticas en su artículo “3-D Visual Simulation”, en donde el Ray Tracing es utilizado para generar imágenes sombreadas de sólidos simulando el proceso fotográfico a la inversa. Para cada píxel en la pantalla se proyecta un rayo de luz en la escena para identificar la superficie en la que los rayos de cruzaban, identificando la superficie visible. En estos puntos visibles de la superficie, se calcula la normal y con la posición de la fuente de luz, se calcula el brillo del píxel en la pantalla. La película Monsters University de Pixar de 2013 fue la primera película animada en utilizar el Ray Tracing para toda la iluminación y el sombreado.

## Descripción:

La técnica es utilizada como método para producir imágenes en ambientes gráficos computacionales 3D, las cuáles buscan acercarse al foto realismo sobre otras técnicas con propósitos similares. 
En la naturaleza, una fuente de luz emite un rayo de luz que viaja a una superficie que interrumpe su camino. Al colisionar el rayo con la superficie, pueden suceder cualquier combinación entre absorción, reflexión, refracción y fluorescencia, dependiendo principalmente de las propiedades del material de dicha superficie. 

![Image 2 failed load](/docs/sketches/renderingImage2.jpg)

Entre la absorción, la reflexión, la refracción y la fluorescencia, se debe tener en cuenta toda la luz entrante, lo que lleva a que, por ejemplo, una superficie no puede reflejar cierto porcentaje de un rayo de luz entrante y refractarse el otro porcentaje y que ambos porcentajes sumen más de 100%. 
Algunos de estos rayos viajan de tal manera que impactan en nuestro ojo, haciéndonos ver la escena y así contribuir a la imagen renderizada final.

El Ray Casting es el precedesor del Ray Tracing. El concepto que sigue es hacer el trazado de los rayos de luz desde el ojo del observador, un rayo por pixel, encontrando el objeto más cercano que intersecta el camino del rayo. Las propiedades del material de la supericie con la que intersecta el rayo define el sombreado de dicho objeto.

La técnica de Ray Tracing funciona trazando un camino desde un punto a través de cada píxel en una pantalla y calculando el color del objeto visible a través de él. Se debe identificar la intersección de cada rayo con los objetos de la escena. Una vez que se ha identificado el objeto más cercano, el algoritmo estimará la luz entrante en el punto de intersección, examinará las propiedades del material del objeto simulando efectos de reflexión/refracción y combinará esta información para calcular el color final del píxel. Para simular las sombras, se emiten rayos desde el punto de intersección hasta las fuentes de luz.


![Image 3 failed load](/docs/sketches/renderingImage3.jpg)

En la actualidad, el algoritmo de Ray Tracing es la base de otros algoritmos más complejos para síntesis de imágenes que son capaces de simular efectos de iluminación global. La empresa NVIDIA empezó a introducir la tecnología con la arquitectura Turing para tarjetas de video y Pixar a su vez comenzó a utilizarla en sus ordenadores destinados a la animación. La técnica es comúnmente utilizada en la industria de los videojuegos gracias a la introducción de esta tecnología en tarjetas gráficas de AMD en consolas del mercado. 

# Fuentes:

- [3-D Visual simulation, Sage journals](https://journals.sagepub.com/doi/10.1177/003754977101600104)
- [Raytracing - Reflecting Materials, Victor's blog](http://viclw17.github.io/2018/07/30/raytracing-reflecting-materials/)
- [Ray tracing (graphics), Wikipedia](https://en.wikipedia.org/wiki/Ray_tracing_(graphics))
- [Trazado de rayos, Wikipedia](https://es.wikipedia.org/wiki/Trazado_de_rayos)

