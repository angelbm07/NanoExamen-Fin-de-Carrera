<script>
/* ============================================================
   TRUCOS DE LOS REACTIVOS
   Cada clave es un concepto; el motor los engancha al reactivo
   por una frase distintiva del enunciado. Así un mismo atajo
   sirve a varias preguntas sin duplicar texto.
   ============================================================ */
var TIPS={

/* ---------- concentración y preparación ---------- */
dilucion:'<b>Factor de dilución = razón de concentraciones.</b> De 2.0 M a 0.10 M el factor es 20, así que el volumen de madre es el final entre 20. En serie los factores se <b>multiplican</b>, no se suman: tres pasos de 25 dan 15 625.',
molaridad:'<b>MolaRidad lleva R de litRo</b> de disolución; molalidad lleva kilogramo de disolvente. Para pasar de una a otra siempre hace falta la <b>densidad de la disolución</b>.',
ppm:'En agua diluida <b>1 ppm = 1 mg/L</b>, pero solo porque la densidad vale 1 g/mL. En otro disolvente esa equivalencia se cae.',
cifras:'<b>Suma y resta: manda el menor número de decimales. Multiplicación y división: manda el menor número de cifras significativas.</b> Son dos reglas distintas y confundirlas es el error más barato de evitar.',

/* ---------- estadística del dato ---------- */
exactitud:'<b>Exactitud es dar en el centro; precisión es agrupar los tiros.</b> Réplicas juntas pero desviadas significa error <b>sistemático</b>, y ese no se arregla promediando más. Réplicas dispersas con media correcta es error <b>aleatorio</b>, y ese sí baja con √n.',
lod:'<b>LOD = 3σ del blanco entre la pendiente.</b> Solo hay dos palancas: bajar el ruido o subir la sensibilidad. Más réplicas mejoran la precisión pero <b>no mueven el umbral de detección</b>.',
matriz:'<b>R² alto no es sinónimo de exacto.</b> R² mide el ajuste de los estándares a una recta, nada más. Si la muestra tiene matriz distinta, el ajuste sigue bonito y el resultado sale sesgado: eso se arregla con <b>adición de estándar</b>.',
pvalor:'<b>El valor p dice si el efecto existe; el tamaño del efecto dice si importa.</b> Con n grande, diferencias minúsculas alcanzan significancia. Siempre compara la magnitud contra la variabilidad real del proceso.',

/* ---------- equilibrio y termodinámica ---------- */
gibbs:'<b>ΔG = ΔH − TΔS, y los cuatro casos salen de los signos.</b> Ambos a favor: siempre. Ambos en contra: nunca. Los dos negativos: solo en frío. Los dos positivos: solo en caliente. La temperatura de cruce es <b>T = ΔH/ΔS</b>.',
gibbsK:'<b>Cada década de K vale unos 5.7 kJ/mol a 25 °C.</b> K &gt; 1 da ΔG° negativo. Con ese ancla puedes descartar opciones sin calculadora.',
unidadesS:'<b>ΔH viene en kJ y ΔS en J.</b> Si no divides ΔS entre mil, el término TΔS sale mil veces mayor y el signo de ΔG te queda invertido. Es el error numérico más frecuente del módulo.',
quociente:'<b>ΔG° describe el estándar; ΔG = ΔG° + RT·ln Q describe tu matraz.</b> Con mucho producto y poco reactivo, Q es enorme y la reacción puede ir hacia atrás aunque ΔG° sea negativo.',
leChatelier:'<b>Solo la temperatura cambia el valor de K.</b> Concentración, volumen y catalizador mueven la posición del equilibrio sin tocar K. En una exotérmica el calor actúa como producto: calentar baja K.',
estadoProceso:'<b>Si el sistema lo <i>tiene</i>, es función de estado; si lo <i>intercambia</i>, es de proceso.</b> Tiene U, S, V. Intercambia calor y trabajo. Por eso ΔU es igual por cualquier camino aunque q y w se repartan distinto.',
adiabatico:'<b>Adiabático no es isotérmico.</b> Adiabático es q = 0; al expandirse, el gas paga el trabajo con su energía interna y <b>se enfría</b>. Por eso la adiabata cae más rápido que la isoterma en el diagrama P-V.',
entalpia:'<b>q a presión constante es ΔH; q a volumen constante es ΔU.</b> Como casi toda la química de laboratorio ocurre en recipiente abierto, medir calor equivale a medir ΔH. En bomba calorimétrica mides ΔU.',

/* ---------- cinética ---------- */
orden:'<b>Grafica las tres y quédate con la que dé recta:</b> [A] es orden cero, ln[A] es orden uno, 1/[A] es orden dos. Con velocidades iniciales, duplicar y que se multiplique por 2, 4 u 8 da orden 1, 2 o 3.',
unidadesK:'<b>Las unidades de k delatan el orden:</b> M/s es cero, s⁻¹ es uno, M⁻¹s⁻¹ es dos. La regla general es M<sup>1−n</sup>s⁻¹.',
vidamedia:'<b>Solo en orden uno la vida media no depende de la concentración inicial.</b> Por eso la desintegración radiactiva y la farmacocinética se modelan así. En orden dos, más concentrado significa vida media más corta.',
arrhenius:'<b>En ln k contra 1/T la pendiente es −Ea/R.</b> Más inclinada significa mayor barrera y por tanto más sensible a la temperatura. Y la temperatura va en <b>kelvin</b>, siempre.',
catalizador:'<b>El catalizador baja la barrera en los dos sentidos por igual.</b> Acelera la llegada al equilibrio pero no mueve dónde está: ΔG° y K quedan intactos.',

/* ---------- coligativas y superficies ---------- */
coligativas:'<b>Las coligativas cuentan partículas, no identidad.</b> Por eso el factor i: glucosa 1, NaCl 2, CaCl₂ 3. Omitirlo es el distractor diseñado en casi todos estos problemas.',
kelvin:'<b>Lo pequeño es más soluble y tiene más presión de vapor.</b> De ahí sale la maduración de Ostwald: las gotas chicas se disuelven y alimentan a las grandes sin llegar a tocarse.',
dlvo:'<b>Sal comprime la doble capa y tumba la barrera.</b> Por eso un coloide estable en agua destilada se agrega en medio fisiológico. La solución no es más carga: es estabilización <b>estérica</b> con polímero.',
zeta:'<b>Regla práctica: |ζ| mayor que 30 mV, la suspensión aguanta.</b> El punto isoeléctrico es donde la carga neta se anula y la estabilidad es mínima: formula lejos de ahí.',

/* ---------- nanoescala y síntesis ---------- */
superficie:'<b>Tres potencias distintas, no las mezcles:</b> la fracción superficial y el área por gramo van como <b>1/R</b>, pero el número de partículas por gramo va como <b>1/R³</b>.',
lamer:'<b>Monodispersidad = nucleación corta, crecimiento largo.</b> Si todos los núcleos nacen a la vez tienen la misma edad y acaban iguales. Añadir precursor despacio solapa las etapas y ensancha la distribución.',
forma:'<b>La cara que crece rápido desaparece; la lenta sobrevive.</b> Por eso pasivar una familia de caras hace que esa familia <b>domine</b> la forma final.',
rcritico:'<b>Más sobresaturación baja r* y hunde la barrera.</b> Por eso nuclean muchos más núcleos y cada partícula sale más pequeña: el mismo material repartido entre más piezas.',

/* ---------- estructura y bandas ---------- */
lambda:'<b>λ = 1240/E con E en eV.</b> Fija dos anclas y no necesitas más: <b>1240 nm es 1 eV, 620 nm es 2 eV</b>. Media longitud de onda es doble energía.',
colorAbs:'<b>En absorción ves el complementario; en emisión ves lo emitido.</b> Un sólido que absorbe por debajo de 517 nm se ve amarillo-naranja, no verde. Un LED de 2.7 eV emite azul y se ve azul.',
celda:'<b>Átomos por celda: 1, 2 y 4 para SC, BCC y FCC.</b> Vértice aporta 1/8, cara 1/2, cuerpo entero. Y no lo confundas con el número de coordinación, que es 6, 8 y 12.',
unidadesDens:'<b>Convierte el parámetro de red a centímetros ANTES de elevar al cubo.</b> 1 nm = 10⁻⁷ cm, y al cubo 10⁻²¹. Saltarse esto desvía el resultado exactamente por 10⁶.',
bragg:'<b>θ es la mitad del 2θ que reporta el equipo.</b> Es el error número uno del módulo. Y en Scherrer, β va en <b>radianes</b> y con el ensanchamiento instrumental ya restado.',
fermi:'<b>Dopar no abre ni cierra el gap: mueve el nivel de Fermi.</b> Tipo n lo sube hacia conducción, tipo p lo baja hacia valencia. Y al unir p con n, los niveles de Fermi se igualan y las bandas se doblan: eso es toda la unión.',
confinamiento:'<b>El confinamiento va como 1/L².</b> Partir el tamaño a la mitad cuadruplica el término: el punto cuántico pequeño emite más al <b>azul</b>.',

/* ---------- caracterización ---------- */
cristalito:'<b>Cristalito no es partícula.</b> Scherrer ve el dominio coherente; el TEM ve el objeto. Si el TEM da mucho más, la partícula es policristalina.',
dlsTem:'<b>DLS mide en suspensión y pondera por intensidad, que va con d⁶.</b> Siempre sale mayor que el TEM, que mide el núcleo seco. Que sea diez veces mayor ya indica agregación.',
tecnica:'<b>Organiza por la pregunta, no por la técnica.</b> Fase, difracción. Elementos, EDS. Estado de oxidación, XPS. Tamaño en seco, TEM. Tamaño en suspensión, DLS. Área, BET. Grupos funcionales, infrarrojo o Raman si hay agua. Estructura molecular, resonancia.',
grafica:'<b>Tres preguntas sirven para casi cualquier gráfica:</b> dónde está el pico da la identidad, cuán ancho es da el tamaño o el desorden, cuán alto es da la cantidad.',
tga:'<b>Cada escalón del TGA es otra cosa.</b> Hasta 150 °C, agua y disolvente. De 200 a 450 °C, orgánicos. Por encima de 600 °C, el propio inorgánico. Sumarlos todos como «recubrimiento» es el error previsto.',
dsc:'<b>Escalón sin pico es transición vítrea</b>, porque es de segundo orden y no tiene calor latente. Pico endotérmico es fusión; exotérmico al calentar es cristalización en frío, y no se repite en el segundo barrido.',
uvvis:'<b>El borde de absorción da el gap y la banda de plasmón da el estado del coloide.</b> Oro esférico cerca de 520 nm; si se corre al rojo y se ensancha, hay agregación.',

/* ---------- electroquímica ---------- */
anodo:'<b>La oxidación siempre en el ánodo, en cualquier celda.</b> Lo que cambia es el signo: ánodo negativo en la galvánica, positivo en la electrolítica, porque ahí la fuente externa impone la polaridad.',
nernst:'<b>El coeficiente 0.0592 solo vale a 25 °C</b> y a 37 °C sube a 0.0616. Pendiente de 59 mV por década para un ion monovalente y 29.6 para uno divalente. Y acuérdate de <b>dividir entre n</b>.',
faraday:'<b>El paso que más se falla es n</b>, los electrones por ion: dos para Cu²⁺, tres para Al³⁺. Y la eficiencia faradaica se <b>divide</b>, no se multiplica: si solo sirve el 92 % de la carga, hace falta más.',
ecelda:'<b>E° = E°cátodo − E°ánodo, con los dos tomados como reducción.</b> No se invierte el signo ni se multiplica por coeficientes: el potencial es <b>intensivo</b>.',
randles:'<b>i_p proporcional a √v significa que la especie difunde; proporcional a v significa que está adsorbida.</b> Multiplica la velocidad por cuatro y mira si la corriente se duplica o se cuadruplica.',
rct:'<b>El diámetro del semicírculo de Nyquist es R_ct</b>, inversamente proporcional a i₀. Semicírculo pequeño, cinética rápida. El corte a alta frecuencia es la resistencia del electrolito.',
corrosion:'<b>En medio neutro aireado, el cátodo reduce oxígeno, no protones.</b> Por eso airear o agitar <b>acelera</b> la corrosión en lugar de frenarla.',

/* ---------- escalamiento y proceso ---------- */
escalaAV:'<b>El calor se genera con el volumen y se disipa con el área.</b> Al escalar, A/V cae como 1/L: por eso una reacción exotérmica que iba bien en 50 mL se descontrola en 500 L sin cambiar la química.',
criterios:'<b>Los criterios de escalamiento son incompatibles entre sí: hay que elegir.</b> Conservar P/V baja las revoluciones pero <b>sube</b> la velocidad de punta. Elige según lo que limite: mezclado, esfuerzo cortante o régimen de flujo.',
propagacion:'<b>En potencias, la incertidumbre relativa se multiplica por el exponente.</b> Un 4 % en el radio son 8 % en el área y 12 % en el volumen. Por eso medir bien el tamaño rinde tanto.',
reactores:'<b>Para orden positivo, el PFR siempre necesita menos volumen que el CSTR.</b> El CSTR trabaja todo él a la concentración de salida, que es la más baja y por tanto la más lenta.',
vpn:'<b>El periodo de recuperación simple no descuenta y siempre sale optimista.</b> Un VPN positivo pero pequeño significa proyecto sensible: comprueba cuánto puede caer el flujo antes de volverse negativo.',

/* ---------- formulación ---------- */
hlb:'<b>HLB bajo (3 a 6) da agua en aceite; alto (8 a 18) da aceite en agua.</b> La mezcla es el promedio ponderado por <b>fracción másica</b>. Y por Bancroft, la fase donde el surfactante es más soluble acaba siendo la continua.',
stokes:'<b>La velocidad de cremado va con el cuadrado del radio.</b> Partir las gotas a la mitad frena la separación por cuatro; dividirlas entre diez, por cien. Mucho más eficaz que espesar la fase continua.',
inestabilidad:'<b>Si agitando se recupera, fue cremado o floculación.</b> Si no, hubo coalescencia o maduración de Ostwald. Cada una se combate distinto y la reversibilidad es la prueba que las separa.',
/* ---------- química orgánica y bioquímica ---------- */
redox:'<b>En volumetría redox la relación sale de igualar electrones, no de los coeficientes.</b> El permanganato gana 5 y el Fe²⁺ cede 1, así que la relación es <b>1 a 5</b>. Usar 1:1 es el distractor que siempre está ahí.',
buffer:'<b>Elige el ácido cuyo pK<sub>a</sub> esté a menos de una unidad del pH objetivo.</b> En pH = pK<sub>a</sub> la capacidad es máxima porque hay tanto ácido como base conjugada. Más lejos, harían falta razones extremas donde ya casi no amortigua.',
isomeria:'<b>Los enantiómeros son idénticos en todo salvo el signo de rotación.</b> Si dos isómeros tienen <b>puntos de fusión distintos</b>, no son enantiómeros: son diastereómeros, y por eso se pueden separar por métodos normales.',
mecanismo:'<b>El mecanismo decide el producto, no la fórmula.</b> HBr sin peróxidos va por vía iónica y sigue Markovnikov; con peróxidos pasa a radicalario y da la regioselectividad <b>opuesta</b>. Mismo reactivo, producto contrario.',
sn:'<b>Sustrato terciario manda SN1; primario manda SN2.</b> En el secundario decide el reactivo: base fuerte y calor empujan a eliminación, nucleófilo bueno sin base empuja a sustitución. SN1 racemiza, SN2 invierte.',
inhibidor:'<b>Mira qué parámetro cambió:</b> K<sub>m</sub> sube y V<sub>max</sub> igual es <b>competitivo</b> y se vence con más sustrato; V<sub>max</sub> baja y K<sub>m</sub> igual es <b>no competitivo</b> y no se vence nunca.',
carothers:'<b>En policondensación el peso solo se dispara al final.</b> X̄<sub>n</sub> = 1/(1−p): al 92 % apenas da 12, y para llegar a 100 hace falta 99 %. Por eso la estequiometría tiene que ser exactísima.',
quiral:'<b>El cuerpo es quiral, así que los dos enantiómeros no son el mismo fármaco.</b> Uno puede dar el efecto y el otro unirse a otro blanco. En entorno aquiral, en cambio, sus propiedades físicas son idénticas.',
aromatica:'<b>Activante va con orto-para; desactivante va con meta.</b> Van siempre juntos. Un grupo que retira densidad desactiva el anillo y además dirige a meta, porque desestabiliza más el arenio en orto y para.',
miller:'<b>Toma recíprocos y reduce a enteros mínimos.</b> El recíproco existe para que un plano paralelo a un eje, que lo corta en el infinito, dé índice <b>cero</b> en vez de infinito. Nunca llevan fracciones y el orden de los ejes importa.',
polaridad:'<b>El momento dipolar es una suma vectorial.</b> Enlaces muy polares con geometría simétrica se cancelan: CCl₄ es apolar y CHCl₃ no, con los mismos enlaces. Lo que decide es la <b>simetría</b>.',
conformal:'<b>Línea de vista contra reacción superficial.</b> Evaporación y sputtering depositan donde llega el flujo y dejan sombras; CVD y sobre todo ALD reaccionan sobre toda la superficie accesible y recubren el fondo del poro.',
poiseuille:'<b>El caudal va con la CUARTA potencia del radio.</b> Media el radio y el caudal cae a 1/16. Esa sensibilidad explica por qué el canal más estrecho domina la resistencia de toda la red.',
lipinski:'<b>La regla de cinco es una heurística sobre absorción oral pasiva</b>, no un juicio de toxicidad. Violarla no descarta el compuesto: cambia la vía o el vehículo.'
};
</script>
