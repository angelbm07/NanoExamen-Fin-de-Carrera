# Piezas fuente de la guía compacta

El `index.html` publicado se ensambla concatenando estos archivos en este orden:

    01_head.html  02_css_quiz.html  figuras.js
    10_datos_a.js 11_datos_b.js 12_datos_c.js 13_datos_d.js 14_datos_e.js   (contenido de los 10 módulos)
    20_quiz_a.js … 29_quiz_j.js                                              (banco de reactivos)
    30_render.js  31_quiz_engine.js

Comando de ensamblado:

    cat 01_head.html 02_css_quiz.html figuras.js 1[0-4]_datos_*.js 2[0-9]_quiz_*.js 30_render.js 31_quiz_engine.js > guia_efc.html

(`guia_efc.html` es el resultado ya ensamblado, idéntico al index.html publicado.)

## Estado actual

| | |
|---|---|
| Módulos | 10 (M2–M11, con M11 = Electroquímica) |
| Secciones | 51 |
| Fórmulas en formulario | 192, repartidas en 36 bloques |
| Problemas numéricos resueltos | 27 |
| Figuras | 23 (16 SVG propias + 7 imágenes reales del material del Tec) |
| Flashcards | 131 |
| Banco de reactivos | 501 · 50 por módulo (51 en M11) |
| Simulacro final | 200, muestreados 20 por módulo |
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
