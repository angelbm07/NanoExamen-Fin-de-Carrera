<script>
/* ============================================================
   FIGURAS DE DERIVACIÓN Y DE ÓRDENES DE REACCIÓN
   La idea no es memorizar veinte ecuaciones sino ver de dónde
   sale cada una: dos leyes, tres definiciones y lo demás cae.
   ============================================================ */

FIG.derivacion={t:'De dónde sale cada ecuación de termodinámica',svg:
'<svg viewBox="0 0 540 400" role="img" aria-label="Árbol que deriva las ecuaciones de la termodinámica desde la primera ley y las definiciones">'+
(function(){
 var s='';
 function caja(x,y,w,hh,txt,col,sub){
   s+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" rx="7" fill="var(--'+col+'-bg)" stroke="var(--'+col+')" stroke-width="1.4"/>'+
      '<text x="'+(x+w/2)+'" y="'+(y+(sub?16:hh/2+4))+'" text-anchor="middle" class="txm" style="font-size:11px;font-weight:700" fill="var(--'+col+')">'+txt+'</text>';
   if(sub)s+='<text x="'+(x+w/2)+'" y="'+(y+30)+'" text-anchor="middle" class="txs" style="font-size:9px">'+sub+'</text>';
 }
 function flecha(x1,y1,x2,y2,et){
   s+='<path class="sl2" d="M'+x1+','+y1+' L'+x2+','+y2+'" marker-end="url(#fd)"/>';
   if(et)s+='<text x="'+((x1+x2)/2+5)+'" y="'+((y1+y2)/2-3)+'" class="txs" style="font-size:8.5px">'+et+'</text>';
 }
 s+='<defs><marker id="fd" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">'+
    '<path d="M0,0 L6,3 L0,6 Z" fill="var(--ink-dim)"/></marker></defs>';

 s+='<text x="12" y="14" class="txs" style="font-size:8.5px;letter-spacing:.09em">PUNTO DE PARTIDA</text>';
 caja(12,22,240,38,'dU = δq + δw','m5','primera ley · la energía se conserva');
 caja(282,22,246,38,'dS = δq_rev / T','m5','segunda ley · define la entropía');

 s+='<text x="12" y="88" class="txs" style="font-size:8.5px;letter-spacing:.09em">TRES DEFINICIONES, NADA MÁS</text>';
 caja(12,96,160,34,'H = U + PV','m4');
 caja(190,96,160,34,'A = U − TS','m4');
 caja(368,96,160,34,'G = H − TS','m4');
 flecha(132,60,92,96); flecha(132,60,270,96); flecha(405,60,448,96);

 s+='<text x="12" y="164" class="txs" style="font-size:8.5px;letter-spacing:.09em">SE DIFERENCIAN Y SALEN SOLAS</text>';
 caja(12,172,160,34,'dH = TdS + VdP','m11');
 caja(190,172,160,34,'dA = −SdT − PdV','m11');
 caja(368,172,160,34,'dG = −SdT + VdP','m11');
 flecha(92,130,92,172); flecha(270,130,270,172); flecha(448,130,448,172);

 s+='<text x="12" y="240" class="txs" style="font-size:8.5px;letter-spacing:.09em">Y DE AHÍ, TODO LO QUE USAS</text>';
 caja(12,248,120,40,'ΔG = ΔH − TΔS','m9','a T constante');
 caja(146,248,120,40,'ΔG° = −RT ln K','m9','en el equilibrio');
 caja(280,248,120,40,'ΔG° = −nFE°','m9','celda electroquímica');
 caja(414,248,114,40,'(∂G/∂P)_T = V','m9','Maxwell');
 flecha(448,206,70,248,''); flecha(448,206,205,248,''); flecha(448,206,338,248,''); flecha(470,206,470,248,'');

 s+='<text x="12" y="316" class="txs" style="font-size:8.5px;letter-spacing:.09em">CASOS PARTICULARES DE LA PRIMERA LEY</text>';
 caja(12,324,120,40,'Isotérmico','m6','ΔU = 0 · q = −w');
 caja(146,324,120,40,'Isobárico','m6','q_P = ΔH');
 caja(280,324,120,40,'Isocórico','m6','w = 0 · q_V = ΔU');
 caja(414,324,114,40,'Adiabático','m6','q = 0 · ΔU = w');
 flecha(132,60,70,324,''); flecha(132,60,205,324,''); flecha(132,60,338,324,''); flecha(132,60,470,324,'');
 return s;
})()+'</svg>',
pie:'<b>No son veinte ecuaciones: son dos leyes y tres definiciones.</b> Cada caja de abajo sale de diferenciar una de arriba. Si en el examen te bloqueas con una fórmula, reconstruye la cadena desde dU = δq + δw y desde G = H − TS, que son las dos que sí conviene saberse de memoria. Las flechas al pie son la primera ley aplicada a un proceso en el que algo se mantiene constante, que es de donde salen los cuatro casos que más se preguntan.'};

