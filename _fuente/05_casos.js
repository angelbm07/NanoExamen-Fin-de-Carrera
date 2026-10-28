<script>
/* ============================================================
   CASOS DE CARACTERIZACIÓN
   Escenarios de varios pasos: una muestra desconocida, qué
   técnica aplicar en cada paso, qué dice cada resultado y a qué
   conclusión llevan juntos. Cada paso se revela al pulsarlo.
   ============================================================ */
var CASOS={};

CASOS.polvo_blanco={
 t:'Un polvo blanco sin etiqueta',
 ctx:'Recibes un frasco de polvo blanco en el laboratorio, sin etiqueta. Solo sabes que vino del grupo que trabaja con óxidos semiconductores para fotocatálisis. Tienes acceso a difracción de rayos X, UV-Vis con esfera integradora, SEM con EDS, adsorción de nitrógeno y TGA. Dispones de 200 mg y de dos días.',
 pasos:[
  {p:'¿Con qué técnica empiezas y por qué esa primero?',
   r:'<b>Difracción de rayos X de polvos.</b> Es no destructiva, consume 50 mg que se recuperan, tarda veinte minutos y responde la pregunta más informativa de todas: qué fase cristalina es. Identificar la fase acota de golpe todo lo demás, porque fija composición, estructura y buena parte de las propiedades esperables.',
   d:'El difractograma muestra picos intensos en 25.3°, 37.8°, 48.0° y 53.9°, que indexan a una celda tetragonal.'},
  {p:'Ese patrón corresponde a anatasa, una de las fases del TiO₂. ¿Qué pregunta queda abierta que la difracción no contesta?',
   r:'<b>Si hay rutilo además de anatasa, y en qué proporción.</b> La difracción sí lo detectaría como picos adicionales, el principal a 27.4°, y la razón de intensidades permite cuantificar la mezcla. Lo que de verdad no contesta es el <b>tamaño de partícula</b> ni el <b>área superficial</b>, que son los que deciden la actividad fotocatalítica, ni si la superficie está contaminada.',
   d:'No hay pico en 27.4°: la muestra es anatasa pura. El ancho a media altura del pico de 25.3° da, por Scherrer, cristalitos de 14 nm.'},
  {p:'Scherrer da 14 nm. ¿Puedes reportar ya que las partículas miden 14 nm?',
   r:'<b>No.</b> Scherrer mide el <b>dominio cristalino coherente</b>, no la partícula. Una partícula de 60 nm puede estar hecha de varios dominios de 14 nm. Para el tamaño de partícula hace falta microscopía, y para el tamaño en suspensión, dispersión de luz. La diferencia entre ambas medidas es, en sí misma, información sobre si el material es monocristalino o policristalino.',
   d:'El SEM muestra partículas de 15 a 20 nm, consistentes con cristalitos únicos, agrupadas en aglomerados blandos de unos 200 nm.'},
  {p:'Quieres confirmar que el material sirve como fotocatalizador bajo luz ultravioleta. ¿Qué mides y qué valor esperas?',
   r:'<b>UV-Vis con esfera integradora</b> para obtener el borde de absorción, y de ahí la brecha prohibida por E_g = 1240/λ. Para anatasa se espera un borde cerca de <b>385 nm</b>, que corresponde a 3.2 eV. Si saliera cerca de 3.0 eV sería rutilo, y si saliera por debajo de 2.8 habría dopaje o impurezas absorbentes.',
   d:'El borde cae en 384 nm: E_g = 1240/384 = 3.23 eV. Coherente con anatasa pura.'},
  {p:'El área superficial por BET sale 95 m²/g. ¿Es consistente con los 15 a 20 nm del SEM?',
   r:'<b>Sí, y la comprobación vale la pena.</b> Para esferas, A = 6/(ρD). Con ρ(anatasa) = 3.9 g/cm³ y D = 16 nm: A = 6/(3.9 × 1.6×10⁻⁶ cm) = 9.6×10⁵ cm²/g ≈ <b>96 m²/g</b>. La coincidencia confirma que los aglomerados son blandos y el nitrógeno accede a toda la superficie. Si BET hubiera dado 20 m²/g, las partículas estarían sinterizadas entre sí.',
   d:'La consistencia entre tres técnicas independientes cierra la identificación.'}
 ],
 fin:'<b>Conclusión.</b> Anatasa pura, cristalitos de 14 nm y partículas de 15 a 20 nm, área de 95 m²/g y brecha de 3.23 eV. Es un fotocatalizador de ultravioleta de buena calidad. <b>La lección del caso</b> no es la secuencia concreta sino el criterio: se empieza por la técnica no destructiva que más acota, cada resultado decide cuál es la siguiente pregunta, y se buscan comprobaciones cruzadas entre técnicas independientes en vez de confiar en un solo número.'};

