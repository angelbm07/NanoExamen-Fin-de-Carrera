<script>
/* ============================================================
   GRÁFICAS DE EJERCICIO
   A diferencia de las figuras explicativas, estas llevan datos
   concretos que hay que leer para contestar el reactivo.
   ============================================================ */
var GRAF={};

/* --- utilidades de ejes --- */
function _ejes(w,h,xlab,ylab,ticks){
  var s='<path class="sl2" d="M46,'+(h-34)+' L'+(w-14)+','+(h-34)+'"/><path class="sl2" d="M46,12 L46,'+(h-34)+'"/>'+
    '<text class="txs" x="'+((w+32)/2)+'" y="'+(h-8)+'" text-anchor="middle">'+xlab+'</text>'+
    '<text class="txs" x="14" y="'+((h-22)/2)+'" transform="rotate(-90 14,'+((h-22)/2)+')" text-anchor="middle">'+ylab+'</text>';
  (ticks||[]).forEach(function(t){
    s+='<path class="sl2" d="M'+t[0]+','+(h-34)+' L'+t[0]+','+(h-29)+'"/>'+
       '<text class="txm" x="'+t[0]+'" y="'+(h-20)+'" text-anchor="middle">'+t[1]+'</text>';
  });
  return s;
}

/* 1 · Difractograma a indexar ------------------------------------ */
GRAF.xrd_index={t:'Difractograma de una muestra cúbica',svg:
'<svg viewBox="0 0 520 250" role="img" aria-label="Difractograma con cuatro picos etiquetados por su ángulo">'+
_ejes(520,250,'2θ (grados)','intensidad',[[46,'20'],[140,'30'],[234,'40'],[328,'50'],[422,'60'],[500,'70']])+
[[178,70,'38.2°'],[253,110,'44.4°'],[372,160,'64.6°'],[438,170,'77.5°']].map(function(p){
 return '<path class="sl" style="stroke:var(--m7);stroke-width:2;fill:none" d="M'+(p[0]-7)+',216 L'+p[0]+','+p[1]+' L'+(p[0]+7)+',216"/>'+
        '<text class="txm" x="'+p[0]+'" y="'+(p[1]-7)+'" text-anchor="middle" fill="var(--m7)">'+p[2]+'</text>';
}).join('')+
'<path class="sd" d="M46,216 L506,216" opacity=".5"/>'+
'</svg>',
pie:'Radiación de cobre, λ = 0.15406 nm. Las cuatro reflexiones están en 38.2°, 44.4°, 64.6° y 77.5°.'};

/* 2 · Curva de TGA con tres pérdidas ----------------------------- */
GRAF.tga={t:'Termograma de una nanopartícula funcionalizada',svg:
'<svg viewBox="0 0 520 250" role="img" aria-label="Curva de pérdida de masa frente a temperatura con tres escalones">'+
_ejes(520,250,'temperatura (°C)','masa (%)',[[46,'25'],[160,'200'],[274,'400'],[388,'600'],[496,'800']])+
'<text class="txm" x="40" y="26" text-anchor="end">100</text>'+
'<text class="txm" x="40" y="216" text-anchor="end">60</text>'+
'<path class="sl" style="stroke:var(--m7);stroke-width:2.4;fill:none" d="M46,22 L96,22 C106,22 110,34 122,34 L150,34 C162,34 168,46 178,62 C196,92 214,118 240,124 L300,126 C330,127 350,132 366,146 C380,158 392,162 410,163 L500,164"/>'+
'<path class="sd" d="M46,22 L122,22"/><path class="sd" d="M46,34 L240,34"/>'+
'<path class="sd" d="M46,124 L300,124"/><path class="sd" d="M46,164 L420,164"/>'+
'<text class="txs" x="130" y="48" fill="var(--m7)">100 a 150 °C</text>'+
'<text class="txs" x="200" y="108" fill="var(--m7)">250 a 420 °C</text>'+
'<text class="txs" x="356" y="186" fill="var(--m7)">620 a 700 °C</text>'+
'<text class="txm" x="508" y="168" text-anchor="end">76 %</text>'+
'</svg>',
pie:'Atmósfera de aire. Escalones: de 100 a 100 − 3 % hasta 150 °C, luego hasta 82 % entre 250 y 420 °C, y un último hasta 76 % por encima de 620 °C.'};

