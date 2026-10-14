// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Remove broken images so the gradient placeholder shows through
document.querySelectorAll('.media img, .avatar img').forEach(img => {
  img.addEventListener('error', () => img.remove());
});

// Portfolio filter
const filters = document.querySelectorAll('.filter');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.setAttribute('aria-pressed', b === btn));
    const cat = btn.dataset.filter;
    document.querySelectorAll('.project').forEach(p => {
      p.hidden = cat !== 'all' && p.dataset.category !== cat;
    });
  });
});

// Contact form: front-end validation only.
// Connect it to a backend or a form service (e.g. Formspree) to actually send messages.
const form = document.getElementById('contact-form');
if (form) {
  const rules = {
    name: v => v.trim() ? '' : 'Enter your full name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address.',
    subject: v => v.trim() ? '' : 'Enter a subject.',
    message: v => v.trim().length >= 10 ? '' : 'Write a message of at least 10 characters.'
  };
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    Object.entries(rules).forEach(([id, check]) => {
      const field = form.elements[id];
      const msg = check(field.value);
      document.getElementById(id + '-error').textContent = msg;
      field.setAttribute('aria-invalid', Boolean(msg));
      if (msg) ok = false;
    });
    if (!ok) { form.querySelector('[aria-invalid="true"]').focus(); return; }
    const status = document.getElementById('form-status');
    status.hidden = false;
    status.textContent = 'Message sent. We will reply as soon as possible.';
    form.reset();
  });
}
