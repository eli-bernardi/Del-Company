document.addEventListener('DOMContentLoaded', () => {
      // ---- MENU MOBILE ----
      const menuToggle = document.getElementById('menu-toggle');
      const menu = document.getElementById('menu');

      // Se você ainda não colocou o botão #menu-toggle no HTML, 
      // esta parte só vai ativar quando ele existir.
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
      } else {
            // Aviso amigável no console para você lembrar de adicionar o botão
            if (!document.getElementById('menu-toggle')) {
                  console.warn('⚠️ [Del Company] Botão #menu-toggle não encontrado. Adicione um botão no header para ativar o menu mobile.');
            }
      }

      // ---- ANIMAÇÃO DE REVELAÇÃO COM INTERSECTION OBSERVER ----
      const revealElements = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver(
            (entries) => {
                  entries.forEach(entry => {
                        if (entry.isIntersecting) {
                              entry.target.classList.add('active');
                              // Para elementos com delay
                              const delay = entry.target.getAttribute('data-delay');
                              if (delay) {
                                    entry.target.style.transitionDelay = delay;
                              }
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

      // ---- ANIMAÇÃO DOS NÚMEROS (CONTADOR) ----
      // (Mantido, mas só vai funcionar se você colocar elementos com .stat-number[data-target])
      const statNumbers = document.querySelectorAll('.stat-number[data-target]');

      const animateNumber = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const suffix = element.textContent.replace(/[0-9]/g, '').trim();
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateNumber = () => {
                  current += step;
                  if (current < target) {
                        element.textContent = Math.floor(current) + suffix;
                        requestAnimationFrame(updateNumber);
                  } else {
                        element.textContent = target + suffix;
                  }
            };

            updateNumber();
      };

      const numberObserver = new IntersectionObserver(
            (entries) => {
                  entries.forEach(entry => {
                        if (entry.isIntersecting) {
                              animateNumber(entry.target);
                              numberObserver.unobserve(entry.target);
                        }
                  });
            },
            {
                  threshold: 0.5
            }
      );

      statNumbers.forEach(number => numberObserver.observe(number));

      // ---- EFEITO SMOOTH NOS LINKS INTERNOS ----
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
            });
      });

      const cards = document.querySelectorAll(
            '.stat-item, .time-card, .servico-link, ' +
            '.spec-item, .modelo-card, .lista-aplicacoes li'
      );

      cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(214, 40, 40, 0.10), rgba(255, 255, 255, 0.02))
            `;
            });

            card.addEventListener('mouseleave', () => {
                  card.style.background = '';
            });
      });
});