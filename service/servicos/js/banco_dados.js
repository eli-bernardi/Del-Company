document.addEventListener('DOMContentLoaded', () => {
    // ---- MENU MOBILE ----
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            menu.classList.toggle('flex-col');
        });

        // Fecha o menu ao clicar em um link (mobile)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex', 'flex-col');
                }
            });
        });
    }

    // ---- ANIMAÇÃO DE REVELAÇÃO COM INTERSECTION OBSERVER ----
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Opcional: parar de observar após ativar
                    // observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    revealElements.forEach(el => observer.observe(el));

    // ---- EFEITO SMOOTH NOS LINKS INTERNOS (se houver âncoras) ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- EFEITO DE BRILHO NOS CARDS AO MOVER O MOUSE (OPCIONAL) ----
    const cards = document.querySelectorAll('.banco-card, .sgbd-card, .aplicacao-item, .tipo-card, .modelo-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // Pequeno gradiente radial que segue o mouse
            card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(214, 40, 40, 0.08), rgba(255, 255, 255, 0.02))
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.02)';
        });
    });
});