// JavaScript Document
const thumbs = document.querySelectorAll('.char-thumb');
const sheets = document.querySelectorAll('.sheet');
function showById(id){
  // サムネ
  thumbs.forEach(t => {
    const active = t.dataset.target === id;      // ← dataset（綴りOK）
    t.classList.toggle('is-active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
    t.tabIndex = active ? 0 : -1;
  });
  // パネル
  sheets.forEach(s => {
    const active = `#${s.id}` === id;
    s.classList.toggle('is-active', active);
    s.toggleAttribute('hidden', !active);
  });
}
// 切替
thumbs.forEach(img => {
  img.addEventListener('click', () => {
    showById(img.dataset.target);
    
    document.querySelector('.character')?.scrollIntoView({ behavior:'smooth' });
  });
});
// #
window.addEventListener('DOMContentLoaded', () => {
  const fromHash = location.hash;
  if (fromHash && document.querySelector(fromHash + '.sheet')) {
    showById(fromHash);
  }
});