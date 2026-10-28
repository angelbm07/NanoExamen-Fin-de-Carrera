<script>
/* ============================================================
   MATEMÁTICAS · MathML nativo, sin dependencias externas.
   Los navegadores actuales lo maquetan como LaTeX: fracciones
   apiladas, radicales con su vínculo y sub/superíndices reales.
   ============================================================ */
var M=(function(){
  function j(a){ return Array.prototype.slice.call(a).join('') }
  return {
    i:function(s,c){ return '<mi'+(c?' class="'+c+'"':'')+'>'+s+'</mi>' },   /* variable  */
    n:function(s){ return '<mn>'+s+'</mn>' },                                 /* número    */
    o:function(s){ return '<mo>'+s+'</mo>' },                                 /* operador  */
    t:function(s){ return '<mtext>'+s+'</mtext>' },                           /* texto     */
    k:function(s){ return '<mi class="cte">'+s+'</mi>' },                     /* constante */
    r:function(){ return '<mrow>'+j(arguments)+'</mrow>' },
    frac:function(a,b){ return '<mfrac>'+a+b+'</mfrac>' },
    sqrt:function(a){ return '<msqrt>'+a+'</msqrt>' },
    sup:function(a,b){ return '<msup>'+a+b+'</msup>' },
    sub:function(a,b){ return '<msub>'+a+b+'</msub>' },
    subsup:function(a,b,c){ return '<msubsup>'+a+b+c+'</msubsup>' },
    par:function(a){ return '<mrow><mo>(</mo>'+a+'<mo>)</mo></mrow>' },
    abs:function(a){ return '<mrow><mo>|</mo>'+a+'<mo>|</mo></mrow>' },
    esp:function(){ return '<mspace width="1.1em"/>' },
    math:function(){ return '<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">'+j(arguments)+'</math>' }
  };
})();


/* ============================================================
   CONVERSOR  texto → MathML
   Gramática restringida, la que de hecho usan los formularios.
   Si algo no encaja, devuelve null y el llamador deja el texto
   original: nunca se arriesga a maquetar mal una fórmula.
   ============================================================ */
