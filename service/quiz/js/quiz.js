/* =========================================================
   QUIZ DEL COMPANY — lógica
   Depende de: questoes.js (array global `questoes`)
   ========================================================= */
(function () {
  'use strict';

  var EMBARALHAR_ALTERNATIVAS = true; // embaralha A–D a cada tentativa
  var CHAVE_RECORDE = 'delcompany_quiz_recorde';
  var LETRAS = ['A', 'B', 'C', 'D'];

  /* ---------- Estado ---------- */
  var lista = [];          // questões da tentativa (com alternativas já embaralhadas)
  var indice = 0;
  var acertos = 0;
  var selecionada = null;
  var revelada = false;
  var porCategoria = {};   // { categoria: { total, acertos } }

  /* ---------- DOM ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var el = {
    container: $('quiz-container'),
    contador: $('contador'),
    pontuacao: $('pontuacao'),
    barra: $('barra-preenchimento'),
    categoria: $('categoria'),
    contexto: $('contexto'),
    comando: $('comando'),
    figura: $('questao-figura'),
    imagem: $('imagem'),
    opcoes: $('opcoes'),
    feedback: $('feedback'),
    explicacao: $('explicacao'),
    btnProxima: $('btn-proxima'),
    resultado: $('resultado'),
    scoreCircle: $('score-circle'),
    scoreTexto: $('score-texto'),
    scorePorcento: $('score-porcento'),
    resIcone: $('resultado-icone'),
    resTitulo: $('resultado-titulo'),
    resMsg: $('resultado-mensagem'),
    recorde: $('resultado-recorde'),
    detalhe: $('resultado-categorias'),
    btnRefazer: $('btn-refazer')
  };

  /* ---------- Utilitários ---------- */
  function embaralhar(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // Cópia da questão com alternativas (opcionalmente) embaralhadas e
  // o índice da correta recalculado.
  function prepararQuestao(q) {
    var ordem = q.opcoes.map(function (_, i) { return i; });
    if (EMBARALHAR_ALTERNATIVAS) ordem = embaralhar(ordem);
    return {
      categoria: q.categoria, contexto: q.contexto, comando: q.comando,
      imagem: q.imagem, alt: q.alt, explicacao: q.explicacao,
      opcoes: ordem.map(function (i) { return q.opcoes[i]; }),
      correta: ordem.indexOf(q.correta)
    };
  }

  function lerRecorde() {
    try { return parseInt(localStorage.getItem(CHAVE_RECORDE), 10); } catch (e) { return NaN; }
  }
  function salvarRecorde(valor) {
    try { localStorage.setItem(CHAVE_RECORDE, String(valor)); } catch (e) { /* sem storage: ignora */ }
  }

  /* ---------- Progresso ---------- */
  function atualizarProgresso() {
    var respondidas = indice + (revelada ? 1 : 0);
    el.barra.style.width = (respondidas / lista.length * 100) + '%';
    el.contador.textContent = 'Questão ' + Math.min(indice + 1, lista.length) + ' de ' + lista.length;
    el.pontuacao.textContent = 'Acertos: ' + acertos;
  }

  /* ---------- Renderização ---------- */
  function carregarQuestao() {
    var q = lista[indice];
    revelada = false;
    selecionada = null;

    el.categoria.textContent = q.categoria || '';
    el.contexto.textContent = q.contexto;
    el.comando.textContent = q.comando;

    // Imagem (só aparece nas questões que têm)
    if (q.imagem) {
      el.imagem.onerror = function () { el.figura.hidden = true; };
      el.imagem.src = q.imagem;
      el.imagem.alt = q.alt || 'Imagem da questão';
      el.figura.hidden = false;
    } else {
      el.figura.hidden = true;
      el.imagem.removeAttribute('src');
    }

    // Alternativas
    el.opcoes.innerHTML = '';
    q.opcoes.forEach(function (texto, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'opcao';

      var letra = document.createElement('span');
      letra.className = 'opcao-letra';
      letra.textContent = LETRAS[i];

      var corpo = document.createElement('span');
      corpo.className = 'opcao-texto';
      corpo.textContent = texto;

      btn.appendChild(letra);
      btn.appendChild(corpo);
      btn.addEventListener('click', function () { escolher(i, btn); });
      el.opcoes.appendChild(btn);
    });

    el.feedback.textContent = '';
    el.feedback.className = 'quiz-feedback';
    el.explicacao.hidden = true;
    el.explicacao.textContent = '';
    el.btnProxima.disabled = true;
    el.btnProxima.textContent = 'Confirmar resposta';
    atualizarProgresso();
  }

  function escolher(i, botao) {
    if (revelada) return;
    selecionada = i;
    var todas = el.opcoes.querySelectorAll('.opcao');
    for (var k = 0; k < todas.length; k++) todas[k].classList.remove('selecionada');
    botao.classList.add('selecionada');
    el.btnProxima.disabled = false;
  }

  function revelar() {
    var q = lista[indice];
    revelada = true;

    var botoes = el.opcoes.querySelectorAll('.opcao');
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.remove('selecionada');
      botoes[i].disabled = true;
      if (i === q.correta) botoes[i].classList.add('correta');
      else if (i === selecionada) botoes[i].classList.add('errada');
    }

    var acertou = selecionada === q.correta;
    if (acertou) acertos++;

    var cat = q.categoria || 'Geral';
    if (!porCategoria[cat]) porCategoria[cat] = { total: 0, acertos: 0 };
    porCategoria[cat].total++;
    if (acertou) porCategoria[cat].acertos++;

    el.feedback.textContent = acertou
      ? '✔ Resposta correta!'
      : '✘ Resposta incorreta. A alternativa correta é a letra ' + LETRAS[q.correta] + '.';
    el.feedback.className = 'quiz-feedback ' + (acertou ? 'ok' : 'erro');

    if (q.explicacao) {
      el.explicacao.textContent = q.explicacao;
      el.explicacao.hidden = false;
    }

    el.btnProxima.textContent = indice === lista.length - 1 ? 'Ver resultado' : 'Próxima questão →';
    atualizarProgresso();
  }

  function avancar() {
    indice++;
    if (indice >= lista.length) mostrarResultado();
    else {
      carregarQuestao();
      el.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ---------- Resultado ---------- */
  function mostrarResultado() {
    el.container.hidden = true;
    el.resultado.hidden = false;

    var total = lista.length;
    var pct = Math.round(acertos / total * 100);
    el.scoreTexto.textContent = acertos + '/' + total;
    el.scorePorcento.textContent = pct + '%';
    el.scoreCircle.style.background =
      'conic-gradient(var(--red) ' + (pct * 3.6) + 'deg, var(--border) 0deg)';

    var faixa;
    if (pct === 100) faixa = ['Perfeito!', 'Você acertou todas as questões e demonstra total domínio do conteúdo.', 'fa-trophy'];
    else if (pct >= 70) faixa = ['Muito bem!', 'Ótimo desempenho! Você domina a maior parte do conteúdo — vale revisar os detalhes das que errou.', 'fa-thumbs-up'];
    else if (pct >= 50) faixa = ['Bom trabalho!', 'Você está no caminho certo. Revise os conteúdos das questões que errou e tente novamente.', 'fa-book-open'];
    else faixa = ['Continue estudando!', 'Releia os conteúdos de Robótica, Sensores e Eletrônica e refaça o quiz para fixar melhor os conceitos.', 'fa-rotate-right'];

    el.resTitulo.textContent = faixa[0];
    el.resMsg.textContent = faixa[1];
    el.resIcone.className = 'fas ' + faixa[2];

    // Recorde pessoal (localStorage; se indisponível, apenas não exibe)
    var anterior = lerRecorde();
    if (isNaN(anterior) || acertos > anterior) {
      salvarRecorde(acertos);
      el.recorde.textContent = isNaN(anterior) ? '' : 'Novo recorde pessoal!';
    } else {
      el.recorde.textContent = 'Seu melhor resultado: ' + anterior + '/' + total;
    }

    // Desempenho por tema
    el.detalhe.innerHTML = '';
    Object.keys(porCategoria).forEach(function (cat) {
      var d = porCategoria[cat];
      var li = document.createElement('li');
      var nome = document.createElement('span');
      nome.textContent = cat;
      var valor = document.createElement('strong');
      valor.textContent = d.acertos + '/' + d.total;
      li.appendChild(nome);
      li.appendChild(valor);
      el.detalhe.appendChild(li);
    });

    el.resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ---------- Início / reinício ---------- */
  function iniciar() {
    lista = questoes.map(prepararQuestao);
    indice = 0;
    acertos = 0;
    selecionada = null;
    revelada = false;
    porCategoria = {};
    el.resultado.hidden = true;
    el.container.hidden = false;
    carregarQuestao();
  }

  el.btnProxima.addEventListener('click', function () {
    if (!revelada) revelar();
    else avancar();
  });

  el.btnRefazer.addEventListener('click', function () {
    iniciar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  iniciar();
})();