FIG.ordenes={t:'Los tres órdenes de reacción y la recta que delata a cada uno',svg:
'<svg viewBox="0 0 540 240" role="img" aria-label="Comparación de las linealizaciones de orden cero, uno y dos">'+
(function(){
 var s='',P=[
  ['Orden 0','[A] contra t','m2','[A] = [A]₀ − kt','k en M/s','t½ = [A]₀/2k'],
  ['Orden 1','ln[A] contra t','m5','ln[A] = ln[A]₀ − kt','k en s⁻¹','t½ = 0.693/k'],
  ['Orden 2','1/[A] contra t','m10','1/[A] = 1/[A]₀ + kt','k en M⁻¹s⁻¹','t½ = 1/(k[A]₀)']
 ];
 P.forEach(function(p,i){
  var x=12+i*178, col=p[2];
  s+='<rect x="'+x+'" y="10" width="162" height="220" rx="8" fill="var(--surface)" stroke="var(--'+col+')" stroke-width="1.3"/>';
  s+='<text x="'+(x+12)+'" y="30" class="txm" style="font-size:12px;font-weight:700" fill="var(--'+col+')">'+p[0]+'</text>';
  /* mini gráfica: recta descendente para 0 y 1, ascendente para 2 */
  var gx=x+22, gy=46, gw=118, gh=74;
  s+='<path class="sl2" d="M'+gx+','+(gy+gh)+' L'+(gx+gw)+','+(gy+gh)+'"/>'+
     '<path class="sl2" d="M'+gx+','+gy+' L'+gx+','+(gy+gh)+'"/>';
  var d=(i===2)?('M'+(gx+6)+','+(gy+gh-8)+' L'+(gx+gw-6)+','+(gy+10))
               :('M'+(gx+6)+','+(gy+10)+' L'+(gx+gw-6)+','+(gy+gh-8));
  s+='<path d="'+d+'" fill="none" stroke="var(--'+col+')" stroke-width="2.4"/>';
  s+='<text x="'+(gx-4)+'" y="'+(gy+4)+'" class="txs" style="font-size:8px" text-anchor="end">'+(i===2?'1/[A]':(i===1?'ln[A]':'[A]'))+'</text>';
  s+='<text x="'+(gx+gw)+'" y="'+(gy+gh+11)+'" class="txs" style="font-size:8px" text-anchor="end">t</text>';
  s+='<text x="'+(x+12)+'" y="'+(gy+gh+30)+'" class="txs" style="font-size:9px;font-weight:700">'+p[1]+' da recta</text>';
  s+='<text x="'+(x+12)+'" y="'+(gy+gh+46)+'" class="txm" style="font-size:9px">'+p[3]+'</text>';
  s+='<text x="'+(x+12)+'" y="'+(gy+gh+60)+'" class="txs" style="font-size:8.5px">'+p[4]+'</text>';
  s+='<text x="'+(x+12)+'" y="'+(gy+gh+74)+'" class="txm" style="font-size:9px" fill="var(--'+col+')">'+p[5]+'</text>';
 });
 return s;
})()+'</svg>',
pie:'<b>El método es siempre el mismo: grafica las tres y quédate con la que da recta.</b> La pendiente de esa recta es ±k, y el signo lo dice la forma de la ecuación. Fíjate en el detalle que más se pregunta: la vida media del <b>orden uno es la única que no depende de la concentración inicial</b>, y por eso la desintegración radiactiva y casi toda la farmacocinética se modelan así.'};
</script>
