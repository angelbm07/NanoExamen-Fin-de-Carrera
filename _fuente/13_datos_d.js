<script>
G.push(
/* ===================== M8 ===================== */
{id:'M8',nom:'Nanodispositivos y nanosistemas',sesion:'Sesión 9 del taller',
 sub:'Luz y materia, microfluídica, MEMS y sensores electroquímicos. Integra materiales de M4, nanoestructuras de M6 y métodos de medición de M7.',
 sec:[
  {t:'Luz y materia: del oscilador al plasmón',b:[
   {fig:FIG.poynting},
   {p:['El <b>vector de Poynting</b>, S = (E × B)/µ₀, indica la dirección en que fluye la densidad de energía transportada por la onda electromagnética, y su magnitud es la <b>intensidad óptica</b>, con unidades de <b>vatios por metro cuadrado</b>. E, B y S son mutuamente perpendiculares, y lo que un detector registra es el promedio temporal de S.']},
   {p:['El <b>momento dipolar eléctrico</b> se define como el producto de la carga por el vector de separación entre cargas, p = q·d. De ahí que <b>aumentar la separación aumente el momento dipolar</b> proporcionalmente, con la carga fija.']},
   {p:['En el <b>modelo de Lorentz</b> el electrón se trata como un <b>oscilador armónico amortiguado</b> sometido a una fuerza restauradora elástica que lo liga al núcleo, forzado por el campo de la luz. El modelo describe la <b>respuesta dieléctrica</b> de los materiales —cómo varían el índice de refracción y la absorción con la frecuencia—, no su conductividad térmica. El modelo de Drude es su caso límite para electrones libres, sin fuerza restauradora.']},
   {p:['La función dieléctrica sale de tratar a los electrones como <b>osciladores forzados</b> por el campo de la luz: el modelo de Lorentz para electrones ligados y el de Drude para los libres de un metal.']},
   {p:['De ahí la explicación del brillo metálico: por debajo de la frecuencia de plasma ω_p la parte real de ε es <b>negativa</b> y el metal refleja; por encima se vuelve transparente. Es la razón de que los metales sean espejos en el visible y transparentes en el ultravioleta lejano.']},
   {p:['De ahí el <b>brillo metálico</b> y su límite: por debajo de la frecuencia de plasma la parte real de la función dieléctrica es negativa y el metal refleja; por encima los electrones ya no responden lo bastante rápido al campo y el material se vuelve transparente, lo que ocurre en el ultravioleta lejano.']},
   {p:['Los <b>plasmones polaritones de superficie</b> solo existen en modo <b>TM</b> (transversal magnético, también llamado p). La razón es que la oscilación de carga en la superficie exige una componente del campo eléctrico <b>perpendicular</b> a la interfaz, y el modo TE no la tiene. Por eso en una configuración de Kretschmann la luz debe estar polarizada p para excitarlos.']},
   {p:['En interfaces, las ecuaciones de Fresnel dan reflexión y transmisión, y por encima del ángulo crítico hay reflexión total interna. Lo que sobrevive del otro lado es una <b>onda evanescente</b> que penetra típicamente 100 a 200 nm: por eso los sensores de superficie ignoran el resto de la muestra, lo que es exactamente la ventaja que se busca.']},
   {p:['Un LED, una celda solar y un fotodetector son el mismo objeto en sentidos distintos: una unión p-n cuyo campo de agotamiento separa o recombina pares electrón-hueco. El color de un LED lo fija el gap vía λ = 1240/Eg, y de ahí que el LED azul necesitara nitruro de galio.']},
   {deep:{t:'Directo contra indirecto, y el límite de Shockley-Queisser',b:[
     {p:['En un semiconductor de gap <b>directo</b> (GaAs) el mínimo de conducción y el máximo de valencia coinciden en el mismo vector de onda, y la recombinación radiativa es eficiente. En uno <b>indirecto</b> (Si) no coinciden, y la transición necesita además un fonón: un proceso de tres cuerpos, mucho menos probable que la recombinación no radiativa.'],},
     {p:['Esa es la razón de que el silicio domine la electrónica y sea un emisor pésimo, y de que los LED no se hagan de silicio.'],},
     {p:['En celdas solares aparece el compromiso central: un gap pequeño absorbe más fotones pero cada uno entrega poco voltaje, y uno grande da voltaje y desaprovecha el espectro. Optimizarlo contra el espectro solar da el límite de Shockley-Queisser, con un óptimo cerca de 1.3 eV y un techo próximo al 33 % para una sola unión. Las multiunión lo superan porque reparten el espectro.']}
   ]}}
  ,
   {fig:FIG.refraccion_multicapa}]},
  {t:'Microfluídica: el mundo sin turbulencia',b:[
   {p:['Las fuerzas inerciales escalan con L³ y las viscosas con L²: al reducir el tamaño las viscosas ganan. En un canal de 100 µm con agua, Re está entre 0.01 y 10, muy por debajo del umbral de turbulencia.']},
   {eq:'Re = ρvL/µ      Pe = vL/D      Q = πΔP·r⁴/(8µL)'},
   {ul:['<b>Laminar siempre</b>: dos corrientes viajan lado a lado y solo se mezclan por difusión. Agitar no mezcla: hay que diseñar geometría (canales serpenteantes con surcos) o trabajar en gotas.',
        '<b>La tiranía de r⁴</b>: reducir el radio a la mitad divide el caudal entre dieciséis. Por eso una obstrucción parcial cambia tanto el caudal, y el canal más estrecho domina la resistencia de toda la red.',
        '<b>La difusión se vuelve rápida</b> en términos relativos: t ≈ L²/D, así que recorrer 100 µm toma segundos frente a horas en un centímetro. De ahí que los ensayos en chip sean rápidos: desaparece la espera por transporte de masa.',
        'La relación superficie-volumen enorme hace que la <b>adsorción de proteínas en las paredes</b> deje de ser despreciable, y obliga a pasivar.']},
   {p:['Dos consecuencias cuantitativas que se preguntan. El caudal es proporcional a <b>r⁴</b> pero solo inversamente proporcional a <b>L</b>: reducir el radio a la mitad lo divide entre dieciséis, mientras que duplicar la longitud solo lo divide entre dos. Y como el flujo es laminar siempre, para mezclar no sirve subir el caudal buscando turbulencia —exigiría velocidades inviables— sino <b>diseñar geometría que pliegue las corrientes</b>, con canales serpenteantes y surcos, o trabajar en gotas.']},
   {p:['La analogía con circuitos es formal y útil: R = 8µL/(πr⁴) y ΔP = QR, con presión como voltaje y caudal como corriente. Resistencias en serie se suman.']},
   {fig:FIG.flujos},
   {p:['Dos fenómenos que se confunden. La <b>electroforesis</b> mueve una partícula cargada respecto al fluido y separa según carga y tamaño. La <b>electroósmosis</b> mueve el fluido completo respecto a la pared, porque la pared cargada atrae contraiones que al migrar arrastran el líquido por viscosidad. Su perfil de velocidad es <b>plano</b>, en tapón, mientras que el de presión es parabólico: esa diferencia es la que evita el ensanchamiento de bandas y decide la resolución de una separación. En un mismo experimento ocurren los dos y se observa la suma.']}
  ,
   {form:[
 ['Q = πΔP·r⁴ / (8ηL)','<b>Hagen-Poiseuille</b>. El caudal va con la <b>cuarta potencia</b> del radio: media el radio y el caudal cae a 1/16.','Q en m³/s, η en Pa·s'],
 ['R<sub>h</sub> = 8ηL / (πr⁴)','<b>Resistencia hidráulica</b>. En serie se suman, como en un circuito eléctrico.',''],
 ['Re = ρvD / η','<b>Reynolds</b>. Por debajo de 2000 el flujo es laminar; en microcanales Re suele valer menos de 1.','adimensional'],
 ['Pe = vL / D','<b>Péclet</b>: convección frente a difusión. Pe ≫ 1 significa que la mezcla difusiva no alcanza.','adimensional'],
 ['t<sub>dif</sub> = L² / (2D)','<b>Tiempo de difusión</b>: escala con el <b>cuadrado</b> de la distancia. Por eso difundir es rapidísimo en micras e inútil en centímetros.','t en s'],
 ['Ca = ηv / γ','<b>Número capilar</b>: viscoso frente a tensión superficial. Gobierna la formación de gotas.','adimensional']
]},
   {prob:{t:'Por qué dos corrientes no se mezclan en un microcanal',
 d:'Canal de 100 µm de ancho, agua a 1.0 mm/s, longitud 3.0 cm. ρ = 1000 kg/m³, η = 1.0×10⁻³ Pa·s, D(colorante) = 5.0×10⁻¹⁰ m²/s.',
 p:['Reynolds: Re = ρvD/η = 1000 × 1.0×10⁻³ × 1.0×10⁻⁴ / 1.0×10⁻³ = <b>0.10</b>. Flujo laminar con enorme margen: no hay remolinos que mezclen.',
    'Tiempo de residencia en el canal: t = L/v = 0.030/1.0×10⁻³ = <b>30 s</b>.',
    'Tiempo necesario para difundir a través del ancho: t<sub>dif</sub> = w²/(2D) = (1.0×10⁻⁴)²/(2 × 5.0×10⁻¹⁰) = 1.0×10⁻⁸/1.0×10⁻⁹ = <b>10 s</b>.',
    'Péclet: Pe = vw/D = 1.0×10⁻³ × 1.0×10⁻⁴ / 5.0×10⁻¹⁰ = <b>200</b>.',
    'Como t<sub>dif</sub> (10 s) &lt; t<sub>residencia</sub> (30 s), en este caso <b>sí</b> da tiempo a mezclarse por difusión antes de salir.',
    'Pero si el canal midiera 1.0 mm de ancho, t<sub>dif</sub> sería 1000 s: cien veces más por ensanchar diez veces. Ahí ya no mezclaría.'],
 r:'Re = 0.10 (laminar sin remedio) y Pe = 200, pero con 30 s de residencia y 10 s de difusión la mezcla se completa. Ensanchar el canal la arruinaría.',
 x:'La intuición falla porque <b>t<sub>dif</sub> escala con el cuadrado del ancho</b>. Ampliar la sección “para dar más tiempo a la difusión” es contraproducente: aumenta el camino al cuadrado y solo aumenta el tiempo de residencia de forma lineal. Lo que funciona es <b>plegar</b> las corrientes con serpentines o surcos, que acorta el camino difusivo.'}}]},
  {t:'MEMS: leyes de escala',b:[
   {p:['Todo el comportamiento peculiar sale de que distintas magnitudes escalan con distintas potencias de L, y al reducir el tamaño su importancia relativa se reordena. Ante un reactivo de escalamiento: identifica el exponente de cada efecto y compara; <b>el de menor exponente gana</b> al miniaturizar.']},
   {tabla:{th:['Magnitud','Escala como','Consecuencia al miniaturizar'],tr:[
     ['Peso e inercia','L³','Dejan de importar'],
     ['Fuerzas de superficie','L a L²','Dominan: adhesión, tensión superficial'],
     ['Frecuencia de resonancia','1/L','Sube: de MHz a GHz'],
     ['Fuerza electrostática','Muy favorable','Campos intensos con voltajes modestos']]}},
   {p:['La frecuencia de resonancia escala como <b>1/L</b>, así que acortar la estructura la sube: de ahí que los resonadores nanométricos lleguen a gigahertz. Y en el acelerómetro el compromiso es directo: resortes más <b>blandos</b> dan más desplazamiento y más sensibilidad (x = ma/k) pero bajan ω = √(k/m) y con ella el ancho de banda y la robustez frente a golpes; resortes más <b>rígidos</b> hacen lo contrario.']},
   {p:['De ahí el <b>stiction</b>, el modo de falla característico: al evaporarse el líquido de un proceso húmedo, la tensión superficial arrastra la micropalanca contra el sustrato y la deja pegada. La solución estándar es el secado supercrítico, que evita la interfase líquido-vapor.']},
   {eq:'Δf/f₀ ≈ −Δm/(2m)   ·   sensado gravimétrico'},
   {p:['El signo importa y se pregunta: <b>adsorber masa BAJA la frecuencia</b>. Y conviene no confundir sensibilidad con límite de detección: más sensibilidad acompañada de más ruido no mejora el LOD. Por eso miniaturizar no siempre mejora un sensor: suben el ancho de banda y la relación superficie-volumen, pero también el ruido térmico browniano, que crece al reducir la masa.']},
   {p:['En un acelerómetro capacitivo el compromiso es directo: resortes más blandos dan más desplazamiento y más sensibilidad (x = ma/k), pero bajan ω = √(k/m) y con ella el ancho de banda y la robustez frente a golpes.']}
  ,
   {form:[
 ['Δf/f₀ ≈ −Δm / (2m)','<b>Sensado gravimétrico</b>: adsorber masa <b>baja</b> la frecuencia. El signo es lo que se pregunta.','adimensional'],
 ['ω₀ = √(k/m)','<b>Frecuencia natural</b>. Resortes más blandos dan más sensibilidad y menos ancho de banda: el compromiso central del diseño.','ω en rad/s'],
 ['x = m·a / k','<b>Desplazamiento de un acelerómetro</b>: la sensibilidad crece al bajar k.','x en m'],
 ['Q = ω₀·E<sub>almacenada</sub> / P<sub>disipada</sub>','<b>Factor de calidad</b>: cae drásticamente en aire y por eso los MEMS resonantes se encapsulan al vacío.','adimensional'],
 ['F<sub>vol</sub> ∝ L³ · F<sub>sup</sub> ∝ L² · F<sub>elástica</sub> ∝ L','<b>Leyes de escala</b>: al miniaturizar, las fuerzas de superficie dominan sobre las de volumen. De ahí la <b>adherencia</b> (stiction).','']
]},
   {prob:{t:'Cuánta masa detectó el resonador',
 d:'Una micropalanca resuena a 1.000 MHz con masa efectiva de 1.00×10⁻¹¹ g. Tras exponerla a un analito, la frecuencia baja a 0.998 MHz. La resolución en frecuencia del lector es 10 Hz.',
 p:['Corrimiento relativo: Δf/f₀ = (0.998 − 1.000)/1.000 = <b>−2.00×10⁻³</b>. El signo negativo ya indica masa <b>añadida</b>.',
    'De Δf/f₀ ≈ −Δm/(2m): Δm = −2m·(Δf/f₀) = −2 × 1.00×10⁻¹¹ × (−2.00×10⁻³) = <b>4.00×10⁻¹⁴ g</b>.',
    'Es decir <b>40 femtogramos</b>, del orden de la masa de unas pocas bacterias o de 10⁸ moléculas pequeñas.',
    'Masa mínima detectable con ese lector: Δf<sub>mín</sub>/f₀ = 10/1.000×10⁶ = 1.0×10⁻⁵ ⇒ Δm<sub>mín</sub> = 2 × 1.00×10⁻¹¹ × 1.0×10⁻⁵ = <b>2.0×10⁻¹⁶ g</b>, unos 0.2 fg.',
    'Para mejorar ese límite conviene <b>reducir la masa del resonador</b>, no aumentar la del analito: la sensibilidad va como 1/m.'],
 r:'Se adsorbieron 40 fg, y el sistema podría detectar hasta unos 0.2 fg.',
 x:'Si la frecuencia hubiera <b>subido</b>, la explicación sería pérdida de masa por desorción o un aumento de la rigidez efectiva. El sensado gravimétrico no distingue por sí solo entre un cambio de masa y uno de rigidez: hace falta un control.'}}]},
  {t:'Sensores electroquímicos',b:[
   {p:['Dos técnicas que responden preguntas distintas. La <b>voltamperometría cíclica</b> barre el potencial y sirve para <b>caracterizar</b>: a qué potencial ocurre cada proceso, si es reversible (separación de picos ≈ 59/n mV a temperatura ambiente), área electroactiva. La <b>cronoamperometría</b> fija el potencial y lee corriente contra tiempo: sirve para <b>cuantificar</b>, y es lo que hace un glucómetro comercial.']},
   {eq:'i_p = 2.69×10⁵ · n^{3/2} · A · D^{1/2} · v^{1/2} · C   (Randles-Ševčík)'},
   {ul:['Las unidades son la trampa: C va en <b>mol·cm⁻³</b>, así que 1 mM = 1×10⁻⁶ mol·cm⁻³.',
        'Diagnóstico muy usado: si i_p es proporcional a <b>√v</b>, la especie difunde; si es proporcional a <b>v</b>, está <b>adsorbida</b> en el electrodo.']},
   {p:['Dos lecturas de Randles-Ševčík que aparecen como diagnóstico. Si i_p crece con <b>√v</b>, la especie llega difundiendo desde el seno de la disolución; si crece con <b>v</b>, ya está <b>adsorbida</b> en el electrodo. Y en un sistema reversible de un electrón la separación de picos vale <b>59/n mV</b> a temperatura ambiente: separaciones mayores indican cinética lenta o caída óhmica sin compensar.']},
   {p:['Anatomía de un biosensor de glucosa, por capas. La <b>enzima</b> (glucosa oxidasa) da selectividad. El <b>transductor</b> convierte el evento en corriente, y ahí está la evolución generacional: la primera depende del oxígeno local (variable e incontrolado), la segunda introduce un <b>mediador redox</b> que lo vuelve independiente del oxígeno (es la de las tiras comerciales), y la tercera busca transferencia directa, donde los nanotubos y las nanopartículas acortan la distancia hasta el centro redox enterrado en la proteína, porque la velocidad de transferencia decae exponencialmente con la distancia.']},
   {p:['El <b>rango lineal termina cuando la concentración se acerca a Km</b>, porque la enzima empieza a saturarse y la respuesta se aplana. Es el mismo comportamiento de Michaelis-Menten visto desde el sensor.']},
   {p:['Celda de <b>tres electrodos</b>: el de referencia fija un potencial estable sin pasar corriente y el contraelectrodo cierra el circuito. Con solo dos, el de referencia se polariza y su potencial deriva.']},
   {p:['El <b>rango lineal termina cuando la concentración se acerca a Km</b>, porque la enzima empieza a saturarse. Y la estabilidad operativa es el punto débil de cualquier sensor enzimático: la proteína se desnaturaliza.']}
  ,
   {form:[
 ['i<sub>p</sub> = 2.69×10⁵·n^(3/2)·A·D^(1/2)·C·v^(1/2)','<b>Randles-Ševčík</b> a 25 °C. i<sub>p</sub> ∝ √v indica difusión; i<sub>p</sub> ∝ v indica especie <b>adsorbida</b>.','A en cm², D en cm²/s, C en mol/cm³'],
 ['ΔE<sub>p</sub> ≈ 59/n mV','<b>Reversibilidad</b> en voltamperometría cíclica, junto con |i<sub>pa</sub>/i<sub>pc</sub>| ≈ 1.','a 25 °C'],
 ['E = E° − (0.0592/n)·log Q','<b>Nernst</b>. Base de los potenciométricos: 59 mV por década para un ion monovalente.','a 25 °C'],
 ['i<sub>lim</sub> = n·F·A·D·C / δ','<b>Corriente límite</b>: proporcional a la concentración. Base de toda la amperometría cuantitativa.','δ es el espesor de la capa de difusión'],
 ['S/N = 3 para LOD','Criterio del <b>límite de detección</b> en señal electroquímica.','']
]}]}
 ],
 flash:[
  ['¿Por qué el silicio es mal emisor de luz?','Gap indirecto: la recombinación radiativa necesita además un fonón, proceso de tres cuerpos mucho menos probable que la no radiativa.'],
  ['Profundidad de la onda evanescente y por qué importa','100 a 200 nm. Por eso los sensores de superficie ignoran el resto de la muestra, que es justo la ventaja buscada.'],
  ['¿Por qué un metal refleja en el visible?','Por debajo de la frecuencia de plasma la parte real de ε es negativa. Por encima de ω_p el metal se vuelve transparente.'],
  ['Caudal al reducir el radio a la mitad','Se divide entre 16. Hagen-Poiseuille: Q ∝ r⁴. Por eso el canal más estrecho domina la resistencia de la red.'],
  ['Perfil del flujo electroosmótico frente al de presión','Electroosmótico: plano, en tapón. De presión: parabólico. El plano evita ensanchar bandas en una separación.'],
  ['¿Por qué los ensayos en microchip son rápidos?','t ≈ L²/D. Reducir la distancia dos órdenes reduce el tiempo cuatro. Desaparece la espera por transporte de masa.'],
  ['Qué es el stiction y cómo se evita','Las fuerzas de superficie pegan la estructura al sustrato al secar. Se evita con secado supercrítico, sin interfase líquido-vapor.'],
  ['Signo del desplazamiento de frecuencia al adsorber masa','BAJA. Δf/f₀ ≈ −Δm/(2m). El signo se pregunta.'],
  ['Unidades de concentración en Randles-Ševčík','mol·cm⁻³. 1 mM = 1×10⁻⁶ mol·cm⁻³. Es la trampa habitual.'],
  ['i_p proporcional a v en lugar de √v: ¿qué significa?','La especie está adsorbida en el electrodo, no difundiendo desde la disolución.'],
  ['¿Qué resuelve el mediador redox en un biosensor de glucosa?','La dependencia del oxígeno local, que es variable e incontrolado. Es la segunda generación, la de las tiras comerciales.'],
  ['¿Por qué tres electrodos y no dos?','Para que el de referencia fije un potencial estable sin pasar corriente. Con dos, se polariza y deriva.']
 ]},

/* ===================== M9 ===================== */
{id:'M9',nom:'Escalamiento, diseño ingenieril e investigación',sesion:'Sesión 6 del taller',
 sub:'Por qué lo que funciona en 50 mL falla en 5 L, diseño experimental e inferencia, ingeniería económica, balances y elección de reactor.',
 sec:[
  {t:'Escalar es elegir qué conservar',b:[
   {p:['El resultado central es negativo y por eso resulta contraintuitivo: <b>no existe un factor de escala que conserve a la vez todas las magnitudes relevantes</b>. El problema no es hacer más, es hacer igual.']},
   {p:['La razón es geométrica. Si multiplicas la dimensión lineal por k, el volumen va por k³ y el área de transferencia de calor por k². La razón área-volumen se divide entre k, así que un reactor diez veces mayor en dimensión lineal tiene mil veces más volumen y solo cien veces más superficie para disipar el calor que ese volumen genera. De ahí el modo de fallo más citado: una reacción exotérmica dócil en un matraz se vuelve peligrosa en un reactor de 500 L sin que la química haya cambiado.']},
   {eq:'P = Np·ρ·N³·D⁵   ⇒   conservar P/V exige   N ∝ D^(−2/3)'},
   {ul:['Si conservas <b>P/V</b> (el criterio habitual), la velocidad de rotación <b>baja</b> y la velocidad de punta πND <b>sube</b> como D^(1/3). Los criterios son incompatibles: hay que elegir cuál gobierna.',
        'Conservar las <b>rpm</b> multiplicaría la potencia específica por k², mecánicamente inviable.',
        'En células o cristales frágiles se conserva la <b>velocidad de punta</b> y se sacrifica mezclado.',
        'El <b>tiempo de mezclado crece</b> al escalar bajo P/V constante, y si se vuelve comparable al tiempo de reacción aparecen gradientes locales que cambian la selectividad: eso es el número de Damköhler, y explica que una receta de laboratorio rinda peor en planta.']},
   {p:['Caso específico de nanopartículas: el tiempo de mezclado creciente <b>rompe la nucleación instantánea</b> que exige LaMer, y la distribución de tamaños se ensancha. De ahí que el <b>flujo continuo</b> sea un cambio de paradigma: escala por tiempo de operación y no por volumen, así que preserva la reproducibilidad en lugar de pelear contra ella.']}
  ,
   {form:[
 ['Q<sub>gen</sub> ∝ V ∝ L³   ·   Q<sub>dis</sub> ∝ A ∝ L²','<b>El problema térmico del escalamiento</b>: la razón A/V cae como 1/L, así que disipar se vuelve más difícil al crecer.',''],
 ['P/V = constante','Criterio de escalamiento más usado; implica N ∝ D^(−2/3), es decir menos revoluciones.','P en W, V en m³'],
 ['v<sub>punta</sub> = πND','<b>Velocidad de punta</b>. Bajo P/V constante escala como D^(1/3): <b>sube</b>. Los dos criterios son incompatibles.','en m/s'],
 ['Re = ρND²/η','<b>Reynolds del impulsor</b>. Conservarlo exige N ∝ D⁻², lo que hace caer la potencia por volumen.','adimensional'],
 ['P = N<sub>p</sub>·ρ·N³·D⁵','<b>Número de potencia</b>; N<sub>p</sub> depende de la geometría del impulsor.','P en W, N en rev/s']
]},
   {prob:{t:'Qué pasa al escalar cien veces conservando P/V',
 d:'Reactor piloto de 50 L con impulsor de D = 0.20 m girando a 300 rpm. Se escala a 5000 L manteniendo la geometría y conservando P/V.',
 p:['Factor de escala en volumen: 5000/50 = 100. Como V ∝ D³, el factor lineal es 100^(1/3) = <b>4.64</b>.',
    'Nuevo diámetro: D₂ = 0.20 × 4.64 = <b>0.928 m</b>.',
    'Bajo P/V constante: N₂ = N₁·(D₁/D₂)^(2/3) = 300 × (1/4.64)^(2/3) = 300 × 0.3594 = <b>108 rpm</b>. Las revoluciones <b>bajan</b>.',
    'Velocidad de punta inicial: πN₁D₁ = π × 5.0 rev/s × 0.20 = <b>3.14 m/s</b>.',
    'Velocidad de punta final: π × 1.80 rev/s × 0.928 = <b>5.25 m/s</b>. <b>Sube</b> un 67 %, exactamente el factor 4.64^(1/3) = 1.67.',
    'Razón área a volumen: cae por el factor lineal, 4.64. La capacidad de disipar calor por unidad de volumen se reduce a menos de una cuarta parte.'],
 r:'D pasa de 0.20 a 0.93 m, N baja de 300 a 108 rpm, la punta sube de 3.1 a 5.3 m/s y la disipación relativa cae 4.6 veces.',
 x:'Los tres criterios se contradicen entre sí y hay que <b>elegir</b> cuál conservar según lo que limite el proceso: P/V si limita el mezclado, velocidad de punta si hay células o cristales frágiles que el esfuerzo cortante destruye, y Reynolds si el régimen de flujo es crítico. Y en una reacción exotérmica, el cuello de botella real suele ser el <b>área de intercambio</b>, que obliga a rediseñar la camisa o añadir serpentines.'}}]},
  {t:'Diseño experimental e inferencia',b:[
   {p:['Variar una variable a la vez es intuitivo e inferior. La razón decisiva <b>no es el ahorro de corridas sino las interacciones</b>: una interacción existe cuando el efecto de un factor depende del nivel de otro, y el método de una variable a la vez es estructuralmente incapaz de detectarla porque explora los ejes y no el interior del espacio. Peor aún, puede converger a un óptimo local y declararlo global. En síntesis de nanomateriales las interacciones son la norma.']},
   {ul:['<b>Aleatorización</b> del orden: protege contra derivas en el tiempo (reactivo que envejece, temperatura del laboratorio) que de otro modo se confundirían con el efecto estudiado.',
        '<b>Replicación</b>: sin estimación del error experimental no se puede decidir si un efecto es real.',
        '<b>Bloqueo</b>: agrupa corridas que comparten una condición ajena, como un lote de material, para que su variabilidad no contamine.',
        'Con muchos factores se usan diseños <b>fraccionados</b>, que sacrifican distinguir algunas interacciones a cambio de muchas menos corridas. Son la herramienta estándar de cribado.']},
   {p:['Sobre el valor p: indica que el resultado sería improbable si no hubiera efecto alguno. <b>No</b> mide el tamaño del efecto, <b>no</b> es la probabilidad de que tu hipótesis sea cierta, y con muestras grandes diferencias minúsculas resultan significativas. Al revés, un resultado no significativo con n pequeña suele ser un resultado sin información, no una prueba de ausencia. Hay que reportar magnitud del efecto con su intervalo de confianza.']},
   {deep:{t:'Propagación: dónde invertir el dinero',b:[
     {ul:['Sumas y restas: se combinan las incertidumbres <b>absolutas</b> en cuadratura.',
          'Productos y cocientes: las <b>relativas</b> en cuadratura.',
          'Potencias: la relativa se <b>multiplica por el exponente</b>. Un radio con 4 % de incertidumbre da un volumen con 12 %.']},
     {p:['La lección práctica sale de la suma en cuadratura: si una contribución es mucho mayor que las demás, domina. Con una del 10 % y otra del 2 %, la combinada es 10.2 %. Mejorar la del 2 % al 1 % no cambia nada; mejorar la del 10 % al 5 % reduce el total a la mitad.'],},
     {p:['De ahí la regla de asignación de esfuerzo: identifica la mayor fuente de incertidumbre y trabaja sobre ella. Comprar un instrumento más preciso para la variable que ya medías bien es dinero desperdiciado, y es exactamente el tipo de decisión que plantea un reactivo de caso.']}
   ]}}
  ,
   {form:[
 ['Corridas = 2^k','<b>Diseño factorial completo</b> de k factores a dos niveles. Con k = 3 son 8 corridas.',''],
 ['Efecto = ȳ<sub>(+)</sub> − ȳ<sub>(−)</sub>','<b>Efecto principal</b>: diferencia entre las medias de nivel alto y bajo.',''],
 ['δy/y = n·(δx/x)  para y = xⁿ','<b>Propagación en potencias</b>: la incertidumbre relativa se multiplica por el exponente.',''],
 ['δy = √[(δa)² + (δb)²]  para y = a ± b','<b>Propagación en sumas</b>: se combinan las incertidumbres <b>absolutas</b> en cuadratura.',''],
 ['δy/y = √[(δa/a)² + (δb/b)²]  para y = a·b','<b>Propagación en productos</b>: se combinan las <b>relativas</b> en cuadratura.',''],
 ['d = (µ₁ − µ₂)/s','<b>Tamaño del efecto</b> de Cohen. El valor p dice si el efecto existe; d dice si importa.','adimensional']
]},
   {prob:{t:'Propagar la incertidumbre del radio al volumen y a la masa',
 d:'Se mide el radio de nanopartículas esféricas por TEM: R = 12.0 ± 0.5 nm. La densidad del material es ρ = 5.60 ± 0.05 g/cm³.',
 p:['Incertidumbre relativa del radio: 0.5/12.0 = <b>4.17 %</b>.',
    'El volumen va con R³, así que su incertidumbre relativa es 3 × 4.17 = <b>12.5 %</b>.',
    'Volumen: V = (4/3)π(12.0×10⁻⁷ cm)³ = (4/3)π × 1.728×10⁻¹⁸ = <b>7.24×10⁻¹⁸ cm³</b>, con ±12.5 % ⇒ ±0.90×10⁻¹⁸.',
    'Incertidumbre relativa de la densidad: 0.05/5.60 = <b>0.89 %</b>.',
    'Masa por partícula, m = ρV, combina relativas en cuadratura: √(12.5² + 0.89²) = <b>12.5 %</b>. La densidad apenas contribuye.',
    'm = 5.60 × 7.24×10⁻¹⁸ = 4.05×10⁻¹⁷ g, es decir <b>(4.05 ± 0.51)×10⁻¹⁷ g</b>.'],
 r:'Un 4.2 % de incertidumbre en el radio se convierte en 12.5 % en el volumen y en la masa.',
 x:'Es la razón de que en nanotecnología convenga invertir esfuerzo en <b>medir bien el tamaño</b>: cualquier magnitud volumétrica o másica amplifica ese error por tres. Y en la cuadratura, el término dominante aplasta a los demás: mejorar la densidad del 0.89 % al 0.1 % no cambiaría nada.'}}]},
  {t:'Planta piloto y los cuatro tipos de similaridad',b:[
   {p:['Escalar un proceso o un equipo consiste en <b>agrandarlo</b> desde su escala de investigación —laboratorio o piloto— hasta escala industrial. Y una <b>planta piloto</b> es un conjunto de partes específicas ensambladas que operan como un todo armónico, con el propósito de reproducir a escala procesos productivos. En ella intervienen termodinámica, flujo de fluidos, transferencia de masa y energía, reacción química y control de procesos a la vez, que es justo lo que no se puede estudiar en un matraz aislado.']},
   {p:['Sus dos propósitos principales se formulan así: <b>predecir</b> el comportamiento de una planta industrial usando las condiciones más similares posibles, y <b>estudiar</b> el comportamiento de plantas industriales ya construidas, usándola entonces como modelo para diagnosticar o mejorar.']},
   {p:['La pregunta de fondo del escalamiento es cómo garantizar que el equipo grande se comporte como el pequeño. La respuesta clásica, en la formulación de Anaya y Gutiérrez, son <b>cuatro tipos de similaridad</b>, y van encadenados: cada uno presupone el anterior.']},
   {tabla:{th:['Similaridad','Qué exige','Consecuencia práctica'],tr:[
     ['<b>Geométrica</b>','Que todas las razones de longitudes se conserven entre modelo y prototipo','Es la base de todas las demás. Si la forma cambia, nada de lo que sigue es comparable'],
     ['<b>Mecánica</b>','Que las razones de fuerzas, velocidades o tiempos correspondientes se mantengan','Se subdivide en estática, cinemática y dinámica. Aquí entran Reynolds y los demás adimensionales'],
     ['<b>Térmica</b>','Que los <b>flujos de calor correspondientes</b> guarden una relación constante','Exige similaridad geométrica y mecánica previas; si el mezclado difiere, los perfiles de temperatura también'],
     ['<b>Química</b>','Que las <b>diferencias de concentración</b> correspondientes mantengan una relación constante','Solo puede afirmarse en sistemas que ya son geométrica y térmicamente similares']]}},
   {p:['El encadenamiento explica por qué el escalamiento es tan difícil: conservar la similaridad química exige haber conservado la térmica, que exige la mecánica, que exige la geométrica. Y, como se vio arriba, la geométrica <b>destruye</b> por sí sola la razón área-volumen, que es justo lo que gobierna la transferencia de calor.']},
   {p:['De ahí que escalar un reactor exotérmico conservando la forma obligue a rediseñarla: alargar el recipiente, añadir serpentines internos o pasar a configuración tubular, precisamente para recuperar el área que la similaridad geométrica pura habría perdido.']}
  ,
   {fig:FIG.similitud_geom}]},
  {t:'Análisis de ciclo de vida',b:[
   {p:['El <b>análisis de ciclo de vida</b> cuantifica las cargas ambientales de un producto a lo largo de toda su existencia, y es la herramienta que convierte la factibilidad ambiental en números comparables en lugar de afirmaciones.']},
   {fig:FIG.acv},
   {p:['Dos decisiones condicionan todo el estudio y por eso se toman en la primera fase.']},
   {ul:['La <b>unidad funcional</b> es la referencia cuantificada a la que se refieren todas las entradas y salidas. No es «un envase» sino «contener y proteger un litro de bebida durante seis meses». Dos estudios con unidades funcionales distintas <b>no son comparables</b>, por muy rigurosos que sean cada uno por su lado.',
        'Las <b>fronteras del sistema</b> fijan hasta dónde llega el análisis: de la cuna a la puerta (hasta salir de fábrica), de la cuna a la tumba (incluyendo uso y disposición) o de la cuna a la cuna (cerrando el ciclo con reciclaje).']},
   {p:['Sobre la <b>duración</b> del tiempo abarcado, la respuesta correcta es que cubre todas las etapas del ciclo desde la extracción de materias primas hasta la disposición final o el reciclaje: materia prima, manufactura, distribución, uso y fin de vida. No se limita a la fase de fabricación.']},
   {p:['En <b>factibilidad ambiental</b> los factores que se consideran incluyen la ubicación de la planta, el consumo de recursos (agua, energía, materias primas), las emisiones y residuos generados, los impactos sobre ecosistemas y comunidades, y el cumplimiento normativo. El instrumento formal en México es la <b>evaluación de impacto ambiental</b>, que se materializa en un <b>Manifiesto de Impacto Ambiental</b>.']}
  ]},
  {t:'Ingeniería económica y factibilidad',b:[
   {p:['Apareció en once preguntas de los quizzes del taller, así que conviene no dejarlo fuera. La idea de fondo es que <b>el dinero tiene valor en el tiempo</b>: mil pesos hoy no equivalen a mil pesos dentro de tres años, porque los de hoy pueden invertirse.']},
   {eq:'Valor futuro: VF = VP·(1 + i)ⁿ      ·      interés simple: VF = VP·(1 + i·n)'},
   {p:['El <b>interés compuesto</b> se compone de tres partes que conviene nombrar por separado, porque el examen las pide así: el <b>capital o monto invertido</b>, la <b>tasa de interés</b> acordada y el <b>número de periodos</b> durante los que capitaliza. La diferencia con el simple es que el compuesto paga intereses sobre los intereses ya generados.']},
   {p:['El aspecto central en que se basa la ingeniería económica es precisamente ese: <b>el valor del dinero en el tiempo</b>. La premisa de los métodos de evaluación de proyectos es que los flujos de efectivo que ocurren en momentos distintos no son directamente comparables y deben llevarse a un mismo instante antes de sumarse.']},
   {p:['La diferencia entre ambos es que el <b>interés compuesto capitaliza sobre el saldo acumulado</b> y el simple solo sobre el capital inicial. Casi toda la evaluación de proyectos usa el compuesto, y confundirlos es un distractor habitual.']},
   {tabla:{th:['Criterio','Qué mide','Regla de decisión'],tr:[
     ['<b>VPN</b> (valor presente neto)','Suma de flujos descontados menos la inversión','Aceptar si VPN > 0 a la tasa de descuento de la empresa'],
     ['<b>TIR</b> (tasa interna de retorno)','Tasa que hace el VPN igual a cero','Aceptar si TIR supera el costo de capital. No basta con que sea positiva'],
     ['<b>Periodo de recuperación</b>','Tiempo hasta recuperar la inversión','Útil como filtro rápido; ignora el valor del dinero en el tiempo']]}},
   {p:['El VPN es el criterio de referencia porque incorpora tanto la magnitud como el momento de los flujos. La TIR puede dar resultados ambiguos con flujos que cambian de signo varias veces.']},
   {deep:{t:'Escalar costos: índices y la regla de los seis décimos',b:[
     {p:['Dos herramientas distintas que suelen confundirse, y las dos aparecieron en el taller.'],},
     {p:['<b>Índice de costos.</b> Traslada el costo de un equipo de un año a otro sin volver a cotizar: C_hoy = C_antes × (índice_hoy / índice_antes). El más usado en proceso es el CEPCI. Si un equipo costó 2 millones con índice 400 y hoy el índice vale 600, el costo actualizado es 3 millones.'],},
       {p:['Ejemplo numérico del índice: un reactor de 150 L costaba 10 000 dólares cuando el CEPCI valía 200, y hoy el índice vale 300. El costo actualizado es 10 000 × (300/200) = <b>15 000 dólares</b>. La razón de índices actualiza por inflación de equipos, nada más: si además cambiara la capacidad, haría falta aplicar también el factor de escala.'],},
   {eq:'C₂ = C₁ · (Q₂/Q₁)^n     con n ≈ 0.6 para muchos equipos de proceso'},
     {p:['<b>Regla de los seis décimos.</b> Escala el costo con la capacidad, no con el tiempo. Como el exponente es menor que uno, multiplicar por seis la capacidad multiplica el costo solo por 6^0.6 ≈ 2.9. Esa es la economía de escala: el costo por unidad producida baja al crecer el equipo, y es el argumento económico que sostiene buena parte del escalamiento industrial.'],},
     {p:['Ojo con el orden: si hay que escalar <b>y</b> actualizar, se aplican los dos factores, cada uno con su propia base.']}
   ]}},
   {p:['El <b>análisis de factibilidad</b> de un proyecto tiene cuatro frentes y conviene nombrarlos por separado: técnico (¿se puede construir y operar?), de mercado (¿hay quien lo compre y a qué precio?), medioambiental (¿qué impactos y qué permisos?) y financiero (¿los números cierran?).']},
   {p:['Y la distinción que cierra el módulo: <b>factible</b> responde «se puede»; <b>viable</b> responde «conviene». Un proceso puede ser perfectamente factible y no viable si su costo por unidad supera al de la alternativa sin resolver nada que la alternativa no resuelva.']}
  ,
   {form:[
 ['VPN = Σ F<sub>t</sub>/(1+i)ᵗ − I₀','<b>Valor presente neto</b>. Se acepta si VPN &gt; 0 a la tasa de descuento de la empresa.','F en unidades monetarias, i en fracción'],
 ['TIR: la tasa que hace VPN = 0','<b>Tasa interna de retorno</b>. Se acepta si TIR &gt; tasa mínima aceptable.','en %'],
 ['PR = I₀ / F<sub>anual</sub>','<b>Periodo de recuperación</b> simple. Ignora el valor del dinero en el tiempo, así que es solo un filtro inicial.','en años'],
 ['C₂ = C₁(Q₂/Q₁)ⁿ','<b>Regla de los seis décimos</b> para costo de equipo, con n ≈ 0.6. Es la economía de escala en forma de ley de potencia.',''],
 ['Costo unitario = CF/Q + CV','<b>Punto de equilibrio</b>: Q<sub>eq</sub> = CF/(precio − CV).','']
]},
   {prob:{t:'Decidir con VPN y periodo de recuperación',
 d:'Una planta de nanopartículas exige una inversión inicial de 2.0 millones y genera flujos netos de 600 000 al año durante 5 años. La tasa de descuento de la empresa es del 12 %.',
 p:['Periodo de recuperación simple: 2 000 000/600 000 = <b>3.33 años</b>. Pasa el filtro si el criterio es menos de 4 años.',
    'Factor de anualidad a 12 % y 5 años: [1 − (1.12)⁻⁵]/0.12. Como 1.12⁵ = 1.7623, (1.12)⁻⁵ = 0.5674.',
    'Factor = (1 − 0.5674)/0.12 = 0.4326/0.12 = <b>3.605</b>.',
    'Valor presente de los flujos: 600 000 × 3.605 = <b>2 163 000</b>.',
    'VPN = 2 163 000 − 2 000 000 = <b>+163 000</b>. Positivo, así que el proyecto se acepta a esa tasa.',
    'Margen de seguridad: la TIR es la tasa que anula el VPN. Tanteando, a 15 % el factor de anualidad es 3.352 y el VPN sería 600 000 × 3.352 − 2 000 000 = <b>+11 200</b>; a 16 % resulta negativo. La TIR está cerca del <b>15.2 %</b>.'],
 r:'VPN = +163 000 y TIR ≈ 15.2 % frente a una tasa mínima del 12 %: el proyecto es viable, aunque con poco margen.',
 x:'El periodo de recuperación de 3.33 años <b>no</b> descuenta el dinero y por eso resulta optimista: descontado, la recuperación llega cerca del año 4.8. Y un VPN positivo tan ajustado significa que el proyecto es sensible: una caída del 8 % en los flujos ya lo vuelve negativo.'}}]},
  {t:'Balances, reactores y madurez',b:[
   {eq:'Entrada − Salida + Generación − Consumo = Acumulación'},
   {p:['Todo lo demás son casos particulares. En <b>estado estacionario</b> la acumulación es cero; <b>sin reacción</b>, generación y consumo son cero y queda entrada = salida (operaciones de separación); en <b>lotes</b> no hay entrada ni salida y queda generación − consumo = acumulación.']},
   {p:['El procedimiento es siempre el mismo: diagrama de flujo con corrientes rotuladas, volumen de control explícito, <b>base de cálculo</b> elegida (100 kg de alimentación, una hora de operación), balance global más balances por componente, y conteo de ecuaciones contra incógnitas.']},
   {p:['Con <b>recirculación</b> hay que distinguir conversión por paso de conversión global, y es el error clásico: si todo el reactivo no convertido regresa, la conversión global es del 100 % aunque la de paso sea del 30 %. El precio es un caudal de recirculación grande. Y hace falta una <b>purga</b> si entran inertes, porque de lo contrario se acumulan sin límite.']},
   {tabla:{th:['Reactor','Concentración','Cuándo conviene'],tr:[
     ['Lotes','Uniforme en espacio, cambia en el tiempo','Flexibilidad, muchos productos, volúmenes pequeños. Farmacéutica y química fina'],
     ['CSTR','Igual en todo el volumen que a la salida: la más baja','Autocatalíticas o con inhibición por sustrato'],
     ['PFR','Gradiente a lo largo del tubo','Para <b>orden positivo</b>, menos volumen que el CSTR a igual conversión']]}},
   {p:['Un PFR es equivalente a un reactor por lotes donde el tiempo se sustituye por la posición. Y varios CSTR en serie aproximan a un PFR: cuantos más tanques, más se parece.']},
   {p:['La escala <b>TRL</b> mide grado de demostración y entorno, no calidad: 4 es validación en laboratorio y 9 es sistema probado en operación real. El tramo del 4 al 6 es el valle de la muerte, donde aparecen escalamiento, reproducibilidad entre lotes, estabilidad y costo, y donde mueren la mayoría de los desarrollos.']},
   {p:['Y la <b>analogía calor-masa</b> permite traducir correlaciones entre fenómenos: Nu ↔ Sh y Pr ↔ Sc. Es la razón de que la misma correlación sirva para transferencia de calor y de masa cambiando los números adimensionales.']}
  ,
   {form:[
 ['Entrada − Salida + Generación − Consumo = Acumulación','<b>Balance general</b>. En estado estacionario la acumulación es cero.',''],
 ['X = (n<sub>A0</sub> − n<sub>A</sub>) / n<sub>A0</sub>','<b>Conversión</b>. Con recirculación total del no convertido, la conversión <b>global</b> tiende al 100 % aunque la de paso sea baja.','adimensional'],
 ['V<sub>CSTR</sub> = F<sub>A0</sub>X / (−r<sub>A</sub>)<sub>salida</sub>','<b>CSTR</b>: opera todo su volumen a la concentración de salida, la más baja y por tanto la más lenta.','V en m³'],
 ['V<sub>PFR</sub> = F<sub>A0</sub> ∫dX/(−r<sub>A</sub>)','<b>PFR</b>: aprovecha el gradiente, así que para orden positivo necesita <b>menos</b> volumen que el CSTR.',''],
 ['τ = V / v₀','<b>Tiempo espacial</b>: el tiempo medio de residencia en el reactor.','τ en s'],
 ['TRL 1–3 investigación · 4–6 validación · 7–9 producción','<b>Nivel de madurez tecnológica</b>. El “valle de la muerte” está entre TRL 4 y 6.','']
]}]}
 ],
 flash:[
  ['Interés compuesto frente a interés simple','Compuesto: VF = VP(1+i)ⁿ, capitaliza sobre el saldo. Simple: VF = VP(1+i·n), solo sobre el capital inicial.'],
  ['Actualizar el costo de un equipo con un índice de costos','C_hoy = C_antes × (índice_hoy / índice_antes). Traslada costos entre años sin volver a cotizar; el más usado es el CEPCI.'],
  ['Regla de los seis décimos','C₂ = C₁(Q₂/Q₁)^0.6. Multiplicar la capacidad por seis multiplica el costo solo por 2.9: es la economía de escala.'],
  ['VPN negativo a la tasa de descuento de la empresa: ¿qué decides?','Rechazar. El proyecto no cubre el costo de oportunidad del capital. Que la TIR sea positiva no basta: debe superar esa tasa.'],
  ['Los cuatro frentes del análisis de factibilidad','Técnica, de mercado, medioambiental y financiera. Responden preguntas distintas y ninguna sustituye a otra.'],
  ['¿Por qué una exotérmica controlable en 50 mL es peligrosa en 500 L?','El volumen crece con k³ y el área de disipación con k². La capacidad relativa de extraer calor cae linealmente con la escala.'],
  ['Al escalar conservando P/V, ¿qué pasa con las rpm?','Bajan: N ∝ D^(−2/3). Conservar las rpm multiplicaría la potencia específica por k², inviable.'],
  ['Al conservar P/V, ¿qué pasa con la velocidad de punta?','SUBE, como D^(1/3). Por eso los criterios son incompatibles y hay que elegir cuál gobierna el proceso.'],
  ['¿Por qué escalar arruina la monodispersidad?','El tiempo de mezclado crece y rompe la nucleación instantánea que exige LaMer. El flujo continuo lo evita escalando por tiempo.'],
  ['El argumento decisivo a favor del diseño factorial','Las interacciones: el método de una variable a la vez no puede detectarlas porque solo explora los ejes del espacio experimental.'],
  ['¿Para qué sirve aleatorizar el orden de las corridas?','Para que una deriva temporal (reactivo que envejece, temperatura) no se confunda con el efecto del factor estudiado.'],
  ['Incertidumbre del volumen si el radio tiene 4 %','12 %. En potencias la incertidumbre relativa se multiplica por el exponente, y el volumen va con r³.'],
  ['Conversión global con recirculación total y 30 % por paso','100 %: si nada del reactivo sale sin convertirse, todo acaba convirtiéndose. El precio es un caudal de recirculación alto.'],
  ['¿Para qué una corriente de purga?','Para que los inertes, que entran y no se consumen ni salen, no se acumulen indefinidamente en el circuito.'],
  ['PFR o CSTR para orden positivo','PFR: menos volumen a igual conversión, porque buena parte del tubo opera a concentración alta. El CSTR trabaja todo a la de salida.'],
  ['¿Qué significa TRL 4 y qué es el valle de la muerte?','TRL 4 es validación en laboratorio. El tramo 4 a 6 es el valle de la muerte: escalamiento, reproducibilidad y costo.']
 ]},

/* ===================== M10 ===================== */
{id:'M10',nom:'Formulaciones y desarrollo de productos',sesion:'Sesión 1 del taller',
 sub:'Sistemas dispersos, del compuesto al fármaco, y del laboratorio al producto con su riesgo y su regulación.',
 sec:[
  {t:'Sistemas dispersos: termodinámicamente condenados',b:[
   {p:['Una emulsión <b>nunca</b> es termodinámicamente estable: separar dos fases inmiscibles crea área interfacial y eso cuesta energía. Lo que se busca es <b>estabilidad cinética</b>, es decir que tarde mucho.']},
   {p:['El <b>HLB</b> resume en un número de 0 a 20 la afinidad del surfactante por el agua. La regla que decide el tipo de emulsión es la de <b>Bancroft</b>: la fase continua será aquella en la que el surfactante sea más soluble. Así, HLB alto (8–18) da aceite en agua y HLB bajo (3–6) da agua en aceite.']},
   {eq:'HLB_mezcla = x₁·HLB₁ + x₂·HLB₂   ·   promedio ponderado por fracción másica'},
   {fig:FIG.emulsion},
   {tabla:{th:['Mecanismo de fallo','Qué ocurre','¿Reversible agitando?','Cómo se combate'],tr:[
     ['Cremado','Las gotas migran por densidad (Stokes)','Sí','Reducir radio (entra al cuadrado), espesar, igualar densidades'],
     ['Floculación','Se agrupan sin fusionarse','Sí','Más repulsión: carga o impedimento estérico'],
     ['Coalescencia','Las películas se rompen y las gotas se funden','No','Película interfacial robusta: mezclas de surfactantes, partículas sólidas'],
     ['Maduración de Ostwald','Material difunde de gotas pequeñas a grandes','No','Agente atrapador insoluble en la fase continua. <b>No</b> más surfactante']]}},
   {p:['La clave diagnóstica que se pregunta: <b>si al agitar se recupera, fue cremado o floculación</b>; si no, hubo coalescencia o maduración.']},
   {deep:{t:'Emulsión, nanoemulsión y microemulsión',b:[
     {tabla:{th:['','Tamaño','Aspecto','Termodinámica'],tr:[
       ['Emulsión','1–100 µm','Lechosa','Inestable, requiere energía'],
       ['Nanoemulsión','20–200 nm','Translúcida','Inestable pero cinética muy lenta; requiere energía alta'],
       ['Microemulsión','5–50 nm','Transparente','<b>Estable</b>, se forma espontáneamente']]}},
     {p:['El nombre es históricamente desafortunado: la <b>microemulsión tiene gotas más pequeñas</b> que la nanoemulsión, y ese contraste es exactamente lo que explota el distractor. La distinción que importa es termodinámica: la microemulsión se forma sola y no se separa, a costa de concentraciones altas de surfactante y normalmente un cosurfactante.']}
   ]}}
  ,
   {form:[
 ['HLB<sub>mezcla</sub> = Σ w<sub>i</sub>·HLB<sub>i</sub>','<b>HLB de una mezcla</b>: promedio ponderado por <b>fracción másica</b>.','w son fracciones másicas que suman 1'],
 ['HLB 3–6 → A/Ac · 8–18 → Ac/A','<b>Guía de selección</b>. 7–9 humectante, 13–15 detergente, 15–18 solubilizante.',''],
 ['Regla de Bancroft','La fase en la que el surfactante es <b>más soluble</b> acaba siendo la fase <b>continua</b>.',''],
 ['v = 2r²(ρ<sub>p</sub> − ρ<sub>f</sub>)g / (9η)','<b>Ley de Stokes</b>: velocidad de cremado o sedimentación. Va con el <b>cuadrado</b> del radio.','v en m/s, η en Pa·s'],
 ['PEC = v<sub>surfactante</sub>/(a₀·l<sub>c</sub>)','<b>Parámetro de empaquetamiento crítico</b>: &lt;1/3 micelas esféricas, 1/2–1 bicapas, &gt;1 micelas inversas.','adimensional'],
 ['ΔG = γΔA − TΔS','<b>Por qué una emulsión es inestable</b>: crear área cuesta energía y nada la compensa salvo la entropía de mezclado, que es pequeña.','']
]},
   {prob:{t:'Formular la mezcla de surfactantes y predecir la vida de anaquel',
 d:'Se requiere una emulsión de aceite en agua con HLB de 12.0. Disponibles: Span 80 (HLB 4.3) y Tween 80 (HLB 15.0). La fase dispersa son gotas de 2.0 µm de aceite, ρ = 910 kg/m³, en agua de ρ = 1000 kg/m³ y η = 1.0×10⁻³ Pa·s. El frasco mide 10 cm de alto.',
 p:['Sea w la fracción másica de Tween 80: 12.0 = 15.0w + 4.3(1 − w) = 4.3 + 10.7w.',
    'w = (12.0 − 4.3)/10.7 = <b>0.720</b>. Es decir <b>72 % de Tween 80 y 28 % de Span 80</b> en masa.',
    'Coherencia: HLB 12 cae en la zona de 8 a 18, que corresponde a aceite en agua, justo lo pedido.',
    'Velocidad de cremado por Stokes: v = 2(1.0×10⁻⁶)²(910 − 1000)(9.81)/(9 × 1.0×10⁻³).',
    'v = 2 × 1.0×10⁻¹² × (−90) × 9.81/9.0×10⁻³ = −1.766×10⁻⁹/9.0×10⁻³ = <b>−1.96×10⁻⁷ m/s</b>. El signo negativo indica ascenso: es <b>cremado</b>, no sedimentación.',
    'Tiempo en recorrer los 10 cm: t = 0.10/1.96×10⁻⁷ = 5.1×10⁵ s ≈ <b>5.9 días</b>.'],
 r:'72:28 de Tween 80 y Span 80, y una capa de crema visible en unos seis días si no se hace nada más.',
 x:'La velocidad va con <b>r²</b>: reducir las gotas de 2.0 a 0.2 µm multiplica el tiempo por cien, pasando de seis días a casi dos años. Esa es la razón real de homogeneizar a alta presión, y es más eficaz que espesar la fase continua, que solo actúa de forma lineal sobre η.'}}]},
  {t:'Del compuesto al fármaco',b:[
   {p:['La <b>ley de Stokes</b> gobierna el cremado: la velocidad es proporcional al cuadrado del radio y a la diferencia de densidades, e inversamente proporcional a la viscosidad de la fase continua. Por eso reducir el radio a la mitad baja la velocidad a la <b>cuarta parte</b>, y homogeneizar más fino es la primera medida contra la separación.']},
   {p:['La misma matemática otra vez: la ocupación de receptor, Michaelis-Menten y la isoterma de Langmuir son <b>la misma hipérbola de saturación</b>. <b>IC50 menor significa mayor potencia</b>, y conviene no confundir potencia con eficacia.']},
   {p:['Que funcione no basta: hay que llegar. Eso es ADME, y la regla de los cinco de <b>Lipinski</b> es una heurística estadística sobre <b>absorción oral pasiva</b>: más de 5 donadores de puente, más de 10 aceptores, masa mayor de 500 Da o logP mayor de 5. Una violación suele pasar; dos o más predicen problemas.']},
   {ul:['No es un criterio de aprobación ni una predicción individual, y hay fármacos importantes que la violan.',
        'No aplica a compuestos que entran por transportadores activos, ni a la vía intravenosa, ni a biológicos como anticuerpos.',
        '<b>Encapsular cambia las reglas</b>: quien atraviesa las barreras ya no es la molécula sino el transportador. Un compuesto descartable por Lipinski puede ser viable en una nanopartícula lipídica.']},
   {p:['La nanomedicina resuelve tres problemas concretos: <b>solubilidad</b> (el uso más extendido y sólido), <b>farmacocinética</b> (por encima del corte de filtración glomerular de unos 6 nm y con PEG que reduce opsonización, el tiempo de circulación crece mucho) y <b>distribución</b>, que es el más ambicioso y el más discutido.']},
   {p:['En farmacocinética, el <b>corte de filtración glomerular</b> ronda los 6 nm: por debajo de ese tamaño la partícula pasa directamente a la orina y se elimina en minutos. Aumentar el tamaño o recubrir con polietilenglicol prolonga la circulación, que es el segundo problema que resuelve la nanomedicina.']},
   {p:['Y el concepto que más cambia la forma de razonar: <b>la célula no ve tu nanopartícula, ve su corona proteica</b>. En milisegundos el objeto queda recubierto de proteínas plasmáticas, así que su identidad biológica difiere de la sintética y un ligando de direccionamiento cuidadosamente injertado puede quedar enterrado. Eso explica buena parte de la brecha entre resultados in vitro, con poca proteína en el medio, y resultados in vivo. El PEG reduce la corona, no la elimina: su función real es ralentizar el reconocimiento, no volver la partícula invisible.']},
   {p:['Sobre el efecto <b>EPR</b>, conviene poder expresar el matiz: es direccionamiento <b>pasivo</b>, bien documentado en modelos murinos, y su magnitud y consistencia en tumores humanos es objeto de debate considerable en la literatura. Los productos aprobados basan buena parte de su beneficio en <b>reducir toxicidad</b> más que en multiplicar eficacia.']}
  ,
   {form:[
 ['Masa &lt; 500 Da · logP &lt; 5 · donadores H &lt; 5 · aceptores H &lt; 10','<b>Regla de cinco de Lipinski</b>. Es heurística sobre <b>absorción oral pasiva</b>, no sobre toxicidad.',''],
 ['logP = log([soluto]<sub>octanol</sub>/[soluto]<sub>agua</sub>)','<b>Lipofilia</b>. logP muy alto significa mala solubilidad acuosa; muy bajo, mala permeación de membrana.','adimensional'],
 ['IC<sub>50</sub>: menor valor, mayor <b>potencia</b>','No confundir potencia con <b>eficacia</b>, que es el efecto máximo alcanzable.','en M o nM'],
 ['IT = DL<sub>50</sub> / DE<sub>50</sub>','<b>Índice terapéutico</b>. Cuanto mayor, más margen entre dosis eficaz y dosis tóxica.','adimensional'],
 ['EPR: acumulación pasiva en tumor','Efecto de <b>permeabilidad y retención aumentadas</b>; la ventana útil está entre 10 y 200 nm.',''],
 ['t<sub>1/2</sub> = 0.693·V<sub>d</sub>/Cl','<b>Vida media</b> de eliminación, con volumen de distribución y aclaramiento.','']
]}]},
  {t:'Diseño de producto, innovación y Design Thinking',b:[
   {p:['<b>Innovación</b> es la creación de un producto o servicio nuevo <b>y viable</b> que resuelve un problema real. Las tres condiciones importan: algo nuevo que no resuelve nada es una curiosidad, algo que resuelve pero no es viable es un prototipo, y algo viable que ya existía no es innovación.']},
   {p:['El <b>diseño de un producto</b> abarca entender la necesidad, generar y seleccionar conceptos, especificar, prototipar, validar con usuarios e iterar. Lo que <b>no</b> le corresponde son las actividades de operación rutinaria una vez el producto ya está definido, como la producción en serie o la distribución.']},
   {p:['Entre los <b>factores de éxito</b> al diseñar e innovar están entender al usuario real, la diferenciación frente a lo existente, la factibilidad técnica, el encaje con las capacidades de la organización y el momento de entrada al mercado. No lo es, en cambio, la mera sofisticación tecnológica por sí misma: un producto más complejo no es por ello mejor recibido.']},
   {p:['Una <b>megatendencia</b> es una dirección que toman simultáneamente varios aspectos de la sociedad —tecnología, sistemas de producción, nuevos productos, preferencias de consumo, comportamientos— cuyo impacto es perceptible para un segmento importante de la sociedad durante un periodo largo. No es una moda pasajera ni un cambio sectorial aislado: lo que la define es la <b>simultaneidad</b> entre ámbitos y la <b>persistencia</b> en el tiempo.']},
   {p:['El <b>Design Thinking</b> es una metodología de diseño que proporciona un enfoque <b>basado en soluciones</b> para resolver problemáticas, centrado en las personas y marcadamente iterativo. Se recorre en cinco fases, y conviene no confundirlas:']},
   {ol:['<b>Empatizar</b>: comprender a la persona usuaria en profundidad, sus motivaciones y frustraciones.',
        '<b>Observación</b>: ver el problema en su <b>ambiente real</b>. Su valor está precisamente ahí: las personas no siempre saben o dicen lo que hacen, y el contexto revela restricciones, apaños y comportamientos que una entrevista fuera de sitio nunca sacaría.',
        '<b>Definir</b>: sintetizar lo observado en un enunciado de problema accionable.',
        '<b>Idear</b>: generar el mayor número de alternativas antes de converger.',
        '<b>Prototipar y probar</b>: construir rápido y barato para aprender, y volver a empezar con lo aprendido.']},
   {p:['Y el <b>TRL</b> mide grado de madurez, no calidad ni superioridad. Un producto en <b>TRL 3</b> apenas tiene prueba de concepto experimental: está lejos de su madurez máxima, que es el 9. Afirmar lo contrario es falso, y es una pregunta de verdadero o falso que aparece tal cual.']}
  ]},
  {t:'Riesgo, regulación y ética',b:[
   {p:['Existen dos filosofías regulatorias opuestas y conviene saber cuál se está aplicando, porque invierten la carga de la prueba.']},
   {tabla:{th:['Modelo','Supuesto de partida','Quién prueba qué'],tr:[
     ['<b>Bajo o no riesgo</b>','Asume que <b>no hay riesgo</b> hasta que se demuestre lo contrario','El regulador debe probar el daño para restringir'],
     ['<b>Precautorio</b>','Asume que puede haber riesgo mientras no se demuestre seguridad','El fabricante debe probar la seguridad para comercializar']]}},
   {p:['La diferencia es decisiva para un material nuevo sin historial toxicológico: bajo el primer modelo entra al mercado y bajo el segundo no. Y conecta con el principio que ya vimos: <b>ausencia de evidencia de daño no es evidencia de ausencia de daño</b>.']},
   {p:['Sobre cuándo es <b>ética y técnicamente aceptable</b> incorporar nanotecnología a un producto comercial, el criterio es que aporte una función que de otro modo no se consigue, o que mejore de forma demostrable el desempeño, la seguridad o el impacto ambiental, siempre con caracterización y evaluación de riesgo proporcionadas al uso. No lo es usarla como argumento de marketing sin función real, ni para sustituir una solución convencional igual de buena introduciendo incertidumbre toxicológica nueva.']},
   {p:['Y la nanoescala, recordemos, <b>no crea una categoría regulatoria propia</b> en la mayoría de jurisdicciones: el producto se regula por su uso previsto, con requisitos adicionales de caracterización.']}
  ,
   {form:[
 ['Riesgo = Peligro × Exposición','<b>Ecuación básica del riesgo</b>: un material muy peligroso sin vía de exposición representa riesgo bajo.',''],
 ['Jerarquía de controles','1 eliminar · 2 sustituir · 3 <b>ingeniería</b> · 4 administrativo · 5 EPP. El EPP es el último recurso, no el primero.',''],
 ['NOAEL y LOAEL','Dosis <b>sin</b> efecto adverso observado y dosis mínima <b>con</b> efecto observado, base del cálculo de límites.','en mg/kg·día'],
 ['Dosis en nanomateriales: superficie &gt; masa','La métrica de dosis más predictiva suele ser el <b>área superficial</b> o el número de partículas, no los mg/kg.','']
]}]},
  {t:'Del laboratorio al producto',b:[
   {p:['Una restricción de proceso acaba convirtiéndose en especificación de producto. Si la formulación <b>no tolera autoclave</b>, la vía viable es la filtración estéril, y el filtro estándar de <b>0.22 µm</b> impone entonces un tamaño máximo y una exigencia de no agregarse. El requisito no nació del desempeño sino de la fabricabilidad.']},
   {p:['Un producto no es una síntesis que funcionó. Un caso integrador se estructura en cuatro capas, y el error clásico es quedarse en la primera.']},
   {ol:['<b>Técnica</b>: ¿la evidencia disponible sostiene la afirmación, o hace falta otra medición? No afirmes propiedades que ninguna técnica del caso demostró.',
        '<b>Riesgo</b>: peligros, probabilidad, severidad y controles. En nanotecnología: inhalación de polvos, persistencia ambiental, incertidumbre toxicológica. <b>Ausencia de evidencia de daño no es evidencia de ausencia de daño</b>.',
        '<b>Regulación</b>: depende del uso (dispositivo, medicamento, cosmético, alimento, químico industrial). La nanoescala <b>no crea una categoría regulatoria propia</b> en la mayoría de jurisdicciones: añade requisitos de caracterización.',
        '<b>Valor</b>: quién es el cliente, qué propuesta, cuánto cuesta por unidad a escala y quién paga.']},
   {p:['En <b>regulación</b>, la nanoescala no crea una categoría propia en la mayoría de jurisdicciones: el producto se regula según <b>su uso previsto</b> —dispositivo médico, medicamento, cosmético, alimento o químico industrial— con requisitos adicionales de caracterización. Ni el tamaño de partícula ni el método de síntesis determinan la ruta regulatoria.']},
   {p:['Distinciones que se preguntan tal cual. <b>Peligro</b> es la capacidad intrínseca de causar daño; <b>riesgo</b> es la probabilidad de que ocurra y depende de la <b>exposición</b>. Como el peligro no se negocia, la gestión actúa sobre la exposición, en orden: eliminar o sustituir, controles de ingeniería, controles administrativos y, en último lugar, equipo de protección personal, que es el menos fiable porque depende del comportamiento humano. De ahí la recomendación específica de manipular nanomateriales en suspensión o pasta y no en polvo seco.']},
   {p:['Un <b>punto crítico de control</b> es donde se <b>puede</b> controlar el peligro y es esencial hacerlo, no simplemente donde es importante. La prueba para distinguirlo: si existe una etapa posterior que corrija el fallo, no es crítico. En síntesis biomédica, la nucleación lo es porque fija el tamaño y nada posterior lo corrige. Los límites críticos deben ser numéricos y medibles, no cualitativos.']},
   {p:['La <b>jerarquía de controles</b> ordena las medidas de seguridad por fiabilidad decreciente: eliminar o sustituir el material peligroso, controles de ingeniería (campanas, contención), controles administrativos (procedimientos y formación) y, en último lugar, equipo de protección personal, que es el menos fiable porque depende del comportamiento humano en cada uso. De ahí que ante un nanopolvo de toxicidad desconocida lo prioritario sea <b>manejarlo en suspensión o pasta</b> y no en polvo seco, porque eso elimina la vía de exposición dominante en lugar de solo filtrarla.']},
   {p:['<b>Factible</b> responde «se puede»; <b>viable</b> responde «conviene». Son preguntas distintas y confundirlas arruina un análisis. Y en modelos de negocio hay que saber cuál toca. El <b>lienzo de propuesta de valor</b> (VPC) trabaja solo el encaje entre las tareas y dolores del cliente y lo que el producto alivia, sin entrar en socios ni ingresos. El <b>lienzo de modelo de negocio</b> (BMC) es más amplio e incorpora canales, socios clave, estructura de costos y fuentes de ingreso.']}
  ]}
 ],
 flash:[
  ['Un surfactante de HLB 4: ¿qué emulsión favorece?','Agua en aceite. Es lipófilo y por la regla de Bancroft la fase continua es aquella donde el surfactante se disuelve mejor.'],
  ['HLB de una mezcla de surfactantes','Promedio ponderado por fracción másica: HLB = x₁·HLB₁ + x₂·HLB₂.'],
  ['La emulsión se separa pero al agitar se recupera: ¿qué mecanismo?','Cremado o floculación: las gotas conservan su identidad. La coalescencia y la maduración son irreversibles.'],
  ['¿Cómo se combate la maduración de Ostwald en una emulsión?','Con un componente insoluble en la fase continua que contrarreste osmóticamente. NO con más surfactante: no depende del contacto.'],
  ['Microemulsión frente a nanoemulsión','La microemulsión es termodinámicamente estable y espontánea, y tiene gotas MÁS pequeñas (5–50 nm) que la nanoemulsión (20–200 nm).'],
  ['¿Qué es la corona proteica y por qué importa?','La capa de proteínas plasmáticas que recubre la partícula en milisegundos. Es lo que la célula realmente reconoce, no tu superficie diseñada.'],
  ['¿Para qué sirve realmente el PEG en una nanopartícula?','Reduce la opsonización y prolonga la circulación. Ralentiza el reconocimiento; no vuelve la partícula invisible ni aporta direccionamiento.'],
  ['Afirmación defendible sobre el efecto EPR','Direccionamiento pasivo bien documentado en modelos murinos; su magnitud y consistencia en tumores humanos está en debate.'],
  ['Peligro frente a riesgo','Peligro es la capacidad intrínseca de dañar. Riesgo es la probabilidad de que ocurra, y depende de la exposición.'],
  ['Jerarquía de controles de seguridad','Eliminar o sustituir, controles de ingeniería, controles administrativos y, al final, equipo de protección personal.'],
  ['Prueba para identificar un punto crítico de control','Si una etapa posterior puede corregir el fallo, no es crítico. Los límites deben ser numéricos y medibles.'],
  ['Factible frente a viable','Factible: se puede hacer. Viable: conviene hacerlo. Son preguntas distintas.']
 ]}
);
</script>
