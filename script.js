c
// Seleção de elementos
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Menu Mobile simples
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Adicione CSS para .nav-links.active se desejar o menu lateral no mobile
});

// Rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de mudar o fundo do header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#fff';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.background = '#fff';
        header.style.padding = '1rem 5%';
    }
});
