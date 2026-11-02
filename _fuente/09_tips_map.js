<script>
/* ============================================================
   ENGANCHE DE TRUCOS A REACTIVOS
   Reglas en orden: la primera que casa gana. Cada regla es
   [clave del truco, expresión que debe aparecer en enunciado,
   opciones o explicación].
   ============================================================ */
(function(){
  var REGLAS=[
   /* concentración */
   ['dilucion',     /dilu|madre|C₁V₁|aforad/i],
   ['molaridad',    /molalidad|molaridad|mol por litro|mol\/L|crioscóp/i],
   ['ppm',          /ppm|partes por mill|mg\/L/i],
   ['cifras',       /cifras significativas|decimales|redonde/i],
   /* dato */
   ['exactitud',    /exactitud|precisi[óo]n|réplicas|prueba Q|sistemático|aleatorio/i],
   ['lod',          /límite de detección|LOD|LOQ|ruido del blanco/i],
   ['matriz',       /R²|efecto de matriz|adición de estándar|calibración/i],
   ['pvalor',       /valor p|p = 0|significan|ANOVA|réplicas por grupo/i],
   /* termo */
   ['estadoProceso',/función de estado|funciones de estado|función de proceso|camino/i],
   ['adiabatico',   /adiab|isoterm|isobár|isocór|PV\^|γ/i],
   ['entalpia',     /presión constante|volumen constante|bomba calorim|entalp/i],
   ['unidadesS',    /entropía|ΔS°?\b/],
   ['gibbsK',       /ln K|constante de equilibrio|K =|ΔG° = −RT/i],
   ['quociente',    /cociente de reacción|sentido inverso|\bQ es\b|valor de Q/i],
   ['leChatelier',  /Le Ch[aâ]telier|desplaza(r|rse)? (hacia|el equilibrio)|gas inerte|recipiente rígido/i],
   ['gibbs',        /ΔG|energía libre|espontáne|temperatura de cruce|ΔH y ΔS/i],
   /* cinética · de lo específico a lo general */
   ['vidamedia',    /vida media|t½|semivida/i],
   ['unidadesK',    /unidades de k|M⁻¹s⁻¹/],
   ['orden',        /orden de (la )?reacci|primer orden|segundo orden|orden cero|velocidad inicial|1\/\[A\]|linealiza/i],
   ['arrhenius',    /Arrhenius|energía de activación|\bE_?a\b|ln\s*\(?k[₂2]?/],
   ['catalizador',  /catalizador|electrocatalizador|catálisis/i],

   /* coligativas y superficie */
   ['coligativas',  /coligativ|crioscóp|ebulloscóp|van.t Hoff|punto de fusión de la disoluc|presión osmótica/i],
   ['kelvin',       /Ostwald|Kelvin|curvatura|presión de vapor de una gota/i],
   ['dlvo',         /DLVO|doble capa|fuerza iónica|medio fisiológico|agrega/i],
   ['zeta',         /potencial zeta|isoeléctrico/i],
   /* nano */
   ['superficie',   /área específica|fracción de átomos|superficie a volumen|m²\/g/i],
   ['rcritico',     /radio crítico|\br\*|sobresaturación/],
   ['lamer',        /LaMer|monodispers|inyección caliente|nucleación/i],
   ['forma',        /director de forma|nanovarilla|nanocubo|morfología|caras cristalin/i],
   /* estructura */
   ['colorAbs',     /de qué color|se ve de|color percibido|complementario|emite (en|más)/i],
   ['lambda',       /1240|longitud de onda|nm.*eV|eV.*nm|brecha|gap/i],
   ['unidadesDens', /densidad teórica|g\/cm³|parámetro de red/i],
   ['celda',        /átomos por celda|\bFCC\b|\bBCC\b|celda unitaria|empaquetamiento|número de coordinación/],
   ['cristalito',   /cristalito|dominio coherente/i],
   ['bragg',        /Bragg|2θ|difracción|Scherrer|espaciado/i],
   ['fermi',        /Fermi|dopaj|tipo n|tipo p|unión p-n/i],
   ['confinamiento',/confinamiento|punto[s]? cuántico/i],
   /* caracterización */
   ['dlsTem',       /DLS|hidrodinámico|dispersión dinámica/i],
   ['tga',          /TGA|termogravim|pérdida de masa/i],
   ['dsc',          /DSC|transición vítrea|Tg|endotérm|exotérm/i],
   ['uvvis',        /UV-Vis|plasmón|borde de absorción/i],
   ['tecnica',      /qué técnica|técnica elige|técnica usa|técnica aplica|técnica es la adecuada|técnica te lo|qué instrumento/i],
   ['grafica',      /gráfica|difractograma|termograma|voltamperograma|isoterma de adsorción|Nyquist/i],
   /* electro */
   ['faraday',      /Faraday|electroliz|electrodepos|eficiencia faradaica|anodiz/i],
   ['nernst',       /Nernst|0.0592|mV por década|electrodo selectivo|celda de concentración/i],
   ['ecelda',       /E°|potencial estándar|galvánica|pila/i],
   ['randles',      /Randles|velocidad de barrido|voltamperometría cíclica|i_p/i],
   ['rct',          /impedancia|R_ct|semicírculo/i],
   ['corrosion',    /corrosión|ánodo de sacrificio|Pilling|herrumbre|niebla salina/i],
   ['anodo',        /ánodo|cátodo|puente salino|electrólisis/i],
   /* proceso */
   ['criterios',    /P\/V|velocidad de punta|impulsor|similarid|escalamiento conserv/i],
   ['escalaAV',     /escal|planta piloto|descontrol[oa] térmic/i],
   ['propagacion',  /incertidumbre|propaga/i],
   ['reactores',    /\bCSTR\b|\bPFR\b|tiempo espacial|conversión (global|por paso)/],
   ['vpn',          /\bVPN\b|\bTIR\b|periodo de recuperación|punto de equilibrio|tasa de descuento|seis décimos/i],
   ['tecnica',      /\bXPS\b|\bEDS\b|\bBET\b|\bAFM\b|\bSEM\b|\bTEM\b|\bICP\b|\bRaman\b|infrarrojo|resonancia magnética|cromatograf/],
   ['grafica',      /espectro|pico|banda a \d|curva/i],
   /* orgánica, bioquímica y los que faltaban */
   ['redox',        /KMnO|permanganato|Fe²⁺|volumetría redox|igualar electrones/],
   ['buffer',       /amortigua|buffer|tampón|pK[a₍]|Henderson/i],
   ['isomeria',     /enantiómer|diastereómer|isómer|meso\b|ópticamente activ/i],
   ['mecanismo',    /peróxido|Markovnikov|radicalario|regioselect/i],
   ['sn',           /SN1|SN2|\bE2\b|halogenuro|terc-butilo|solvólisis/],
   ['inhibidor',    /inhibidor|Vmax|V_?max|Michaelis/i],
   ['carothers',    /Carothers|policondensa|grado de polimerizaci|polidispersid/i],
   ['quiral',       /quiral|racémic|estereogénic/i],
   ['aromatica',    /anillo aromático|nitrar|orto|meta\b|arenio|sustitución electrofílica/i],
   ['miller',       /Miller|plano cristalográfico|índices \(|\(210\)|corta al eje/i],
   ['polaridad',    /momento dipolar|apolar|simetría de la geometría/i],
   ['conformal',    /conformal|ALD|sputtering|línea de vista|cobertura de escalón|recubres/i],
   ['poiseuille',   /Hagen|Poiseuille|microcanal|caudal/i],
   /* formulación */
   ['hlb',          /HLB|Bancroft|emulsión de aceite|surfactante/i],
   ['stokes',       /cremado|Stokes|sedimenta/i],
   ['inestabilidad',/coalescencia|floculación|dos capas|agitar(la)? se recupera|reversib/i],
   ['lipinski',     /Lipinski|logP|biodisponibilidad|absorción oral/i]
  ];

  var n=0, porClave={};
  QUIZ.forEach(function(q){
    if(q.tip)return;                               /* respeta los escritos a mano */
    var texto=q.q+' '+q.opts.join(' ')+' '+q.exp;
    for(var i=0;i<REGLAS.length;i++){
      if(REGLAS[i][1].test(texto)){
        var k=REGLAS[i][0];
        if(TIPS[k]){ q.tip=TIPS[k]; n++; porClave[k]=(porClave[k]||0)+1 }
        break;
      }
    }
  });
  window.__tipsAplicados={total:n, de:QUIZ.length, porClave:porClave};
})();
</script>
