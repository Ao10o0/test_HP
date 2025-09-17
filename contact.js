// JavaScript Document
(function(){
  let tid;
  function normalize(){
    const cards = [...document.querySelectorAll('.skills-card')];
    if (!cards.length) return;

    cards.forEach(c=>{
      const h3=c.querySelector('h3'), p=c.querySelector('p');
      if(!h3||!p) return;
      h3.style.minHeight=''; p.style.minHeight='';
    });

    let maxH3=0, maxP=0;
    cards.forEach(c=>{
      const h3=c.querySelector('h3'), p=c.querySelector('p');
      if(!h3||!p) return;
      maxH3=Math.max(maxH3, h3.offsetHeight);
      maxP=Math.max(maxP, p.offsetHeight);
    });
 
    cards.forEach(c=>{
      const h3=c.querySelector('h3'), p=c.querySelector('p');
      if(!h3||!p) return;
      h3.style.minHeight = maxH3 + 'px';
      p.style.minHeight  = maxP  + 'px';
    });
  }
  window.addEventListener('load', normalize);
  window.addEventListener('resize', ()=>{ clearTimeout(tid); tid=setTimeout(normalize,150); });
})();