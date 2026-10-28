<script>
G.push(
/* ===================== M11 ===================== */
{id:'M11',nom:'Electroquímica',sesion:'Tema transversal del examen',
 sub:'Celdas, Nernst, Faraday, cinética de electrodo, voltamperometría, impedancia, corrosión y almacenamiento. Conecta el análisis instrumental de M2, los sensores de M8 y la síntesis de M6.',
 sec:[

  {t:'La celda: dos semirreacciones y un convenio que no cambia',b:[
   {fig:FIG.celda_galv},
   {p:['Toda la electroquímica es una misma reacción redox partida en dos mitades y obligada a ocurrir en sitios separados, de modo que los electrones tengan que recorrer un cable. Esa separación es lo único que distingue una reacción redox en un vaso de una celda electroquímica: el cable convierte la transferencia de electrones en <b>corriente medible y aprovechable</b>.']},
   {p:['La regla que nunca cambia: <b>la oxidación ocurre en el ánodo y la reducción en el cátodo</b>. No depende del tipo de celda, de la polaridad ni de quién la conecte. Lo que sí cambia es el <b>signo</b> del electrodo, y es ahí donde se concentran los errores del examen.']},
   {tabla:{th:['','Galvánica (espontánea)','Electrolítica (forzada)'],tr:[
     ['ΔG','negativo','positivo'],
     ['E_celda','positivo','negativo'],
     ['Ánodo','polo <b>negativo</b>','polo <b>positivo</b>'],
     ['Cátodo','polo <b>positivo</b>','polo <b>negativo</b>'],
     ['Ejemplo','pila, batería descargándose','electrólisis, batería cargándose']
   ]}},
   {p:['La razón del cambio de signo es sencilla: en la galvánica el ánodo acumula electrones porque la oxidación los libera espontáneamente, y por eso es negativo. En la electrolítica una fuente externa <b>arranca</b> electrones del ánodo para forzar la oxidación, de modo que lo mantiene positivo. En las dos sale oxidación del ánodo.']},
   {p:['El <b>puente salino</b> no transporta electrones: cierra el circuito interno moviendo iones para que ninguna de las dos semiceldas acumule carga neta. Los <b>aniones migran hacia el ánodo</b>, donde se están generando cationes, y los cationes hacia el cátodo, donde se están consumiendo. Sin él la celda se polariza y la corriente cesa en segundos.']},
   {p:['La <b>notación de celda</b> se escribe siempre con el ánodo a la izquierda: Zn | Zn²⁺(1 M) ‖ Cu²⁺(1 M) | Cu. La barra sencilla es una interfaz entre fases y la doble es el puente salino. Leer la notación al revés invierte el signo del potencial y es un error que el examen castiga con un distractor exacto.']},
   {deep:{t:'Por qué no se puede medir el potencial de un solo electrodo',b:[
    {p:['Un potencial es una <b>diferencia</b> de energía potencial por unidad de carga entre dos puntos, de modo que medir el de un único electrodo exigiría conectar el otro borne del voltímetro a… otro electrodo. Cualquier medida es inevitablemente la de una celda completa.']},
    {p:['La solución es un convenio: se asigna arbitrariamente <b>E° = 0.000 V al electrodo estándar de hidrógeno</b> (SHE), que es platino platinado en H⁺ de actividad 1 bajo H₂ a 1 bar y 25 °C. Todos los potenciales estándar tabulados son potenciales de celda contra ese electrodo.']},
    {p:['En la práctica el SHE es incómodo, así que se trabaja con electrodos de referencia secundarios: <b>Ag/AgCl</b> (+0.197 V contra SHE en KCl saturado) o <b>calomel saturado</b> (+0.241 V). De ahí que un potencial medido deba reportarse siempre indicando la referencia, y que convertir entre escalas sea sumar o restar esa constante.']},
    {p:['Y de ahí la <b>celda de tres electrodos</b>: el potencial se controla entre el electrodo de trabajo y la referencia, por la que no circula corriente apreciable, mientras la corriente se cierra por un contraelectrodo. Si solo hubiera dos, la caída óhmica y la polarización de la referencia contaminarían el potencial controlado.']}
   ]}}
  ]},

  {t:'Potencial estándar, Nernst y lo que decide la espontaneidad',b:[
   {p:['Los <b>potenciales estándar de reducción</b> se tabulan todos como reducciones. Para combinar dos semirreacciones en una celda: E°_celda = E°_cátodo − E°_ánodo, usando ambos valores tal como aparecen en la tabla. <b>No se invierte el signo ni se multiplica por los coeficientes</b>, porque el potencial es una magnitud intensiva: duplicar la reacción duplica los moles de electrones y la energía, pero no el voltaje.']},
   {eq:EQ.gibbsE},
   {p:['Esa ecuación es el puente entre termodinámica y electroquímica, y responde la pregunta de la espontaneidad: <b>E°_celda positivo equivale a ΔG° negativo</b>. También conecta con el equilibrio, porque ΔG° = −RT ln K implica ln K = nFE°/RT: una diferencia de potencial de unas décimas de volt corresponde a constantes de equilibrio enormes.']},
   {p:['El agente con <b>mayor potencial de reducción se reduce</b>, y obliga al otro a oxidarse. Así se predice si un metal desplaza a otro de su sal, si un oxidante ataca a un sustrato o si una pareja puede funcionar como batería.']},
   {eq:EQ.nernst},
   {p:['La <b>ecuación de Nernst</b> corrige el potencial por las concentraciones reales. El coeficiente 0.0592 V sale de 2.303·RT/F y <b>solo vale a 25 °C</b>: a 37 °C sube a 0.0616 V. Usar el valor de 25 °C en una medida fisiológica introduce un sesgo sistemático, y calcular con temperatura en grados Celsius en lugar de kelvin es el error numérico más frecuente del tema.']},
   {p:['De Nernst sale directamente el principio de los <b>electrodos selectivos de ion</b>, incluido el de pH: el potencial de membrana varía linealmente con el logaritmo de la actividad del ion, con pendiente de 59 mV por década para un ion monovalente y de 29.6 mV para uno divalente. Un electrodo que reporte 45 mV por década está deteriorado y requiere recalibración o reemplazo.']},
   {deep:{t:'Actividad contra concentración, y por qué importa en medio salino',b:[
    {p:['Nernst está escrita en <b>actividades</b>, no en concentraciones. La actividad es a = γ·c, donde el coeficiente γ recoge la desviación por interacciones electrostáticas entre iones. En disoluciones muy diluidas γ tiende a 1 y ambas magnitudes coinciden, de modo que la aproximación es buena.']},
    {p:['En medio salino concentrado γ cae apreciablemente por debajo de 1, así que la actividad es menor que la concentración y el potencial medido se desvía. Por eso la calibración de electrodos se hace con patrones de <b>fuerza iónica ajustada</b>, añadiendo un electrolito inerte en exceso a patrones y muestras para que γ sea el mismo en todos.']},
    {p:['La ley límite de Debye-Hückel describe esa caída de γ con la raíz de la fuerza iónica, y es la misma física que comprime la doble capa eléctrica y desestabiliza una suspensión coloidal, el fenómeno de M5. Un solo concepto, dos consecuencias que el examen pregunta por separado.']}
   ]}}
  ,
   {form:[
 ['E°<sub>celda</sub> = E°<sub>cátodo</sub> − E°<sub>ánodo</sub>','Ambos tomados de la tabla como <b>reducción</b>, sin invertir signos ni multiplicar por coeficientes.','en V'],
 ['ΔG° = −n·F·E°','<b>Puente con la termodinámica</b>. E° positivo equivale a ΔG° negativo.','F = 96 485 C/mol'],
 ['ln K = n·F·E° / (R·T)','Relación entre <b>potencial y constante de equilibrio</b>.',''],
 ['E = E° − (0.0592/n)·log Q','<b>Nernst a 25 °C</b>. El coeficiente es 2.303·RT/F y <b>solo vale a 25 °C</b>: 0.0616 a 37 °C.',''],
 ['Pendiente = 59.2/n mV por década','<b>Respuesta nernstiana</b> de un electrodo selectivo: 59 mV para monovalente, 29.6 para divalente.',''],
 ['Ag/AgCl: +0.197 V · calomel sat.: +0.241 V','<b>Conversión entre referencias</b>, ambas frente al electrodo estándar de hidrógeno.','']
]},
   {prob:{t:'Calcular E, ΔG y K, y luego corregir por concentración',
 d:'Celda Zn | Zn²⁺ ‖ Cu²⁺ | Cu. E°(Zn²⁺/Zn) = −0.76 V y E°(Cu²⁺/Cu) = +0.34 V. Se opera con [Zn²⁺] = 1.00 M y [Cu²⁺] = 1.0×10⁻⁴ M, a 25 °C.',
 p:['Potencial estándar: E° = E°<sub>cátodo</sub> − E°<sub>ánodo</sub> = 0.34 − (−0.76) = <b>+1.10 V</b>. Positiva: galvánica.',
    'Energía libre estándar: ΔG° = −nFE° = −2 × 96 485 × 1.10 = <b>−212 267 J/mol</b>, unos −212 kJ/mol.',
    'Constante de equilibrio: ln K = nFE°/RT = 212 267/(8.314 × 298.15) = 85.63 ⇒ K = e^85.63 ≈ <b>1.6×10³⁷</b>. La reacción va prácticamente hasta el final.',
    'Cociente de reacción en las condiciones dadas: Q = [Zn²⁺]/[Cu²⁺] = 1.00/1.0×10⁻⁴ = <b>1.0×10⁴</b>.',
    'Nernst: E = 1.10 − (0.0592/2)·log(1.0×10⁴) = 1.10 − 0.0296 × 4 = 1.10 − 0.118 = <b>+0.982 V</b>.',
    'Pese a agotar el cobre cuatro órdenes de magnitud, el potencial solo cayó 0.12 V: el logaritmo aplasta el efecto de la concentración.'],
 r:'E° = 1.10 V, ΔG° = −212 kJ/mol, K ≈ 10³⁷, y en las condiciones reales E = 0.982 V.',
 x:'Dos errores clásicos. Primero, <b>sumar en vez de restar</b> los potenciales, que da 0.42 V. Segundo, olvidar <b>dividir entre n</b> en Nernst, que aquí duplicaría la corrección. Y nota que un voltaje de apenas 1.1 V corresponde a una K de 10³⁷: el potencial es una medida muy comprimida de la fuerza impulsora.'}}]},

  {t:'Electrólisis y las leyes de Faraday',b:[
   {p:['La electrólisis fuerza una reacción no espontánea aplicando un potencial externo mayor que el de la celda invertida. Es la base del refinado de metales, de la producción de cloro y sosa, de la obtención de aluminio por el proceso Hall-Héroult, del anodizado y de la electrodeposición de recubrimientos.']},
   {eq:EQ.faraday},
   {p:['Las <b>leyes de Faraday</b> dicen que la masa depositada es proporcional a la carga que pasó, y que para la misma carga las masas de distintas sustancias están en la razón de sus equivalentes. El cálculo tiene siempre la misma estructura: carga, luego moles de electrones, luego moles de sustancia, luego masa. El <b>paso que más se falla es n</b>, el número de electrones por ion: depositar un mol de cobre desde Cu²⁺ exige dos faradays, y un mol de aluminio desde Al³⁺ exige tres.']},
   {p:['La <b>eficiencia faradaica</b> es la fracción de la carga que fue a parar al producto buscado. Rara vez es del 100 %, porque compiten reacciones paralelas: en medio acuoso, la más habitual es el <b>desprendimiento de hidrógeno</b> en el cátodo y de oxígeno en el ánodo. Una eficiencia del 85 % significa que el 15 % de la energía eléctrica se gastó en electrolizar agua.']},
   {p:['El <b>sobrepotencial</b> explica por qué la electrólisis real siempre cuesta más voltaje que el termodinámico. La descomposición del agua requiere 1.23 V en teoría, pero en la práctica hacen falta 1.8 a 2.0 V por la cinética lenta de la evolución de oxígeno, la caída óhmica del electrolito y las pérdidas por transporte.']},
   {deep:{t:'Por qué el agua no siempre se electroliza primero',b:[
    {p:['En una disolución acuosa de NaCl concentrada, la termodinámica predice oxidación de agua a oxígeno (1.23 V) antes que oxidación de cloruro a cloro (1.36 V). Sin embargo, industrialmente se obtiene <b>cloro</b>, no oxígeno.']},
    {p:['La razón es cinética: la evolución de oxígeno tiene un sobrepotencial muy alto en los ánodos usados, mientras que la de cloro lo tiene bajo. El producto real lo decide la suma del potencial termodinámico más el sobrepotencial, no el potencial termodinámico solo. Es el ejemplo canónico de que en electroquímica la <b>cinética puede invertir el orden que predice la termodinámica</b>.']},
    {p:['El mismo razonamiento explica por qué se puede depositar zinc desde disolución acuosa pese a que su potencial estaría por debajo del del hidrógeno: el sobrepotencial del hidrógeno sobre zinc es muy alto, y eso abre la ventana.']}
   ]}}
  ,
   {form:[
 ['Q = I · t','<b>Carga</b> que circula a corriente constante.','Q en C, I en A, t en s'],
 ['n<sub>e⁻</sub> = Q / F','<b>Moles de electrones</b>. F = 96 485 C/mol.',''],
 ['m = (I·t·M) / (n·F)','<b>Ley de Faraday</b> completa. El paso que más se falla es <b>n</b>, los electrones por ion.','m en g, M en g/mol'],
 ['η<sub>F</sub> = m<sub>real</sub> / m<sub>teórica</sub> × 100','<b>Eficiencia faradaica</b>. En medio acuoso la pérdida suele ser evolución de hidrógeno.','en %'],
 ['V<sub>celda</sub> = E<sub>termo</sub> + |η<sub>a</sub>| + |η<sub>c</sub>| + iR','<b>Voltaje real</b> de una electrólisis: el termodinámico más todos los sobrepotenciales.','en V'],
 ['Espesor = m / (ρ·A)','<b>Espesor de un recubrimiento</b> electrodepositado.','']
]},
   {prob:{t:'Diseñar un niquelado: tiempo, corriente y energía',
 d:'Se quiere depositar níquel de 25 µm de espesor sobre una pieza de 150 cm² a partir de Ni²⁺. ρ(Ni) = 8.90 g/cm³, M = 58.69 g/mol. El baño opera a 4.0 A con eficiencia faradaica del 92 % y el voltaje de celda es de 3.5 V.',
 p:['Volumen del recubrimiento: V = 150 cm² × 25×10⁻⁴ cm = <b>0.375 cm³</b>.',
    'Masa necesaria: m = ρV = 8.90 × 0.375 = <b>3.338 g</b>.',
    'Moles de níquel: 3.338/58.69 = <b>0.05687 mol</b>.',
    'Carga teórica: Q = n·F·mol = 2 × 96 485 × 0.05687 = <b>10 974 C</b>.',
    'Carga real con 92 % de eficiencia: Q<sub>real</sub> = 10 974/0.92 = <b>11 928 C</b>.',
    'Tiempo: t = Q/I = 11 928/4.0 = 2982 s = <b>49.7 minutos</b>.',
    'Energía consumida: E = V·I·t = 3.5 × 4.0 × 2982 = 41 748 J = <b>11.6 Wh</b>.'],
 r:'Unos 50 minutos a 4.0 A, con un consumo de 11.6 Wh para 3.34 g de níquel.',
 x:'Tres puntos de fallo. Olvidar <b>n = 2</b> da la mitad del tiempo. <b>Dividir</b> entre la eficiencia, no multiplicar: si solo el 92 % de la carga sirve, hace falta <b>más</b> carga. Y el espesor es nominal y uniforme solo si la distribución de corriente lo es: en aristas y puntas la densidad de corriente es mayor y el depósito sale más grueso.'}}]},

  {t:'Cinética de electrodo: Butler-Volmer, sobrepotencial y Tafel',b:[
   {fig:FIG.tafel},
   {p:['La termodinámica dice si una reacción de electrodo puede ocurrir; la cinética dice a qué velocidad, y en electroquímica la velocidad se mide como <b>densidad de corriente</b> en A/cm². El parámetro central es la <b>densidad de corriente de intercambio i₀</b>: la corriente que circula en los dos sentidos cuando el electrodo está en equilibrio y la corriente neta es cero.']},
   {p:['Un i₀ grande significa una reacción intrínsecamente rápida. Para la evolución de hidrógeno, i₀ sobre platino es del orden de 10⁻³ A/cm² y sobre mercurio de 10⁻¹² A/cm²: nueve órdenes de magnitud de diferencia explican por qué el platino es el catalizador de referencia y por qué los electrodos de mercurio tienen una ventana catódica tan amplia.']},
   {eq:EQ.tafel},
   {p:['El <b>sobrepotencial η</b> es el exceso de potencial sobre el de equilibrio necesario para que circule una corriente dada: es energía que se paga y no se recupera. Se descompone en tres contribuciones que conviene distinguir porque se corrigen de forma distinta.']},
   {ul:['<b>De activación</b>: la barrera de la transferencia de electrones. Se reduce con un mejor <b>electrocatalizador</b>.',
        '<b>De concentración</b>: el reactivo se agota junto al electrodo. Se reduce <b>agitando</b> o aumentando la concentración.',
        '<b>Óhmico (iR)</b>: la caída de potencial en el electrolito. Se reduce subiendo la <b>conductividad</b>, acercando la referencia o compensando por software.']},
   {p:['La <b>corriente límite</b> aparece cuando el transporte de materia no puede reponer el reactivo tan rápido como se consume: a partir de ahí subir el potencial ya no aumenta la corriente. Es proporcional a la concentración del analito, y en eso se basa toda la amperometría cuantitativa, incluido el sensor de glucosa.']},
   {deep:{t:'La ecuación de Butler-Volmer y sus dos límites',b:[
    {p:['La relación completa entre corriente y sobrepotencial es i = i₀·[exp(αnFη/RT) − exp(−(1−α)nFη/RT)], donde α es el <b>coeficiente de transferencia</b>, típicamente cercano a 0.5, que reparte el efecto del potencial entre las barreras directa e inversa.']},
    {p:['Para <b>η pequeño</b> (menos de unos 10 mV) las exponenciales se linealizan y queda i ≈ i₀·nFη/RT: el electrodo se comporta como una resistencia, llamada resistencia de transferencia de carga R_ct, inversamente proporcional a i₀. Es exactamente lo que mide la impedancia.']},
    {p:['Para <b>η grande</b> un término domina sobre el otro y queda la <b>ecuación de Tafel</b>, lineal en log|i|. La pendiente de Tafel permite inferir el paso determinante del mecanismo: en evolución de hidrógeno, 30 mV/década apunta a un mecanismo distinto que 120 mV/década.']}
   ]}}
  ,
   {form:[
 ['i = i₀[exp(αnFη/RT) − exp(−(1−α)nFη/RT)]','<b>Butler-Volmer</b>: la relación completa entre corriente y sobrepotencial.','α ≈ 0.5 típicamente'],
 ['η = E − E<sub>eq</sub>','<b>Sobrepotencial</b>: el exceso sobre el equilibrio. Energía que se paga y no se recupera.','en V'],
 ['η = a + b·log|i|','<b>Tafel</b> para η grande. La pendiente b informa del mecanismo; la extrapolación a η = 0 da i₀.','b en V/década'],
 ['R<sub>ct</sub> = RT / (n·F·i₀)','<b>Resistencia de transferencia de carga</b> en el límite de η pequeño. Es el diámetro del semicírculo en Nyquist.','en Ω'],
 ['i<sub>lim</sub> = n·F·A·D·C/δ','<b>Corriente límite</b> por transporte de materia; se eleva agitando, que adelgaza δ.','']
]}]},

  {t:'Voltamperometría cíclica: cómo se lee un voltamperograma',b:[
   {fig:FIG.cv},
   {p:['La voltamperometría cíclica barre el potencial de forma triangular y registra la corriente. Es la técnica de diagnóstico por excelencia porque un solo experimento entrega potenciales formales, reversibilidad, número de electrones, coeficiente de difusión y la existencia de reacciones químicas acopladas.']},
   {eq:EQ.randles},
   {ul:['<b>i_p ∝ √v</b>: la especie <b>difunde</b> desde el seno de la disolución. Es el caso habitual.',
        '<b>i_p ∝ v</b>: la especie está <b>adsorbida</b> sobre el electrodo y no necesita difundir. Diagnóstico directo.',
        '<b>ΔE_p ≈ 59/n mV</b> e independiente de v: proceso <b>reversible</b>, con transferencia rápida.',
        '<b>ΔE_p crece con v</b>: proceso <b>cuasirreversible</b>; la transferencia compite con el barrido.',
        '<b>Falta el pico de vuelta</b>: el producto se consumió en una reacción química acoplada.']},
   {p:['El <b>potencial formal</b> se estima como el punto medio entre los dos picos, E°′ ≈ (E_pa + E_pc)/2, y es el dato que se compara con la tabla de potenciales estándar. La <b>ventana de potencial</b> accesible la fijan el disolvente y el electrodo: fuera de ella domina la descomposición del medio y los picos del analito quedan enterrados.']},
   {p:['Las técnicas de <b>pulso</b>, como la voltamperometría diferencial de pulso, mejoran el límite de detección en dos o tres órdenes porque muestrean la corriente al final del pulso, cuando la corriente capacitiva ya decayó exponencialmente y la faradaica, que decae como 1/√t, todavía sobrevive. La discriminación no es del analito: es de la <b>cinética de decaimiento</b> de los dos tipos de corriente.']},
   {deep:{t:'Corriente faradaica contra corriente capacitiva',b:[
    {p:['La <b>corriente faradaica</b> proviene de la transferencia de electrones a través de la interfaz, es decir de la reacción, y es la que lleva información analítica. La <b>capacitiva</b> o de carga proviene de reorganizar iones en la doble capa, como en un condensador, y es ruido de fondo.']},
    {p:['La capacitiva escala linealmente con la velocidad de barrido (i_c = C_dl·A·v) y la faradaica con la raíz (i_p ∝ √v). De ahí que la razón señal-ruido <b>empeore al barrer más rápido</b>, y que la voltamperometría cíclica rápida sea mala técnica cuantitativa aunque sea excelente como diagnóstico mecanístico.']},
    {p:['El área bajo un pico, convertida a carga, da los moles que reaccionaron por la ley de Faraday. Esa es la base de la <b>culombimetría</b>, el único método electroquímico absoluto: no necesita calibración porque la constante de Faraday es conocida.']}
   ]}}
  ,
   {form:[
 ['i<sub>p</sub> = 2.69×10⁵·n^(3/2)·A·D^(1/2)·C·v^(1/2)','<b>Randles-Ševčík</b> a 25 °C, para especie que <b>difunde</b>.','A en cm², D en cm²/s, C en mol/cm³, v en V/s'],
 ['i<sub>p</sub> ∝ v (especie adsorbida)','Diagnóstico directo: representar i<sub>p</sub> contra v y contra √v y ver cuál da recta.',''],
 ['ΔE<sub>p</sub> = |E<sub>pa</sub> − E<sub>pc</sub>| ≈ 59/n mV','<b>Reversibilidad</b>, si además es independiente de la velocidad de barrido.','a 25 °C'],
 ['E°′ ≈ (E<sub>pa</sub> + E<sub>pc</sub>)/2','<b>Potencial formal</b>: el punto medio entre los dos picos.','en V'],
 ['i<sub>c</sub> = C<sub>dl</sub>·A·v','<b>Corriente capacitiva</b>: lineal en v, frente a la faradaica que va con √v. Por eso barrer rápido empeora la señal-ruido.','']
]},
   {prob:{t:'Extraer el coeficiente de difusión de una serie de barridos',
 d:'Electrodo de carbono vítreo de 0.0707 cm² (3.0 mm de diámetro). Analito 1.0 mM con un electrón transferido. Se mide i<sub>p</sub> = 12.6 µA a v = 50 mV/s y 25.2 µA a v = 200 mV/s.',
 p:['Comprueba primero la dependencia: al multiplicar v por 4, i<sub>p</sub> se multiplicó por 2 = √4. Es <b>proporcional a √v</b>, así que la especie <b>difunde</b> y Randles-Ševčík aplica.',
    'Convierte las unidades que pide la ecuación: C = 1.0 mM = 1.0×10⁻³ mol/L = <b>1.0×10⁻⁶ mol/cm³</b>. Ese cambio de L a cm³ es obligatorio.',
    'A v = 0.050 V/s: √v = <b>0.2236 V^(1/2)s^(−1/2)</b>.',
    'Despeja: D^(1/2) = i<sub>p</sub> / (2.69×10⁵·n^(3/2)·A·C·√v).',
    'Denominador: 2.69×10⁵ × 1 × 0.0707 × 1.0×10⁻⁶ × 0.2236 = <b>4.253×10⁻³</b>.',
    'D^(1/2) = 12.6×10⁻⁶ / 4.253×10⁻³ = <b>2.963×10⁻³</b> ⇒ D = <b>8.8×10⁻⁶ cm²/s</b>.'],
 r:'D ≈ 8.8×10⁻⁶ cm²/s, un valor típico de una molécula pequeña en disolución acuosa.',
 x:'La conversión de <b>mol/L a mol/cm³</b> (dividir entre 1000) es el error dominante de este cálculo y desvía el resultado por un factor 10⁶ al estar D elevado al cuadrado. Y antes de aplicar la ecuación hay que <b>verificar</b> que i<sub>p</sub> va con √v: si fuera lineal en v, la especie estaría adsorbida y Randles-Ševčík no sería aplicable.'}}]},

  {t:'Impedancia, doble capa y el circuito equivalente',b:[
   {p:['La espectroscopía de impedancia electroquímica aplica una pequeña perturbación sinusoidal de potencial, de unos 5 a 10 mV, y mide la respuesta en corriente barriendo la frecuencia. La amplitud debe ser pequeña para que el sistema responda de forma <b>lineal</b>, que es la condición que hace válido todo el análisis.']},
   {p:['Los datos se ajustan a un <b>circuito equivalente</b>, y el más simple que funciona es el de Randles: la resistencia del electrolito R_s en serie con el paralelo de la capacitancia de doble capa C_dl y la resistencia de transferencia de carga R_ct, esta última en serie con la impedancia de Warburg que describe la difusión.']},
   {tabla:{th:['Elemento','Qué representa','Dónde se lee en Nyquist'],tr:[
     ['R_s','resistencia del electrolito','corte a alta frecuencia'],
     ['R_ct','barrera de transferencia de carga','diámetro del semicírculo'],
     ['C_dl','reorganización iónica en la interfaz','frecuencia del máximo'],
     ['Warburg','difusión del reactivo','recta a 45° a baja frecuencia']
   ]}},
   {p:['El dato con más valor diagnóstico es <b>R_ct</b>, inversamente proporcional a i₀: un semicírculo pequeño significa transferencia rápida. En un <b>biosensor sin marcaje</b>, la unión del analito bloquea la superficie, R_ct aumenta y el crecimiento del semicírculo es la señal. En <b>corrosión</b>, un R_ct grande indica que el recubrimiento protege; su caída en el tiempo mide el deterioro.']},
   {p:['La <b>doble capa eléctrica</b> es la misma estructura que gobierna la estabilidad coloidal de M5: una capa compacta de Helmholtz de iones específicamente adsorbidos y una capa difusa de Gouy-Chapman que se extiende una <b>longitud de Debye</b>. Subir la fuerza iónica la comprime, lo que en una suspensión significa agregación y en un electrodo significa mayor capacitancia y menor caída óhmica.']}
  ]},

  {t:'Corrosión: la celda que nadie quiso construir',b:[
   {p:['La corrosión es una celda galvánica espontánea que se forma sola sobre un metal: unas zonas actúan de ánodo y se disuelven, otras de cátodo. En medio aireado neutro, la reacción catódica dominante es la <b>reducción de oxígeno</b>, O₂ + 2H₂O + 4e⁻ → 4OH⁻, y no la de protones. De ahí que airear o agitar un medio <b>acelere</b> la corrosión en lugar de frenarla.']},
   {p:['El <b>par galvánico</b> aparece al unir dos metales de potencial distinto: el menos noble se convierte en ánodo y se corroe a velocidad acelerada, tanto más cuanto mayor sea la razón entre el área catódica y la anódica. Un remache de acero en una placa de cobre falla rápido; el mismo remache de cobre en placa de acero dura, porque ahora el área anódica es enorme.']},
   {ul:['<b>Protección catódica por ánodo de sacrificio</b>: se conecta un metal más activo (zinc, magnesio) que se corroe en lugar de la estructura. Es el principio del acero <b>galvanizado</b>, y por eso un rayón en la capa de zinc no inicia la corrosión del acero debajo.',
        '<b>Protección catódica por corriente impresa</b>: una fuente externa mantiene la estructura polarizada negativamente. Se usa en tuberías enterradas y cascos de barco.',
        '<b>Pasivación</b>: una capa de óxido compacta y adherente aísla el metal. Es lo que hace el cromo en el acero inoxidable y el óxido de aluminio en el aluminio.',
        '<b>Inhibidores y recubrimientos</b>: barreras físicas o moléculas que se adsorben y bloquean los sitios activos.']},
   {p:['La diferencia entre un óxido <b>protector</b> y uno que no lo es se cuantifica con la <b>razón de Pilling-Bedworth</b>, el volumen de óxido formado dividido entre el del metal consumido. Por debajo de 1 la capa es porosa y no cubre, como en el magnesio; entre 1 y 2 es compacta y protege, como en el aluminio y el cromo; muy por encima de 2 la capa se agrieta por compresión y se desprende, como en el hierro, cuya herrumbre es permeable y permite que el ataque continúe indefinidamente.']},
   {deep:{t:'Por qué la corrosión nanoestructurada es más rápida',b:[
    {p:['La velocidad de corrosión escala con el <b>área expuesta</b>, y la nanoestructuración multiplica el área por unidad de masa. Una nanopartícula metálica tiene además una fracción enorme de átomos en vértices y aristas, que son sitios de menor coordinación y por tanto más reactivos.']},
    {p:['A eso se añade un término termodinámico: la ecuación de Gibbs-Thomson hace que el potencial de un metal nanoparticulado se desplace, de modo que una nanopartícula es intrínsecamente más fácil de oxidar que el material masivo. Es la misma física que baja el punto de fusión con el tamaño.']},
    {p:['Por eso las nanopartículas metálicas se pasivan en segundos al aire, por eso las de hierro cerovalente usadas en remediación tienen vida útil corta, y por eso se recubren con carbono o con una capa de óxido controlada antes de usarlas.']}
   ]}}
  ]},

  {t:'Almacenamiento, electrocatálisis y síntesis electroquímica',b:[
   {p:['Una <b>batería</b> almacena energía en enlaces químicos y la entrega mediante reacciones faradaicas en el volumen del material; un <b>supercondensador</b> la almacena como separación de carga en la doble capa, sin reacción. De ahí todas sus diferencias prácticas: la batería tiene alta <b>densidad de energía</b> y baja densidad de potencia, y el supercondensador lo contrario, porque cargar una interfaz es mucho más rápido que difundir iones dentro de un sólido.']},
   {tabla:{th:['','Batería de ion litio','Supercondensador'],tr:[
     ['Mecanismo','intercalación faradaica','doble capa (no faradaico)'],
     ['Energía específica','150 a 250 Wh/kg','5 a 10 Wh/kg'],
     ['Potencia específica','baja','muy alta'],
     ['Ciclos de vida','10³ aproximadamente','10⁵ a 10⁶'],
     ['Limitante','difusión en estado sólido','área superficial accesible']
   ]}},
   {p:['En una batería de ion litio la carga y la descarga son procesos de <b>intercalación</b>: el litio entra y sale de la estructura del electrodo sin destruirla. El cátodo aporta el litio y fija el voltaje; el ánodo de grafito lo aloja entre láminas. La capacidad se mide en mAh/g y la <b>tasa C</b> indica en cuánto tiempo se descarga: 1C es una hora, 2C es media.']},
   {p:['Los nanomateriales mejoran ambos dispositivos por la misma razón geométrica: acortan la <b>distancia de difusión en estado sólido</b>, que escala con el cuadrado del tamaño, y multiplican el área de contacto con el electrolito. El costo es también el mismo en ambos: más área significa más reacciones parásitas con el electrolito y una <b>interfase sólido-electrolito</b> más gruesa, que consume litio irreversiblemente y baja la eficiencia del primer ciclo.']},
   {p:['En <b>electrocatálisis</b> el objetivo es bajar el sobrepotencial de reacciones clave: evolución de hidrógeno y de oxígeno para electrólisis de agua, reducción de oxígeno para celdas de combustible, reducción de CO₂ para combustibles sintéticos. La figura de mérito convencional es el sobrepotencial necesario para alcanzar 10 mA/cm², junto con la pendiente de Tafel y la estabilidad en operación continua.']},
   {p:['Como <b>ruta de síntesis</b>, la vía electroquímica tiene una ventaja que ninguna otra iguala: el potencial es un reactivo que se ajusta de forma continua y se apaga instantáneamente, de modo que la fuerza impulsora se controla con precisión milivolt. La <b>electrodeposición</b> produce recubrimientos y nanoestructuras; la <b>anodización</b> del aluminio genera alúmina porosa de poros hexagonales ordenados que se usa como plantilla para crecer nanohilos; la deposición en plantilla da arreglos de nanohilos con diámetro y longitud controlados por el poro y por la carga pasada.']}
  ]}
 ],
 flash:[
  ['¿Dónde ocurre la oxidación?','En el <b>ánodo</b>, siempre, en cualquier tipo de celda. Lo que cambia con el tipo de celda es el signo: ánodo negativo en galvánica, positivo en electrolítica.'],
  ['E°_celda a partir de la tabla','E°_celda = E°_cátodo − E°_ánodo, con ambos valores tomados como <b>reducción</b> y sin multiplicar por coeficientes.'],
  ['¿Por qué el potencial no se multiplica por los coeficientes?','Porque es una magnitud <b>intensiva</b>: duplicar la reacción duplica n y ΔG, pero E = −ΔG/nF queda igual.'],
  ['Relación entre E° y espontaneidad','ΔG° = −nFE°. E° positivo ⇒ ΔG° negativo ⇒ celda galvánica espontánea.'],
  ['Pendiente nernstiana a 25 °C','59.2 mV por década para n = 1 y 29.6 mV para n = 2. A 37 °C sube a 61.6 mV: recalibrar es obligatorio.'],
  ['Ley de Faraday','m = (I·t·M)/(n·F), con F = 96 485 C/mol. El paso que más se falla es <b>n</b>, los electrones por ion.'],
  ['¿Qué es i₀?','La <b>densidad de corriente de intercambio</b>: la corriente en ambos sentidos en el equilibrio. Mide la actividad intrínseca del electrocatalizador.'],
  ['Los tres sobrepotenciales','<b>Activación</b> (mejor catalizador), <b>concentración</b> (agitar) y <b>óhmico</b> (más conductividad o compensación iR).'],
  ['i_p ∝ √v frente a i_p ∝ v','Raíz de v: la especie <b>difunde</b>. Lineal en v: la especie está <b>adsorbida</b> en el electrodo.'],
  ['Criterios de reversibilidad en CV','ΔE_p ≈ 59/n mV e independiente de v, y |i_pa/i_pc| ≈ 1.'],
  ['¿Qué es R_ct en impedancia?','La resistencia de transferencia de carga: el <b>diámetro del semicírculo</b> en Nyquist, inversamente proporcional a i₀.'],
  ['Reacción catódica de la corrosión en medio aireado','Reducción de <b>oxígeno</b>: O₂ + 2H₂O + 4e⁻ → 4OH⁻. Por eso airear acelera la corrosión.'],
  ['Razón de Pilling-Bedworth','Volumen de óxido entre volumen de metal. Menor que 1: poroso. Entre 1 y 2: protector. Mayor que 2: se agrieta.'],
  ['Ánodo de sacrificio','Un metal <b>más activo</b> (Zn, Mg) conectado a la estructura, que se corroe en su lugar. Es el principio del galvanizado.'],
  ['Batería frente a supercondensador','Batería: faradaica, mucha <b>energía</b>, poca potencia. Supercondensador: doble capa, mucha <b>potencia</b>, poca energía y 10⁵ ciclos.'],
  ['¿Por qué la celda tiene tres electrodos?','Para controlar el potencial contra una <b>referencia</b> por la que no pasa corriente, mientras la corriente se cierra por el contraelectrodo.']
 ]}
);
</script>
