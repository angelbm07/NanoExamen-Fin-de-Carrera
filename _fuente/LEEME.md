# Piezas fuente de la guía compacta

El `index.html` publicado se ensambla concatenando estos archivos en este orden:

    01_head.html  02_css_quiz.html
    03_math.js      MathML: helpers, conversor y las 29 ecuaciones destacadas
    04_graficas.js  gráficas con datos para los reactivos de interpretación
    05_casos.js     casos de caracterización de varios pasos
    06_mapa.js      nodos y aristas del mapa de conceptos
    07_derivacion.js  árbol de derivación de termodinámica y órdenes de reacción
    08_tips.js        los 72 trucos de memoria, por concepto
    09_tips_map.js    reglas que enganchan cada truco a su reactivo
    figuras.js      16 figuras SVG propias + 7 imágenes reales del material
    10_datos_a.js … 14_datos_e.js   (contenido de los 10 módulos)
    20_quiz_a.js … 29_quiz_j.js     (banco original)
    40_quiz_m2.js … 50_quiz_numericos.js  (ampliación, gráficas y numéricos)
    30_render.js  31_quiz_engine.js  32_mapa_render.js  33_ajustes.js

Comando de ensamblado:

    cat 01_head.html 02_css_quiz.html 03_math.js 04_graficas.js 05_casos.js 06_mapa.js \
        08_tips.js figuras.js 07_derivacion.js \
        1[0-4]_datos_*.js 2[0-9]_quiz_*.js 4[0-9]_quiz_*.js 50_quiz_numericos.js \
        09_tips_map.js 30_render.js 31_quiz_engine.js 32_mapa_render.js 33_ajustes.js > guia_efc.html

(`guia_efc.html` es el resultado ya ensamblado, idéntico al index.html publicado.)

## Estado actual

| | |
|---|---|
| Módulos | 10 (M2–M11, con M11 = Electroquímica) |
| Secciones | 53 |
| Fórmulas en formulario | 192, repartidas en 36 bloques |
| Problemas numéricos resueltos | 27 |
| Figuras | 23 (16 SVG propias + 7 imágenes reales del material del Tec) |
| Flashcards | 131 |
| Banco de reactivos | 540 · 21 de lectura de gráfica · 445 con truco de memoria |
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

## Añadido el 2 de noviembre de 2026 · trucos y derivaciones

Ángel pidió que la guía no solo diga qué es cada cosa sino **cómo recordarla**,
y que la termodinámica se presente como una cadena de derivaciones en vez de
una lista de fórmulas sueltas. De ahí:

- **Bloque `{truco:{t,c,x}}`**: tarjeta con el atajo de memoria y, debajo, la
  **trampa** típica del examen. Hay 13 repartidos por el contenido.
- **Figura `FIG.derivacion`**: árbol que muestra que no son veinte ecuaciones
  sino **dos leyes y tres definiciones**. De dU = δq + δw y de G = H − TS salen,
  diferenciando, dG = −SdT + VdP, y de ahí ΔG = ΔH − TΔS, ΔG° = −RT·ln K y
  ΔG° = −nFE°. Abajo, los cuatro procesos como casos particulares.
- **Figura `FIG.ordenes`**: los tres órdenes de reacción lado a lado con su
  linealización, sus unidades de k y su vida media.
- **Sección nueva en M5**: funciones de estado frente a funciones de proceso,
  los cuatro procesos reversibles y adiabata frente a isoterma.
- **72 trucos en el quiz**, enganchados a 445 de los 540 reactivos (82 %) por
  reglas de palabra clave en `09_tips_map.js`. Se muestran al contestar.
- **18 reactivos numéricos nuevos** de concentración (molalidad, porcentaje con
  densidad, mezclas, fracción molar, pureza, dilución en serie) y de
  termodinámica (temperatura de cruce, adiabata, trabajo isotérmico, ΔG° desde
  K, vida media, entropía de fusión, Arrhenius, ΔH frente a ΔU).

Al tocar las reglas de `09_tips_map.js` conviene volver a medir el reparto: una
regex sin `\b` puede acaparar cientos de reactivos. Pasó con `Ea`, que casaba
dentro de «línea» y «crea» y se llevó 148 reactivos antes de corregirla.

## Accesibilidad · auditoría WCAG 2.1 AA

Medida con cálculo de luminancia relativa sobre toda la paleta, no a ojo.

| Qué se revisó | Resultado |
|---|---|
| Texto normal contra su fondo (4.5:1) | 16 pares, todos pasan |
| Chips de módulo sobre su propio fondo | 10 pares, todos pasan |
| Componentes de interfaz y gráficos (3:1) | 9 pares, todos pasan |

Correcciones aplicadas:

- **`--m5`** pasó de `#0071ba` a `#006cb0`: el chip daba 4.45:1, por debajo del
  mínimo de 4.5. Ahora da 4.80.
- **Nuevo token `--border-ui` (`#7e8c99`, 3.44:1 sobre blanco)** para los bordes
  que delimitan controles interactivos y gráficos con significado: pestañas,
  opciones de quiz, tarjetas de modo, botones de ajustes, nodos y aristas del
  mapa, bordes de tabla y contornos de figura. El `--border` original (1.56:1)
  queda solo para separadores decorativos, que no son normativos.
- **Criterio 1.4.1, uso del color**: el acierto y el error en el quiz se
  distinguían únicamente por color de borde y de fondo. Ahora llevan además
  símbolo y etiqueta («✓ correcta», «✗ tu respuesta») y borde de doble grosor.
- **Foco visible** (2.4.7) explícito en todos los controles: enlaces, botones,
  `summary` de los acordeones, opciones de quiz y nodos del mapa.
- **ARIA de pestañas**: las subpestañas de módulo se anunciaban como `tablist`
  sin controlar ningún panel. Ahora los 42 `tab` tienen `aria-selected` y un
  `aria-controls` que apunta a un `tabpanel` existente.

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
