// JavaScript para o carrossel
function mudarSlide(carrosselId, direction) {
  const carrossel = document.getElementById(carrosselId);
  const slides = carrossel.querySelector('.slides');
  const slideCount = slides.children.length;
  const slideWidth = slides.children[0].offsetWidth;

  let currentPosition = parseInt(slides.style.transform?.split('(')[1]?.split('px')[0]) || 0;
  let newPosition = currentPosition - (direction * slideWidth);

  // Limitar o movimento
  const maxPosition = 0;
  const minPosition = -(slideWidth * (slideCount - 1));

  if (newPosition > maxPosition) {
    newPosition = minPosition;
  } else if (newPosition < minPosition) {
    newPosition = maxPosition;
  }

  slides.style.transform = `translateX(${newPosition}px)`;
}

// Inicializar carrosséis
document.addEventListener('DOMContentLoaded', function () {
  const caarrosseis = document.querySelectorAll('.carrossel');
  carrosseis.forEach(carrossel => {
    const slides = carrossel.querySelector('.slides');
    slides.style.transform = 'translateX(0px)';
  });

  // Menu mobile
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }
});