/* 3 · DSC de un polímero ----------------------------------------- */
GRAF.dsc={t:'Termograma DSC de un polímero',svg:
'<svg viewBox="0 0 520 230" role="img" aria-label="Curva DSC con escalón, exotermo y endotermo">'+
_ejes(520,230,'temperatura (°C)','flujo de calor →endo',[[46,'−50'],[150,'0'],[254,'50'],[358,'100'],[462,'150'],[500,'175']])+
'<path class="sl" style="stroke:var(--m3);stroke-width:2.4;fill:none" d="M46,110 L96,110 C110,110 112,128 126,128 L180,128 C210,128 218,128 228,112 C236,100 244,100 252,112 C262,128 272,128 300,128 L372,128 C388,128 392,150 404,166 C412,176 420,176 428,166 C440,150 444,128 460,128 L500,128"/>'+
'<path class="sd" d="M100,110 L100,196"/><path class="sd" d="M240,104 L240,196"/><path class="sd" d="M416,172 L416,196"/>'+
'<text class="txs" x="100" y="100" text-anchor="middle" fill="var(--m3)">escalón</text>'+
'<text class="txs" x="240" y="94" text-anchor="middle" fill="var(--m3)">exotermo</text>'+
'<text class="txs" x="416" y="190" text-anchor="middle" fill="var(--m3)">endotermo</text>'+
'<text class="txm" x="100" y="208" text-anchor="middle">−25 °C</text>'+
'<text class="txm" x="240" y="208" text-anchor="middle">45 °C</text>'+
'<text class="txm" x="416" y="208" text-anchor="middle">128 °C</text>'+
'</svg>',
pie:'Primer calentamiento de una muestra enfriada rápidamente desde el fundido. Tres eventos: escalón a −25 °C, pico exotérmico a 45 °C y pico endotérmico a 128 °C.'};

/* 4 · Arrhenius ---------------------------------------------------- */
GRAF.arrhenius={t:'Gráfica de Arrhenius de dos reacciones',svg:
'<svg viewBox="0 0 520 240" role="img" aria-label="Logaritmo de k frente al inverso de la temperatura, dos rectas de pendiente distinta">'+
_ejes(520,240,'1000/T (K⁻¹)','ln k',[[46,'2.8'],[160,'3.0'],[274,'3.2'],[388,'3.4'],[480,'3.6']])+
'<path class="sl" style="stroke:var(--m5);stroke-width:2.2;fill:none" d="M60,46 L480,142"/>'+
'<path class="sl" style="stroke:var(--m10);stroke-width:2.2;fill:none" d="M60,70 L480,196"/>'+
'<circle cx="60" cy="46" r="3.5" fill="var(--m5)"/><circle cx="270" cy="94" r="3.5" fill="var(--m5)"/><circle cx="480" cy="142" r="3.5" fill="var(--m5)"/>'+
'<circle cx="60" cy="70" r="3.5" fill="var(--m10)"/><circle cx="270" cy="133" r="3.5" fill="var(--m10)"/><circle cx="480" cy="196" r="3.5" fill="var(--m10)"/>'+
'<text class="txs" x="490" y="138" fill="var(--m5)" text-anchor="end">reacción A</text>'+
'<text class="txs" x="490" y="212" fill="var(--m10)" text-anchor="end">reacción B</text>'+
'<text class="txm" x="40" y="50" text-anchor="end">−4</text>'+
'<text class="txm" x="40" y="196" text-anchor="end">−10</text>'+
'</svg>',
pie:'Dos reacciones medidas en el mismo intervalo de temperatura. La recta A va de ln k = −4.0 a −6.0; la B va de −4.4 a −7.0, sobre el mismo eje de 1000/T entre 2.8 y 3.6.'};

