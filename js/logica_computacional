let indices = {};

// inicia índice de cada carrossel
function iniciarCarrossel(id) {
  indices[id] = 0;
}

iniciarCarrossel("carrossel1");
iniciarCarrossel("carrossel2");

function mudarSlide(id, direcao) {
  const carrossel = document.getElementById(id);
  const slides = carrossel.querySelector(".slides");
  const total = carrossel.querySelectorAll(".slide").length;

  indices[id] += direcao;

  if (indices[id] < 0) indices[id] = total - 1;
  if (indices[id] >= total) indices[id] = 0;

  slides.style.transform = `translateX(${-indices[id] * 100}%)`;
}
