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

## Aplicaciones
### Arquitectura
Al presentar propuestas de diseño a los clientes, es muy importante que los arquitectos tengan representaciones realistas que acompañen sus diseños. En el pasado, los arquitectos confiaban en dibujos hechos a mano creados con tinta y acuarelas. Desafortunadamente, es extremadamente difícil producir efectos de iluminación realistas utilizando los métodos de renderizado tradicionales. Incluso muchos programas de diseño asistido por computadora (CAD) que modelan objetos con precisión no pueden modelar la luz.

Para modelar con precisión el verdadero comportamiento de la luz en un entorno dado, debemos considerar toda la luz en ese entorno y reconocer que la luz real se refleja, refracta, difunde y absorbe. El ray tracing, combinado con técnicas de radiosidad, es a menudo el método más útil para el renderizado arquitectónico. 

![Image 4 failed load](/docs/sketches/ARQUI.jpg)
## Teatro y TV

Debido a que el ray tracing permite un modelado visualmente realista de la luz, la tecnología se puede aplicar de manera útil en las áreas de iluminación de teatro y televisión. Sin la capacidad de modelar imágenes físicamente correctas, las configuraciones de iluminación del escenario pueden requerir cantidades extremas de esfuerzo. Muchas producciones teatrales y televisivas requieren cientos de luces individuales que deben posicionarse, orientarse y filtrarse. También es necesario que las luces se cambien, redirijan y atenúen mientras una producción está en curso. El ray tracing permite a los diseñadores de escenarios e iluminación, actores y directores desarrollar y visualizar configuraciones de iluminación complejas meses antes de que se abra una producción.

![Image 5 failed load](/docs/sketches/tvstudio.jpg)

## Ingeniería
El ray tracing es capaz de considerar toda la luz en un entorno determinado (denominado iluminación global). La iluminación global es un modelo físicamente correcto, que simula con precisión el comportamiento de la luz en un entorno físico real. Esto demuestra ser extremadamente útil para diseñadores de iluminación, investigadores de energía solar e ingenieros mecánicos. Pueden utilizar el ray tracing para hacer mucho más que renderizar imágenes fotorrealistas. Los ingenieros utilizan la tecnología para predecir los niveles de iluminación, los gradientes de luminancia y los criterios de rendimiento visual. La iluminación global es una valiosa herramienta de ingeniería ya que nos permite analizar cuantitativamente la distribución y direccionalidad de la luz e investigar la transferencia de calor radiante. Esto nos está ayudando a progresar en todo, desde la iluminación y la calefacción de habitaciones de manera más eficiente, hasta la creación de concentradores de energía solar para aplicaciones aeroespaciales.

## Animación

Las preguntas relacionadas con la animación han interesado a los científicos informáticos durante varias décadas. Los avances en los gráficos por computadora, incluidos los desarrollos en el ray tracing, han abierto un mundo de posibilidades en el campo. Tradicionalmente, los fotogramas individuales de las obras animadas se dibujaban a mano. El movimiento se simuló a través de una serie compleja de pasos de ajuste del marco. Todavía existe un fuerte sentimiento de nostalgia por los métodos tradicionales de animación, sin embargo, los gráficos por computadora están desempeñando un papel cada vez más importante en el proceso.
La animación por computadora se ejecuta en mundos modelo antes de que sean renderizados por un trazador de rayos. Esta técnica se puede optimizar mucho.
El ray tracing se puede utilizar para agregar efectos "sofisticados", como el reflejo y el sombreado, que a menudo son difíciles de producir y requieren mucho tiempo para los artistas tradicionales. La tecnología gráfica también es capaz de generar imágenes fotorrealistas que serían casi imposibles de producir sin el ray tracing computarizado.
Los ejemplos de gráficos por computadora y ray tracing en la animación moderna incluyen la reflexión avanzada, el sombreado y la especularidad.

![Image 5 failed load](/docs/sketches/toy.jpg)

## Gaming

### Ray Tracing Versus Rasterization
La rasterización es un enfoque basado en objetos para la representación de escenas. Cada objeto se pinta con color primero, luego se aplica la lógica para mostrar solo los píxeles que están más cerca del ojo. Por el contrario, el ray tracing colorea los píxeles primero y luego los identifica con los objetos más tarde.

La rasterización requiere técnicas especiales y ajustes para crear imágenes realistas. Por ejemplo, la canalización de renderizado de un juego puede adaptarse y optimizarse para aplicar un determinado efecto, donde los píxeles de un objeto tienen un patrón determinado. Naturalmente, este tipo de lógica variará de un objeto a otro y de una escena a otra. Se requiere un esfuerzo por parte del desarrollador para aprovechar esto, pero puede ser rentable en eficiencia, ya que la computadora puede ser capaz de renderizar una escena complicada sin cantidades proporcionales de potencia de procesamiento.

El ray tracing tiende a aplicarse de manera más general que la rasterización, ya que se basa en disparar rayos de luz. Como resultado, las técnicas para lograr resultados visuales con él se basan en cómo se usan esos rayos. Las sombras y los reflejos más suaves, por ejemplo, requieren disparar más rayos, mientras que los efectos de movimiento y desenfoque pueden requerir alterar la sincronización de los rayos o el punto de origen de los rayos.

### Inicio de Ray Tracing en gaming
En resumen, el ray tracing tardó tanto en entrar en la escena de los juegos porque los recursos de procesamiento para llevarlo a cabo habían sido inalcanzables a precios que permitirían la adopción generalizada. Por supuesto, el costo de entrada sigue siendo relativamente alto: ni AMD ni Nvidia ofrecen una tarjeta gráfica de escritorio de gama baja con ray tracing de hardware todavía.

Por el momento, la tarjeta de video de "nivel de entrada" capaz de realizar ray tracing en el hardware es la GeForce RTX 2060, que se lanzó en 2019.

### Mejoras visuales con Ray Tracing

Es importante darse cuenta de que el ray tracing solo ha puesto su pie en la puerta de los gráficos de juegos. Esto se debe a que la renderización de un juego completo en ray tracing en tiempo real aún está mucho más allá de las capacidades del hardware actual. Los juegos que lo admiten lo usan solo para ciertos efectos, principalmente los relacionados con las sombras y la iluminación, mientras que todo lo demás aún está rasterizado.

Rasterizado:
![Image 6 failed load](/docs/sketches/rasterizado.jpg)

Ray Tracing:
![Image 7 failed load](/docs/sketches/raygaming.jpg)

Las sombras con ray tracing son más suaves y más realistas en comparación con las versiones rasterizadas más duras. Su oscuridad varía según la cantidad de luz que bloquee un objeto e incluso dentro de la propia sombra, mientras que la rasterización parece darle a cada objeto una ventaja. Las sombras rasterizadas aún no se ven mal, pero después de jugar el juego con sombras trazadas por rayos, es difícil volver atrás.




# Fuentes:

- [3-D Visual simulation, Sage journals](https://journals.sagepub.com/doi/10.1177/003754977101600104)
- [Raytracing - Reflecting Materials, Victor's blog](http://viclw17.github.io/2018/07/30/raytracing-reflecting-materials/)
- [Ray tracing (graphics), Wikipedia](https://en.wikipedia.org/wiki/Ray_tracing_(graphics))
- [Trazado de rayos, Wikipedia](https://es.wikipedia.org/wiki/Trazado_de_rayos)
- [ What Is Ray Tracing? (And What It Means for PC Gaming), PCmag](https://www.pcmag.com/how-to/what-is-ray-tracing-and-what-it-means-for-pc-gaming)