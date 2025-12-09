// Modal de contacto
const modal = document.getElementById('contactModal');
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// Abrir modal
openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Cerrar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const dificultad = document.getElementById('dificultad').value;

    if (!nombre || !dificultad) return;

    const dificultadTexto = document.querySelector(`#dificultad option[value="${dificultad}"]`).textContent;
    const mensaje = `Hola, soy ${nombre}. Me gustaría agendar una videollamada para conocer el Grupo DBT.\n\nMe identifico con: ${dificultadTexto}`;

    window.open(`https://wa.me/523311960715?text=${encodeURIComponent(mensaje)}`, '_blank');

    // Cerrar modal después de enviar
    closeModal();

    // Resetear formulario
    this.reset();
});

// Botón WhatsApp
function enviarWhatsApp() {
    window.open(`https://wa.me/523311960715?text=${encodeURIComponent('Hola, me gustaría conocer más sobre el Grupo de Habilidades DBT.')}`, '_blank');
}

// Smooth scroll para enlaces internos (solo si el target existe)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky Navigation - Siempre visible en la parte superior

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Team Member Expand/Collapse
document.querySelectorAll('.team-expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const teamMember = button.closest('.team-member');
        teamMember.classList.toggle('expanded');
    });
});
