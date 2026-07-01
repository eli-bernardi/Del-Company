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

    // ---- CÁLCULO DE CIRCUITOS ----
    const btnCalcular = document.getElementById('btn-calcular');
    const resultadoDiv = document.getElementById('resultado');
    if (btnCalcular && resultadoDiv) {
        btnCalcular.addEventListener('click', () => {
            const voltagem = parseFloat(document.getElementById('voltagem').value);
            const r1 = parseFloat(document.getElementById('resistenciaA').value);
            const r2 = parseFloat(document.getElementById('resistenciaB').value);
            const r3 = parseFloat(document.getElementById('resistenciaC').value);
            if (isNaN(voltagem) || isNaN(r1) || isNaN(r2) || isNaN(r3) || voltagem <= 0 || r1 <= 0 || r2 <= 0 || r3 <= 0) {
                resultadoDiv.innerHTML = '<p style="color: #d62828; text-align: center;">⚠️ Preencha todos os campos corretamente.</p>';
                return;
            }
            const rParalelo = (r2 * r3) / (r2 + r3);
            const rTotal = r1 + rParalelo;
            const correnteTotal = voltagem / rTotal;
            const potenciaTotal = voltagem * correnteTotal;
            const vR1 = correnteTotal * r1;
            const vParalelo = correnteTotal * rParalelo;
            const correnteR2 = vParalelo / r2;
            const correnteR3 = vParalelo / r3;
            const potenciaR1 = Math.pow(correnteTotal, 2) * r1;
            const potenciaR2 = Math.pow(correnteR2, 2) * r2;
            const potenciaR3 = Math.pow(correnteR3, 2) * r3;
            resultadoDiv.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 12px; color: #e0e0e0;">
                    <p style="color: #d62828; font-weight: bold; font-size: 18px; margin: 0;">📊 Resultados do Circuito</p>
                    <p style="margin: 4px 0;"><strong>Resistência Paralelo (R2||R3):</strong> ${rParalelo.toFixed(2)} Ω</p>
                    <p style="margin: 4px 0;"><strong>Resistência Total:</strong> ${rTotal.toFixed(2)} Ω</p>
                    <p style="margin: 4px 0;"><strong>Corrente Total:</strong> ${correnteTotal.toFixed(4)} A</p>
                    <p style="margin: 4px 0;"><strong>Potência Total:</strong> ${potenciaTotal.toFixed(2)} W</p>
                    <hr style="border-color: rgba(255,255,255,0.1); margin: 8px 0;">
                    <p style="margin: 4px 0;"><strong>Tensão R1:</strong> ${vR1.toFixed(2)} V | <strong>Corrente:</strong> ${correnteTotal.toFixed(4)} A | <strong>Potência:</strong> ${potenciaR1.toFixed(2)} W</p>
                    <p style="margin: 4px 0;"><strong>Tensão R2:</strong> ${vParalelo.toFixed(2)} V | <strong>Corrente:</strong> ${correnteR2.toFixed(4)} A | <strong>Potência:</strong> ${potenciaR2.toFixed(2)} W</p>
                    <p style="margin: 4px 0;"><strong>Tensão R3:</strong> ${vParalelo.toFixed(2)} V | <strong>Corrente:</strong> ${correnteR3.toFixed(4)} A | <strong>Potência:</strong> ${potenciaR3.toFixed(2)} W</p>
                </div>
            `;
            resultadoDiv.style.animation = 'fadeInDown 0.5s ease';
        });
    }

    // ---- EFEITO DE BRILHO DO MOUSE (VERMELHO) ----
    const cards = document.querySelectorAll('.componente-card, .timeline-item, .image-card, .etapa, .conceito-box, .code-block');
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