/* 5 · Curva esfuerzo-deformación de tres materiales ----------------- */
GRAF.sigma_eps={t:'Esfuerzo-deformación de tres materiales',svg:
'<svg viewBox="0 0 520 240" role="img" aria-label="Tres curvas de esfuerzo contra deformación con comportamientos distintos">'+
_ejes(520,240,'deformación ε','esfuerzo σ (MPa)',[[46,'0'],[160,'0.05'],[274,'0.10'],[388,'0.15'],[480,'0.19']])+
'<path class="sl" style="stroke:var(--m4);stroke-width:2.2;fill:none" d="M46,206 L120,30"/>'+
'<circle cx="120" cy="30" r="4" fill="var(--bad)"/>'+
'<path class="sl" style="stroke:var(--m9);stroke-width:2.2;fill:none" d="M46,206 L104,96 C130,70 190,62 260,60 C330,58 400,66 450,84"/>'+
'<path class="sl" style="stroke:var(--m10);stroke-width:2.2;fill:none" d="M46,206 C120,198 220,186 320,160 C390,140 440,118 480,96"/>'+
'<text class="txs" x="126" y="24" fill="var(--m4)">material 1</text>'+
'<text class="txs" x="268" y="52" fill="var(--m9)">material 2</text>'+
'<text class="txs" x="420" y="140" fill="var(--m10)">material 3</text>'+
'<text class="txm" x="40" y="34" text-anchor="end">600</text>'+
'<text class="txm" x="40" y="206" text-anchor="end">0</text>'+
'</svg>',
pie:'El material 1 rompe en el punto marcado sin salir del tramo recto. El 2 cede cerca de ε = 0.02 y sigue deformándose. El 3 nunca es lineal y admite deformación grande con esfuerzo bajo.'};

/* 6 · Voltamperograma con dos velocidades --------------------------- */
GRAF.cv_dos={t:'Voltamperogramas a dos velocidades de barrido',svg:
'<svg viewBox="0 0 520 250" role="img" aria-label="Dos voltamperogramas cíclicos registrados a 25 y 100 milivolts por segundo">'+
'<path class="sl2" d="M46,124 L500,124"/><path class="sl2" d="M46,16 L46,232"/>'+
'<text class="txs" x="276" y="246" text-anchor="middle">potencial E (V)</text>'+
'<text class="txs" x="14" y="124" transform="rotate(-90 14,124)" text-anchor="middle">corriente i (µA)</text>'+
'<path class="sl" style="stroke:var(--m11);stroke-width:1.8;fill:none" d="M70,124 C150,123 200,118 236,104 C252,96 262,88 276,87 C292,86 304,96 330,104 C372,116 440,121 486,122"/>'+
'<path class="sl" style="stroke:var(--m11);stroke-width:1.8;fill:none" d="M486,126 C440,127 372,132 330,144 C304,152 292,162 262,161 C248,160 240,152 226,144 C190,130 150,125 70,124"/>'+
'<path class="sl" style="stroke:var(--m8);stroke-width:1.8;fill:none;opacity:.85" d="M70,124 C150,122 200,112 236,84 C252,70 262,52 276,51 C292,50 304,70 330,84 C372,108 440,120 486,122"/>'+
'<path class="sl" style="stroke:var(--m8);stroke-width:1.8;fill:none;opacity:.85" d="M486,126 C440,128 372,140 330,164 C304,178 292,198 262,197 C248,196 240,178 226,164 C190,136 150,126 70,124"/>'+
'<text class="txm" x="286" y="44" fill="var(--m8)">100 mV/s · i_p = 48 µA</text>'+
'<text class="txm" x="286" y="80" fill="var(--m11)">25 mV/s · i_p = 24 µA</text>'+
'<path class="sd" d="M276,51 L276,124"/><path class="sd" d="M262,197 L262,124"/>'+
'</svg>',
pie:'El mismo analito, misma celda y misma concentración, registrado a 25 y a 100 mV/s. Las corrientes de pico anódico son 24 y 48 µA respectivamente.'};

