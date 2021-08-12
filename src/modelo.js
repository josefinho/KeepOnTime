function criarComponenteTarefa() {
    var tarefa = {
        id: 1,
        titulo: "Um titulo",
        descricao: "Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user         activates the relevant trigger.",
        cor: "#353535",
        prioridade: 1
    }

    var htmlComponente = `
        <tr class="collapse">
            <td colspan="4">${tarefa.descricao}</td>
        </tr>
        <tr data-bs-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
            <td>TR</td>
            <td>${tarefa.titulo}</td>
            <td>${tarefa.prioridade}</td>
            <td>${tarefa.prazo}</td>
        </tr>`

    let myElm = document.createElement("div"); // Create a new element

    myElm.innerHTML = htmlComponente

    document.body.appendChild(myElm); // Add the object to the DOM
}

function criarComponenteListaTarefas() {
    // leria do banco de dados
    // criaria array com as tarefas
    // chamaria função para criar o componente de tarefa para cada tarefa
    // 
    //
}

function criarComponenteBarraFerramentas() {
    // botão de criar tarefa
    // botão de apagar
    // concluir
}

function criarComponenteBotaoCriarTarefa() {

}

function criarComponenteBotaoApagarTarefa() {

}

function criarComponenteBotaoConcluirTarefa() {

}