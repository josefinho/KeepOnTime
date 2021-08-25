const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tarefas.sqlite3');

function abrirConexao() {}
function fecharConexao() {}

// Formato da tarefa:

/**
 * Salva uma tarefa no banco de dados.
 * 
 * Exemplo de objeto de tarefa:
 *
 * tarefa = {
 *   id: 1,
 *   titulo: "teste",
 *   prazo: "1999-12-12",
 *   hora: "15:23",
 *   descricao: "testte"
 * };
 */
function criarTarefa(tarefa) {
  
}


function alterarTarefa(tarefa) {
  
}

function removerTarefa(tarefa) {

}

