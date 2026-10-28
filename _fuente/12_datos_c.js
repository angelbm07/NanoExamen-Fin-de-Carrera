<script>
G.push(
/* ===================== M6 ===================== */
{id:'M6',nom:'Síntesis de materiales y nanomateriales',sesion:'Sesión 8 del taller',
 sub:'Por qué la nanoescala es distinta, nucleación y crecimiento, rutas químicas y rutas físicas. Es el módulo con más dependencias externas: quince de sus conceptos se apoyan en M5.',
 sec:[
  {t:'Los tres efectos que hacen distinta a la nanoescala',b:[
   {p:['Antes de los efectos conviene fijar la definición. Un <b>nanomaterial</b> es aquel en el que al menos una de sus dimensiones, o la de alguno de sus componentes o estructuras internas, se encuentra por debajo de los <b>100 nanómetros</b>. Lo decisivo es que a esa escala aparecen propiedades que el material masivo no tiene, no el tamaño como cifra arbitraria.']},
   {p:['No es un efecto único: son tres mecanismos con umbrales distintos, y el examen espera que sepas cuál aplica.']},
   {tabla:{th:['Efecto','Umbral','Qué explica'],tr:[
     ['Superficie','Por debajo de ~100 nm, continuo','Reactividad catalítica, descenso del punto de fusión, mayor solubilidad'],
     ['Confinamiento cuántico','Radio de Bohr del excitón (2–20 nm según material)','Gap que crece al reducir el tamaño. Solo semiconductores'],
     ['Propiedades colectivas','Tamaño crítico del fenómeno','Superparamagnetismo (monodominio), plasmón (metales)']]}},
   {eq:EQ.superficie},
   {p:['Una partícula de 5 nm tiene alrededor del 30 % de sus átomos en la superficie; una de 50 nm, un 3 %. La fracción escala como 1/R, así que al dividir el diámetro entre diez se multiplica por diez.']},
   {p:['Dirección del confinamiento: <b>menor tamaño ⇒ mayor gap ⇒ emisión más azul</b>. Los distractores siempre invierten esto. Y ojo con atribuir todo a la cuántica: el oro de 20 nm es rojo por <b>plasmón</b>, que es electromagnetismo clásico, no por confinamiento, porque un metal no tiene gap que confinar.']},
   {deep:{t:'Por qué el oro coloidal es rojo y no dorado',b:[
     {p:['Los electrones de conducción de la partícula son un gas confinado en una esfera mucho menor que la longitud de onda de la luz. Al llegar la onda, todo ese gas oscila colectivamente respecto a la red de cationes, con una frecuencia de resonancia propia: es la resonancia de plasmón superficial localizada.'],},
     {p:['Para oro esférico de unos 20 nm en agua la resonancia cae cerca de 520 nm, que es verde. La suspensión absorbe el verde y transmite su complementario: rojo rubí.'],},
     {ul:['Aumentar el tamaño desplaza la resonancia al <b>rojo</b>.',
          'Cambiar la forma la desplaza mucho más: una nanovarilla tiene un modo longitudinal que puede llevarse al infrarrojo cercano ajustando la relación de aspecto, que es la ventana donde el tejido es transparente.',
          'Subir el índice de refracción del medio también la desplaza al rojo: ese es el principio del biosensor plasmónico.',
          'La <b>agregación</b> acopla plasmones y corre la banda al rojo de forma drástica. Una suspensión que vira de rojo a azul está avisando que coagula.']}
   ]}}
  ,
   {form:[
 ['f<sub>sup</sub> ≈ 3δ / R','<b>Fracción de átomos superficiales</b>; δ es el espesor de una capa atómica. Va como <b>1/R</b>, no como el área ni el volumen.','adimensional'],
 ['A<sub>esp</sub> = 3 / (ρ·R) = 6 / (ρ·D)','<b>Área específica</b> de esferas monodispersas.','A en m²/g con ρ en g/m³ y R en m'],
 ['A/V = 3/R (esfera)','<b>Razón superficie a volumen</b>: se duplica al dividir el radio entre dos.','en m⁻¹'],
 ['T<sub>f</sub>(R) = T<sub>f∞</sub>[1 − 2σ<sub>sl</sub>/(ΔH<sub>f</sub>ρ<sub>s</sub>R)]','<b>Gibbs-Thomson</b>: el punto de fusión baja al reducir el tamaño, por el costo energético de la superficie.','T en K'],
 ['ΔE ∝ 1/L²','<b>Confinamiento cuántico</b>: dividir la dimensión entre dos cuadruplica la energía de confinamiento.','']
]},
   {prob:{t:'Cuánto gana realmente un catalizador al nanoestructurarse',
 d:'Platino, ρ = 21.45 g/cm³. Se compara un polvo de partículas esféricas de 2.0 µm con otro de 3.0 nm, ambos de 1.00 g. δ ≈ 0.25 nm.',
 p:['Área específica del polvo micrométrico: A = 6/(ρD) = 6/(21.45 × 2.0×10⁻⁴) = 6/4.29×10⁻³ = <b>1.40×10³ cm²/g</b>, es decir <b>0.14 m²/g</b>.',
    'Área específica del nanopolvo: D = 3.0 nm = 3.0×10⁻⁷ cm ⇒ A = 6/(21.45 × 3.0×10⁻⁷) = 6/6.435×10⁻⁶ = <b>9.33×10⁵ cm²/g</b>. Como 1 m² = 10⁴ cm², son <b>93.3 m²/g</b>.',
    'La razón de áreas es exactamente la razón inversa de diámetros: 2000 nm / 3 nm = <b>667 veces</b> más área por gramo.',
    'Fracción superficial del nanopolvo: f = 3δ/R = 3 × 0.25/1.5 = <b>0.50</b>. La mitad de los átomos están en la superficie.',
    'Fracción superficial del micrométrico: f = 3 × 0.25/1000 = <b>7.5×10⁻⁴</b>. Menos de un átomo de cada mil.'],
 r:'667 veces más área por gramo, y la mitad de los átomos expuestos frente a uno de cada 1300. Por eso el mismo gramo de platino cataliza órdenes de magnitud más.',
 x:'La fracción superficial escala con <b>1/R</b>, el área por gramo también con 1/R, pero el número de partículas por gramo escala con <b>1/R³</b>. Confundir las tres potencias es el error recurrente del módulo.'}}]},
  {t:'Nucleación, crecimiento y forma',b:[
   {p:['La barrera de nucleación existe por una competencia de potencias: el volumen libera energía como r³ y la superficie la consume como r². A radios pequeños domina el término de área y la energía sube; a radios grandes domina el de volumen y baja. El máximo es la barrera.']},
   {fig:FIG.nucleacion},
   {eq:EQ.nucleacion},
   {p:['Por debajo de r* un núcleo reduce su energía <b>disolviéndose</b>; por encima, creciendo. Más sobresaturación implica r* menor y barrera mucho menor (va con el inverso del cuadrado), de ahí que nuclee masivamente y dé partículas pequeñas.']},
   {fig:FIG.lamer},
   {p:['El modelo de <b>LaMer</b> dice que la monodispersidad no se logra controlando el crecimiento, sino <b>separándolo en el tiempo de la nucleación</b>: una nucleación explosiva que se autodetiene al consumir el monómero, y después solo crecimiento. De ahí la inyección caliente y el crecimiento sobre semillas.']},
   {p:['<b>Ostwald no es agregación</b>. La maduración transporta material disuelto desde las partículas pequeñas (más solubles por curvatura) hacia las grandes, sin que lleguen a tocarse; se combate bajando temperatura o solubilidad, no con estabilizantes. La agregación es por contacto y choque browniano; esa sí se combate estabilizando.']},
   {p:['La <b>sobresaturación</b> es la palanca que decide el tamaño final. Como r* = 2γ/ΔGv y la barrera va con el inverso del cuadrado de ΔGv, aumentarla reduce drásticamente ambos: se nuclea masivamente, el monómero se reparte entre muchísimos núcleos y las partículas salen pequeñas. Bajarla produce pocos núcleos que crecen mucho.']},
   {p:['Para controlar la <b>forma</b> hay que controlar la velocidad relativa de crecimiento de las caras, y la regla es contraintuitiva: una cara que crece rápido <b>desaparece</b> de la morfología final, porque el material se deposita hasta cerrarla. Las que sobreviven son las lentas. Por eso un agente director que se adsorbe selectivamente sobre una familia de caras la pasiva y la hace dominar: el CTAB da nanovarillas de oro y la PVP da nanocubos de plata.']}
  ,
   {form:[
 ['ΔG = (4/3)πr³ΔG<sub>v</sub> + 4πr²γ','<b>Nucleación homogénea</b>: el término de volumen favorece y el de superficie se opone.','ΔG<sub>v</sub> es negativo por unidad de volumen'],
 ['r* = −2γ / ΔG<sub>v</sub>','<b>Radio crítico</b>: por debajo el núcleo se redisuelve, por encima crece de forma irreversible.','r* en m'],
 ['ΔG* = 16πγ³ / (3ΔG<sub>v</sub>²)','<b>Barrera de nucleación</b>. La heterogénea la reduce por un factor geométrico que depende del ángulo de contacto.','en J'],
 ['S = C / C<sub>eq</sub>','<b>Sobresaturación</b>: es la fuerza impulsora. Más S da r* menor y por tanto más núcleos y más pequeños.','adimensional'],
 ['J = A·exp(−ΔG*/kT)','<b>Velocidad de nucleación</b>: exponencial en la barrera, de ahí el carácter explosivo del estallido de LaMer.','']
]},
   {prob:{t:'Radio crítico y por qué más sobresaturación da partículas más pequeñas',
 d:'Nucleación de oro en disolución a 298 K. γ = 1.5 J/m², volumen molar 1.02×10⁻⁵ m³/mol. Se compara sobresaturación S = 10 contra S = 1000.',
 p:['La fuerza impulsora por unidad de volumen es ΔG<sub>v</sub> = −(RT·ln S)/V<sub>m</sub>.',
    'Para S = 10: ΔG<sub>v</sub> = −(8.314 × 298 × 2.303)/1.02×10⁻⁵ = −5.705×10³/1.02×10⁻⁵ = <b>−5.59×10⁸ J/m³</b>.',
    'Radio crítico: r* = −2γ/ΔG<sub>v</sub> = 2 × 1.5/5.59×10⁸ = <b>5.4×10⁻⁹ m</b>, es decir <b>5.4 nm</b>.',
    'Para S = 1000: ln S = 6.908, tres veces mayor, así que ΔG<sub>v</sub> = <b>−1.68×10⁹ J/m³</b>.',
    'r* = 2 × 1.5/1.68×10⁹ = <b>1.8 nm</b>: tres veces menor.',
    'Y la barrera ΔG* va como 1/ΔG<sub>v</sub>², así que al triplicar la fuerza impulsora la barrera cae por un factor nueve, y como J es exponencial en ella, la velocidad de nucleación se dispara.'],
 r:'Con S = 10 el núcleo crítico mide 5.4 nm; con S = 1000 mide 1.8 nm y nuclean muchísimos más núcleos a la vez.',
 x:'La consecuencia práctica es la receta de LaMer: para obtener partículas <b>pequeñas y monodispersas</b> hay que alcanzar una sobresaturación alta de golpe (inyección caliente), consumir el precursor en un estallido breve y dejar que el crecimiento ocurra después, ya por debajo del umbral de nucleación. Añadir precursor lentamente solapa ambas etapas y ensancha la distribución.'}}]},
  {t:'Rutas químicas: qué controla cada una',b:[
   {tabla:{th:['Ruta','Fuerte en','Debilidad'],tr:[
     ['Reducción en disolución','Control fino de tamaño y forma en metales nobles','No sirve para óxidos ni alta temperatura'],
     ['Sol-gel','Homogeneidad molecular, recubrimientos y monolitos porosos','Producto <b>amorfo</b>: exige calcinar, lo que sinteriza y destruye área'],
     ['Hidrotermal / solvotermal','Cristalinidad <b>sin calcinar</b>, control de fase y morfología','Equipo a presión, tiempos largos'],
     ['Coprecipitación','Simple, barata, escalable','Distribución de tamaños ancha'],
     ['Microemulsión','Nanorreactores que limitan el tamaño','Rendimiento bajo, mucho surfactante que eliminar'],
     ['Electroquímica','Control fino por corriente y potencial; útil para metales','Requiere electrolito conductor y electrodos adecuados']]}},
   {p:['El <b>sol-gel</b> transcurre en dos etapas que conviene distinguir, y el agua aparece en las dos con papeles opuestos: la <b>hidrólisis</b> consume agua para convertir los alcóxidos en hidroxilos, y la <b>condensación</b> une dos hidroxilos <b>liberando agua</b> y formando el puente metal-oxígeno-metal que construye la red. Si en una reacción se observa que se expulsa agua al unirse dos grupos, la etapa es la condensación, y a esa agua exudada se la llama <b>agua de condensación</b>: no es agua de solvatación ni de hidratación, que son cosas distintas.']},
   {p:['Para elegir ruta ante un caso concreto conviene preguntarse qué variable hay que controlar. <b>Homogeneidad</b> entre varios cationes: coprecipitación simultánea, porque los mezcla a escala molecular antes de que se forme el sólido; molerlos ya formados solo los junta a escala de partícula. <b>Tamaño fino</b>: microemulsión, donde la gota acuosa actúa de nanorreactor y su tamaño limita el de la partícula, ajustable con la razón agua-surfactante. <b>Fase cristalina sin calcinar</b>: hidrotermal.']},
   {p:['El TiO₂ ilustra el costo de calcinar: por encima de unos 600 °C transita de anatasa a <b>rutilo</b>, menos activo fotocatalíticamente, y además crece el grano y cae el área superficial. Dos efectos que bajan la actividad a la vez.']},
   {p:['Hay dos formas de estabilizar y se distinguen por cómo fallan. La <b>estabilización electrostática</b> depende de la doble capa eléctrica, así que funciona en agua destilada y se desploma al subir la fuerza iónica: una suspensión que aguanta en agua y se agrega en suero fisiológico estaba estabilizada así. La <b>estérica</b>, con cadenas poliméricas ancladas, impide el acercamiento por un mecanismo físico que no depende del apantallamiento y resiste a 150 mM.']},
   {p:['El estabilizante no es un detalle de formulación: decide si la suspensión sobrevive. La <b>electrostática</b> falla a alta fuerza iónica porque la sal apantalla; la <b>estérica</b>, con cadenas poliméricas ancladas, funciona igual en medio fisiológico y por eso es la estrategia estándar para uso biológico.']},
   {p:['Calcinar de más tiene un segundo costo además de la transición de fase: por encima de cierta temperatura los granos empiezan a fusionarse para reducir energía superficial, las paredes de poro engrosan y la estructura <b>sinteriza</b>, perdiendo buena parte del área. Por eso se busca siempre la temperatura mínima que cristalice sin sinterizar.']},
   {p:['En arquitecturas, el <b>core-shell</b> pasiva trampas superficiales y sube el rendimiento cuántico de un punto cuántico: es la razón de ser de la coraza, no una mejora cosmética.']}
  ]},
  {t:'Rutas físicas y el límite litográfico',b:[
   {p:['Dos filosofías. <b>Descendente</b> (litografía, grabado, FIB) da control posicional —sabes dónde queda cada estructura, imprescindible en circuitos— y su límite es la resolución y el desperdicio. <b>Ascendente</b> (síntesis coloidal, autoensamblado, ALD) alcanza dimensiones menores con mejor calidad cristalina, y su límite es que no decide <b>dónde</b>. La industria las combina: litografía define dónde, depósito construye qué.']},
   {eq:EQ.litografia},
   {ul:['Reducir <b>λ</b>: de 436 a 365, a 248 (KrF), a 193 (ArF), y el salto a 13.5 nm en EUV, que exige óptica reflectiva en vacío.',
        'Aumentar <b>NA</b>: con aire n = 1 acota el valor; la inmersión en agua (n = 1.44) lleva la NA efectiva por encima de 1.3. Esa fue la palanca que prolongó la vida de los 193 nm.',
        'Reducir <b>k₁</b>: máscaras de desplazamiento de fase, iluminación fuera de eje, corrección de proximidad, patrones múltiples. Su límite físico ronda 0.25.']},
   {p:['La diferencia entre <b>sputtering</b> y <b>ALD</b> se nota sobre todo en geometrías con poros profundos o relación de aspecto alta: el primero deposita donde llega el flujo y tiende a cerrar la boca del poro sin recubrir el fondo; el segundo satura toda la superficie accesible y crece con espesor uniforme en el interior, controlable al angstrom contando ciclos.']},
   {p:['Depósito: el <b>sputtering</b> es línea de vista y tapa poros; el <b>ALD</b> pulsa precursores alternadamente con purgas, cada pulso satura la superficie y el crecimiento es autolimitado, de una capa por ciclo. Es lentísimo y a cambio da una conformidad sobre geometrías complejas que nada iguala.']},
   {p:['Grabado: el <b>húmedo</b> suele ser isotrópico y socava bajo la máscara, limitando la resolución a unas dos veces la profundidad. El <b>seco por plasma</b> con iones acelerados da paredes verticales y alta relación de aspecto. Caso intermedio que se pregunta: KOH sobre silicio {100} es anisotrópico <b>cristalográficamente</b>, no direccionalmente, y produce paredes a 54.7°.']},
   {p:['El área específica de partículas esféricas se obtiene dividiendo área entre masa: 4πr²/(ρ·(4/3)πr³) = 3/(ρr) = <b>6/(ρd)</b>. Con 10 nm y densidad 5.0 g/cm³ salen unos 120 m²/g. Ojo con no confundirla con 4πr², que es el área de una sola partícula.']},
   {p:['Y la regla de producción: escribe el maestro con la técnica de mayor resolución y <b>replica</b> con la más barata (litografía suave, micromoldeado, LIGA). Nunca produzcas en serie con la técnica cara.']}
  ]}
 ],
 flash:[
  ['Relación superficie-volumen de una esfera','S/V = 6/d. La fracción de átomos superficiales escala como 1/R: una partícula de 5 nm tiene ~30 % en superficie.'],
  ['Dirección del confinamiento cuántico','Menor tamaño ⇒ MAYOR gap ⇒ emisión más azul. Los distractores siempre invierten esto.'],
  ['¿Por qué el oro de 20 nm es rojo?','Resonancia de plasmón superficial cerca de 520 nm: absorbe verde y transmite el rojo complementario. Es electromagnetismo clásico, no confinamiento.'],
  ['Una suspensión de oro vira de rojo a azul: ¿qué pasa?','Está agregando. El acoplamiento entre plasmones desplaza la banda al rojo y el color percibido vira a azul o violeta.'],
  ['Radio crítico y qué ocurre por debajo','r* = 2γ/ΔGv. Por debajo de r* el núcleo se disuelve, porque a ese tamaño el término de superficie domina.'],
  ['¿Cómo se consigue monodispersidad según LaMer?','Separando en el tiempo una nucleación explosiva y autolimitada del crecimiento posterior. Todas las partículas nacen a la vez.'],
  ['Ostwald frente a agregación','Ostwald transporta material disuelto sin contacto entre partículas (se frena con menos solubilidad o temperatura). La agregación es por choque y se frena estabilizando.'],
  ['Regla contraintuitiva del control de forma','Las caras que crecen RÁPIDO desaparecen; sobreviven las lentas. Un agente director pasiva una familia de caras y la hace dominar.'],
  ['¿Qué ruta da cristalinidad sin calcinar?','Hidrotermal o solvotermal. El sol-gel entrega material amorfo y exige calcinación, que sinteriza y destruye área superficial.'],
  ['ALD frente a sputtering','ALD: pulsos alternados, autolimitado, una capa por ciclo, conformal. Sputtering: línea de vista, rápido, tapa poros.'],
  ['Las tres palancas de la litografía','CD = k₁λ/NA. Bajar λ, subir NA (inmersión), bajar k₁ (máscaras de fase, patrones múltiples).']
 ]},

/* ===================== M7 ===================== */
{id:'M7',nom:'Caracterización de materiales',sesion:'Sesión 7 del taller',
 sub:'Una sonda para cada pregunta: difracción, microscopía, espectroscopía y análisis térmico. El reactivo más frecuente del módulo es «dada esta muestra y este objetivo, qué técnica eliges».',
 sec:[
  {t:'Casos: encadenar técnicas hasta cerrar una identificación',b:[
   {p:['Las preguntas de caracterización del examen rara vez piden una técnica aislada: piden <b>qué harías</b> ante una muestra concreta, y eso exige encadenar. El criterio que recorre los tres casos siguientes es siempre el mismo: empieza por la técnica <b>no destructiva que más acota</b>, deja que cada resultado decida cuál es la siguiente pregunta, y busca <b>comprobaciones cruzadas</b> entre técnicas independientes en lugar de confiar en un solo número.']},
   {caso:CASOS.polvo_blanco},
   {caso:CASOS.coloide_violeta},
   {caso:CASOS.recubrimiento_falla}
  ]},
  {t:'El árbol de decisión: organiza por pregunta, no por técnica',b:[
   {tabla:{th:['Lo que quieres saber','Técnica','Advertencia'],tr:[
     ['Qué fases cristalinas hay','DRX','Ciega al material amorfo; no da composición elemental'],
     ['Qué elementos, en disolución','AAS (uno) / ICP-OES o ICP-MS (multielemental, trazas)','—'],
     ['Qué elementos, con resolución espacial','EDS en SEM o TEM','Débil en ligeros; volumen de interacción de micras'],
     ['Estado de oxidación de la superficie','XPS','Solo los primeros nanómetros. EDS <b>no</b> da estado químico'],
     ['Forma y tamaño, morfología externa','SEM','Vacío, muestra conductora, no ve el interior'],
     ['Estructura interna, menos de 10 nm','TEM','Muestra ultradelgada, preparación laboriosa, daño por haz'],
     ['Altura cuantitativa, muestra blanda o en líquido','AFM','Resolución lateral limitada por el radio de la punta'],
     ['Tamaño en suspensión','DLS','Diámetro hidrodinámico, sesgado a las grandes'],
     ['Grupos funcionales','FTIR (+ Raman en agua)','—'],
     ['Área superficial accesible','BET con N₂ a 77 K','—'],
     ['Comportamiento térmico','TGA (masa) / DSC (energía)','Solo DSC ve la Tg']]}},
   {p:['Y la regla que cierra el módulo: <b>ninguna técnica sola caracteriza un material</b>. Un trabajo serio combina al menos difracción, microscopía y una espectroscopía, porque cada una tiene un punto ciego que otra cubre. La secuencia lógica es no destructivo antes que destructivo, y estructural antes que cuantificación fina.']}
  ]},
  {t:'Difracción: tres medidas, tres informaciones',b:[
   {eq:EQ.scherrer},
   {p:['<b>El error más frecuente del módulo</b>: en Bragg, θ es la mitad del 2θ que reporta el equipo. Olvidarlo cambia el resultado por completo.']},
   {tabla:{th:['Qué mides en el difractograma','Qué te dice'],tr:[
     ['Posición de los picos (2θ)','Espaciados d ⇒ fase y parámetro de red. Un desplazamiento sistemático indica dopaje sustitucional o tensión'],
     ['Intensidad relativa','Qué átomos y dónde en la celda. Si las posiciones coinciden y las intensidades no: <b>orientación preferencial</b>'],
     ['Ancho de los picos','Tamaño de cristalito por Scherrer. Un material amorfo da solo un halo ancho']]}},
   {p:['Dos advertencias sobre Scherrer. β debe ser el ensanchamiento <b>de la muestra</b>: hay que restar la contribución instrumental medida con un estándar de cristalitos grandes. Y la <b>microdeformación también ensancha</b>, sin distinguirse con un solo pico: para separarlas está Williamson-Hall, que aprovecha que ambas dependen distinto del ángulo.']},
   {p:['Cristalito no es partícula: una partícula policristalina de 60 nm puede estar hecha de dominios coherentes de 12 nm, y la difracción solo ve el dominio. Es una de las confusiones más preguntadas.']},
   {p:['Un difractograma con <b>un solo halo ancho y ningún pico</b> indica material <b>amorfo</b>: los picos nacen de la periodicidad de largo alcance, y sin ella solo queda la dispersión difusa de las distancias promedio entre vecinos. Cristalitos grandes darían lo contrario, picos muy estrechos.']},
   {p:['Indexar en sistema cúbico: la razón de 1/d² da los valores de h²+k²+l². La secuencia 3, 4, 8, 11 identifica <b>FCC</b> (índices todos pares o todos impares); 2, 4, 6, 8 identifica <b>BCC</b> (h+k+l par).']}
  ,
   {fig:FIG.xrd},
   {form:[
 ['nλ = 2d·sen θ','<b>Ley de Bragg</b>. θ es la <b>mitad</b> del 2θ que reporta el difractómetro: ese es el error número uno.','λ(Cu Kα) = 0.15406 nm'],
 ['d<sub>hkl</sub> = a / √(h²+k²+l²)','<b>Espaciado</b> en sistema cúbico; permite indexar y obtener el parámetro de red.',''],
 ['D = Kλ / (β·cos θ)','<b>Scherrer</b>: tamaño de <b>cristalito</b>, no de partícula. K ≈ 0.9 y β es el ensanchamiento en <b>radianes</b>.','β = FWHM − ensanchamiento instrumental'],
 ['β·cos θ = Kλ/D + 4ε·sen θ','<b>Williamson-Hall</b>: separa tamaño (ordenada) de microdeformación (pendiente).','ε adimensional'],
 ['Cristalinidad % = A<sub>cristalina</sub>/A<sub>total</sub> × 100','<b>Grado de cristalinidad</b> a partir de áreas de picos frente al halo amorfo.','']
]},
   {prob:{t:'Indexar, obtener el parámetro de red y el tamaño de cristalito',
 d:'Difractograma con radiación de cobre (λ = 0.15406 nm). Primer pico a 2θ = 38.19° con FWHM de 0.52°. El ensanchamiento instrumental medido con un patrón es 0.08°. La secuencia de h²+k²+l² observada es 3, 4, 8, 11.',
 p:['La secuencia 3, 4, 8, 11 corresponde a índices <b>todos pares o todos impares</b>: (111), (200), (220), (311). Es una red <b>FCC</b>.',
    'Espaciado del primer pico: θ = 38.19/2 = <b>19.095°</b>, sen θ = 0.3271. d = λ/(2 sen θ) = 0.15406/0.6542 = <b>0.2355 nm</b>.',
    'Parámetro de red: a = d·√(h²+k²+l²) = 0.2355 × √3 = 0.2355 × 1.7321 = <b>0.4079 nm</b>. Corresponde a plata metálica.',
    'Ensanchamiento corregido: β = 0.52 − 0.08 = <b>0.44°</b>. En radianes: 0.44 × π/180 = <b>7.679×10⁻³ rad</b>.',
    'Scherrer: D = 0.9 × 0.15406 / (7.679×10⁻³ × cos 19.095°) = 0.13865/(7.679×10⁻³ × 0.9450) = 0.13865/7.257×10⁻³ = <b>19.1 nm</b>.'],
 r:'Red FCC con a = 0.408 nm (plata) y cristalitos de unos 19 nm.',
 x:'Tres trampas en un solo problema: usar <b>2θ</b> en lugar de θ en el seno, no convertir el FWHM a <b>radianes</b>, y no restar el <b>ensanchamiento instrumental</b>. Además, si el TEM mostrara partículas de 60 nm no habría contradicción: serían policristalinas, con varios dominios de 19 nm cada una.'}}]},
  {t:'Microscopía: qué limita a cada una',b:[
   {p:['Los electrones ven más porque su longitud de onda de de Broglie es miles de veces menor que la de la luz visible, y el límite de resolución escala con λ.']},
   {fig:FIG.sem},
   {p:['El haz de electrones genera varias señales a la vez, y cada una responde una pregunta distinta. Los <b>electrones secundarios</b> son de baja energía y escapan solo de los primeros nanómetros: dan <b>topografía</b>. Los <b>retrodispersados</b> vienen de interacciones elásticas con el núcleo, cuya probabilidad crece con Z: dan <b>contraste por composición</b>, donde lo pesado brilla. Los <b>rayos X característicos</b> nacen de todo el volumen de interacción y dan <b>composición elemental</b> por EDS. Y en TEM, los <b>transmitidos</b> atraviesan una muestra delgada y revelan el interior con resolución atómica.']},
   {p:['De ahí el reparto de tareas que se pregunta como caso: para <b>superficie tridimensional sin preparación adicional</b>, AFM, que además mide fuerzas e interacciones; para <b>interior de muestra delgada con resolución atómica</b>, TEM; para <b>superficie con información de composición</b>, SEM con EDS.']},
   {ul:['<b>SEM</b>: electrones secundarios dan topografía con gran profundidad de campo; retrodispersados dan contraste por número atómico (lo pesado se ve más brillante).',
        '<b>TEM</b>: transmisión a través de muestra ultradelgada. Resolución atómica, estructura interna, interfases core-shell, y difracción de electrones de una partícula individual.',
        '<b>AFM</b>: mide fuerzas con una punta en micropalanca. Funciona en aire y en líquido, sin vacío ni metalización, y da resolución vertical subnanométrica.']},
   {p:['Los electrones ven más que la luz porque su longitud de onda de de Broglie es miles de veces menor, y el límite de resolución escala con ella. Para una <b>muestra biológica hidratada</b> que no puede deshidratarse ni metalizarse, sin embargo, la respuesta es <b>AFM en líquido</b>: mide fuerzas y no necesita vacío ni recubrimiento conductor.']},
   {p:['Toda imagen de AFM es la <b>convolución</b> entre la topografía real y la geometría de la punta: los objetos salientes aparecen más anchos y los huecos más estrechos. Por eso al medir nanopartículas con AFM se usa la <b>altura</b>, no la anchura: la altura no depende del radio de la punta.']},
   {p:['Y la discrepancia que más confunde: <b>DLS da un valor mayor que TEM</b> y las dos son correctas. TEM mide el núcleo sólido seco y da distribución en número; DLS mide el diámetro hidrodinámico, que incluye recubrimiento y solvatación, y su distribución en intensidad escala con la sexta potencia del diámetro, así que un solo agregado pesa como un millón de partículas pequeñas. Una razón de 1.2 a 2 veces es normal; mucho más sugiere agregación real en suspensión.']}
  ,
   {form:[
 ['d = 0.61λ / (n·sen α)','<b>Criterio de Rayleigh</b>: el límite de difracción óptico, unos 200 nm en el visible.','n·sen α es la apertura numérica'],
 ['λ = h/√(2m<sub>e</sub>eV) ≈ 1.226/√V nm','<b>De Broglie</b> para electrones acelerados; a 200 kV, λ ≈ 2.5 pm. Por eso el TEM resuelve átomos.','V en volts'],
 ['D<sub>h</sub> = kT / (3πηD<sub>t</sub>)','<b>Stokes-Einstein</b>: de la difusión medida por DLS al diámetro <b>hidrodinámico</b>, que incluye la capa solvatada.','η en Pa·s, D<sub>t</sub> en m²/s'],
 ['I ∝ d⁶','<b>Dispersión de Rayleigh</b> en DLS: una sola partícula grande pesa tanto como un millón de pequeñas. De ahí que el DLS sobrestime frente al TEM.',''],
 ['PDI &lt; 0.1 monodisperso · 0.1–0.4 moderado · &gt; 0.7 no interpretable','<b>Índice de polidispersidad</b> del DLS por acumulantes.','adimensional']
]},
   {prob:{t:'De DLS a diámetro, y por qué no coincide con el TEM',
 d:'Una suspensión acuosa a 25 °C da un coeficiente de difusión traslacional de 1.96×10⁻¹² m²/s. η(agua, 25 °C) = 8.90×10⁻⁴ Pa·s, k = 1.381×10⁻²³ J/K. El TEM del mismo lote da 18 nm.',
 p:['Stokes-Einstein: D<sub>h</sub> = kT/(3πηD<sub>t</sub>).',
    'Numerador: kT = 1.381×10⁻²³ × 298.15 = <b>4.118×10⁻²¹ J</b>.',
    'Denominador: 3π·η·D<sub>t</sub> = 9.4248 × 8.90×10⁻⁴ × 1.96×10⁻¹² = <b>1.644×10⁻¹⁴ J·s/m²·s</b>.',
    'D<sub>h</sub> = 4.118×10⁻²¹ / 1.644×10⁻¹⁴ = 2.50×10⁻⁷ m = <b>250 nm</b>.',
    'Frente a los 18 nm del TEM, la diferencia es de más de un orden: no es un error de cálculo, es <b>agregación</b> en suspensión, y lo confirma que el TEM vea contornos individuales limpios.'],
 r:'D<sub>h</sub> = 250 nm por DLS frente a 18 nm por TEM: las partículas están agregadas en el medio líquido.',
 x:'DLS y TEM miden cosas distintas y en estados distintos. El DLS da el diámetro <b>hidrodinámico en suspensión</b>, pondera por intensidad (que va con d⁶) e incluye la capa solvatada y el estabilizante. El TEM mide el <b>núcleo seco</b> sobre una rejilla. Que el DLS salga mayor es lo normal; que salga diez veces mayor indica agregación.'}},
   {p:['La <b>microscopía óptica</b> es la línea base contra la que se mide todo lo demás, y conviene tenerla clara porque el examen la usa como distractor. Su resolución está limitada por difracción al criterio de Abbe, d = λ/(2·AN), lo que con luz visible y una apertura numérica de 1.4 en inmersión da unos <b>200 nm</b>. Ninguna nanopartícula individual se resuelve ahí: lo que se ve de un coloide es dispersión, no la partícula.']},
   {p:['La <b>microscopía confocal</b> no rompe ese límite lateral: lo que hace es rechazar con un diafragma la luz que no viene del plano focal, lo que mejora el contraste y permite <b>seccionar ópticamente</b> y reconstruir en tres dimensiones. Sirve para ver dónde se acumula una nanopartícula marcada dentro de una célula, no para medir su tamaño.']},
   {p:['Las técnicas de <b>superresolución</b> (STED, PALM, STORM) sí bajan de los 200 nm, hasta decenas de nanómetros, pero exigen marcadores fluorescentes y no son técnicas de rutina en caracterización de materiales. La regla práctica para el examen: si la pregunta pide <b>tamaño o morfología de nanopartícula</b>, la óptica no es la respuesta; si pide <b>localización dentro de un sistema biológico</b>, la confocal con marcaje sí lo es.']}]},
  {t:'Espectroscopía y análisis térmico',b:[
   {tabla:{th:['','FTIR','Raman'],tr:[
     ['Fenómeno','Absorción','Dispersión inelástica'],
     ['Regla de selección','Cambio de <b>momento dipolar</b>','Cambio de <b>polarizabilidad</b>'],
     ['Brilla en','Enlaces polares: C=O, O–H, C≡N','Enlaces simétricos no polares, S–S, modos de red'],
     ['En agua','Saturado por el disolvente','Agua dispersa poco: técnica de elección']]}},
   {p:['En moléculas con centro de simetría vale la <b>regla de exclusión mutua</b>: un modo activo en IR no puede serlo en Raman. En CO₂ la tensión simétrica es Raman-activa e IR-inactiva, y la asimétrica al revés.']},
   {p:['El Raman es extraordinariamente débil, del orden de un fotón inelástico por cada diez millones, y de ahí la importancia de <b>SERS</b>, donde una superficie metálica nanoestructurada amplifica el campo local. El factor escala aproximadamente como la <b>cuarta potencia</b> del refuerzo de campo, porque la amplificación entra dos veces: en la excitación y en la reemisión. Por eso los puntos calientes dominan la señal.']},
   {p:['Térmico: <b>TGA mide masa, DSC mide energía</b>. Una Tg, una fusión o una transición polimórfica no cambian la masa y son invisibles en TGA. En una nanopartícula recubierta leída en aire, la pérdida por debajo de 120 °C es agua fisisorbida y la de 200 a 400 °C es el recubrimiento orgánico; el residuo por encima de 450 °C es el inorgánico.']},
   {deep:{t:'Leer una curva de TGA de una nanopartícula funcionalizada',b:[
     {p:['Caso típico: óxido de hierro recubierto con ácido oleico, analizado en aire de 25 a 800 °C. La curva muestra tres zonas y cada una se interpreta distinto.'],},
     {tabla:{th:['Intervalo','Pérdida','Qué es'],tr:[
       ['25–120 °C','~2 %','Agua fisisorbida y disolvente residual. <b>No</b> cuenta como recubrimiento'],
       ['200–400 °C','~14 %','Descomposición oxidativa del recubrimiento orgánico. Este es el dato que interesa'],
       ['> 450 °C','Meseta','Residuo inorgánico estable']]}},
     {p:['Con el área superficial por BET y la masa molar del ligando se estima la densidad de injerto en moléculas por nanómetro cuadrado, que indica si el recubrimiento es monocapa o multicapa desordenada.'],},
     {p:['Dos advertencias. La <b>atmósfera importa</b>: en aire la parte orgánica se oxida y desaparece, mientras que en nitrógeno se pirolisa y deja residuo carbonoso, lo que subestimaría el recubrimiento. Y si el inorgánico puede oxidarse (magnetita a maghemita o hematita), en aire habrá una ganancia de masa superpuesta a la pérdida orgánica que falsea el cálculo: en esos casos se trabaja en inerte y se corrige por el residuo.']}
   ]}},
   {p:['Para <b>cuantificar metales traza en un digerido acuoso</b> con límites de partes por billón la respuesta es ICP-MS: el plasma ioniza todos los elementos a la vez y la espectrometría de masas llega a ese nivel. La AAS de llama es monoelemental y se queda en partes por millón; FTIR y DRX no cuantifican metales en disolución.']},
   {p:['Y un artefacto de AFM que conviene reconocer: si <b>todos los objetos aparecen con la misma forma doble repetida</b>, la punta está rota o contaminada y está imprimiendo su propia geometría en cada objeto. La firma del artefacto es justamente esa repetición idéntica, porque los objetos reales no comparten una forma exacta.']},
   {p:['Límites de EDS que conviene declarar: detecta mal los elementos ligeros, su volumen de interacción es de micras (así que al analizar una nanopartícula sobre un sustrato buena parte de la señal viene del sustrato), es semicuantitativo con LOD de 0.1 a 1 % en masa, y <b>no distingue estados de oxidación</b> porque sus rayos X vienen de transiciones internas. Para eso, XPS. EELS, en cambio, destaca justo en los ligeros: son complementarios.']}
  ,
   {form:[
 ['ν̄(cm⁻¹) = 1/λ(cm)   ·   ν̄ ∝ √(k/µ)','<b>Número de onda</b> de una vibración: sube con la fuerza del enlace y baja con la masa reducida.',''],
 ['Regla de exclusión mutua','En moléculas con <b>centro de simetría</b>, un modo activo en Raman es inactivo en IR, y viceversa.',''],
 ['% pérdida = (m₀ − m<sub>f</sub>)/m₀ × 100','<b>TGA</b>. Por debajo de 120 °C suele ser agua y disolvente; de 200 a 400 °C, orgánicos.','en %'],
 ['Tg: escalón en la línea base · Tm: pico endotérmico · Tc: pico exotérmico','<b>DSC</b>: la transición vítrea no tiene pico porque es de segundo orden.','']
]},
   {p:['La <b>espectroscopía UV-Vis</b> es la más barata y la más preguntada. Mide absorción electrónica, es decir transiciones de electrones entre niveles, y en nanotecnología entrega tres cosas distintas según el sistema. En <b>semiconductores</b>, el borde de absorción da la brecha prohibida por E<sub>g</sub> = 1240/λ, y el ajuste de Tauc lo precisa. En <b>metales plasmónicos</b>, la posición y el ancho de la banda de plasmón informan del tamaño, la forma y el estado de agregación: el oro coloidal esférico de 20 nm absorbe cerca de 520 nm, y si la banda se corre al rojo y se ensancha, hay agregación. En <b>moléculas</b>, sirve para cuantificar por la ley de Beer.']},
   {p:['La <b>resonancia magnética nuclear</b> no mide el material sólido de rutina, pero es la técnica de elección para <b>determinar la estructura de una molécula orgánica</b>: entorno químico de cada hidrógeno o carbono por el desplazamiento químico, número de vecinos por la multiplicidad y número de núcleos por la integración. En nanotecnología se usa para confirmar la identidad del ligando que recubre una partícula, y su versión de estado sólido para entornos locales en materiales amorfos.']},
   {p:['La <b>espectroscopía de pérdida de energía de electrones</b> (EELS) se hace dentro del TEM y mide cuánta energía perdió cada electrón al atravesar la muestra. Da composición elemental con <b>resolución espacial casi atómica</b>, es especialmente sensible a los elementos ligeros que el EDS detecta mal (carbono, nitrógeno, oxígeno) y, en la región de baja pérdida, entrega el gap óptico y la energía de plasmón. Es la respuesta cuando la pregunta pide <b>composición elemental punto por punto en la nanoescala</b>.']},
   {form:[
    ['E<sub>g</sub>(eV) = 1240 / λ<sub>borde</sub>(nm)','<b>Brecha</b> a partir del borde de absorción UV-Vis. Es la relación numérica más preguntada del examen.','λ en nm'],
    ['(αhν)^(1/n) contra hν','<b>Ajuste de Tauc</b>: la extrapolación de la recta al eje da E<sub>g</sub>. n = 1/2 para gap directo y n = 2 para indirecto.',''],
    ['λ<sub>plasmón</sub>(Au esférico) ≈ 520 nm','<b>Plasmón del oro coloidal</b>. Se corre al rojo y se ensancha al agregarse o al alargar la partícula.',''],
    ['d = λ / (2·AN)','<b>Criterio de Abbe</b>: el límite de difracción óptico, unos 200 nm en el visible.','AN es la apertura numérica'],
    ['δ (ppm) · multiplicidad · integración','Las tres lecturas de un espectro de <b>RMN</b>: entorno químico, número de vecinos y número de núcleos.','']
   ]}]}
 ],
 flash:[
  ['En la ley de Bragg, ¿qué ángulo se usa?','θ, que es la MITAD del 2θ que reporta el difractómetro. Es el error más frecuente del módulo.'],
  ['¿Qué distingue tamaño de cristalito de tamaño de partícula?','Scherrer da el dominio coherente. Una partícula policristalina de 60 nm puede tener cristalitos de 12 nm.'],
  ['Posiciones de picos correctas pero intensidades relativas no: ¿qué indica?','Orientación preferencial de los cristalitos. Típico en películas delgadas y materiales laminares.'],
  ['DLS da 45 nm y TEM 22 nm: ¿cuál miente?','Ninguna. DLS mide diámetro hidrodinámico con recubrimiento y solvatación, y pesa más las grandes (intensidad ∝ d⁶).'],
  ['Al medir nanopartículas con AFM, ¿altura o anchura?','Altura. La anchura está ensanchada por la convolución con la punta; la resolución vertical es subnanométrica.'],
  ['Reglas de selección de IR y Raman','IR: cambio de momento dipolar. Raman: cambio de polarizabilidad. En centrosimétricas se excluyen mutuamente.'],
  ['¿Por qué SERS amplifica con la cuarta potencia?','La amplificación actúa en la excitación y en la reemisión, y cada una va con el cuadrado del campo.'],
  ['TGA frente a DSC','TGA mide masa; DSC mide energía. La Tg no cambia la masa, así que solo la ve el DSC.'],
  ['¿Qué técnica da estado de oxidación de la superficie?','XPS, con profundidad de unos pocos nanómetros. El EDS da elementos pero no estado químico.'],
  ['Secuencias de h²+k²+l² en DRX cúbica','FCC: 3, 4, 8, 11 (índices todos pares o todos impares). BCC: 2, 4, 6, 8 (h+k+l par).']
 ]}
);
</script>