function aMathML(src){
  try{
    var s=String(src)
      .replace(/<sub>(.*?)<\/sub>/g,function(_,x){return '_{'+x+'}'})
      .replace(/<sup>(.*?)<\/sup>/g,function(_,x){return '^{'+x+'}'})
      .replace(/<\/?b>/g,'');
    if(/[<>]/.test(s))return null;                 /* queda HTML sin tratar */

    var i=0, FUN={sen:1,cos:1,tan:1,log:1,ln:1,exp:1,max:1,min:1};
    var CTE={R:1,F:1,N:1,k:0,h:0};

    function ws(){ while(i<s.length && s[i]===' ')i++ }
    function fin(){ ws(); return i>=s.length }
    function ver(){ ws(); return s[i] }

    function esLetra(c){ return c && /[A-Za-zÀ-ÿĀ-ſα-ωΑ-Ωµ∞′″\u0300-\u036f°]/.test(c) }
    function esDig(c){ return c && /[0-9]/.test(c) }
    function esSupSub(c){ return c && /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ᵃ-ᶻⁿⁱ₀₁₂₃₄₅₆₇₈₉₊₋ₐ-ₜ]/.test(c) }

    function grupo(){                               /* {...} o un átomo */
      ws();
      if(s[i]==='{'){
        var d=1,j=++i;
        while(j<s.length&&d>0){ if(s[j]==='{')d++; if(s[j]==='}')d--; j++ }
        var dentro=s.slice(i,j-1); i=j;
        var sub=aMathML(dentro);
        return sub?sub.replace(/^<math[^>]*>|<\/math>$/g,''):'<mi>'+dentro+'</mi>';
      }
      return atomo();
    }

    function atomo(){
      ws();
      var c=s[i];
      if(c===undefined)throw 0;
      if(c==='('){ i++; var e=expr(); ws(); if(s[i]!==')')throw 0; i++; return M.par(e) }
      if(c==='['){ i++; var e2=expr(); ws(); if(s[i]!==']')throw 0; i++; return '<mrow><mo>[</mo>'+e2+'<mo>]</mo></mrow>' }
      if(c==='|'){ i++; var a=expr(); ws(); if(s[i]!=='|')throw 0; i++; return M.abs(a) }
      if(c==='√'){ i++; return M.sqrt(grupo()) }
      if(c==='Σ'||c==='∫'||c==='∏'){ i++; return '<mo stretchy="false">'+c+'</mo>'+potencia() }
      if(esDig(c)){
        var n='';
        while(i<s.length&&/[0-9.,]/.test(s[i])&&!(s[i]===','&&!esDig(s[i+1])))n+=s[i++];
        while(esSupSub(s[i]))n+=s[i++];
        return M.n(n);
      }
      if(esLetra(c)){
        var w='';
        while(i<s.length&&esLetra(s[i]))w+=s[i++];
        while(esSupSub(s[i]))w+=s[i++];
        if(FUN[w])return '<mi class="fun">'+w+'</mi>';
        if(w.length>2)return M.t(w);                /* palabra: texto recto */
        return CTE[w]?M.k(w):M.i(w);
      }
      throw 0;
    }

    function potencia(){
      var a=atomo(), g;
      while(true){
        if(esSupSub(s[i])){                      /* ² ³ ⁻¹ pegados al cierre */
          var u='';while(esSupSub(s[i]))u+=s[i++];
          a=M.sup(a,M.n(u)); continue;
        }
        ws();
        if(s[i]==='^'){ i++; g=grupo(); a=M.sup(a,g) }
        else if(s[i]==='_'){ i++; g=grupo(); a=M.sub(a,g) }
        else break;
      }
      return a;
    }

    function producto(){
      ws();
      var signo='';
      if(s[i]==='−'||s[i]==='-'||s[i]==='+'){ signo=M.o(s[i]==='-'?'−':s[i]); i++ }
      var a=signo+potencia();
      while(true){
        ws();
        var c=s[i];
        if(c==='/'){ i++; a=M.frac(a,potencia()) }
        else if(c==='·'&&s[i-1]===' '&&s[i+1]===' '&&s[i+2]===' '){ break }
        else if(c==='·'||c==='×'||c==='*'){ i++; a=a+M.o(c==='*'?'·':c)+potencia() }
        else if(c==='('||esLetra(c)||esDig(c)||c==='√'){ a=a+potencia() }   /* yuxtaposición */
        else break;
      }
      return a;
    }

    function expr(){
      var a=producto();
      while(true){
        ws();
        var c=s[i];
        if(c==='·'&&s[i+1]===' '&&s[i+2]===' '){ i++; a=a+M.esp()+(fin()?'':producto()) }
        else if('=+−-≈∝⇒⇔→<>≤≥≠,;±∓%'.indexOf(c)>=0 && c!==undefined){ i++; a=a+M.o(c==='-'?'−':c)+(fin()?'':producto()) }
        else break;
      }
      return a;
    }

    var cuerpo=expr();
    if(!fin())return null;                          /* sobró algo: no arriesgar */
    return '<math xmlns="http://www.w3.org/1998/Math/MathML">'+cuerpo+'</math>';
  }catch(e){ return null }
}

