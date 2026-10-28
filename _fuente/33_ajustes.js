<script>
/* ============================================================
   AJUSTES DE LECTURA
   Control del usuario sobre densidad, tipografía y movimiento.
   Todo se guarda en el navegador y se aplica como atributos en
   <html>, de modo que el CSS hace el resto sin recalcular nada.
   ============================================================ */
(function(){
  var CLAVE='efc_ajustes_v1';
  var DEF={texto:'1', linea:'normal', ancho:'normal', densidad:'completo', mov:'normal', tipo:'normal'};
  var A;
  try{ A=Object.assign({},DEF,JSON.parse(localStorage.getItem(CLAVE)||'{}')) }catch(e){ A=Object.assign({},DEF) }

  function aplicar(){
    var r=document.documentElement;
    r.setAttribute('data-texto',A.texto);
    r.setAttribute('data-linea',A.linea);
    r.setAttribute('data-ancho',A.ancho);
    r.setAttribute('data-densidad',A.densidad);
    r.setAttribute('data-mov',A.mov);
    r.setAttribute('data-tipo',A.tipo);
    try{ localStorage.setItem(CLAVE,JSON.stringify(A)) }catch(e){}
  }

  /* si el sistema pide menos movimiento, se respeta por defecto */
  try{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches && !localStorage.getItem(CLAVE)) A.mov='reducido';
  }catch(e){}
  aplicar();

  /* ---- panel ---- */
  var GRUPOS=[
   {k:'texto',  t:'Tamaño del texto', o:[['0.92','Menor'],['1','Normal'],['1.14','Mayor'],['1.3','Máximo']]},
   {k:'linea',  t:'Interlineado',     o:[['compacto','Compacto'],['normal','Normal'],['amplio','Amplio']]},
   {k:'ancho',  t:'Ancho de línea',   o:[['estrecho','Estrecho'],['normal','Normal'],['ancho','Ancho']]},
   {k:'tipo',   t:'Tipografía',       o:[['normal','Normal'],['legible','Alta legibilidad']]},
   {k:'densidad',t:'Densidad',        o:[['completo','Todo el desarrollo'],['esencial','Solo lo esencial']]},
   {k:'mov',    t:'Movimiento',       o:[['normal','Normal'],['reducido','Reducido']]}
  ];

  var caja=document.createElement('div');
  caja.className='ajustes';
  caja.innerHTML='<button class="aj-btn" id="ajbtn" aria-expanded="false" aria-controls="ajpanel">Ajustes de lectura</button>'+
    '<div class="aj-panel" id="ajpanel" hidden>'+
    GRUPOS.map(function(g){
      return '<div class="aj-g"><div class="aj-t">'+g.t+'</div><div class="aj-o" data-k="'+g.k+'">'+
        g.o.map(function(o){return '<button data-v="'+o[0]+'">'+o[1]+'</button>'}).join('')+
        '</div></div>';
    }).join('')+
    '<div class="aj-nota">«Solo lo esencial» deja a la vista el primer párrafo de cada sección, los formularios, las tablas, las figuras y los problemas, y recoge el desarrollo. Cada sección conserva su botón para desplegarlo.</div>'+
    '<button class="btn ghost aj-reset" id="ajreset">Volver a los valores por defecto</button>'+
    '</div>';

  var head=document.querySelector('header.top');
  head.appendChild(caja);

  var btn=document.getElementById('ajbtn'), panel=document.getElementById('ajpanel');
  btn.onclick=function(){
    var ab=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!ab));
    panel.hidden=ab;
  };
  function marcar(){
    GRUPOS.forEach(function(g){
      var cont=panel.querySelector('.aj-o[data-k="'+g.k+'"]');
      Array.prototype.forEach.call(cont.children,function(b){
        b.classList.toggle('on',b.getAttribute('data-v')===A[g.k]);
        b.setAttribute('aria-pressed',String(b.getAttribute('data-v')===A[g.k]));
      });
    });
  }
  GRUPOS.forEach(function(g){
    var cont=panel.querySelector('.aj-o[data-k="'+g.k+'"]');
    Array.prototype.forEach.call(cont.children,function(b){
      b.onclick=function(){ A[g.k]=b.getAttribute('data-v'); aplicar(); marcar(); };
    });
  });
  document.getElementById('ajreset').onclick=function(){ A=Object.assign({},DEF); aplicar(); marcar(); };
  marcar();

  /* ---- densidad: marcar el párrafo guía de cada sección y añadir el botón ---- */
  document.querySelectorAll('section.block').forEach(function(sec){
    var cards=sec.querySelectorAll(':scope > .card');
    if(cards.length<2)return;
    cards[0].classList.add('guia');
    for(var i=1;i<cards.length;i++)cards[i].classList.add('desarrollo');
    var b=document.createElement('button');
    b.className='mas-desarrollo';
    b.textContent='Mostrar el desarrollo (' + (cards.length-1) + ')';
    b.onclick=function(){
      var ab=sec.classList.toggle('abierta');
      b.textContent=ab?'Recoger el desarrollo':'Mostrar el desarrollo ('+(cards.length-1)+')';
    };
    cards[0].insertAdjacentElement('afterend',b);
  });
})();
</script>
