// ========== MODO OSCURO/CLARO ==========
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }
});

// ========== ANIMACIONES AL SCROLL (para hidden class) ==========
const observerHidden = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach(el => observerHidden.observe(el));

// ========== ANIMACIONES AL SCROLL (para data-animate) ==========
const observerAnimate = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observerAnimate.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => observerAnimate.observe(el));

// ========== VALIDACIÓN DE FORMULARIO ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const email = document.getElementById('email');
        if (email && !email.value.includes('@')) {
            e.preventDefault();
            alert('Por favor ingresa un correo electrónico válido');
        }
    });
}
