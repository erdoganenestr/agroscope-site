(() => {
  const menuButton = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-nav');
  if (menuButton && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Menüyü aç');
    };
    menuButton.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    });
    mobileMenu.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('.tab[data-filter]').forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      document.querySelectorAll('.tab[data-filter]').forEach(button => {
        button.classList.toggle('active', button === tab);
        button.setAttribute('aria-pressed', String(button === tab));
      });
      document.querySelectorAll('.model-card[data-group]').forEach(card => {
        card.hidden = filter !== 'ALL' && card.dataset.group !== filter;
      });
    });
  });

  const detailScene = document.querySelector('.detail-scene');
  document.querySelectorAll('.thumb[data-image]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (!detailScene) return;
      detailScene.style.setProperty('--scene', `url("${thumb.dataset.image}")`);
      document.querySelectorAll('.thumb').forEach(item => item.classList.toggle('selected', item === thumb));
    });
  });

  for (const selector of ['.date-card', '.flow-tabs button']) {
    document.querySelectorAll(selector).forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll(selector).forEach(item => item.classList.toggle('active', item === button));
      });
    });
  }

  const contactForm = document.querySelector('#contact-form');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const values = new FormData(contactForm);
    const subject = `AgroScope: ${values.get('topic') || 'İletişim'}`;
    const body = [
      `Ad Soyad: ${values.get('name') || ''}`,
      `E-posta: ${values.get('email') || ''}`,
      `Telefon: ${values.get('phone') || ''}`,
      `İlgi Alanı: ${values.get('topic') || ''}`,
      '',
      String(values.get('message') || '')
    ].join('\n');
    window.location.href = `mailto:erdoganenes.tr35@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
