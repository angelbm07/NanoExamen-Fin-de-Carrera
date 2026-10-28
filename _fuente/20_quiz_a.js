<script>
/* ============================================================
   QUIZ MIXTO · banco compartido, etiquetado por módulo.
   Preguntas de aplicación, comparación o detección de
   discrepancias, no de reconocimiento de definiciones.
   Estilo Tec: enunciado con escenario (~140 caracteres),
   cuatro opciones paralelas y breves (~30 caracteres).
   ============================================================ */
var QUIZ=[
/* ---------------- M2 ---------------- */
{tag:'M2',q:'En una titulación redox tomas una alícuota de 25.00 mL de disolución de Fe²⁺ y gastas 18.40 mL de KMnO₄ 0.0200 M en medio ácido. ¿Cuál es la concentración de Fe²⁺?',
 opts:['0.0368 M','0.0029 M','0.0147 M','0.0736 M'],correct:3,
 exp:'Moles de MnO₄⁻ = 0.01840 × 0.0200 = 3.68×10⁻⁴. La relación es 1 a 5 porque el Mn gana 5 electrones y el Fe cede 1, así que hay 1.84×10⁻³ mol de Fe²⁺ en 0.02500 L: 0.0736 M. El 0.0147 sale de usar relación 1:1.'},
{tag:'M2',q:'Dos analistas miden el mismo material certificado de valor 4.50. A obtiene 4.52, 4.51 y 4.53; B obtiene 4.38, 4.71 y 4.49. ¿Qué conclusión se sostiene sobre su desempeño?',
 opts:['A preciso pero inexacto; B exacto y preciso','Ambos con el mismo error sistemático','A preciso y exacto; B exacto pero impreciso','B más confiable: su rango cubre 4.50'],correct:2,
 exp:'A está centrado en 4.52 con dispersión mínima: preciso y exacto. B promedia 4.527 pero con rango de 0.33: su exactitud media es aceptable y su precisión mala, lo que apunta a error aleatorio. Un rango amplio que "cubra" el valor real no es un criterio de confiabilidad.'},
{tag:'M2',q:'Un pico cromatográfico sale a 9.0 min en una columna cuyo tiempo muerto es 1.5 min. Un compañero reporta un factor de retención k′ = 6.0 para ese pico. ¿Qué error cometió?',
 opts:['No restó el tiempo muerto','Usó el ancho en vez del tiempo','Dividió entre el tiempo total','Confundió k′ con la resolución'],correct:0,
 exp:'k′ = (9.0 − 1.5)/1.5 = 5.0. Reportar 6.0 equivale a calcular 9.0/1.5, es decir olvidar la resta del tiempo muerto en el numerador. Es el error más frecuente del parámetro.'},
{tag:'M2',q:'Validas un método de análisis y obtienes 103 % de recuperación sobre un material certificado, con esa misma desviación en las diez réplicas que corriste. ¿Qué acción corresponde?',
 opts:['Aumentar el número de réplicas','Cambiar de material certificado','Aceptarlo: es reproducible','Buscar la fuente del sesgo'],correct:3,
 exp:'Alta reproducibilidad con desviación constante es la firma del error sistemático. Aumentar n reduce el componente aleatorio y deja el sesgo intacto. Hay que revisar calibración, patrón, interferencia de matriz o recuperación del método.'},
{tag:'M2',q:'Titulas un ácido débil con NaOH y eliges naranja de metilo como indicador, que vira entre pH 3.1 y 4.4. ¿Qué le ocurre a la concentración que acabas reportando?',
 opts:['La sobrestima','No la altera','Solo pierde precisión','La subestima'],correct:3,
 exp:'La equivalencia de un ácido débil con base fuerte cae por encima de pH 8, así que el indicador vira mucho antes y el volumen registrado es menor que el correcto. El sesgo es sistemático y siempre en la misma dirección, de modo que repetir no lo revela.'},
{tag:'M2',q:'Analizas por gravimetría una muestra de 0.2711 g y recuperas 1.1682 g de precipitado seco. Un compañero reporta 1.66 % de fósforo en la muestra. ¿Qué hizo mal en el cálculo?',
 opts:['Aplicó la pureza al final','Usó el precipitado como denominador','No pasó de precipitado a fósforo','Usó la masa molar del fósforo'],correct:1,
 exp:'El porcentaje correcto es 7.11 % respecto a los 0.2711 g de muestra. Usar los 1.1682 g del precipitado como denominador reduce el valor por un factor de 4.3 y da precisamente ese orden. El precipitado es el intermedio con el que mides, no el objeto del análisis.'},
{tag:'M2',q:'Tu curva de calibración en disolvente puro da R² = 0.9998, pero las muestras reales salen 12 % altas frente a un método de referencia ya validado. ¿Cómo se explica la discrepancia?',
 opts:['R² mal calculado','Se excedió el rango lineal','Muy pocos puntos en la curva','Efecto de matriz'],correct:3,
 exp:'R² mide qué tan bien los puntos de calibración se ajustan a una recta, nada más. Si la matriz de la muestra realza o suprime la señal respecto a los estándares en disolvente puro, el ajuste sigue siendo excelente y el resultado sesgado. Se resuelve con adición de estándar.'},
{tag:'M2',q:'Necesitas amortiguar una reacción a pH 9.2 y en el laboratorio tienes ácido acético (pKa 4.76), fosfato dihidrógeno (pKa 7.2) y amonio (pKa 9.25). ¿Cuál eliges y por qué?',
 opts:['Acético, el más débil','Fosfato, por su pKa intermedio','Cualquiera, ajustando la razón','Amonio, pKa 9.25'],correct:3,
 exp:'La capacidad amortiguadora es máxima en pKa y útil en pKa ± 1. Con pKa 9.25 la razón base/ácido es casi 1 al pH objetivo. Con los otros dos harían falta razones extremas donde el sistema prácticamente no amortigua, aunque el pH nominal se alcance.'},

/* ---------------- M3 ---------------- */
{tag:'M3',q:'Tratas 2-bromobutano con etóxido de sodio en etanol a 70 °C y aíslas un solo producto mayoritario. ¿Cuál es y por qué vía se forma en esas condiciones?',
 opts:['Alcohol, por SN1','Éter y alqueno por igual','Éter, por SN2','Alqueno, por E2'],correct:3,
 exp:'El sustrato es secundario, así que la decisión recae en el reactivo y la temperatura. El etóxido es base fuerte, no solo nucleófilo, y la eliminación produce más partículas y mayor entropía, de modo que el término TΔS la favorece al calentar. Por eso domina E2.'},
{tag:'M3',q:'Separas dos isómeros de la misma fórmula molecular: funden a 132 °C y a 158 °C, y los dos desvían el plano de la luz polarizada. ¿Qué relación guardan entre sí?',
 opts:['Enantiómeros','Uno es la forma meso','Diastereómeros','Confórmeros'],correct:2,
 exp:'Los enantiómeros tienen propiedades físicas idénticas salvo el signo de rotación, así que dos puntos de fusión distintos los descarta. Los diastereómeros no son imágenes especulares y sí difieren en propiedades físicas, lo que además permite separarlos por métodos convencionales. Una forma meso no sería ópticamente activa.'},
{tag:'M3',q:'Un polímero muestra en DSC un escalón en la línea base a 105 °C y ningún pico endotérmico hasta 300 °C; en TGA no aparece pérdida de masa antes de 340 °C. ¿Qué material es?',
 opts:['Termofijo entrecruzado','Elastómero','Amorfo','Semicristalino'],correct:2,
 exp:'El escalón en la línea base del DSC es la transición vítrea, propia de la fase amorfa. La ausencia de pico endotérmico indica que no hay regiones cristalinas, así que no hay Tm. El TGA no ve la Tg porque no implica cambio de masa, y eso es consistente con no registrar nada.'},
{tag:'M3',q:'Añades HBr a 2-metil-2-buteno en dos frascos idénticos: uno con disolvente recién destilado y otro con disolvente viejo contaminado con peróxidos. ¿Qué observas al comparar?',
 opts:['El mismo producto','Nada en el frasco con peróxido','Productos distintos','El mismo, con menor rendimiento'],correct:2,
 exp:'Sin peróxidos la adición es iónica y sigue Markovnikov, con el bromo en el carbono más sustituido. Con peróxidos se genera un radical bromo y el mecanismo pasa a radicalario, que entrega la regioselectividad opuesta. Es el ejemplo clásico de que el mecanismo gobierna el producto.'},
{tag:'M3',q:'Caracterizas un inhibidor enzimático y encuentras que baja Vmax un 40 % y deja Km sin cambio apreciable. Si duplicas la concentración de sustrato, ¿qué esperas observar?',
 opts:['Que el efecto desaparezca','Que Km aumente','Que el efecto persista','Que Vmax se recupere'],correct:2,
 exp:'Vmax reducido con Km intacto es la firma del inhibidor no competitivo: se une fuera del sitio activo y reduce la cantidad de enzima funcional. Añadir sustrato no lo desplaza porque no ocupan el mismo lugar. Solo el competitivo se vence con más sustrato.'},
{tag:'M3',q:'Una policondensación entre un diácido y una diamina se detiene al 92 % de conversión de los grupos funcionales. ¿Qué grado de polimerización medio alcanzaste?',
 opts:['Xn ≈ 92','Xn ≈ 25','Xn ≈ 200','Xn ≈ 12'],correct:3,
 exp:'La ecuación de Carothers da Xn = 1/(1 − p) = 1/0.08 = 12.5. El peso molecular solo se dispara en el último tramo de conversión: hace falta 99 % para Xn = 100. A 92 % el sistema sigue lleno de oligómeros. En polimerización en cadena, en cambio, las cadenas nacen con su peso casi final.'},
{tag:'M3',q:'Un fármaco quiral se administra como mezcla racémica y en ensayos produce el efecto terapéutico buscado más una toxicidad hepática inesperada. ¿Qué explicación es más probable?',
 opts:['El racémico es menos soluble','El racémico se degrada antes','Los enantiómeros se neutralizan','Cada uno actúa en blanco distinto'],correct:3,
 exp:'El entorno biológico es quiral, así que dos enantiómeros encajan de forma distinta en un sitio de unión. Uno puede dar el efecto terapéutico y el otro unirse a otro receptor o metabolizarse por otra vía. Sus propiedades físicas en entorno aquiral, como la solubilidad, son idénticas.'},
{tag:'M3',q:'Quieres introducir un segundo grupo nitro en un anillo aromático que ya lleva un –NO₂. ¿Qué esperas en velocidad y orientación frente al benceno sin sustituir?',
 opts:['Más rápida, orto y para','Más lenta, orto y para','Más lenta y meta','Más rápida, mezcla estadística'],correct:2,
 exp:'El nitro retira densidad electrónica por inducción y resonancia, así que desactiva el anillo frente al ataque electrofílico. Además desestabiliza el ion arenio en orto y para más que en meta, de modo que la sustitución se dirige a meta. Activante y orto-para director van siempre juntos, igual que desactivante y meta.'}
];
</script>
