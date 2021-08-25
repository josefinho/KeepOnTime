const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './test-database.sqlite',
});

const { Tarefa } = require('./schema');
const { criarTarefa, pegarListaTarefas } = require('./tarefas-repos');

async function executarTestes() {
    let tarefa = {
        titulo: "teste",
        prazo: "1999-12-12",
        hora: "15:23",
        descricao: "testte"
    };
    
    //let tarefa_id = criarTarefa(tarefa).then(tarefa => tarefa_id = tarefa);
    console.log("=======================================")
    let listaTarefas = await pegarListaTarefas();
    listaTarefas.forEach(element => {
        console.log(element.id)
    });
}

executarTestes()


