// Sistema simples de cadastro - Versão alternativa
let clientes = [];
let idCounter = 1;

// Usar click no botão em vez de submit no formulário
document.querySelector('#formCliente button[type="submit"]').addEventListener('click', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value; // CORRIGIDO: estava getElementByfId

  if (!nome || !email) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const novoCliente = {
    id: idCounter++,
    nome: nome,
    email: email
  };

  clientes.push(novoCliente);
  atualizarTabela();
  document.getElementById('formCliente').reset();
  alert('Cliente cadastrado com sucesso!');
});

// Restante do código permanece igual...
function atualizarTabela() {
  const corpoTabela = document.getElementById('corpoTabela');
  corpoTabela.innerHTML = '';

  if (clientes.length === 0) {
    corpoTabela.innerHTML = '<tr><td colspan="4">Nenhum cliente cadastrado</td></tr>';
    return;
  }

  clientes.forEach(cliente => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>
                <button onclick="excluirCliente(${cliente.id})">🗑️ Excluir</button>
            </td>
        `;
    corpoTabela.appendChild(tr);
  });
}

function excluirCliente(id) {
  if (confirm('Tem certeza que deseja excluir este cliente?')) {
    clientes = clientes.filter(cliente => cliente.id !== id);
    atualizarTabela();
  }
}

document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

atualizarTabela();  