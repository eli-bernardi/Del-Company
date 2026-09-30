// =============================================
// DEL COMPANY — home.js
// Funcionalidades: header scroll, menu mobile,
// reveal animations, counter, carrossel
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- HEADER SCROLL ----
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ---- MENU MOBILE ----
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        // Fecha ao clicar em um link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });

        // Fecha ao clicar fora
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && !mobileMenu.contains(e.target)) {
                menuToggle.classList.remove('open');
                mobileMenu.classList.remove('open');
            }
        });
    }

    // ---- REVEAL ANIMATION ----
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach(el => revealObserver.observe(el));

    // ---- CONTADOR DE STATS ----
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const suffixEl = el.querySelector('span');
        const suffix = suffixEl ? suffixEl.textContent : '';
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const tick = () => {
            step++;
            current = Math.min(Math.round(increment * step), target);
            // Preservar o sufixo no span
            if (suffixEl) {
                el.childNodes[0].nodeValue = current;
            } else {
                el.textContent = current;
            }
            if (step < steps) {
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    };

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );
    statNumbers.forEach(n => counterObserver.observe(n));

    // ---- CARROSSEL ----
    const track = document.getElementById('carrosselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;

        const getVisibleCount = () => {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        };

        const updateCarrossel = () => {
            const items = track.querySelectorAll('.carrossel-item');
            const visible = getVisibleCount();
            const maxIndex = Math.max(0, items.length - visible);
            currentIndex = Math.min(currentIndex, maxIndex);
            const itemWidth = track.parentElement.offsetWidth / visible;
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            updateCarrossel();
        });

        nextBtn.addEventListener('click', () => {
            const items = track.querySelectorAll('.carrossel-item');
            const visible = getVisibleCount();
            const maxIndex = Math.max(0, items.length - visible);
            currentIndex = Math.min(maxIndex, currentIndex + 1);
            updateCarrossel();
        });

        window.addEventListener('resize', updateCarrossel, { passive: true });
    }

    // ---- SMOOTH SCROLL ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
