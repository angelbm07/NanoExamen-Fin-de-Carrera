<script>
/* ============================================================
   RENDER DEL MAPA DE CONCEPTOS
   SVG generado desde MAPA. Al tocar un nodo se resaltan sus
   aristas y el panel explica POR QUÉ se conecta con cada vecino.
   ============================================================ */
(function(){
  var W=document.getElementById('mapawrap');
  if(!W)return;

  var COLW=186, COLGAP=46, ROWH=54, PADX=14, PADY=30;
  var NW=160, NH=34;
  var cols=Math.max.apply(null,MAPA.nodos.map(function(n){return n.c}))+1;
  var rows=Math.max.apply(null,MAPA.nodos.map(function(n){return n.f}))+1;
  var ancho=PADX*2+cols*COLW+(cols-1)*COLGAP;
  var alto=PADY*2+rows*ROWH;

  var pos={};
  MAPA.nodos.forEach(function(n){
    pos[n.id]={x:PADX+n.c*(COLW+COLGAP), y:PADY+n.f*ROWH, n:n};
  });
  var vecinos={};
  MAPA.aristas.forEach(function(a){
    (vecinos[a[0]]=vecinos[a[0]]||[]).push({id:a[1],por:a[2]});
    (vecinos[a[1]]=vecinos[a[1]]||[]).push({id:a[0],por:a[2]});
  });

  var TITCOL=['Termodinámica y cinética','Superficie y nanoescala','Estructura cristalina','Electrones y luz','Medición y proceso'];

  function cx(id){return pos[id].x+NW/2}
  function cy(id){return pos[id].y+NH/2}

  var svg='<svg id="mapasvg" viewBox="0 0 '+ancho+' '+alto+'" role="img" aria-label="Mapa de conceptos del examen">';
  TITCOL.forEach(function(t,k){
    if(k>=cols)return;
    svg+='<text class="mcol" x="'+(PADX+k*(COLW+COLGAP))+'" y="18">'+t+'</text>';
  });
  MAPA.aristas.forEach(function(a,i){
    svg+='<path class="marista" data-a="'+a[0]+'" data-b="'+a[1]+'" id="ar'+i+'" d="M'+cx(a[0])+','+cy(a[0])+' L'+cx(a[1])+','+cy(a[1])+'"/>';
  });
  MAPA.nodos.forEach(function(n){
    var p=pos[n.id];
    svg+='<g class="mnodo '+n.m.toLowerCase()+'" data-id="'+n.id+'" tabindex="0" role="button" aria-label="'+n.t+', módulo '+n.m+'">'+
      '<rect x="'+p.x+'" y="'+p.y+'" width="'+NW+'" height="'+NH+'" rx="7"/>'+
      '<text x="'+(p.x+11)+'" y="'+(p.y+NH/2+4)+'">'+n.t+'</text>'+
      '</g>';
  });
  svg+='</svg>';

  W.innerHTML='<div class="mapa-grid"><div class="mapa-lienzo">'+svg+'</div>'+
    '<aside class="mapa-panel" id="mapapanel"></aside></div>';

  var panel=document.getElementById('mapapanel');
  var nodos=W.querySelectorAll('.mnodo');
  var aristas=W.querySelectorAll('.marista');

  function vacio(){
    panel.innerHTML='<div class="mp-vacio"><b>Toca un concepto.</b> El panel te dice con qué se conecta y, sobre todo, <b>por qué</b>. '+
      'Esa es la parte que el examen pregunta: no qué es la ley de Bragg, sino que el mismo pico que da el espaciado da también el tamaño de cristalito.</div>';
  }
  vacio();

  function pintar(id){
    var n=pos[id].n, vs=vecinos[id]||[];
    Array.prototype.forEach.call(nodos,function(g){
      var gid=g.getAttribute('data-id');
      g.classList.toggle('sel',gid===id);
      g.classList.toggle('vec',vs.some(function(v){return v.id===gid}));
      g.classList.toggle('apag',gid!==id&&!vs.some(function(v){return v.id===gid}));
    });
    Array.prototype.forEach.call(aristas,function(p){
      var on=p.getAttribute('data-a')===id||p.getAttribute('data-b')===id;
      p.classList.toggle('on',on);
      p.classList.toggle('off',!on);
    });
    panel.innerHTML='<span class="tag" style="background:var(--'+n.m.toLowerCase()+'-bg);color:var(--'+n.m.toLowerCase()+')">'+n.m+'</span>'+
      '<h3>'+n.t+'</h3>'+
      '<div class="mp-sub">'+vs.length+(vs.length===1?' conexión':' conexiones')+'</div>'+
      vs.map(function(v){
        var o=pos[v.id].n;
        return '<div class="mp-con"><button class="mp-ir" data-id="'+v.id+'">'+o.t+'</button>'+
               '<div class="mp-por">'+v.por+'</div></div>';
      }).join('')+
      '<button class="btn mp-mod" data-mod="'+n.m+'">Abrir módulo '+n.m+'</button>';
    Array.prototype.forEach.call(panel.querySelectorAll('.mp-ir'),function(b){
      b.onclick=function(){pintar(b.getAttribute('data-id'))};
    });
    var bm=panel.querySelector('.mp-mod');
    bm.onclick=function(){
      var t=Array.prototype.filter.call(document.getElementById('tabs').children,function(x){return x.textContent===bm.getAttribute('data-mod')})[0];
      if(t)t.click();
    };
  }

  Array.prototype.forEach.call(nodos,function(g){
    g.onclick=function(){pintar(g.getAttribute('data-id'))};
    g.onkeydown=function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();pintar(g.getAttribute('data-id'))} };
  });

  /* contador en la cabecera */
  var c=document.getElementById('mapacount');
  if(c)c.textContent=MAPA.nodos.length+' conceptos · '+MAPA.aristas.length+' conexiones explicadas';
})();
</script>
