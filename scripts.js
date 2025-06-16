// ==== MENU SANDUÍCHE ====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ==== DEPOIMENTOS (CARROSSEL) ====
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });
}

showTestimonial(currentIndex);

// ==== VALIDAÇÃO DO FORMULÁRIO ====
const form = document.getElementById('lead-form');
const erro = document.getElementById('mensagem-erro');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();

    if (nome === '' || email === '' || whatsapp.length < 11) {
      erro.textContent = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    erro.textContent = '';
    alert('Inscrição enviada com sucesso!');
    form.reset();
  });
}