CASOS.coloide_violeta={
 t:'Un coloide de oro que salió del color equivocado',
 ctx:'Repites una síntesis de nanopartículas de oro que siempre te daba una suspensión roja y transparente. Esta vez sale violácea y algo turbia. El protocolo, los reactivos y el matraz son los mismos; lo único distinto es que el agua la tomaste de otra garrafa.',
 pasos:[
  {p:'Antes de medir nada, ¿qué dos hipótesis compiten y cómo se distinguen en principio?',
   r:'O bien las <b>partículas crecieron más de la cuenta</b>, o bien <b>se agregaron</b> conservando su tamaño individual. Las dos desplazan el color al rojo y las dos dan turbidez. La diferencia está en si el objeto individual cambió: el crecimiento altera el núcleo, la agregación no. Por eso hay que mirar las partículas una a una, no el promedio.',
   d:'Ambas hipótesis predicen lo mismo en UV-Vis a simple vista, así que el espectro solo no basta.'},
  {p:'¿Qué par de técnicas resuelve la ambigüedad y por qué justamente ese par?',
   r:'<b>TEM y DLS juntos.</b> El TEM mide el núcleo seco, partícula por partícula; el DLS mide el diámetro hidrodinámico del objeto que se mueve en suspensión. Si el TEM da el tamaño de siempre y el DLS da mucho más, hay agregación. Si ambos crecen a la par, las partículas crecieron de verdad. Ninguna de las dos por separado lo decide.',
   d:'TEM: partículas esféricas de 22 nm, contornos limpios, el tamaño habitual. DLS: 85 nm con PDI de 0.41.'},
  {p:'Con esos números, ¿qué pasó? ¿Y qué esperarías ver en el espectro UV-Vis?',
   r:'<b>Agregación.</b> El núcleo no cambió: son racimos de partículas intactas. En UV-Vis la banda de plasmón, que en oro esférico de 20 nm cae cerca de 520 nm, aparecerá <b>desplazada al rojo y ensanchada</b> por el acoplamiento de plasmones entre partículas vecinas dentro del racimo. Ese corrimiento es precisamente lo que percibes como violeta.',
   d:'UV-Vis: banda ancha centrada en 610 nm, con un hombro residual cerca de 525 nm.'},
  {p:'Queda explicar la causa. ¿Qué mides para confirmar que el cambio de agua es el culpable?',
   r:'<b>Potencial zeta y conductividad</b> de las dos aguas. La estabilidad de un coloide de oro con citrato es electrostática: depende de una barrera de repulsión que la fuerza iónica comprime. Un agua con más electrolito disuelto acorta la longitud de Debye, derriba la barrera de DLVO y los choques brownianos bastan para agregar. El potencial zeta caerá en magnitud por debajo del umbral práctico de 30 mV.',
   d:'Agua antigua: 1.2 µS/cm, potencial zeta −42 mV. Agua nueva: 310 µS/cm, potencial zeta −14 mV.'}
 ],
 fin:'<b>Conclusión.</b> El agua nueva tenía 250 veces más conductividad. Esa fuerza iónica comprimió la doble capa, el potencial zeta cayó de −42 a −14 mV, la barrera electrostática se derrumbó y las partículas se agregaron sin cambiar de tamaño. <b>La lección del caso</b> es que el síntoma (color) no identifica el mecanismo: hacen falta dos técnicas que midan cosas distintas del mismo objeto, y luego una tercera que explique la causa. Y la solución de fondo, si el material va a un medio salino, es pasar a estabilización estérica con PEG, que no depende del apantallamiento.'};

