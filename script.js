const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-navigation');
const year = document.querySelector('#year');

function closeMenu() {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
  if (menuButton) menuButton.textContent = '☰';
}

menuButton?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 621px)').matches) closeMenu();
});

if (year) year.textContent = String(new Date().getFullYear());

// Evita que imagens externas quebradas exibam o ícone de imagem indisponível.
document.querySelectorAll('.coffee-card-image img').forEach((image) => {
  image.addEventListener('error', () => {
    image.classList.add('image-unavailable');
    image.alt = 'Imagem ilustrativa de café indisponível no momento';
  }, { once: true });
});
