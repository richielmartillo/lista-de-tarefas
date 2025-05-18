function carregarTarefas() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  tarefas.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.texto;
    if (item.feito) li.classList.add('feito');

    li.onclick = () => {
      tarefas[index].feito = !tarefas[index].feito;
      salvarTarefas(tarefas);
      carregarTarefas();
    };

    lista.appendChild(li);
  });
}

function adicionarTarefa() {
  const input = document.getElementById('tarefa');
  const texto = input.value.trim();
  if (texto === '') return;

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.push({ texto, feito: false });
  salvarTarefas(tarefas);
  input.value = '';
  carregarTarefas();
}

function salvarTarefas(tarefas) {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

carregarTarefas(); 