CASOS.recubrimiento_falla={
 t:'Un recubrimiento protector que falló antes de tiempo',
 ctx:'Una pieza de acero con un recubrimiento nanoestructurado debía resistir mil horas en cámara de niebla salina y empezó a mostrar óxido a las doscientas. El proveedor sostiene que el recubrimiento cumple el espesor especificado. Tienes la pieza fallada y una de referencia sin ensayar.',
 pasos:[
  {p:'El espesor sí cumple. ¿Qué otras tres cosas pueden fallar en un recubrimiento que tiene el espesor correcto?',
   r:'<b>Cobertura, adherencia y porosidad.</b> Un espesor medio correcto es compatible con un recubrimiento que deja aristas descubiertas, que se despega del sustrato, o que es denso en promedio pero tiene poros pasantes. Cualquiera de las tres permite que el electrolito llegue al acero, y entonces el espesor nominal es irrelevante.',
   d:'La medida de espesor se hizo en una zona plana de la cara principal.'},
  {p:'¿Cómo compruebas la cobertura real, incluidas las aristas y el fondo de cualquier relieve?',
   r:'<b>Corte transversal y SEM con mapeo elemental por EDS.</b> El corte revela el espesor punto por punto a lo largo del perfil, y el mapeo muestra dónde está el elemento del recubrimiento y dónde aparece el hierro del sustrato. En una pieza con relieve, un proceso de línea de vista deja las aristas con una fracción del espesor de la cara plana.',
   d:'En la cara plana el recubrimiento mide 2.1 µm. En las aristas mide 0.3 µm, y en el fondo de una ranura apenas 0.1 µm.'},
  {p:'Ya tienes el modo de fallo geométrico. ¿Cómo lo cuantificas en términos de protección, sin esperar otras doscientas horas?',
   r:'<b>Espectroscopía de impedancia electroquímica.</b> En un recubrimiento sano la resistencia de transferencia de carga es enorme y el semicírculo de Nyquist es gigante; conforme el electrolito encuentra camino al metal, R_ct cae. Medir impedancia en la zona plana y en la ranura, y seguir su evolución en el tiempo, cuantifica el deterioro en horas en lugar de semanas.',
   d:'Zona plana: R_ct de 1.2 MΩ·cm². Ranura: 8 kΩ·cm², dos órdenes y medio por debajo.'},
  {p:'¿Qué cambio de proceso recomiendas, y qué se sacrifica al hacerlo?',
   r:'<b>Pasar a una técnica conformal</b>, como depósito de capa atómica o depósito químico en fase vapor, que recubren por reacción superficial y no por línea de vista, de modo que el espesor en la ranura iguala al de la cara plana. Lo que se sacrifica es <b>velocidad y costo</b>: el ALD crece una capa por ciclo y es lentísimo comparado con el sputtering. Una alternativa intermedia es rediseñar la pieza para eliminar las ranuras.',
   d:'La recomendación se sostiene en una medida geométrica y una electroquímica, no en una opinión.'}
 ],
 fin:'<b>Conclusión.</b> El espesor nominal se cumplía y aun así el recubrimiento falló, porque se midió donde el proceso deposita bien. La cobertura de escalón era el problema real, y la impedancia lo convirtió en un número defendible frente al proveedor. <b>La lección del caso</b> es que una especificación cumplida en el punto equivocado no es una especificación cumplida, y que elegir dónde medir es parte del método, no un detalle.'};
</script>
