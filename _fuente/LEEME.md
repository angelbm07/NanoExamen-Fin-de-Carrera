# Piezas fuente de la guía compacta

El `index.html` publicado se ensambla concatenando estos archivos en este orden:

    01_head.html  02_css_quiz.html
    03_math.js      MathML: helpers y las 29 ecuaciones destacadas
    04_graficas.js  gráficas con datos para los reactivos de interpretación
    05_casos.js     casos de caracterización de varios pasos
    06_mapa.js      nodos y aristas del mapa de conceptos
    figuras.js      16 figuras SVG propias + 7 imágenes reales del material
    10_datos_a.js … 14_datos_e.js   (contenido de los 10 módulos)
    20_quiz_a.js … 29_quiz_j.js     (banco original)
    40_quiz_m2.js … 49_quiz_graficas.js  (ampliación y reactivos con gráfica)
    30_render.js  31_quiz_engine.js  32_mapa_render.js  33_ajustes.js

Comando de ensamblado:

    cat 01_head.html 02_css_quiz.html 03_math.js 04_graficas.js 05_casos.js 06_mapa.js \
        figuras.js 1[0-4]_datos_*.js 2[0-9]_quiz_*.js 4[0-9]_quiz_*.js \
        30_render.js 31_quiz_engine.js 32_mapa_render.js 33_ajustes.js > guia_efc.html

(`guia_efc.html` es el resultado ya ensamblado, idéntico al index.html publicado.)

## Estado actual

| | |
|---|---|
| Módulos | 10 (M2–M11, con M11 = Electroquímica) |
| Secciones | 52 |
| Fórmulas en formulario | 192, repartidas en 36 bloques |
| Problemas numéricos resueltos | 27 |
| Figuras | 23 (16 SVG propias + 7 imágenes reales del material del Tec) |
| Flashcards | 131 |
| Banco de reactivos | 522, de los cuales 21 exigen leer una gráfica |
| Simulacros | 20, 60 o 200 reactivos, con cronómetro |
| Quiz por módulo | cada pestaña examina su propio banco de 50 |

## Bloques disponibles en el renderizador

    {p:[...]}            párrafos con acento de color del módulo
    {ul:[...]} {ol:[...]} listas
    {eq:'...'}           ecuación destacada
    {tabla:{th:[],tr:[]}} tabla
    {fig:FIG.nombre}     figura (SVG propia o <img> en data URL)
    {form:[[fórmula, qué es, unidades], ...]}   formulario del tema
    {prob:{t,d,p:[],r,x}} problema resuelto: título, datos, pasos, resultado, trampa
    {deep:{t,b:[...]}}   acordeón de profundidad

## Criterios de validación que deben seguir cumpliéndose

- Las cuatro opciones de cada reactivo deben tener longitudes comparables.
  Métrica dura: con la estrategia "elegir siempre la más corta" el acierto
  debe quedar cerca del 25 % (azar). Antes de octubre de 2026 era muy superior,
  porque los distractores llevaban coletilla explicativa y la correcta iba desnuda.
- Las cuatro posiciones de respuesta correcta, repartidas por igual.
- Enunciado con escenario, del orden de 145 caracteres (estilo medido del Tec).
- Preguntas de aplicación o comparación, no de reconocimiento de definiciones.

## Añadido el 28 de octubre de 2026

- **Fórmulas en MathML nativo**, sin dependencias. Las 29 ecuaciones destacadas
  se escriben a mano con los helpers de `03_math.js`. Las 192 del formulario
  pasan por `aMathML()`, un conversor de texto a MathML con gramática
  restringida: convierte 160 y **deja el texto original en las 32 que no
  encajan**, porque es preferible monospace legible a una fórmula mal maquetada.
  Resultado: 143 fracciones apiladas, 13 radicales y 193 sub/superíndices.
