<script>
/* ============================================================
   RENDER
   ============================================================ */
var MODNOM={};G.forEach(function(m){MODNOM[m.id]=m.nom});
function esc(s){return String(s).replace(/&(?![a-z#]+;)/g,'&amp;').replace(/</g,'&lt;')}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e}
var cls=function(id){return id.toLowerCase()};

function bloque(b,mid){
  var out=[];
  if(b.p)out.push('<div class="card '+cls(mid)+'-accent">'+b.p.map(function(x){return '<p>'+x+'</p>'}).join('')+'</div>');
  if(b.ul)out.push('<div class="card"><ul>'+b.ul.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div>');
  if(b.ol)out.push('<div class="card"><ol>'+b.ol.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol></div>');
  if(b.eq){
    if(typeof b.eq==='string')out.push('<div class="eq">'+b.eq+'</div>');
    else out.push('<div class="eqbox">'+b.eq.m+(b.eq.n?'<div class="eqnota">'+b.eq.n+'</div>':'')+'</div>');
  }
  if(b.tabla)out.push('<div class="tscroll"><table class="data"><thead><tr>'+
    b.tabla.th.map(function(h){return '<th>'+h+'</th>'}).join('')+'</tr></thead><tbody>'+
    b.tabla.tr.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+
    '</tbody></table></div>');
  if(b.fig)out.push('<figure class="fig"><div class="ftit">'+esc(b.fig.t)+'</div>'+b.fig.svg+
    (b.fig.pie?'<figcaption>'+b.fig.pie+'</figcaption>':'')+'</figure>');
  if(b.form)out.push('<div class="formulario"><div class="ftit">Formulario del tema</div>'+
    b.form.map(function(f){
      var mm=(/^<math/.test(f[0]))?f[0]:(typeof aMathML==='function'?aMathML(f[0]):null);
      var celda=mm?('<div class="fx fx-math">'+mm+'</div>'):('<div class="fx">'+f[0]+'</div>');
      return '<div class="fr">'+celda+'<div class="fn">'+f[1]+'</div>'+
      (f[2]?'<div class="fu">'+f[2]+'</div>':'')+'</div>'}).join('')+'</div>');
  if(b.prob)out.push('<details class="prob"><summary>'+esc(b.prob.t)+'</summary><div class="inner">'+
    '<div class="pdatos"><b>Datos. </b>'+b.prob.d+'</div>'+
    '<ol class="ppasos">'+b.prob.p.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol>'+
    '<div class="pres"><b>Resultado. </b>'+b.prob.r+'</div>'+
    (b.prob.x?'<div class="ptrampa"><b>La trampa: </b>'+b.prob.x+'</div>':'')+'</div></details>');
  if(b.caso){
    var C=b.caso;
    out.push('<div class="caso"><div class="ftit">Caso de caracterización</div>'+
      '<h4>'+esc(C.t)+'</h4><div class="caso-ctx">'+C.ctx+'</div>'+
      '<ol class="caso-pasos">'+C.pasos.map(function(P){
        return '<li><div class="caso-q">'+P.p+'</div>'+
          '<details class="caso-rev"><summary>Ver cómo se razona</summary><div class="inner">'+
          '<div class="caso-r">'+P.r+'</div>'+
          (P.d?'<div class="caso-d"><b>Lo que sale al medirlo. </b>'+P.d+'</div>':'')+
          '</div></details></li>';
      }).join('')+'</ol>'+
      '<div class="caso-fin">'+C.fin+'</div></div>');
  }
  if(b.deep){
    out.push('<details class="deep"><summary>'+esc(b.deep.t)+'</summary><div class="inner">'+
      b.deep.b.map(function(x){return bloque(x,mid)}).join('')+'</div></details>');
  }
  return out.join('');
}

function panelModulo(m){
  var p=el('div','panel '+cls(m.id));
  p.id='p-'+m.id;
  p.setAttribute('role','tabpanel');
  var h='<div class="module-head"><span class="tag">'+m.id+'</span><h2>'+esc(m.nom)+'</h2></div>'+
        '<div class="module-sub">'+esc(m.sub)+' <b>'+esc(m.sesion)+'.</b></div>'+
        '<div class="prio" id="pri-'+m.id+'"></div>'+
        '<div class="section-progress"><i style="width:0%"></i></div>';
  h+='<nav class="subtabs" role="tablist" aria-label="Actividades de '+m.id+'">'+
       '<button class="active" data-sp="leer">Leer<span class="cnt">'+m.sec.length+' secciones</span></button>'+
       '<button data-sp="tarjetas">Tarjetas<span class="cnt">'+m.flash.length+'</span></button>'+
       '<button data-sp="quiz">Quiz<span class="cnt" id="qn-'+m.id+'"></span></button>'+
       '</nav>';

  h+='<div class="subpanel active" data-sp="leer">';
  m.sec.forEach(function(S,i){
    h+='<section class="block"><h3><span class="n">'+(i+1)+'</span>'+esc(S.t)+'</h3>'+
       S.b.map(function(b){return bloque(b,m.id)}).join('')+'</section>';
  });
  h+='</div>';

  h+='<div class="subpanel" data-sp="tarjetas">';
  h+='<div class="fc-head"><h3>Flashcards de '+m.id+'</h3><span>'+m.flash.length+' tarjetas · clic para voltear</span></div><div class="fcgrid">';
  m.flash.forEach(function(f){
    h+='<div class="flashcard" tabindex="0" role="button" aria-label="Flashcard, pulsa para ver la respuesta">'+
       '<div class="inner"><div class="face front">'+f[0]+'<span class="hint">voltear</span></div>'+
       '<div class="face back">'+f[1]+'</div></div></div>';
  });
  h+='</div></div>';

  h+='<div class="subpanel" data-sp="quiz">'+
     '<div class="fc-head"><h3>Quiz de '+m.id+'</h3><span id="qd-'+m.id+'">tandas de diez</span></div>'+
     '<div class="cobertura" id="cob-'+m.id+'"></div>'+
     '<div class="quiz-wrap" id="quizwrap-'+m.id+'"></div></div>';

  p.innerHTML=h;
  return p;
}

var cont=el('div');document.querySelector('.wrap').appendChild(cont);
G.forEach(function(m){cont.appendChild(panelModulo(m))});

/* panel del mapa de conceptos */
var pm=el('div','panel');pm.id='p-MAPA';pm.setAttribute('role','tabpanel');
pm.innerHTML='<div class="module-head"><span class="tag" style="background:var(--surface-2);color:var(--accent)">MAPA</span>'+
 '<h2>Cómo se conectan los temas</h2></div>'+
 '<div class="module-sub" id="mapacount"></div>'+
 '<div class="module-sub">El examen es transversal y esta guía está organizada por módulo. Aquí se cruzan las dos cosas: cada línea lleva escrito <b>por qué</b> dos conceptos se tocan.</div>'+
 '<div id="mapawrap"></div>';
cont.appendChild(pm);

/* panel de quiz */
var pq=el('div','panel');pq.id='p-QUIZ';pq.setAttribute('role','tabpanel');
pq.innerHTML='<div class="module-head"><span class="tag" style="background:var(--surface-2);color:var(--accent)">QUIZ</span>'+
 '<h2>Simulacro mixto</h2></div>'+
 '<div class="module-sub">Elige la duración. Los reactivos se muestrean del banco de '+QUIZ.length+', repartidos por igual entre los '+G.length+' módulos y mezclados en cada intento. '+
 'La mezcla entre módulos (interleaving) rinde más que practicar un módulo a la vez. '+
 'Cada tanda empieza por los reactivos que no has visto y por los que fallaste, de modo que al repetir recorres banco nuevo en vez de las mismas preguntas.</div>'+
 '<div class="cobertura" id="cob-QUIZ"></div>'+
 '<div class="quiz-wrap" id="quizwrap"></div>'+
 '<div class="btn-row" style="margin-top:22px"><button class="btn ghost" id="reset-prog">Reiniciar mi progreso</button></div>';
cont.appendChild(pq);

/* ---- pestañas ---- */
var tabs=document.getElementById('tabs');
var TABS=G.map(function(m){return [m.id,m.id]}).concat([['MAPA','Mapa'],['QUIZ','Quiz']]);
TABS.forEach(function(t,i){
  var b=el('button',i===0?'active':'',t[1]);
  b.setAttribute('role','tab');
  b.onclick=function(){
    Array.prototype.forEach.call(tabs.children,function(x){x.className=''});
    b.className='active';
    Array.prototype.forEach.call(cont.children,function(x){x.className=x.className.replace(' active','')});
    var pan=document.getElementById('p-'+t[0]);
    pan.className+=' active';
    window.scrollTo(0,0);
    progreso();
  };
  tabs.appendChild(b);
});
document.getElementById('p-'+TABS[0][0]).className+=' active';

/* ---- subpestañas dentro de cada módulo ---- */
document.addEventListener('click',function(e){
  var b=e.target.closest?e.target.closest('nav.subtabs button'):null;
  if(!b)return;
  var nav=b.parentElement, pan=nav.parentElement, k=b.getAttribute('data-sp');
  Array.prototype.forEach.call(nav.children,function(x){x.classList.toggle('active',x===b)});
  Array.prototype.forEach.call(pan.querySelectorAll(':scope > .subpanel'),function(s){
    s.classList.toggle('active',s.getAttribute('data-sp')===k);
  });
  window.scrollTo(0,0);
  progreso();
});

/* ---- flashcards ---- */
document.addEventListener('click',function(e){
  var f=e.target.closest?e.target.closest('.flashcard'):null;
  if(f)f.classList.toggle('flipped');
});
document.addEventListener('keydown',function(e){
  if((e.key===' '||e.key==='Enter')&&e.target.classList&&e.target.classList.contains('flashcard')){
    e.preventDefault();e.target.classList.toggle('flipped');
  }
});

/* ---- barra de progreso de lectura por módulo ---- */
function progreso(){
  var pan=document.querySelector('.panel.active');
  if(!pan)return;
  var barra=pan.querySelector('.section-progress i');
  if(!barra)return;
  var alto=pan.scrollHeight-window.innerHeight;
  var pct=alto>0?Math.min(100,Math.max(0,100*window.scrollY/alto)):100;
  barra.style.width=pct.toFixed(0)+'%';
}
window.addEventListener('scroll',progreso,{passive:true});
window.addEventListener('resize',progreso);

document.getElementById('topnote').innerHTML=
 G.length+' módulos · '+G.reduce(function(a,m){return a+m.sec.length},0)+' secciones · '+
 document.querySelectorAll('.eqbox math').length+' fórmulas · '+
 document.querySelectorAll('details.prob').length+' problemas resueltos · '+
 G.reduce(function(a,m){return a+m.flash.length},0)+' flashcards · '+QUIZ.length+' reactivos. '+
 'Contenido derivado del material de los cursos disciplinares en Canvas y de literatura de referencia. '+
 '¿Necesitas el banco completo, el formulario y el seguimiento? <a href="app/">Abre la app extendida</a>.';
</script>
