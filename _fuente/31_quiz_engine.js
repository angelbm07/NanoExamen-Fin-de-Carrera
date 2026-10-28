<script>
/* ============================================================
   MOTOR DEL QUIZ · fábrica reutilizable
   Un mismo motor sirve al simulacro final y a los quizzes
   de cada módulo. Fisher-Yates al cargar y en cada reintento.
   ============================================================ */
function mezclar(a){
  var c=a.slice();
  for(var k=c.length-1;k>0;k--){
    var j=Math.floor(Math.random()*(k+1));
    var t=c[k];c[k]=c[j];c[j]=t;
  }
  return c;
}

/* Muestreo equilibrado: n reactivos repartidos por igual entre los módulos.
   Si un módulo no tiene suficientes, el resto se reparte entre los demás. */
function muestraEquilibrada(pool,n){
  var porTag={};
  pool.forEach(function(q){(porTag[q.tag]=porTag[q.tag]||[]).push(q)});
  var tags=G.map(function(m){return m.id}).filter(function(t){return porTag[t]});
  var sel=[],restante=n,quedan=tags.length;
  tags.forEach(function(t){
    var cuota=Math.round(restante/quedan);
    var disp=mezclar(porTag[t]);
    var toma=Math.min(cuota,disp.length);
    sel=sel.concat(disp.slice(0,toma));
    restante-=toma;quedan--;
  });
  /* si faltaron por cuotas incompletas, se rellena con lo que sobre */
  if(sel.length<n){
    var usados={};sel.forEach(function(q){usados[q.q]=1});
    var sobra=mezclar(pool.filter(function(q){return !usados[q.q]}));
    sel=sel.concat(sobra.slice(0,n-sel.length));
  }
  return mezclar(sel);
}

