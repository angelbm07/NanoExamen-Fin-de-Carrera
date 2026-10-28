<script>
/* ============================================================
   MAPA DE CONCEPTOS
   El examen es transversal y la guía está organizada por módulo.
   Este mapa cruza ambas cosas: cada arista explica POR QUÉ dos
   conceptos se tocan, que es lo que el examen acaba preguntando.
   id, etiqueta, módulo, columna, fila
   ============================================================ */
var MAPA={
 nodos:[
  /* --- columna 1: termodinámica y cinética --- */
  {id:'gibbs',  t:'Energía libre de Gibbs', m:'M5', c:0,f:0},
  {id:'equil',  t:'Constante de equilibrio', m:'M5', c:0,f:1},
  {id:'nernst', t:'Ecuación de Nernst',      m:'M11',c:0,f:2},
  {id:'arrh',   t:'Arrhenius y Ea',          m:'M5', c:0,f:3},
  {id:'catal',  t:'Catálisis',               m:'M5', c:0,f:4},
  {id:'sobrep', t:'Sobrepotencial',          m:'M11',c:0,f:5},

  /* --- columna 2: superficie y nanoescala --- */
  {id:'gamma',  t:'Energía superficial γ',   m:'M5', c:1,f:0},
  {id:'kelvin', t:'Ecuación de Kelvin',      m:'M5', c:1,f:1},
  {id:'ostwald',t:'Maduración de Ostwald',   m:'M10',c:1,f:2},
  {id:'rcrit',  t:'Radio crítico r*',        m:'M6', c:1,f:3},
  {id:'lamer',  t:'Modelo de LaMer',         m:'M6', c:1,f:4},
  {id:'areaesp',t:'Área específica',         m:'M6', c:1,f:5},
  {id:'dlvo',   t:'DLVO y doble capa',       m:'M5', c:1,f:6},
  {id:'zeta',   t:'Potencial zeta',          m:'M7', c:1,f:7},

  /* --- columna 3: estructura cristalina --- */
  {id:'celda',  t:'Celda y átomos por celda',m:'M4', c:2,f:0},
  {id:'miller', t:'Índices de Miller',       m:'M4', c:2,f:1},
  {id:'bragg',  t:'Ley de Bragg',            m:'M7', c:2,f:2},
  {id:'extinc', t:'Reglas de extinción',     m:'M4', c:2,f:3},
  {id:'scherrer',t:'Scherrer',               m:'M7', c:2,f:4},
  {id:'densteo',t:'Densidad teórica',        m:'M4', c:2,f:5},
  {id:'defecto',t:'Vacancias y defectos',    m:'M4', c:2,f:6},

  /* --- columna 4: electrones y luz --- */
  {id:'bandas', t:'Bandas y gap',            m:'M4', c:3,f:0},
  {id:'fermi',  t:'Nivel de Fermi',          m:'M4', c:3,f:1},
  {id:'dopaje', t:'Dopaje n y p',            m:'M4', c:3,f:2},
  {id:'union',  t:'Unión p-n',               m:'M8', c:3,f:3},
  {id:'lambda', t:'λ = 1240/E',              m:'M4', c:3,f:4},
  {id:'uvvis',  t:'UV-Vis y borde',          m:'M7', c:3,f:5},
  {id:'confin', t:'Confinamiento cuántico',  m:'M4', c:3,f:6},
  {id:'plasmon',t:'Plasmón de superficie',   m:'M8', c:3,f:7},

  /* --- columna 5: medición y proceso --- */
  {id:'tga',    t:'TGA y DSC',               m:'M7', c:4,f:0},
  {id:'bet',    t:'BET',                     m:'M7', c:4,f:1},
  {id:'dls',    t:'DLS y Stokes-Einstein',   m:'M7', c:4,f:2},
  {id:'tem',    t:'TEM y SEM',               m:'M7', c:4,f:3},
  {id:'cv',     t:'Voltamperometría',        m:'M11',c:4,f:4},
  {id:'eis',    t:'Impedancia y R_ct',       m:'M11',c:4,f:5},
  {id:'corros', t:'Corrosión',               m:'M11',c:4,f:6},
  {id:'escala', t:'Escalamiento A/V',        m:'M9', c:4,f:7}
 ],
 /* a, b, por qué se tocan */
 aristas:[
  ['gibbs','equil','ΔG° = −RT·ln K. Son la misma información: el potencial y la constante están ligados, y una década de K equivale a unos 5.7 kJ/mol.'],
  ['gibbs','nernst','ΔG° = −nFE°. El potencial de celda es energía libre por unidad de carga; E° positivo y ΔG° negativo dicen lo mismo.'],
  ['nernst','equil','De ln K = nFE°/RT: un voltaje de apenas 1.1 V corresponde a una K del orden de 10³⁷.'],
  ['nernst','cv','El potencial formal que se lee como punto medio entre picos es el E° de Nernst medido en la práctica.'],
  ['arrh','catal','El catalizador baja Ea, y como k va con la exponencial de −Ea/RT, bajar 30 kJ/mol multiplica la velocidad por 10⁵.'],
  ['arrh','sobrep','El sobrepotencial de activación es la versión electroquímica de la barrera de Arrhenius, y la pendiente de Tafel informa del paso lento.'],
  ['catal','sobrep','Un electrocatalizador se compara por su i₀ y por el sobrepotencial a 10 mA/cm²: es catálisis medida en volts.'],
  ['gibbs','rcrit','La nucleación es un balance de energía libre: el término de volumen la baja y el de superficie la sube. De ahí sale r*.'],

  ['gamma','kelvin','La curvatura cuesta energía superficial, y por eso una gota pequeña tiene más presión de vapor y más solubilidad.'],
  ['kelvin','ostwald','Las partículas pequeñas son más solubles, se disuelven y redepositan en las grandes. Ese es el motor de la maduración.'],
  ['gamma','rcrit','r* = 2γ/ΔGv. Más tensión superficial encarece el núcleo y más sobresaturación lo abarata.'],
  ['rcrit','lamer','LaMer separa en el tiempo el estallido de nucleación del crecimiento posterior, que es lo que da monodispersidad.'],
  ['lamer','areaesp','El tamaño que sale de la síntesis fija el área por gramo, que va como el inverso del diámetro.'],
  ['areaesp','bet','El área específica no se calcula, se mide: adsorción de nitrógeno tratada por BET.'],
  ['areaesp','escala','Nanoescala y escalamiento son la misma razón A/V mirada desde los dos extremos: arriba estorba para disipar calor, abajo es la ventaja.'],
  ['areaesp','corros','Más área y átomos de baja coordinación hacen que una nanopartícula metálica se oxide en horas y la lámina en años.'],
  ['dlvo','zeta','El potencial zeta es la medida práctica de la barrera de DLVO: por encima de 30 mV en valor absoluto la suspensión aguanta.'],
  ['dlvo','eis','La doble capa eléctrica es la misma estructura en los dos sitios: aquí decide la estabilidad coloidal, allí es la C_dl del circuito.'],
  ['dlvo','ostwald','Son mecanismos distintos y por eso se combaten distinto: la repulsión frena la agregación pero no la maduración.'],

  ['celda','densteo','ρ = nM/(N_A·a³). Los átomos por celda son el dato que más se falla: 1, 2 y 4 para SC, BCC y FCC.'],
  ['celda','miller','Los índices nombran planos dentro de la celda, y de ahí sale el espaciado d en el sistema cúbico.'],
  ['miller','bragg','d_hkl entra directamente en la ley de Bragg: los índices dicen qué plano produce cada pico.'],
  ['bragg','extinc','Las extinciones explican qué picos faltan, y la secuencia de h²+k²+l² identifica la red: 2,4,6,8 es BCC y 3,4,8,11 es FCC.'],
  ['bragg','scherrer','El mismo pico, otra lectura: la posición da el espaciado y el ancho da el tamaño de cristalito.'],
  ['bragg','densteo','Del difractograma sale el parámetro de red, y con la masa molar se llega a la densidad teórica del material.'],
  ['densteo','defecto','Si la densidad medida sale por debajo de la teórica, la explicación son vacancias: misma celda, menos masa.'],
  ['scherrer','tem','Cristalito no es partícula. Scherrer ve el dominio coherente y el TEM ve el objeto: su diferencia dice si es policristalino.'],

  ['bandas','fermi','El nivel de Fermi es dónde cae la probabilidad de ocupación 1/2: dentro de una banda en un metal, en mitad del gap en un intrínseco.'],
  ['fermi','dopaje','Dopar no cambia el ancho del gap: mueve el nivel de Fermi hacia la banda de conducción o hacia la de valencia.'],
  ['fermi','union','Al unir p y n los niveles de Fermi deben igualarse, y para lograrlo las bandas se doblan. Ese doblado es todo el dispositivo.'],
  ['bandas','lambda','El gap fija el borde de absorción y el color de emisión por λ = 1240/E. Es la relación numérica más preguntada.'],
  ['lambda','uvvis','El UV-Vis mide ese borde y el ajuste de Tauc lo precisa, distinguiendo además gap directo de indirecto.'],
  ['bandas','confin','Por debajo del radio de Bohr del excitón el gap efectivo sube como 1/L², y el punto pequeño emite más al azul.'],
  ['confin','uvvis','El corrimiento del borde de absorción respecto al material masivo es la medida directa del confinamiento.'],
  ['plasmon','uvvis','La banda de plasmón del oro cae cerca de 520 nm; si se corre al rojo y se ensancha, hay agregación.'],
  ['plasmon','zeta','Agregación: el plasmón la delata por el color y el potencial zeta explica por qué ocurrió.'],
  ['union','lambda','El color de un LED lo fija el gap del material activo, y por eso el azul exigió nitruro de galio.'],

  ['tga','bet','TGA cuantifica cuánto recubrimiento hay y BET sobre qué área está repartido: juntos dan la densidad de injerto.'],
  ['dls','tem','El DLS mide el diámetro hidrodinámico en suspensión y el TEM el núcleo seco. Que difieran mucho indica agregación.'],
  ['dls','zeta','Los dos describen la misma suspensión: uno el tamaño del objeto que se mueve y otro la barrera que lo mantiene separado.'],
  ['cv','eis','Las dos miden la misma interfaz: la voltamperometría barriendo potencial y la impedancia perturbando en frecuencia.'],
  ['eis','corros','R_ct grande significa recubrimiento que protege; su caída en el tiempo mide el deterioro sin esperar al óxido visible.'],
  ['cv','sobrep','El voltamperograma hace visible el sobrepotencial: la separación de picos crece cuando la transferencia no da abasto.'],
  ['corros','nernst','La corrosión es una celda galvánica espontánea que se arma sola, y los potenciales estándar predicen quién se come a quién.']
 ]
};
</script>
