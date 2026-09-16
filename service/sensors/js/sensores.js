document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            menu.classList.toggle('flex-col');
        });
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex', 'flex-col');
                }
            });
        });
    }

    const revealElements = document.querySelectorAll('.reveal');

    const activateIfVisible = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
            el.classList.add('active');
            return true;
        }
        return false;
    };

    revealElements.forEach(activateIfVisible);

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.01,
            rootMargin: '0px 0px 150px 0px'
        });

        revealElements.forEach(el => {
            if (!el.classList.contains('active')) {
                observer.observe(el);
            }
        });
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }

    window.addEventListener('load', () => {
        revealElements.forEach(activateIfVisible);
    });

    window.addEventListener('scroll', () => {
        revealElements.forEach(el => {
            if (!el.classList.contains('active')) {
                activateIfVisible(el);
            }
        });
    }, { passive: true });

    const cards = document.querySelectorAll('.aplicacao-card, .setor-card, .sensor-item-link');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(214, 40, 40, 0.08), rgba(255, 255, 255, 0.02))`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.02)';
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    document.querySelectorAll('.btn-copiar').forEach(button => {
        button.addEventListener('click', async () => {
            const wrapper = button.closest('.code-wrapper');
            const codeEl = wrapper ? wrapper.querySelector('pre') : null;
            if (!codeEl) return;

            const codeText = codeEl.innerText || codeEl.textContent;
            try {
                await navigator.clipboard.writeText(codeText);
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copiado!';
                button.classList.add('copiado');
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('copiado');
                }, 2000);
            } catch (err) {
                console.error('Erro ao copiar código:', err);
                button.innerHTML = '❌ Erro';
                setTimeout(() => {
                    button.innerHTML = '📋 Copiar';
                }, 2000);
            }
        });
    });
});
