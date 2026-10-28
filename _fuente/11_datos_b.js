<script>
G.push(
/* ===================== M4 ===================== */
{id:'M4',nom:'Química de materiales',sesion:'Sesión 2 del taller',
 sub:'Del átomo al enlace, de los orbitales a las bandas, cristalografía y la cuántica que sí se pregunta. Es el módulo de menor nivel de dependencia: sostiene a casi todos los demás.',
 sec:[
  {t:'La escalera que explica casi todas las propiedades',b:[
   {p:['La cadena causal es siempre la misma, y el examen la recorre en los dos sentidos: configuración electrónica → electronegatividad y tamaño → tipo de enlace → arreglo y fuerza de cohesión → propiedades macroscópicas medibles.']},
   {tabla:{th:['Enlace','Conduce en sólido','Mecánico','Fusión'],tr:[
     ['Metálico','Sí (electrones deslocalizados)','Dúctil y maleable','Media a alta'],
     ['Iónico','No (iones fijos); sí fundido o disuelto','Duro y frágil, clivaje','Alta'],
     ['Covalente en red','No','Durísimo, frágil','Muy alta'],
     ['Molecular','No','Blando','Baja']]}},
   {p:['La diferencia mecánica tiene una explicación puramente geométrica. En un metal, al deslizarse un plano los cationes cambian de vecinos pero el mar electrónico los sigue rodeando igual, así que se deforma sin romperse. En un iónico, deslizar media celda enfrenta cationes con cationes: la interacción pasa de atractiva a repulsiva de golpe y el cristal se fractura.']},
   {p:['Y la trampa de niveles: al <b>hervir</b> un líquido molecular vences fuerzas intermoleculares, no enlaces. El vapor de agua sigue siendo H₂O. Al <b>fundir</b> una sal rompes la red iónica. Son escalas de energía distintas, y confundirlas es el error conceptual más común del módulo.']}
  ,
   {fig:FIG.esfuerzo_def},
   {form:[
 ['σ = F/A₀   ·   ε = ΔL/L₀','<b>Esfuerzo ingenieril y deformación</b>, con el área y la longitud iniciales.','σ en Pa o MPa, ε adimensional'],
 ['E = σ/ε','<b>Módulo de Young</b>: la pendiente del tramo elástico. Mide rigidez, no resistencia.','E en GPa'],
 ['σ<sub>y</sub> = σ<sub>0</sub> + k·d^(−1/2)','<b>Hall-Petch</b>: granos más finos elevan el límite elástico, porque los bordes frenan las dislocaciones.','d es el tamaño de grano'],
 ['K<sub>IC</sub> = Y·σ·√(πa)','<b>Tenacidad a la fractura</b>; a es el tamaño del defecto crítico. Explica por qué el vidrio falla muy por debajo de su resistencia teórica.','K<sub>IC</sub> en MPa·√m'],
 ['σ = ρ<sub>e</sub>⁻¹ = n·q·µ','<b>Conductividad eléctrica</b>: portadores por su carga y su movilidad.','σ en S/m']
]},
   {prob:{t:'Leer rigidez, resistencia y ductilidad en una sola curva',
 d:'Una probeta de 10.0 mm de diámetro y 50.0 mm de longitud calibrada. Con 20.0 kN se alargó 0.125 mm de forma recuperable. Cedió a 35.0 kN, alcanzó un máximo de 48.0 kN y rompió con una longitud final de 58.5 mm.',
 p:['Área inicial: A₀ = π(5.00×10⁻³)² = <b>7.854×10⁻⁵ m²</b>.',
    'En el tramo elástico: σ = 20 000/7.854×10⁻⁵ = <b>254.6 MPa</b> y ε = 0.125/50.0 = <b>2.50×10⁻³</b>.',
    'Módulo de Young: E = 254.6 MPa / 2.50×10⁻³ = <b>102 GPa</b>.',
    'Límite elástico: σ<sub>y</sub> = 35 000/7.854×10⁻⁵ = <b>445.6 MPa</b>.',
    'Resistencia última: σ<sub>UTS</sub> = 48 000/7.854×10⁻⁵ = <b>611.2 MPa</b>.',
    'Ductilidad: % alargamiento = (58.5 − 50.0)/50.0 × 100 = <b>17 %</b>.'],
 r:'E = 102 GPa (rigidez), σ<sub>y</sub> = 446 MPa (inicio de la deformación permanente), σ<sub>UTS</sub> = 611 MPa (carga máxima) y 17 % de alargamiento (ductilidad).',
 x:'Son cuatro propiedades <b>independientes</b> leídas de la misma curva. Un material puede ser muy rígido y poco resistente, o muy resistente y nada dúctil. Usar el área instantánea en lugar de A₀ da el esfuerzo <b>verdadero</b>, que no baja tras el máximo: la caída de la curva ingenieril es un artefacto de dividir siempre entre A₀.'}}]},
  {t:'De orbitales a bandas, y el dopaje',b:[
   {p:['Las bandas no son un concepto aparte: son la extensión directa de la teoría de orbitales moleculares. N orbitales atómicos dan N niveles en un rango acotado; con N del orden de 10²³ la separación entre niveles consecutivos es de unos 10⁻²³ eV, indistinguible de un continuo.']},
   {eq:'E(eV) ≈ 1240 / λ(nm)   ·   umbral de absorción de un semiconductor'},
   {tabla:{th:['Material','Eg (eV)','Umbral','Aspecto'],tr:[
     ['TiO₂ anatasa','3.2','388 nm (UV)','Blanco: no absorbe visible'],
     ['CdS','2.4','517 nm','Amarillo-naranja'],
     ['Si','1.12','1107 nm (IR)','Gris oscuro: absorbe todo el visible']]}},
   {p:['El color observado es el <b>complementario</b> de lo absorbido, y ese paso es el que más se falla. Un Eg de 2.0 eV da umbral en 620 nm: absorbe violeta, azul y verde, y se ve rojo-anaranjado.']},
   {fig:FIG.bandas},
   {p:['Dos piezas que sostienen el modelo. Por el <b>principio de exclusión de Pauli</b>, en un mismo estado orbital caben como máximo <b>dos electrones</b>, y solo si difieren en el espín: es lo que impide que todos los electrones se amontonen en el nivel más bajo y lo que obliga a llenar las bandas de abajo hacia arriba. Y en un <b>semiconductor intrínseco</b>, puro, cada electrón que cruza el gap deja atrás un hueco, de modo que <b>n = p</b> exactamente. Dopar rompe esa igualdad: en tipo n los electrones son mayoritarios y en tipo p lo son los huecos.']},
   {p:['De la tabla sale el procedimiento completo para predecir color: calcular el umbral con λ = 1240/Eg, ver qué parte del visible queda por debajo (eso se absorbe) y concluir que el color observado es <b>el complementario de lo absorbido</b>. Un material que absorbe por debajo de 517 nm tiene Eg = 1240/517 = <b>2.4 eV</b>, se come violeta, azul y verde, y se ve <b>amarillo-anaranjado</b>. Un material transparente e incoloro no absorbe nada del visible, así que su gap debe superar <b>3.1 eV</b>, el extremo violeta.']},
   {p:['Ese mismo 1240 conecta con las transiciones atómicas. En el hidrógeno la separación entre niveles crece al subir, así que el salto <b>4→2 libera más energía que el 3→2</b>: mayor frecuencia y por tanto <b>menor longitud de onda</b>, ya que E = hc/λ.']},
   {p:['El dopaje <b>no cambia el ancho del gap</b>: introduce niveles dentro de él. El fósforo en silicio deja un nivel donador a unos 0.045 eV bajo la banda de conducción, y como kT a temperatura ambiente vale 0.026 eV, ese electrón se libera con facilidad. Resultado: tipo n. El boro deja un nivel aceptor cerca de la banda de valencia: tipo p.']},
   {p:['La magnitud del efecto sorprende: una parte por millón de dopante aporta muchísimos más portadores que los pocos que cruzan el gap térmicamente en el material puro, de modo que la conductividad cambia en <b>varios órdenes de magnitud</b>. Por eso el silicio electrónico exige purezas extremas antes de doparlo: cualquier impureza residual actuaría como dopante incontrolado y arruinaría tanto el tipo de portador como su concentración.']},
   {deep:{t:'La trampa de la temperatura',b:[
     {p:['El comportamiento de la resistividad con la temperatura distingue a un metal de un semiconductor, y las direcciones son opuestas.'],},
     {ul:['<b>Metal</b>: T sube ⇒ ρ sube. El número de portadores ya es fijo; lo que crece es la dispersión por fonones.',
          '<b>Semiconductor</b>: T sube ⇒ ρ baja. El número de portadores crece exponencialmente al cruzar el gap, y ese efecto domina sobre la dispersión.']},
     {p:['De aquí sale una medición diagnóstica barata: si la resistencia de una muestra desconocida baja al calentarla, es semiconductora.']}
   ]}}
  ,
   {form:[
 ['E<sub>g</sub>(eV) = 1240 / λ(nm)','<b>Brecha prohibida</b> a partir del borde de absorción. Es la relación más usada del módulo.','λ en nm'],
 ['n ∝ exp(−E<sub>g</sub>/2kT)','<b>Portadores intrínsecos</b>: por eso la resistividad de un semiconductor <b>baja</b> al calentar.','kT = 0.0259 eV a 25 °C'],
 ['σ = q(n·µ<sub>e</sub> + p·µ<sub>h</sub>)','<b>Conductividad</b> con los dos tipos de portador. En un extrínseco domina uno de los dos términos.',''],
 ['E<sub>d</sub> ≈ 0.045 eV (P en Si)','<b>Nivel donador</b>: la energía térmica disponible basta para ionizarlo. El dopaje <b>no cambia</b> el ancho del gap.',''],
 ['ΔE ≈ h²/(8m*L²)','<b>Confinamiento cuántico</b>: el gap efectivo crece al reducir el tamaño, así que el punto más pequeño emite más al azul.','L es la dimensión de confinamiento']
]},
   {prob:{t:'Del color observado al gap, y de vuelta',
 d:'Una suspensión de puntos cuánticos de CdSe emite en 540 nm. Otro lote del mismo material, con partículas más pequeñas, emite en 480 nm. El CdSe masivo tiene E<sub>g</sub> = 1.74 eV.',
 p:['Gap efectivo del primer lote: E = 1240/540 = <b>2.30 eV</b>.',
    'Gap efectivo del segundo: E = 1240/480 = <b>2.58 eV</b>.',
    'Energía de confinamiento en cada caso: 2.30 − 1.74 = <b>0.56 eV</b> y 2.58 − 1.74 = <b>0.84 eV</b>.',
    'Como el confinamiento escala con 1/L², la razón de tamaños es L₁/L₂ = √(0.84/0.56) = √1.50 = <b>1.23</b>: el segundo lote es un <b>19 % más pequeño</b>.',
    'El color percibido de la <b>emisión</b> es directo: 540 nm se ve verde y 480 nm azul. No hay que tomar el complementario, porque no se trata de absorción.'],
 r:'Gaps efectivos de 2.30 y 2.58 eV; el lote azul tiene partículas un 22 % menores.',
 x:'Distinguir <b>emisión</b> de <b>absorción</b>. En absorción, el color que se ve es el complementario del absorbido: un sólido que absorbe por debajo de 517 nm se ve amarillo-naranja, no verde. En emisión, el color que se ve es el emitido.'}},
   {p:['El <b>nivel de Fermi</b> es el concepto que cierra el tema de bandas y aparece en el examen con regularidad. Formalmente es el potencial químico electrónico: la energía a la que la probabilidad de ocupación vale exactamente <b>1/2</b> según la distribución de Fermi-Dirac. A cero absoluto es la frontera nítida entre estados llenos y vacíos; a temperatura finita esa frontera se difumina en un ancho del orden de kT.']},
   {ul:['En un <b>metal</b>, E<sub>F</sub> cae <b>dentro</b> de una banda parcialmente llena. Por eso hay estados disponibles a energía infinitesimal por encima y la conducción no cuesta nada.',
        'En un <b>semiconductor intrínseco</b>, E<sub>F</sub> queda cerca de la <b>mitad del gap</b>, en una región sin estados: la probabilidad 1/2 es una construcción matemática, no un estado real ocupado.',
        'Al dopar <b>tipo n</b>, E<sub>F</sub> <b>sube</b> hacia la banda de conducción; al dopar <b>tipo p</b>, <b>baja</b> hacia la de valencia. Ese desplazamiento, y no un cambio del ancho del gap, es lo que el dopaje produce.']},
   {p:['De ahí sale la <b>unión p-n</b>: al poner en contacto los dos materiales, los niveles de Fermi deben igualarse en el equilibrio, y para lograrlo las bandas se doblan. Ese doblado es el <b>potencial de contacto</b> que crea la zona de agotamiento y el campo interno que separa pares electrón-hueco. Toda la electrónica de semiconductores, el LED, la celda solar y el fotodetector salen de esa única condición de equilibrio.']},
   {p:['El mismo criterio explica el contacto <b>metal-semiconductor</b>: si la diferencia de funciones de trabajo obliga a doblar las bandas hacia arriba, aparece una <b>barrera Schottky</b> rectificante; si no, el contacto es <b>óhmico</b>. Y la <b>función de trabajo</b> es precisamente la energía para arrancar un electrón desde E<sub>F</sub> hasta el vacío, que es lo que miden la fotoemisión y el XPS.']}]},
  {t:'Estado sólido: red, base y celda',b:[
   {p:['Un cristal se define como una <b>red</b> más una <b>base</b>. La red es el conjunto infinito de puntos equivalentes generado por traslación, un objeto puramente matemático. La <b>base</b> es el átomo o grupo de átomos que se coloca <b>idénticamente en cada punto de red</b>. Decir que la base es «el plano inferior que sostiene la estructura» es un distractor frecuente y es falso: no tiene nada que ver con soporte físico.']},
   {eq:"r′ = n₁·a₁ + n₂·a₂ + n₃·a₃      con n₁, n₂, n₃ enteros"},
   {p:['Esa es la condición de equivalencia: a partir de los <b>vectores de traslación</b> a₁, a₂ y a₃, el vector de posición de cualquier punto equivalente se obtiene con coeficientes <b>enteros</b>. Si los coeficientes pudieran ser fraccionarios la estructura no sería periódica, y es exactamente lo que distingue una red de un conjunto cualquiera de puntos.']},
   {p:['Según el orden que presenten, los materiales se clasifican así. <b>Monocristalino</b>: un solo arreglo periódico en todo el volumen, sin fronteras de grano. <b>Policristalino</b>: muchos cristales pequeños con orientaciones distintas, separados por fronteras de grano. <b>Amorfo</b>: sin ordenamiento periódico de largo alcance, aunque puede conservar orden local entre vecinos inmediatos. Esa es la razón de que un amorfo dé un halo ancho en difracción y no picos.']},
   {p:['La distinción entre <b>celda primitiva</b> y <b>celda convencional</b> se pregunta tal cual. La primitiva contiene <b>exactamente un punto de red</b> y es la de menor volumen posible; la convencional puede contener varios —dos en BCC, cuatro en FCC— y se prefiere porque <b>refleja la simetría cúbica</b> del cristal, que la primitiva oculta. Se gana claridad geométrica a cambio de usar una celda mayor.']},
   {fig:FIG.celdas},
   {p:['Un último concepto del espacio recíproco: la <b>primera zona de Brillouin</b> es la celda primitiva de la red recíproca construida por el método de Wigner-Seitz, es decir la región más próxima a un punto recíproco que a cualquier otro. Su importancia es que <b>contiene toda la información no redundante</b> sobre los estados electrónicos y vibracionales: cualquier vector de onda fuera de ella equivale a uno de dentro. No es una distancia que recorra un rayo X ni un volumen del cristal real.']}
  ,
   {fig:FIG.celda_zb}]},
  {t:'Cristalografía: contar bien y nombrar bien',b:[
   {tabla:{th:['Estructura','Átomos/celda','Coordinación','Empaquetamiento'],tr:[
     ['Cúbica simple','1','6','0.52'],
     ['BCC','2','8','0.68'],
     ['FCC','4','12','<b>0.74</b>'],
     ['HCP','—','12','<b>0.74</b>']]}},
   {p:['Dos números que se confunden y no son lo mismo: <b>átomos por celda</b> y <b>número de coordinación</b>. En FCC hay 4 átomos por celda (ocho vértices que aportan 1/8 más seis centros de cara que aportan 1/2) y 12 vecinos más próximos. FCC y HCP comparten eficiencia 0.74: lo único que cambia es la secuencia de apilamiento, ABCABC frente a ABAB, y esa diferencia altera el número de sistemas de deslizamiento, por lo que los metales FCC como aluminio y cobre son más dúctiles que los HCP como zinc y magnesio.']},
   {eq:'d = a / √(h² + k² + l²)     ·     ρ_teórica = (n · M) / (N_A · a³)'},
   {p:['La densidad teórica exige cuidado con las unidades. Para aluminio FCC con a = 0.405 nm: la masa de la celda es 4 × 26.98 / 6.022×10²³ = 1.792×10⁻²² g, y el volumen es a³ con <b>a convertido a centímetros</b>, es decir 4.05×10⁻⁸ cm, lo que da 6.64×10⁻²³ cm³ y una densidad de 2.70 g/cm³. Si el resultado sale desviado por 10⁶ el diagnóstico es inmediato: <b>no se elevó al cubo el factor de conversión</b>, porque (10²)³ = 10⁶.']},
   {p:['Comparar la densidad calculada con la medida es un diagnóstico de defectos. Si la medida es <b>menor</b>, hay <b>vacancias</b>: mismo volumen de celda, menos masa. Si es <b>mayor</b>, hay <b>átomos intersticiales</b> que añaden masa sin cambiar el volumen. El número de coordinación no entra en el cálculo.']},
   {fig:FIG.miller},
   {p:['Los <b>índices de Miller</b> se obtienen tomando los recíprocos de las intersecciones y reduciendo a los enteros más pequeños. Un plano que corta en 1/2, 1 e infinito da recíprocos 2, 1 y 0, es decir <b>(210)</b>. Se usan recíprocos por una razón concreta: un plano paralelo a un eje lo corta en el infinito, y su recíproco es cero en lugar de infinito. Los índices nunca llevan fracciones y el orden de los ejes importa.']},
   {eq:'nλ = 2d·sen θ      ·      con λ = 1.54 Å, n = 1 y θ = 30°:  d = 1.54/(2 × 0.5) = 1.54 Å'},
   {p:['La ley de Bragg se usa principalmente para <b>determinar distancias interplanares y, con ellas, la estructura cristalina</b> a partir de los ángulos donde aparece interferencia constructiva. Conviene recordar que θ es el ángulo entre el haz y el plano, es decir la mitad del 2θ que reporta el equipo.']},
   {p:['Al indexar un difractograma cúbico, la secuencia de h²+k²+l² identifica la red: <b>3, 4, 8, 11</b> es FCC (índices todos pares o todos impares) y <b>2, 4, 6, 8</b> es BCC (h+k+l par). La cúbica simple no tiene extinciones y da 1, 2, 3, 4.']},
   {p:['Y los defectos no son fallas sino el mecanismo: la deformación plástica ocurre por <b>movimiento de dislocaciones</b>. Endurecer un metal consiste en obstaculizarlas, y el <b>trabajo en frío</b> lo logra multiplicando su densidad hasta que se estorban entre sí. Las otras vías son solución sólida, precipitados y frontera de grano según Hall-Petch.']}
  ,
   {fig:FIG.plano_celda},
   {form:[
 ['ρ = (n·A) / (V<sub>c</sub>·N<sub>A</sub>)','<b>Densidad teórica</b>; n son los átomos por celda (SC 1, BCC 2, FCC 4).','V<sub>c</sub> en cm³; 1 nm = 10⁻⁷ cm, y al cubo 10⁻²¹'],
 ['FEA = n·(4/3)πr³ / V<sub>c</sub>','<b>Factor de empaquetamiento</b>: SC 0.52, BCC 0.68, FCC y HCP 0.74.','adimensional'],
 ['FCC: a = 4r/√2  ·  BCC: a = 4r/√3  ·  SC: a = 2r','Relación entre <b>parámetro de red y radio atómico</b>, según por dónde se toquen los átomos.',''],
 ['(hkl) = recíprocos de las intersecciones','<b>Índices de Miller</b>: se toman recíprocos y se reducen a enteros mínimos. Nunca llevan fracciones.',''],
 ['d<sub>hkl</sub> = a / √(h²+k²+l²)','<b>Espaciado interplanar</b> en sistema cúbico.','d y a en las mismas unidades'],
 ['BCC: h+k+l par  ·  FCC: h,k,l todos pares o todos impares','<b>Reglas de extinción</b>. Dan las secuencias 2,4,6,8 (BCC) y 3,4,8,11 (FCC).','']
]},
   {prob:{t:'Densidad teórica del aluminio, cuidando las unidades',
 d:'Aluminio con estructura FCC, parámetro de red a = 0.405 nm y masa molar 26.98 g/mol. N<sub>A</sub> = 6.022×10²³ mol⁻¹.',
 p:['Átomos por celda en FCC: 8 vértices × 1/8 + 6 caras × 1/2 = <b>4</b>.',
    'Convierte el parámetro <b>antes</b> de elevar al cubo: a = 0.405 nm = 0.405×10⁻⁷ cm = 4.05×10⁻⁸ cm.',
    'Volumen de celda: V<sub>c</sub> = (4.05×10⁻⁸)³ = <b>6.643×10⁻²³ cm³</b>.',
    'ρ = (4 × 26.98) / (6.643×10⁻²³ × 6.022×10²³) = 107.92 / 40.00 = <b>2.70 g/cm³</b>.',
    'Comprobación contra el valor experimental del aluminio, 2.70 g/cm³: coinciden, lo que indica muy pocas vacancias.'],
 r:'ρ = 2.70 g/cm³, en acuerdo con el valor experimental.',
 x:'Obtener 2.7×10⁶ delata haber convertido nm a cm <b>sin elevar al cubo</b> el factor: el error es exactamente (10²)³ = 10⁶. Y si la densidad medida saliera un 1.5 % por debajo de la teórica, la explicación serían <b>vacancias</b>: misma celda, menos masa.'}}]},
  {t:'Enlace iónico y estabilidad de la red',b:[
   {p:['La energía reticular crece con el producto de las cargas y disminuye con la distancia entre centros iónicos. A igual carga, <b>iones más pequeños se acercan más</b>, la atracción electrostática es mayor y hace falta más energía para romper la red: por eso su punto de fusión es superior.']},
   {p:['La diferencia mecánica entre metálico e iónico tiene explicación puramente geométrica. En un metal, al deslizarse un plano los cationes cambian de vecinos pero el mar electrónico los sigue rodeando igual, así que se deforma sin romperse. En un iónico, deslizar media celda enfrenta cationes con cationes: la interacción pasa de atractiva a repulsiva de golpe y el cristal se fractura por planos definidos.']},
   {p:['Un sólido que funde a <b>1410 °C, no conduce y es frágil</b> apunta a <b>red covalente</b> tridimensional, como el silicio o el cuarzo: enlaces direccionales en todas las direcciones, sin portadores libres. Un metal conduciría, un molecular fundiría muy por debajo y un iónico conduciría al fundirse.']},
   {p:['El mismo elemento puede dar materiales opuestos según su arreglo. <b>Diamante y grafito</b> son ambos carbono puro: el diamante es sp³ con red covalente tridimensional y todos los electrones localizados, de ahí su dureza y su aislamiento; el grafito es sp² en capas, con electrones deslocalizados en el sistema pi que conducen dentro del plano y fuerzas débiles entre capas que permiten exfoliarlo. La diferencia no es la pureza: es <b>el arreglo y la hibridación</b>.']}
  ]},
  {t:'La cuántica que sí se pregunta',b:[
   {eq:'E_n = n²h² / (8mL²)   ·   partícula en una caja'},
   {p:['Tres conclusiones, y la tercera es la rentable. La energía está cuantizada; el estado fundamental <b>nunca vale cero</b> por el principio de incertidumbre; y <b>E escala como 1/L²</b>, así que reducir la caja a la mitad cuadruplica la energía. Esa dependencia es exactamente el confinamiento cuántico de los puntos cuánticos.']},
   {p:['Para identificar un orbital a partir de sus números cuánticos hay que respetar los tres rangos: n entero desde 1; <b>l de 0 a n−1</b>; y <b>m_l de −l a +l</b>. Un orbital <b>4f</b> tiene n = 4 y l = 3, así que m_l solo puede ir de −3 a +3: una combinación con m_l = −4 es imposible y se descarta sin más análisis.']},
   {p:['Las <b>series espectrales del hidrógeno</b> se nombran por el nivel al que <b>cae</b> el electrón, no por el de partida: Lyman termina en n = 1 (ultravioleta), Balmer en n = 2 (visible), Paschen en n = 3, Brackett en n = 4 y <b>Pfund en n = 5</b>, ya en el infrarrojo lejano. Cuanto mayor el nivel final, menor la energía del fotón emitido y mayor su longitud de onda.']},
   {p:['Los cuatro números cuánticos no son convención: cada uno sale de imponer que la función de onda sea aceptable en una dimensión del problema. El azimutal l va de 0 a n−1, y de ahí que no exista un orbital 1p. Las 2, 6, 10 y 14 columnas de los bloques s, p, d y f son exactamente 2(2l+1).']},
   {p:['Bohr es exacto para hidrógeno e hidrogenoides y falla para todo lo demás, porque ignora la repulsión entre electrones y el apantallamiento. Ese apantallamiento rompe la degeneración y hace que la energía dependa también de l: de ahí que el 4s se llene antes que el 3d, algo que en hidrógeno no tendría sentido.']},
   {p:['Y en cálculo computacional: <b>Hartree-Fock ignora la correlación electrónica</b>; DFT la aproxima mediante un funcional cuya elección afecta los resultados. Al expandir en un conjunto base finito, el problema se vuelve matricial de valores propios, det(H − ES) = 0.']}
  ]}
 ],
 flash:[
  ['¿Por qué un metal es dúctil y un sólido iónico frágil?','Al deslizar un plano, en el metal el mar electrónico sigue rodeando a todos los cationes. En el iónico se enfrentan cargas iguales y la interacción pasa a repulsiva.'],
  ['Al hervir agua, ¿qué se rompe?','Puentes de hidrógeno entre moléculas. Los enlaces O–H quedan intactos: el vapor sigue siendo H₂O.'],
  ['¿Qué le hace el dopaje al gap del silicio?','Nada. Introduce niveles donadores o aceptores DENTRO del gap. El ancho del gap es propiedad del silicio.'],
  ['Resistividad frente a temperatura: metal y semiconductor','Metal: T↑ ⇒ ρ↑ (dispersión por fonones). Semiconductor: T↑ ⇒ ρ↓ (los portadores crecen exponencialmente).'],
  ['Átomos por celda y coordinación en FCC','4 átomos por celda, coordinación 12, empaquetamiento 0.74. No confundir los dos números.'],
  ['¿Por qué los índices de Miller usan recíprocos?','Para que un plano paralelo a un eje dé índice cero en lugar de infinito, y para que los índices sean proporcionales a la orientación.'],
  ['Dependencia de la energía con el tamaño en la partícula en una caja','E ∝ 1/L². Reducir la dimensión a la mitad cuadruplica la energía. Es la base del confinamiento cuántico.'],
  ['¿Por qué el 4s se llena antes que el 3d?','El apantallamiento en átomos polielectrónicos rompe la degeneración: la energía depende también de l, y los orbitales s penetran más.'],
  ['Diferencia esencial entre Hartree-Fock y DFT','HF ignora la correlación electrónica. DFT la incorpora de forma aproximada en un funcional cuya elección afecta el resultado.'],
  ['Densidad medida menor que la teórica: ¿qué lo explica?','Vacancias: mismo volumen de celda, menos masa. Los intersticiales darían lo contrario.']
 ]},

/* ===================== M5 ===================== */
{id:'M5',nom:'Fisicoquímica',sesion:'Sesión 5 del taller',
 sub:'Fuerzas intermoleculares, termodinámica y espontaneidad, equilibrio y cinética, y el comportamiento de las superficies. Entrega la base que quince conceptos de síntesis necesitan.',
 sec:[
  {t:'Fuerzas intermoleculares y el orden de comparación',b:[
   {p:['La jerarquía típica por par de moléculas es ion-dipolo > puente de hidrógeno > dipolo-dipolo > London. Pero hay una excepción que el examen explota: las <b>fuerzas de London crecen con la polarizabilidad</b>, que crece con el número de electrones. Por eso el yodo, que solo tiene London, es sólido, mientras que el HF, que tiene puentes de hidrógeno, es gas.']},
   {p:['Regla operativa: si las masas son parecidas, decide el tipo de fuerza (etanol 78 °C frente a dimetil éter −24 °C, misma fórmula C₂H₆O). Si las masas son muy distintas, revisa si el tamaño alcanza para que London compense.']},
   {p:['El agua y sus anomalías salen de un solo hecho geométrico: cada molécula puede formar <b>cuatro</b> puentes, dos como donadora y dos como aceptora. De ahí el punto de ebullición anómalo, la capacidad calorífica alta y que el hielo flote. Y de ahí que la línea sólido-líquido del agua tenga <b>pendiente negativa</b> en el diagrama de fases, al revés que casi todas las sustancias.']},
   {fig:FIG.fases},
   {p:['Comparar disoluciones exige contar partículas, no moles de soluto. Glucosa 0.10 m tiene i = 1 y da 0.10 m efectivos; CaCl₂ 0.10 m tiene i ≈ 3 y da 0.30 m, así que <b>baja tres veces más</b> el punto de congelación. Pero glucosa 0.20 m y NaCl 0.10 m llegan los dos a 0.20 m de partículas y producen <b>el mismo descenso</b>: el resultado depende del producto i·m, no de ninguno por separado.']},
   {p:['Las propiedades coligativas dependen del <b>número de partículas</b>: sin el factor i de van’t Hoff el resultado está mal, y el valor sin corregir suele coincidir exactamente con uno de los distractores. Se expresan en molalidad y no en molaridad porque la molalidad no depende de la temperatura, que es justo la variable en estudio.']}
  ,
   {form:[
 ['ΔT<sub>f</sub> = i·K<sub>f</sub>·m   ·   ΔT<sub>b</sub> = i·K<sub>b</sub>·m','<b>Crioscopía y ebulloscopía</b>. Las coligativas dependen del <b>número de partículas</b>, no de su identidad.','agua: K<sub>f</sub> = 1.86 y K<sub>b</sub> = 0.512 °C·kg/mol'],
 ['Π = i·M·R·T','<b>Presión osmótica</b>; M es molaridad. Es la coligativa más sensible, útil para masas molares grandes.','Π en atm con R = 0.0821'],
 ['i ≈ número de iones por fórmula','<b>Factor de van’t Hoff</b>: glucosa 1, NaCl 2, CaCl₂ 3. Omitirlo es el error clásico.','adimensional'],
 ['P<sub>A</sub> = x<sub>A</sub>·P°<sub>A</sub>','<b>Ley de Raoult</b>: el soluto no volátil baja la presión de vapor del disolvente.','']
]}]},
  {t:'Espontaneidad: los cuatro casos',b:[
   {eq:'ΔG = ΔH − TΔS   ·   ΔG° = −RT ln K = −nFE°'},
   {tabla:{th:['ΔH','ΔS','¿Espontáneo?','Ejemplo'],tr:[
     ['−','+','Siempre','Descomposición explosiva'],
     ['+','−','Nunca (lo es el inverso)','—'],
     ['−','−','Solo a T baja','Congelación, condensación'],
     ['+','+','Solo a T alta','Fusión, evaporación']]}},
   {p:['La temperatura de cruce sale de igualar ΔG a cero: T = ΔH/ΔS. Así se calculan puntos de fusión y ebullición a partir de datos termodinámicos.']},
   {p:['La relación ΔG° = −RT ln K = −nFE° dice que termodinámica, equilibrio y electroquímica son <b>la misma información en tres lenguajes</b>. Y hay una distinción que es la fuente número uno de error del tema: ΔG° describe condiciones estándar, mientras que el sentido real lo decide ΔG = ΔG° + RT ln Q con las concentraciones del momento. Con mucho producto inicial, Q es grande y ΔG puede salir positivo aunque ΔG° sea negativo.']},
   {p:['Y <b>espontáneo no es rápido</b>. El diamante tiene ΔG negativo hacia grafito a condiciones normales y no ocurre en escalas humanas, porque la barrera cinética es enorme. La termodinámica dice si puede; la cinética, si alcanzará a hacerlo.']},
   {deep:{t:'El origen de la entropía según Clausius',b:[
     {p:['Clausius observó que la integral de dQ_rev/T sobre cualquier ciclo cerrado siempre vale cero.'],},
     {p:['Si una magnitud integrada sobre un ciclo cerrado da cero, entonces su valor entre dos estados <b>no depende del camino</b>: esa es exactamente la definición de función de estado. A esa magnitud la llamó S.'],},
     {p:['Conviene no confundirlo con la primera ley: la conservación de la energía no es el origen de la entropía, es un enunciado independiente. Y la dirección del flujo espontáneo de calor es una consecuencia de la segunda ley, no su punto de partida.']}
   ]}}
  ,
   {form:[
 ['ΔG = ΔH − TΔS','<b>Energía libre de Gibbs</b>. Negativa indica proceso espontáneo en esas condiciones.','ΔG y ΔH en J/mol, ΔS en J/mol·K, T en K'],
 ['T<sub>cruce</sub> = ΔH / ΔS','<b>Temperatura de cruce</b>: aquella a la que ΔG cambia de signo, cuando ΔH y ΔS tienen el mismo signo.','en K'],
 ['ΔG = ΔG° + RT·ln Q','El sentido <b>real</b> lo decide Q, no ΔG°. En el equilibrio ΔG = 0 y Q = K.','R = 8.314 J/mol·K'],
 ['ΔG° = −RT·ln K','Relación entre <b>energía libre estándar y constante de equilibrio</b>.',''],
 ['ln(K₂/K₁) = −(ΔH°/R)(1/T₂ − 1/T₁)','<b>Van’t Hoff</b>: cómo cambia K con la temperatura. Solo la temperatura modifica K.','']
]},
   {prob:{t:'Encontrar la temperatura a la que el proceso se vuelve espontáneo',
 d:'Para la descomposición CaCO₃(s) → CaO(s) + CO₂(g): ΔH° = +178.3 kJ/mol y ΔS° = +160.6 J/mol·K, ambos supuestos constantes con la temperatura.',
 p:['Los dos signos son positivos, así que es el caso <b>espontáneo solo a temperatura alta</b>: la entalpía se opone y la entropía favorece.',
    'A 298 K: ΔG° = 178 300 − 298 × 160.6 = 178 300 − 47 859 = <b>+130 441 J/mol</b>. No espontánea a temperatura ambiente, como se observa.',
    'Temperatura de cruce: T = ΔH°/ΔS° = 178 300 / 160.6 = <b>1110 K</b>, unos 837 °C.',
    'A 1200 K: ΔG° = 178 300 − 1200 × 160.6 = 178 300 − 192 720 = <b>−14 420 J/mol</b>. Ya espontánea.',
    'Constante de equilibrio a 1200 K: ln K = −ΔG°/RT = 14 420/(8.314 × 1200) = 1.445 ⇒ K = <b>4.2</b>, es decir p(CO₂) ≈ 4.2 bar.'],
 r:'La calcinación se vuelve espontánea por encima de unos 1110 K (837 °C), que es el orden de temperatura real de un horno de cal.',
 x:'Pasar ΔS de J a kJ, o no pasarlo: la mezcla de unidades es el error numérico dominante del tema. Y recordar que ΔG° &gt; 0 <b>no</b> significa que la reacción no ocurra en absoluto: significa que en el equilibrio predominan los reactivos.'}}]},
  {t:'Equilibrio y velocidad son preguntas distintas',b:[
   {p:['Le Chatelier con precisión. La <b>concentración</b> y el <b>volumen</b> desplazan la posición del equilibrio pero no cambian K. La <b>temperatura</b> es la única que cambia el valor de K: trata al calor como reactivo si la reacción es endotérmica y como producto si es exotérmica, de modo que calentar una exotérmica desplaza hacia <b>reactivos</b>.']},
   {ul:['Añadir un gas inerte a volumen constante <b>no desplaza nada</b>: las presiones parciales de las especies reactivas no cambian. Es el distractor clásico.',
        'La presión solo afecta si hay diferencia en moles de gas entre los dos lados.',
        'Un <b>catalizador no desplaza el equilibrio</b>: baja la barrera por igual en ambos sentidos, así que multiplica k directa e inversa por el mismo factor y su cociente K no cambia. Solo llega antes al mismo punto.',
        'Los sólidos y líquidos puros no aparecen en la expresión de K, porque su actividad vale 1.']},
   {p:['Para determinar el orden a partir de datos hay dos rutas rápidas. Por <b>velocidades iniciales</b>: de v₂/v₁ = ([A]₂/[A]₁)ⁿ, si al duplicar la concentración la velocidad se multiplica por ocho entonces 8 = 2ⁿ y el orden es <b>tres</b>; un factor de cuatro daría segundo orden y uno de dos, primero. Por las <b>unidades de k</b>: para orden n son M^(1−n)·s⁻¹, de modo que s⁻¹ puro delata <b>primer orden</b>, M·s⁻¹ orden cero y M⁻¹·s⁻¹ segundo.']},
   {p:['La <b>vida media</b> es la tercera vía. En primer orden t½ = ln2/k y <b>no depende de la concentración inicial</b>; en orden cero es proporcional a [A]₀ y en segundo orden inversamente proporcional. Si al reducir a la mitad la concentración de partida la vida media no cambia, el orden es primero.']},
   {p:['El <b>orden de reacción es experimental</b>, no se lee de los coeficientes. Dada 2A + B → C, escribir v = k[A]²[B] solo sería válido si la reacción fuera elemental, algo que debe decir el enunciado. Los órdenes los dicta el paso determinante y pueden ser fraccionarios, cero o negativos. Las unidades de k delatan el orden.']},
   {eq:'ln(k₂/k₁) = −(Ea/R)(1/T₂ − 1/T₁)   ·   T en kelvin, obligatoriamente'},
   {p:['Lo de «obligatoriamente» no es retórico: la temperatura aparece como 1/T, y una escala con cero arbitrario como la Celsius rompe la relación. Usar grados Celsius altera la magnitud del término 1/T₂ − 1/T₁ e incluso su signo, lo que produce <b>energías de activación negativas</b> sin sentido físico. Si el resultado sale negativo, el primer sospechoso son las unidades de temperatura.']},
   {p:['Y la distinción que cierra el bloque: dos reacciones con <b>idéntico ΔG° pueden tardar segundos o siglos</b>. ΔG° fija K y por tanto la composición final, no la rapidez; la velocidad la gobierna la <b>energía de activación</b>, que es una propiedad del camino y no de los estados inicial y final. El diamante hacia grafito es el ejemplo canónico.']},
   {p:['Para primer orden, t½ = ln2/k y <b>no depende de la concentración inicial</b>; para segundo orden, t½ = 1/(k[A]₀) y sí depende. Esa es la forma más rápida de distinguirlos a partir de datos.']}
  ,
   {form:[
 ['v = k[A]^m[B]ⁿ','<b>Ley de velocidad</b>. Los órdenes m y n son <b>empíricos</b>: no se leen de los coeficientes salvo reacción elemental.',''],
 ['v₂/v₁ = ([A]₂/[A]₁)ⁿ','<b>Método de velocidades iniciales</b> para hallar el orden: si al duplicar la velocidad se multiplica por 8, entonces n = 3.',''],
 ['Orden 0: [A] = [A]₀ − kt   ·   t<sub>1/2</sub> = [A]₀/2k','Recta de <b>[A] contra t</b>.','k en M/s'],
 ['Orden 1: ln[A] = ln[A]₀ − kt   ·   t<sub>1/2</sub> = 0.693/k','Recta de <b>ln[A] contra t</b>. La vida media no depende de la concentración inicial.','k en s⁻¹'],
 ['Orden 2: 1/[A] = 1/[A]₀ + kt   ·   t<sub>1/2</sub> = 1/(k[A]₀)','Recta de <b>1/[A] contra t</b>.','k en M⁻¹s⁻¹'],
 ['k = A·exp(−E<sub>a</sub>/RT)','<b>Arrhenius</b>. En forma lineal: ln k = ln A − E<sub>a</sub>/RT, con pendiente −E<sub>a</sub>/R.','E<sub>a</sub> en J/mol'],
 ['ln(k₂/k₁) = (E<sub>a</sub>/R)(1/T₁ − 1/T₂)','Forma de <b>dos puntos</b> de Arrhenius, la más útil en examen.','']
]},
   {prob:{t:'Energía de activación a partir de dos temperaturas',
 d:'Una reacción tiene k = 2.75×10⁻⁴ s⁻¹ a 25.0 °C y k = 8.13×10⁻³ s⁻¹ a 55.0 °C. R = 8.314 J/mol·K.',
 p:['Pasa a kelvin: T₁ = 298.15 K y T₂ = 328.15 K. <b>Usar grados Celsius aquí es el error más caro del tema.</b>',
    'Razón de constantes: k₂/k₁ = 8.13×10⁻³ / 2.75×10⁻⁴ = <b>29.56</b> ⇒ ln(k₂/k₁) = <b>3.386</b>.',
    'Diferencia de inversos: 1/T₁ − 1/T₂ = 1/298.15 − 1/328.15 = 3.3540×10⁻³ − 3.0474×10⁻³ = <b>3.066×10⁻⁴ K⁻¹</b>.',
    'E<sub>a</sub> = R·ln(k₂/k₁)/(1/T₁ − 1/T₂) = 8.314 × 3.386 / 3.066×10⁻⁴ = <b>91 800 J/mol</b>.',
    'Es decir E<sub>a</sub> ≈ <b>91.8 kJ/mol</b>, un valor típico de reacción en disolución.',
    'Con ese dato, el factor preexponencial: ln A = ln k₁ + E<sub>a</sub>/RT₁ = −8.198 + 37.04 = 28.84 ⇒ A ≈ 3.4×10¹² s⁻¹.'],
 r:'E<sub>a</sub> = 91.8 kJ/mol. Subir 30 °C multiplicó la velocidad por casi 30.',
 x:'La regla de que “la velocidad se duplica cada 10 °C” solo se cumple para E<sub>a</sub> cercana a 50 kJ/mol cerca de temperatura ambiente. Con 92 kJ/mol el factor por cada 10 °C es cercano a 3, y por eso aquí 30 °C dieron casi un factor 30 en lugar de 8.'}}]},
  {t:'Superficies, adsorción y coloides',b:[
   {p:['La espontaneidad no se decide por el signo de ΔH. Disolver una sal que <b>enfría</b> el recipiente es endotérmico y aun así ocurre, porque el aumento de desorden al dispersarse soluto y disolvente hace que TΔS supere a ΔH. Confundir endotérmico con no espontáneo es el error conceptual más repetido del módulo.']},
   {p:['Con <b>ΔH negativo y ΔS negativo</b> la entalpía favorece y la entropía se opone, y como el término entrópico va multiplicado por T, el proceso es espontáneo <b>solo por debajo de T = ΔH/ΔS</b>. Con ambos positivos ocurre lo contrario: solo por encima de esa temperatura de cruce.']},
   {p:['Crear interfase cuesta energía, y de ahí que una gota tienda a la esfera. Dos modelos de adsorción que se confunden: <b>Langmuir</b> supone monocapa sobre sitios equivalentes e independientes y satura; <b>BET</b> permite multicapas y no satura. Para medir área superficial específica de un material mesoporoso con nitrógeno a 77 K la respuesta esperada es <b>BET</b>.']},
   {p:['Langmuir, Michaelis-Menten y la ocupación de receptor son <b>la misma hipérbola de saturación</b> con nombres distintos. Reconocerlo ahorra memorizar tres cosas.']},
   {p:['La curvatura eleva la presión de vapor y la solubilidad (Kelvin, Gibbs-Thomson), y eso explica de un golpe la maduración de Ostwald y el descenso del punto de fusión de las nanopartículas.']},
   {p:['Estabilidad coloidal por DLVO: van der Waals siempre atrae, así que el estado de mínima energía es el agregado y una suspensión estable es un logro, no un estado natural. La barrera se controla subiendo la carga superficial (lejos del punto isoeléctrico) o bajando la fuerza iónica. <b>Añadir sal comprime la doble capa</b> y baja la barrera: por eso las suspensiones fallan en medio fisiológico, con unos 150 mM. El criterio práctico sitúa la estabilidad razonable más allá de ±30 mV de potencial zeta.']},
   {p:['Un líquido hierve cuando su presión de vapor iguala a la presión externa, así que en la <b>montaña, con menos presión atmosférica, el punto de ebullición baja</b>. La presión de vapor del líquido en sí depende solo de la temperatura: no la cambia la presión externa, ni añadir un gas inerte encima.']},
   {p:['Mojado: <b>Wenzel</b> describe el líquido que penetra la textura; <b>Cassie-Baxter</b> el que atrapa aire debajo, y es este el que da superhidrofobicidad real.']}
  ,
   {form:[
 ['ΔP = 2γ/r','<b>Laplace</b> para una gota esférica; 4γ/r para una burbuja con dos interfaces. La presión interna crece al reducir el radio.','γ en N/m, r en m, ΔP en Pa'],
 ['ln(p/p₀) = 2γV<sub>m</sub>/(rRT)','<b>Kelvin</b>: las gotas pequeñas tienen mayor presión de vapor y mayor solubilidad. Es el motor de la maduración de Ostwald.',''],
 ['γ·cos θ = (γ<sub>SV</sub> − γ<sub>SL</sub>)','<b>Young</b>. θ &lt; 90° es mojante; θ &gt; 150° es superhidrofóbico.','θ es el ángulo de contacto'],
 ['θ = K·p/(1 + K·p)','<b>Isoterma de Langmuir</b>: monocapa, sitios equivalentes, sin interacción entre adsorbatos.','θ es la fracción cubierta'],
 ['1/[v(p₀/p − 1)] = (c−1)/(v<sub>m</sub>c)·(p/p₀) + 1/(v<sub>m</sub>c)','<b>BET</b>: extiende Langmuir a multicapa y es el método estándar para medir área específica.',''],
 ['κ⁻¹ ∝ 1/√I','<b>Longitud de Debye</b>: la fuerza iónica comprime la doble capa y derriba la barrera DLVO.','I es la fuerza iónica'],
 ['|ζ| &gt; 30 mV','Criterio práctico de <b>estabilidad electrostática</b> de una suspensión.','ζ en mV']
]},
   {prob:{t:'Por qué una gota pequeña se evapora y alimenta a la grande',
 d:'Dos gotas de agua a 25 °C en el mismo recinto cerrado, una de 10 nm y otra de 1.0 µm de radio. γ = 0.072 N/m, V<sub>m</sub> = 1.8×10⁻⁵ m³/mol, R = 8.314, T = 298 K.',
 p:['Para la gota de 10 nm: ln(p/p₀) = 2 × 0.072 × 1.8×10⁻⁵ / (1.0×10⁻⁸ × 8.314 × 298) = 2.592×10⁻⁶/2.478×10⁻⁵ = <b>0.1046</b>.',
    'Es decir p/p₀ = e^0.1046 = <b>1.110</b>: su presión de vapor es un <b>11 % mayor</b> que la de una superficie plana.',
    'Para la de 1.0 µm, el radio es cien veces mayor, así que el exponente es cien veces menor: ln(p/p₀) = 1.046×10⁻³ ⇒ p/p₀ = <b>1.001</b>.',
    'La gota pequeña está rodeada de un vapor más saturado que la grande, de modo que hay un <b>gradiente neto</b> de vapor de la pequeña hacia la grande.',
    'La pequeña se evapora, la grande condensa, y el proceso se acelera porque la pequeña se hace aún más pequeña y su presión de vapor sube más.'],
 r:'La gota de 10 nm tiene 11 % más presión de vapor y desaparece alimentando a la de 1 µm. Es maduración de Ostwald, sin que las gotas lleguen a tocarse.',
 x:'Por eso ni subir el potencial zeta ni añadir surfactante frenan la maduración: ninguno de los dos cambia la <b>curvatura</b>. Lo que la frena es un componente <b>insoluble en la fase continua</b> atrapado en la gota, que al concentrarse genera una contrapresión osmótica que compensa el término de Kelvin.'}}]}
 ],
 flash:[
  ['¿Por qué el yodo es sólido si solo tiene fuerzas de London?','Tiene 106 electrones: su polarizabilidad es enorme y la suma de interacciones débiles supera a los puentes de hidrógeno del HF, que es gas.'],
  ['ΔH positivo y ΔS positivo: ¿cuándo es espontáneo?','Solo a temperatura suficientemente alta, porque el término TΔS crece con T hasta superar a ΔH. T de cruce = ΔH/ΔS.'],
  ['ΔG° negativo pero el sistema va hacia reactivos: ¿contradicción?','No. ΔG° es estándar; el sentido real lo fija ΔG = ΔG° + RT·lnQ. Con mucho producto inicial, Q grande puede volver ΔG positivo.'],
  ['¿Qué perturbación cambia el VALOR de K?','Solo la temperatura, vía ΔG° = −RT·lnK. Concentración, volumen y catalizador desplazan la posición pero no K.'],
  ['¿Por qué un catalizador no cambia K?','Baja la barrera lo mismo en los dos sentidos: multiplica k directa e inversa por el mismo factor, y K = k_dir/k_inv no cambia.'],
  ['Gas inerte añadido a volumen constante','No desplaza el equilibrio: las presiones parciales de las especies reactivas no cambian. Es el distractor clásico.'],
  ['¿Se puede leer el orden de reacción de los coeficientes?','No, salvo que el enunciado diga que la reacción es elemental. El orden es empírico y lo dicta el paso determinante.'],
  ['Vida media: primer orden frente a segundo','Primer orden: t½ = ln2/k, independiente de [A]₀. Segundo orden: t½ = 1/(k[A]₀), sí depende.'],
  ['¿Langmuir o BET para área superficial de un mesoporoso?','BET. Permite multicapas, que es lo que realmente ocurre con N₂ a 77 K, y del ajuste se extrae la monocapa.'],
  ['¿Por qué añadir sal coagula un coloide?','Comprime la doble capa eléctrica, acorta el alcance de la repulsión y baja la barrera DLVO por debajo de kT.'],
  ['Wenzel frente a Cassie-Baxter','Wenzel: el líquido penetra la textura. Cassie-Baxter: atrapa aire debajo, y es el que da superhidrofobicidad.']
 ]}
);
</script>
