(function(){
  var root=document.getElementById('auxeon'); if(!root) return;
  /* mobile menu */
  var nav=root.querySelector('.ax-nav'), burger=root.querySelector('.ax-burger');
  if(burger){ burger.addEventListener('click',function(){ var o=nav.classList.toggle('ax-open'); burger.setAttribute('aria-expanded',o); });
    root.querySelectorAll('.ax-links a').forEach(function(a){ a.addEventListener('click',function(){ nav.classList.remove('ax-open'); burger.setAttribute('aria-expanded','false'); }); }); }
  /* year */
  var y=document.getElementById('ax-year'); if(y) y.textContent=new Date().getFullYear();
  /* images: show the upload placeholder until the file exists */
  root.querySelectorAll('.ax-media img').forEach(function(img){
    function miss(){ img.closest('.ax-media').classList.add('ax-missing'); }
    img.addEventListener('error',miss);
    if(img.complete && img.naturalWidth===0) miss();
  });
  /* videos: YouTube ID takes priority, otherwise the uploaded MP4 */
  root.querySelectorAll('.ax-video').forEach(function(box){
    var yt=(box.getAttribute('data-youtube')||'').trim();
    if(yt){
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(yt)+'?rel=0';
      f.title=box.getAttribute('data-title')||'Video';
      f.allow='accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      f.allowFullscreen=true; f.loading='lazy'; box.appendChild(f); return;
    }
    var v=document.createElement('video');
    v.controls=true; v.preload='metadata'; v.playsInline=true;
    var poster=box.getAttribute('data-poster'); if(poster){ var p=new Image(); p.onload=function(){ v.poster=poster; }; p.src=poster; }
    v.addEventListener('error',function(){ box.classList.add('ax-missing'); v.remove(); });
    v.src=box.getAttribute('data-src'); box.appendChild(v);
  });
  /* reveal on scroll */
  var els=root.querySelectorAll('.ax-reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('ax-in')}); return; }
  var io=new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('ax-in'); io.unobserve(x.target);} }); },{threshold:.12});
  els.forEach(function(e,i){ e.style.transitionDelay=(i%4)*80+'ms'; io.observe(e); });
})();
