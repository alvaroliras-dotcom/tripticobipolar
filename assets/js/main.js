(function(){
function track(ev,data){try{window.dataLayer=window.dataLayer||[];window.dataLayer.push(Object.assign({event:ev},data||{}));}catch(e){}try{if(typeof gtag==='function')gtag('event',ev,data||{});}catch(e){}}
window.track=track;
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a.btn,button.btn,a.navcta').forEach(function(b){b.addEventListener('click',function(){track('cta_click',{cta_id:b.id||b.textContent.trim().slice(0,40),pagina:location.pathname});});});
document.querySelectorAll('a[data-fenix]').forEach(function(a){a.addEventListener('click',function(){track('clic_fenix',{pagina:location.pathname,destino:a.getAttribute('href').split('?')[0]});});});
document.querySelectorAll('.audio-ph').forEach(function(btn){btn.addEventListener('click',function(){var f=document.createElement('iframe');f.className='audio';f.src=btn.getAttribute('data-src');f.height='80';f.allow='autoplay';f.title=btn.getAttribute('data-title');btn.replaceWith(f);track('audio_play',{src:f.title,pagina:location.pathname});});});
(function(){var banner=document.getElementById('cookie-banner');function saved(){try{return localStorage.getItem('tb_consent');}catch(e){return null;}}
function grant(){try{localStorage.setItem('tb_consent','granted');}catch(e){}if(typeof gtag==='function'){gtag('consent','update',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});}if(banner)banner.classList.remove('show');}
function deny(){try{localStorage.setItem('tb_consent','denied');}catch(e){}if(banner)banner.classList.remove('show');}
if(!saved()&&banner){banner.classList.add('show');}
var a=document.getElementById('cookie-accept');if(a)a.addEventListener('click',grant);var r=document.getElementById('cookie-reject');if(r)r.addEventListener('click',deny);})();
requestAnimationFrame(function(){document.documentElement.classList.add('ready');});
var rev=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!reduce){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.06});rev.forEach(function(el){io.observe(el);});}
else{rev.forEach(function(el){el.classList.add('in');});}
var stage=document.getElementById('fasesStage'),steps=document.getElementById('fasesSteps');
if(stage&&steps){var fases=[].slice.call(steps.querySelectorAll('.fase'));
fases.forEach(function(f,i){var s=f.querySelector('img');var d=document.createElement('div');d.className='fs-img'+(i===0?' active':'');var im=document.createElement('img');im.src=s.getAttribute('src');im.width=s.getAttribute('width');im.height=s.getAttribute('height');im.alt='';im.loading='lazy';im.decoding='async';d.appendChild(im);stage.appendChild(d);});
if(fases[0])fases[0].classList.add('is-active');
function act(i){stage.querySelectorAll('.fs-img').forEach(function(x,n){x.classList.toggle('active',n===i);});fases.forEach(function(f,n){f.classList.toggle('is-active',n===i);});}
if('IntersectionObserver' in window){var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act(fases.indexOf(e.target));});},{rootMargin:'-45% 0px -45% 0px'});fases.forEach(function(f){io2.observe(f);});}}
})();
(function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var L=document.getElementById('lupa'), Z=2.6, R=105, cur=null;
  document.documentElement.classList.add('js-lupa');
  var SEL='.cover img,.gitem img,.fs-img.active img,.hero .trio img,.pcover img,.trio-small';
  function hi(img){ var a=img.closest('a.gitem'); return a?a.getAttribute('href'):(img.currentSrc||img.src); }
  function off(){ L.classList.remove('on'); cur=null; }
  document.addEventListener('mousemove',function(e){
    if(document.getElementById('lightbox').classList.contains('open')){ off(); return; }
    var img=null, els=document.elementsFromPoint(e.clientX,e.clientY);
    for(var i=0;i<els.length;i++){ if(els[i].matches && els[i].matches(SEL)){ img=els[i]; break; } }
    if(!img){ off(); return; }
    var r=img.getBoundingClientRect();
    var x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    if(cur!==img){ cur=img; L.style.backgroundImage='url("'+hi(img)+'")'; }
    var bw=r.width*Z, bh=r.height*Z;
    L.style.backgroundSize=bw+'px '+bh+'px';
    L.style.backgroundPosition=(R-x*bw)+'px '+(R-y*bh)+'px';
    L.style.left=(e.clientX-R)+'px'; L.style.top=(e.clientY-R)+'px';
    L.classList.add('on');
  },{passive:true});
  document.addEventListener('mouseleave',off);
  window.addEventListener('scroll',off,{passive:true});
})();
(function(){var lb=document.getElementById("lightbox"),img=lb.querySelector("img");document.querySelectorAll(".gitem").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();img.src=a.getAttribute("href");lb.classList.add("open");});});function c(){lb.classList.remove("open");img.src="";}lb.addEventListener("click",c);document.addEventListener("keydown",function(e){if(e.key==="Escape")c();});})();
(function(){var hb=document.getElementById("hambBtn"),nl=document.getElementById("navLinks");if(hb&&nl){hb.addEventListener("click",function(){var o=nl.classList.toggle("open");hb.classList.toggle("open",o);hb.setAttribute("aria-expanded",o);});nl.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nl.classList.remove("open");hb.classList.remove("open");hb.setAttribute("aria-expanded","false");});});}var br=document.querySelector(".topnav .brand");if(br){br.addEventListener("click",function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});});}})();
