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
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex', 'flex-col');
                }
            });
        });
    }

    // ---- ANIMAÇÃO DE REVELAÇÃO ----
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { root: null, threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => observer.observe(el));

    // ---- VARIÁVEIS GLOBAIS ----
    let array20 = [];
    let array10 = [];

    // Funções dos programas (questão 5 a 11) ...
    function gerarAleatorio1() { /* ... */ }
    function crescente() { /* ... */ }
    function decrescente() { /* ... */ }
    function principal6() { /* ... */ }
    function principal7() { /* ... */ }
    function matriz8() { /* ... */ }
    function principal9() { /* ... */ }
    function principal10() { /* ... */ }
    function buscaLinear11() { /* ... */ }
    function limparResultados() { /* ... */ }

    // Event listeners dos botões
    document.getElementById('btn-gerar-aleatorio')?.addEventListener('click', gerarAleatorio1);
    document.getElementById('btn-crescente')?.addEventListener('click', crescente);
    document.getElementById('btn-decrescente')?.addEventListener('click', decrescente);
    document.getElementById('btn-bubble-sort')?.addEventListener('click', principal6);
    document.getElementById('btn-soma-array')?.addEventListener('click', principal7);
    document.getElementById('btn-matriz')?.addEventListener('click', matriz8);
    document.getElementById('btn-imc')?.addEventListener('click', principal9);
    document.getElementById('btn-temperatura')?.addEventListener('click', principal10);
    document.getElementById('btn-busca-linear')?.addEventListener('click', buscaLinear11);
    document.getElementById('btn-limpar')?.addEventListener('click', limparResultados);

    // ---- EFEITO DE BRILHO DO MOUSE (VERMELHO) ----
    const cards = document.querySelectorAll('.linguagem-card, .bloco, .bloco-programas, .code-block');
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