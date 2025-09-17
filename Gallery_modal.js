 (() => {
  const modal        = document.getElementById('modal');
  const modalImage   = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalCloseBtn= document.querySelector('.modal_close');
  const modalBody    = document.querySelector('.modal_body');
	 
  // モーダル表示部分
  document.querySelectorAll('.gallery .click-img').forEach((img) => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt || '';
      const parent  = img.closest('.gallery_item') || img.parentElement;
      const capNode = parent && parent.querySelector('.caption');
      modalCaption.innerHTML = capNode ? capNode.innerHTML : '';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';
	  document.body.classList.add('modal-open')
    });
  });
	 
  // 閉
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    document.documentElement.style.overflow = '';
	 
  document.body.classList.remove('modal-open');}
	 
  // バツボタン
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  
	 // 背景クリック
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  if (modalBody) {
    modalBody.addEventListener('click', (e) => e.stopPropagation());
  }
	 
  // Escで閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();