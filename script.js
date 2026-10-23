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

/* Projeto conceitual de portfólio: não coleta dados nem processa assinaturas. */

/* Formulário demonstrativo: abre um rascunho de e-mail para revisão. */
var leadForm=document.getElementById("contact-form");
if(leadForm){leadForm.addEventListener("submit",function(event){
  event.preventDefault();
  var data=new FormData(leadForm);
  var subject=encodeURIComponent("Interesse no clube Venâncio Coffee — "+data.get("plano"));
  var body=encodeURIComponent("Olá, equipe Venâncio Coffee!\n\nTenho interesse em conhecer o clube.\n\nNome: "+data.get("nome")+"\nE-mail: "+data.get("email")+"\nPlano de interesse: "+data.get("plano")+"\nMensagem: "+(data.get("mensagem")||"Não informada")+"\n\nEnviado pelo formulário demonstrativo do site.");
  window.location.href="mailto:contato@venanciocoffee.com?subject="+subject+"&body="+body;
});}