function crearQuiz(cont,fuente,opc){
  opc=opc||{};
  var W=(typeof cont==='string')?document.getElementById(cont):cont;
  if(!W)return null;
  var orden=[],i=0,resp=[];

  function arrancar(){
    var pool=(typeof fuente==='function')?fuente():fuente;
    orden=opc.muestra?muestraEquilibrada(pool,opc.muestra):mezclar(pool);
    i=0;resp=new Array(orden.length).fill(null);
    pintar();
  }
  function tagHTML(t){
    return '<span class="tag" style="background:var(--'+t.toLowerCase()+'-bg);color:var(--'+t.toLowerCase()+')">'+t+'</span>';
  }
  function arriba(){
    var r=W.getBoundingClientRect();
    window.scrollTo(0,window.scrollY+r.top-70);
  }

  function pintar(){
    if(!orden.length){W.innerHTML='<div class="result"><div class="pct">Sin reactivos disponibles.</div></div>';return}
    var q=orden[i];
    var ya=resp[i]!==null;
    var h='<div class="quiz-bar"><i style="width:'+Math.round(100*(i+1)/orden.length)+'%"></i></div>'+
      '<div class="qmeta">'+tagHTML(q.tag)+'<span class="counter">'+(i+1)+' / '+orden.length+
      ' · contestadas '+resp.filter(function(x){return x!==null}).length+'</span></div>'+
      '<div class="qtext">'+q.q+'</div>';
    q.opts.forEach(function(o,k){
      var c='opt';
      if(ya){
        if(k===q.correct)c+=' correct';
        else if(k===resp[i])c+=' incorrect';
      }
      h+='<button class="'+c+'" data-k="'+k+'"'+(ya?' disabled':'')+'>'+
         '<span class="letra">'+String.fromCharCode(97+k)+')</span>'+o+'</button>';
    });
    h+='<div class="explain'+(ya?' show':'')+'"><b>'+
       (ya?(resp[i]===q.correct?'Correcto. ':'No. '):'')+'</b>'+q.exp+'</div>';
    h+='<div class="qnav">'+
       '<button class="btn ghost" data-nav="prev"'+(i===0?' disabled':'')+'>← Anterior</button>'+
       (i<orden.length-1?'<button class="btn" data-nav="next">Siguiente →</button>'
        :'<button class="btn" data-nav="fin">Ver resultado</button>')+
       '</div>';
    W.innerHTML=h;

    Array.prototype.forEach.call(W.querySelectorAll('.opt'),function(b){
      b.onclick=function(){
        if(resp[i]!==null)return;
        resp[i]=+b.getAttribute('data-k');
        pintar();
      };
    });
    Array.prototype.forEach.call(W.querySelectorAll('[data-nav]'),function(b){
      var n=b.getAttribute('data-nav');
      b.onclick=function(){
        if(n==='prev'&&i>0){i--;pintar();arriba()}
        else if(n==='next'&&i<orden.length-1){i++;pintar();arriba()}
        else if(n==='fin')resultado();
      };
    });
  }

  function resultado(){
    var ok=0,byModule={};
    orden.forEach(function(q,k){
      var bien=resp[k]===q.correct;
      if(bien)ok++;
      if(!byModule[q.tag])byModule[q.tag]={ok:0,n:0};
      byModule[q.tag].n++;
      if(bien)byModule[q.tag].ok++;
    });
    var pct=Math.round(100*ok/orden.length);
    var sinContestar=resp.filter(function(x){return x===null}).length;
    var veredicto;
    if(pct>=85)veredicto='Dominio sólido. A partir de aquí lo que rinde es el repaso espaciado de los temas más flojos, no volver a barrer todo.';
    else if(pct>=70)veredicto='Base razonable con huecos localizados. Vuelve a las secciones de lo que fallaste antes de repetir el quiz.';
    else if(pct>=50)veredicto='Comprensión parcial y desigual. Conviene releer antes de repetir, porque repetir sin releer solo mide lo mismo otra vez.';
    else veredicto='Falta una pasada de contenido antes de seguir con quizzes. Empieza por las secciones y las flashcards de este bloque.';

    var h='<div class="result"><div class="score">'+ok+' / '+orden.length+'</div>'+
      '<div class="pct">'+pct+' % de acierto'+(sinContestar?' · '+sinContestar+' sin contestar':'')+'</div>'+
      '<div class="veredicto">'+veredicto+'</div></div>';
    if(Object.keys(byModule).length>1){
      h+='<div class="bymod"><h3>Desglose por módulo</h3>';
      G.forEach(function(m){
        var b=byModule[m.id];if(!b)return;
        var p=Math.round(100*b.ok/b.n);
        h+='<div class="modrow">'+
           '<span class="tag" style="background:var(--'+cls(m.id)+'-bg);color:var(--'+cls(m.id)+')">'+m.id+'</span>'+
           '<span class="bar"><i style="width:'+p+'%;background:var(--'+cls(m.id)+')"></i></span>'+
           '<span class="num">'+b.ok+'/'+b.n+' · '+p+'%</span></div>';
      });
      h+='</div>';
    }
    h+='<div class="btn-row">'+
       '<button class="btn" data-nav2="retry">Reintentar</button>'+
       '<button class="btn ghost" data-nav2="ver">Ver respuestas</button></div>';
    W.innerHTML=h;
    arriba();
    enlazar2();
  }

  function revisar(){
    var h='<div class="btn-row"><button class="btn ghost" data-nav2="back">← Volver al resultado</button></div><div class="revisar">';
    orden.forEach(function(q,k){
      h+='<div class="rev-item">'+tagHTML(q.tag)+
         '<span class="counter"> · '+(k+1)+'</span>'+
         '<div class="rq">'+q.q+'</div>';
      q.opts.forEach(function(o,j){
        var c='opt';
        if(j===q.correct)c+=' correct';
        else if(j===resp[k])c+=' incorrect';
        h+='<div class="'+c+'"><span class="letra">'+String.fromCharCode(97+j)+')</span>'+o+
           (j===resp[k]?' <b>← tu respuesta</b>':'')+'</div>';
      });
      if(resp[k]===null)h+='<div class="explain show"><b>Sin contestar. </b>'+q.exp+'</div>';
      else h+='<div class="explain show">'+q.exp+'</div>';
      h+='</div>';
    });
    h+='</div><div class="btn-row"><button class="btn ghost" data-nav2="back">← Volver al resultado</button></div>';
    W.innerHTML=h;
    arriba();
    enlazar2();
  }

  function enlazar2(){
    Array.prototype.forEach.call(W.querySelectorAll('[data-nav2]'),function(b){
      var n=b.getAttribute('data-nav2');
      b.onclick=function(){
        if(n==='retry')arrancar();
        else if(n==='ver')revisar();
        else resultado();
      };
    });
  }

  arrancar();
  return {arrancar:arrancar,resultado:resultado,revisar:revisar,
    estado:function(){return {n:orden.length,i:i,resp:resp,orden:orden}}};
}

/* --- instanciación --- */
window.__quiz=crearQuiz('quizwrap',QUIZ,{muestra:200});
window.__quizMod={};
G.forEach(function(m){
  var pool=QUIZ.filter(function(q){return q.tag===m.id});
  var et=document.getElementById('qn-'+m.id);
  if(et)et.textContent=pool.length+' reactivos de este módulo · se mezclan en cada intento';
  window.__quizMod[m.id]=crearQuiz('quizwrap-'+m.id,pool);
});
</script>
</div>
</body></html>