- **Mapa de conceptos** (pestaña propia): 37 conceptos y 44 conexiones, y cada
  conexión dice **por qué** se tocan los dos conceptos. Es lo que el examen
  pregunta: no qué es la ley de Bragg, sino que el mismo pico que da el
  espaciado da también el tamaño de cristalito.
- **21 reactivos de lectura de gráfica**: difractograma a indexar, TGA con tres
  escalones, DSC con cristalización en frío, Arrhenius de dos reacciones,
  esfuerzo-deformación de tres materiales, voltamperogramas a dos velocidades,
  isoterma con histéresis y Nyquist de dos electrodos.
- **Tres casos de caracterización** en M7, de varios pasos con razonamiento
  revelable: un polvo blanco sin etiqueta, un coloide que salió del color
  equivocado y un recubrimiento que falló antes de tiempo.
- **Simulacros cronometrados**: 20 preguntas en 25 minutos, 60 en 75, 200 en 250,
  o sin reloj. Al agotarse el tiempo se cierra solo y lo no contestado cuenta
  como error, igual que en el examen.
- **Prioridad por módulo** calculada con el historial real de aciertos, no fija.

## Ajustes de lectura

Panel en la cabecera, persistido en `localStorage` bajo `efc_ajustes_v1`. Se
aplica como atributos `data-*` en `<html>` y el CSS hace el resto:

| Ajuste | Valores |
|---|---|
| Tamaño del texto | 0.92 · 1 · 1.14 · 1.3 |
| Interlineado | compacto · normal · amplio |
| Ancho de línea | 620 · 760 · 940 px |
| Tipografía | normal · alta legibilidad |
| Densidad | todo el desarrollo · solo lo esencial |
| Movimiento | normal · reducido |

En **modo esencial** queda a la vista el primer párrafo de cada sección, los
formularios, las tablas, las figuras, los problemas y los casos; el resto del
desarrollo se recoge tras un botón por sección. `prefers-reduced-motion` del
sistema se respeta por defecto si el usuario no ha elegido todavía.

Cada pestaña de módulo separa **Leer · Tarjetas · Quiz** en subpestañas, para
no mezclar tres actividades en un mismo scroll. El quiz por módulo corre en
**tandas de diez** con cierre explícito, en vez de una barra que avanza sobre
cincuenta.

## Seguimiento del progreso

El navegador guarda en `localStorage`, bajo la clave `efc_prog_v2`, qué reactivos
se han contestado y si se acertaron. Con eso el muestreo ordena cada tanda así:

1. los que nunca se han visto,
2. los que se fallaron la última vez,
3. los acertados, empezando por los más antiguos.

El objetivo es recorrer el banco entero en vez de repetir las mismas preguntas.
Cada pestaña muestra su cobertura, y hay un botón para reiniciar el registro.
El dato vive solo en ese navegador: no se envía a ninguna parte.

## Correcciones de figuras (28 de octubre de 2026)

- **Celda FCC**: los seis átomos de cara estaban en los puntos medios de las
  aristas. Ahora están en los centros de cara reales.
- **Índices de Miller**: el plano dibujado cortaba x y z, lo que da (201). Se
  redibujó cortando x e y y paralelo a z, que es lo que da (210).
- **Voltamperograma**: los dos picos estaban al mismo potencial, es decir
  ΔE_p = 0, en contradicción con el pie de figura. Ahora están separados.
- **Curva de Tafel**: el catalizador rápido estaba dibujado a la izquierda del
  lento, al revés de lo que implica un i₀ mayor.
- **Diagrama de fases**: la etiqueta «líquido» caía por debajo de la curva de
  vaporización, o sea dentro de la región de gas.
- **Perfil de flujo**: las flechas del perfil parabólico no estaban repartidas
  de forma simétrica respecto al eje del canal.

## Pendiente

- Ampliar la colección de figuras SVG (difractograma anotado, unión p-n,
  comparación IR frente a Raman, tipos de reactor, escala de HLB).
