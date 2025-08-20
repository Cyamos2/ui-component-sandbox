(function(){
  // Theme toggle
  const btn = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    btn.setAttribute('aria-pressed', 'true');
  }
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    btn.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Form validation
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const setError = (id, msg) => document.getElementById(id).textContent = msg || '';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    if (!name.value.trim()) { ok = false; setError('nameErr', 'Name is required.'); name.setAttribute('aria-invalid','true'); }
    else { setError('nameErr',''); name.removeAttribute('aria-invalid'); }

    if (!email.value.trim()) { ok = false; setError('emailErr', 'Email is required.'); email.setAttribute('aria-invalid','true'); }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { ok = false; setError('emailErr','Enter a valid email.'); email.setAttribute('aria-invalid','true'); }
    else { setError('emailErr',''); email.removeAttribute('aria-invalid'); }

    status.textContent = ok ? 'Submitted (demo only).' : 'Please fix the errors above.';
    if (ok) form.reset();
  });

  // Modal
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('dialog');
  const closeBtn = document.getElementById('closeModal');
  let lastFocus = null;

  function openModal() { lastFocus = document.activeElement; modal.hidden = false; closeBtn.focus(); }
  function closeModal() { modal.hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (!modal.hidden && e.key === 'Escape') closeModal(); });

  // Gallery
  const items = Array.from(document.querySelectorAll('.gallery__item'));
  let idx = 0;
  const show = i => items.forEach((el, n) => el.hidden = n !== i);
  show(idx);
  document.getElementById('prev').addEventListener('click', () => { idx = (idx - 1 + items.length) % items.length; show(idx); });
  document.getElementById('next').addEventListener('click', () => { idx = (idx + 1) % items.length; show(idx); });
})();