/* 7 · Isoterma de adsorción ---------------------------------------- */
GRAF.isoterma={t:'Isoterma de adsorción de nitrógeno a 77 K',svg:
'<svg viewBox="0 0 520 240" role="img" aria-label="Isoterma con ciclo de histéresis entre adsorción y desorción">'+
_ejes(520,240,'presión relativa p/p₀','volumen adsorbido',[[46,'0'],[160,'0.25'],[274,'0.50'],[388,'0.75'],[480,'1.0']])+
'<path class="sl" style="stroke:var(--m6);stroke-width:2.2;fill:none" d="M46,200 C70,166 96,152 130,146 C180,138 240,132 300,122 C350,112 390,92 420,62 C440,42 460,32 480,26"/>'+
'<path class="sl" style="stroke:var(--m6);stroke-width:2.2;fill:none;stroke-dasharray:5 3" d="M480,26 C456,32 436,42 414,62 C392,84 360,100 316,106 C270,112 230,124 190,132 C150,140 110,144 46,200"/>'+
'<text class="txs" x="372" y="118" fill="var(--m6)">histéresis</text>'+
'<path class="sl2" d="M352,112 L330,110" marker-end="url(#fi)"/>'+
'<defs><marker id="fi" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--ink-dim)"/></marker></defs>'+
'<text class="txs" x="92" y="140" fill="var(--ink-dim)">zona BET</text>'+
'<path class="sd" d="M92,146 L92,206"/><path class="sd" d="M160,138 L160,206"/>'+
'</svg>',
pie:'Línea continua: adsorción. Línea discontinua: desorción. El ciclo de histéresis se abre por encima de p/p₀ ≈ 0.45 y se cierra al final.'};

/* 8 · Nyquist de impedancia ---------------------------------------- */
GRAF.nyquist={t:'Diagrama de Nyquist de dos electrodos',svg:
'<svg viewBox="0 0 520 250" role="img" aria-label="Parte imaginaria frente a parte real de la impedancia, dos semicírculos de distinto diámetro">'+
_ejes(520,250,'Z real (Ω)','−Z imaginaria (Ω)',[[46,'0'],[160,'100'],[274,'200'],[388,'300'],[480,'390']])+
'<path class="sl" style="stroke:var(--m8);stroke-width:2.2;fill:none" d="M80,214 A46,46 0 0 1 172,214"/>'+
'<path class="sl" style="stroke:var(--m8);stroke-width:2.2;fill:none" d="M172,214 L250,138"/>'+
'<path class="sl" style="stroke:var(--m10);stroke-width:2.2;fill:none;opacity:.9" d="M80,214 A126,126 0 0 1 332,214"/>'+
'<path class="sl" style="stroke:var(--m10);stroke-width:2.2;fill:none;opacity:.9" d="M332,214 L416,130"/>'+
'<circle cx="80" cy="214" r="3.5" fill="var(--ink)"/>'+
'<text class="txm" x="80" y="230" text-anchor="middle">30</text>'+
'<text class="txm" x="172" y="230" text-anchor="middle">110</text>'+
'<text class="txm" x="332" y="230" text-anchor="middle">250</text>'+
'<text class="txs" x="126" y="156" fill="var(--m8)" text-anchor="middle">electrodo A</text>'+
'<text class="txs" x="206" y="86" fill="var(--m10)">electrodo B</text>'+
'</svg>',
pie:'Dos electrodos medidos en el mismo electrolito. Ambos semicírculos arrancan en Z = 30 Ω; el de A cierra en 110 Ω y el de B en 250 Ω. La recta final de cada uno sale a 45°.'};
</script>