var EQ={};
(function(){
  var i=M.i,n=M.n,o=M.o,t=M.t,k=M.k,r=M.r,f=M.frac,sq=M.sqrt,up=M.sup,lo=M.sub,p=M.par,E=M.esp,ma=M.math;

  EQ.dilucion={m:ma(lo(i('C'),n('1')),lo(i('V'),n('1')),o('='),lo(i('C'),n('2')),lo(i('V'),n('2'))),
    n:'Los moles se conservan al diluir. Para 500 mL de HCl 0.10 M desde una madre 2.0 M: V₁ = (0.10 × 500)/2.0 = <b>25 mL</b>.'};

  EQ.henderson={m:ma(i('pH'),o('='),lo(i('p'),i('K')),o('+'),i('log'),f(r(o('['),lo(i('A'),o('−')),o(']')),r(o('['),i('HA'),o(']')))),
    n:'En la semiequivalencia [A⁻] = [HA], el logaritmo se anula y <b>pH = pK<sub>a</sub></b>. Esa es la lectura directa del pK<sub>a</sub> sobre una curva experimental.'};

  EQ.nernst={m:ma(i('E'),o('='),up(i('E'),o('°')),o('−'),f(r(k('R'),i('T')),r(i('n'),k('F'))),i('ln'),i('Q'),E(),t('o bien'),E(),i('E'),o('='),up(i('E'),o('°')),o('−'),f(n('0.0592'),i('n')),i('log'),i('Q')),
    n:'La forma práctica <b>solo vale a 25 °C</b>: el coeficiente es 2.303·RT/F y sube a 0.0616 V a 37 °C. La temperatura va en <b>kelvin</b>.'};

  EQ.beer={m:ma(i('A'),o('='),i('ε'),i('b'),i('c'),E(),i('LOD'),o('≈'),f(r(n('3'),i('σ')),i('m')),E(),i('LOQ'),o('≈'),f(r(n('10'),i('σ')),i('m'))),
    n:'σ es la desviación del <b>blanco</b> y m la pendiente de la calibración. Intervalo fiable de absorbancia: 0.1 a 1.0.'};

  EQ.michaelis={m:ma(i('v'),o('='),f(r(lo(i('V'),t('max')),r(o('['),i('S'),o(']'))),r(lo(i('K'),i('m')),o('+'),r(o('['),i('S'),o(']'))))),
    n:'Cuando [S] = K<sub>m</sub>, la velocidad es exactamente <b>V<sub>max</sub>/2</b>. Muy por encima de K<sub>m</sub> el comportamiento es de orden cero.'};

  EQ.gap={m:ma(lo(i('E'),i('g')),t(' (eV)'),o('≈'),f(n('1240'),r(i('λ'),t(' (nm)')))),
    n:'La constante 1240 eV·nm es h·c en esas unidades. Conviene fijar dos anclas: <b>1240 nm es 1 eV</b> y <b>620 nm es 2 eV</b>.'};

  EQ.cristal={m:ma(lo(i('d'),i('hkl')),o('='),f(i('a'),sq(r(up(i('h'),n('2')),o('+'),up(i('k'),n('2')),o('+'),up(i('l'),n('2'))))),E(),i('ρ'),o('='),f(r(i('n'),i('M')),r(lo(k('N'),k('A')),up(i('a'),n('3'))))),
    n:'n son los <b>átomos por celda</b>: 1 en cúbica simple, 2 en BCC y 4 en FCC. Convertir el parámetro a centímetros <b>antes</b> de elevar al cubo.'};

  EQ.bragg={m:ma(i('n'),i('λ'),o('='),n('2'),i('d'),i('sen'),i('θ')),
    n:'θ es la <b>mitad</b> del 2θ que reporta el difractómetro: ese es el error número uno. Con λ = 1.54 Å y θ = 30°, d = 1.54/(2 × 0.5) = 1.54 Å.'};

  EQ.caja={m:ma(lo(i('E'),i('n')),o('='),f(r(up(i('n'),n('2')),up(k('h'),n('2'))),r(n('8'),i('m'),up(i('L'),n('2'))))),
    n:'La energía va con <b>1/L²</b>: reducir la dimensión a la mitad cuadruplica el término de confinamiento, y por eso el punto cuántico pequeño emite más al azul.'};

  EQ.gibbs={m:ma(i('Δ'),i('G'),o('='),i('Δ'),i('H'),o('−'),i('T'),i('Δ'),i('S'),E(),up(r(i('Δ'),i('G')),o('°')),o('='),o('−'),k('R'),i('T'),i('ln'),i('K'),o('='),o('−'),i('n'),k('F'),up(i('E'),o('°'))),
    n:'Las tres caras de la misma magnitud. La temperatura de cruce, donde ΔG cambia de signo, es <b>T = ΔH/ΔS</b>.'};

  EQ.arrhenius={m:ma(i('ln'),f(lo(i('k'),n('2')),lo(i('k'),n('1'))),o('='),o('−'),f(lo(i('E'),i('a')),k('R')),p(r(f(n('1'),lo(i('T'),n('2'))),o('−'),f(n('1'),lo(i('T'),n('1')))))),
    n:'La temperatura va en <b>kelvin</b>, obligatoriamente. Es el error numérico más caro del módulo.'};

  EQ.superficie={m:ma(f(i('S'),i('V')),o('='),f(n('6'),i('d')),E(),lo(i('f'),t('sup')),o('≈'),f(r(n('3'),i('δ')),i('R'))),
    n:'La fracción superficial va como <b>1/R</b>, el área por gramo también, pero el número de partículas por gramo va como <b>1/R³</b>. Tres potencias distintas.'};

  EQ.nucleacion={m:ma(up(i('r'),o('*')),o('='),f(r(n('2'),i('γ')),r(i('Δ'),lo(i('G'),i('v')))),E(),up(r(i('Δ'),i('G')),o('*')),o('='),f(r(n('16'),i('π'),up(i('γ'),n('3'))),r(n('3'),up(r(i('Δ'),lo(i('G'),i('v'))),n('2'))))),
    n:'Más sobresaturación aumenta ΔG<sub>v</sub>, lo que <b>baja r*</b> y hunde la barrera, que va con el inverso del cuadrado. De ahí el estallido de nucleación.'};

  EQ.litografia={m:ma(i('CD'),o('='),f(r(lo(i('k'),n('1')),i('λ')),i('NA'))),
    n:'Las <b>tres únicas palancas</b> de la litografía óptica: bajar λ, subir la apertura numérica o mejorar el proceso que fija k₁.'};

  EQ.scherrer={m:ma(i('D'),o('='),f(r(i('K'),i('λ')),r(i('β'),i('cos'),i('θ')))),
    n:'Da el tamaño de <b>cristalito</b>, no de partícula. K ≈ 0.9 y β es el ensanchamiento en <b>radianes</b>, ya descontado el instrumental.'};

  EQ.flujos={m:ma(i('Re'),o('='),f(r(i('ρ'),i('v'),i('L')),i('µ')),E(),i('Pe'),o('='),f(r(i('v'),i('L')),i('D')),E(),i('Q'),o('='),f(r(i('π'),i('Δ'),i('P'),up(i('r'),n('4'))),r(n('8'),i('µ'),i('L')))),
    n:'El caudal va con la <b>cuarta potencia</b> del radio: media el radio y cae a 1/16. En microcanales Re suele valer menos de 1.'};

  EQ.gravimetrico={m:ma(f(r(i('Δ'),i('f')),lo(i('f'),n('0'))),o('≈'),o('−'),f(r(i('Δ'),i('m')),r(n('2'),i('m')))),
    n:'El <b>signo</b> es lo que se pregunta: adsorber masa <b>baja</b> la frecuencia. Perder masa o ganar rigidez la suben.'};

  EQ.randles={m:ma(lo(i('i'),i('p')),o('='),n('2.69'),o('×'),up(n('10'),n('5')),up(i('n'),r(n('3'),o('/'),n('2'))),i('A'),sq(i('D')),i('C'),sq(i('v'))),
    n:'i<sub>p</sub> ∝ √v indica especie que <b>difunde</b>; i<sub>p</sub> ∝ v indica especie <b>adsorbida</b>. C va en mol/cm³, no en mol/L.'};

  EQ.potencia={m:ma(i('P'),o('='),lo(i('N'),i('p')),i('ρ'),up(i('N'),n('3')),up(i('D'),n('5')),E(),o('⇒'),E(),i('N'),o('∝'),up(i('D'),r(o('−'),n('2'),o('/'),n('3')))),
    n:'Conservar P/V hace <b>bajar</b> las revoluciones, pero la velocidad de punta πND <b>sube</b> como D^(1/3). Los criterios son incompatibles.'};

  EQ.interes={m:ma(i('VF'),o('='),i('VP'),up(p(r(n('1'),o('+'),i('i'))),i('n')),E(),t('simple:'),E(),i('VF'),o('='),i('VP'),p(r(n('1'),o('+'),i('i'),i('n')))),
    n:'El VPN descuenta cada flujo por ese mismo factor. El periodo de recuperación simple <b>no</b> descuenta, y por eso siempre sale optimista.'};

  EQ.seisdecimos={m:ma(lo(i('C'),n('2')),o('='),lo(i('C'),n('1')),up(p(f(lo(i('Q'),n('2')),lo(i('Q'),n('1')))),i('n'))),
    n:'Con n ≈ 0.6 para muchos equipos de proceso. Cuadruplicar la capacidad multiplica el costo por 4^0.6 ≈ <b>2.3</b>, no por cuatro.'};

  EQ.balance={m:ma(t('Entrada'),o('−'),t('Salida'),o('+'),t('Generación'),o('−'),t('Consumo'),o('='),t('Acumulación')),
    n:'En <b>estado estacionario</b> la acumulación es cero. Una salida mayor que la entrada, sin generación, delata una corriente no contabilizada.'};

  EQ.hlb={m:ma(lo(i('HLB'),t('mezcla')),o('='),lo(i('w'),n('1')),lo(i('HLB'),n('1')),o('+'),lo(i('w'),n('2')),lo(i('HLB'),n('2'))),
    n:'Promedio ponderado por <b>fracción másica</b>. De 3 a 6 da agua en aceite; de 8 a 18, aceite en agua.'};

  EQ.gibbsE={m:ma(up(r(i('Δ'),i('G')),o('°')),o('='),o('−'),i('n'),k('F'),up(lo(i('E'),t('celda')),o('°')),E(),k('F'),o('='),n('96 485'),t(' C/mol')),
    n:'E° positivo equivale a ΔG° negativo, es decir celda <b>galvánica</b>. Y E° = E°<sub>cátodo</sub> − E°<sub>ánodo</sub>, sin multiplicar por coeficientes.'};

  EQ.faraday={m:ma(i('m'),o('='),f(r(i('I'),i('t'),i('M')),r(i('n'),k('F')))),
    n:'El paso que más se falla es <b>n</b>, los electrones por ion: dos para Cu²⁺ y tres para Al³⁺. Divide entre la eficiencia faradaica, no multipliques.'};

  EQ.tafel={m:ma(i('η'),o('='),i('E'),o('−'),lo(i('E'),t('eq')),E(),i('η'),o('='),i('a'),o('+'),i('b'),i('log'),M.abs(i('i'))),
    n:'La pendiente <b>b</b> informa del mecanismo y la extrapolación a η = 0 da la densidad de corriente de intercambio <b>i₀</b>.'};

  EQ.red={m:ma(up(i('r'),o('′')),o('='),lo(i('n'),n('1')),lo(i('a'),n('1')),o('+'),lo(i('n'),n('2')),lo(i('a'),n('2')),o('+'),lo(i('n'),n('3')),lo(i('a'),n('3'))),
    n:'Los <b>n</b> son enteros y los <b>a</b> los vectores de la base. La red es el conjunto infinito de puntos equivalentes; la <b>base</b> es lo que se coloca en cada punto, y el cristal es red más base.'};
})();
</script>
