const { inserirTarefa, recuperarListaDeTarefas } = require('./bd/tarefas')

function criarComponenteTarefa(tarefa, div_lista_tarefas) {
    let div = document.createElement("div"); // Create a new element
    div.innerHTML = `
        <tr class="collapse">
            <td colspan="4">${tarefa.descricao}</td>
        </tr>
        <tr data-bs-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
            <td>TR</td>
            <td>${tarefa.titulo}</td>
            <td>${tarefa.prioridade}</td>
            <td>${tarefa.prazo}</td>
        </tr>`
    div_lista_tarefas.body.appendChild(div); // Add the object to the DOM
}

function criarComponenteListaTarefas(div_lista_tarefas) {
    let listaTarefas = recuperarListaDeTarefas()
    console.log("listaTarefas")

    for (let tarefa in listaTarefas) {
        criarComponenteTarefa(tarefa, div_lista_tarefas)
    }
}

function criarComponenteBarraFerramentas(divBarraFerramentas) {
    console.log("Ok")
}

function criarComponenteBotaoCriarTarefa() {
    console.log("Ok")
}

function criarComponenteBotaoApagarTarefa() {
    console.log("Ok")
}

function criarComponenteBotaoConcluirTarefa() {
    console.log("Ok")
}

module.exports = {
    criarComponenteBarraFerramentas,
    criarComponenteListaTarefas,
}