// ----- FORMULÁRIO DE CADASTRO -----
const form = document.getElementById('formCadastro');
const resultado = document.getElementById('resultado');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    resultado.innerHTML = `
      <p><strong>Dados gravados:</strong></p>
      <p>Nome: ${nome}</p>
      <p>E-mail: ${email}</p>
      <p>Idade: ${idade}</p>
    `;

    form.reset();
  });
}
