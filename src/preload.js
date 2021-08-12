const { criarComponenteBarraFerramentas, criarComponenteListaTarefas } = require('./componentes')
const { dialog } = require('electron').remote

window.addEventListener('DOMContentLoaded', () => {
    let divBarraFerramentas = document.getElementById("div_barra_ferramentas")
    let divListaTarefas = document.getElementById("div_lista_tarefas")
    console.log("preload")

    criarComponenteBarraFerramentas(divBarraFerramentas)
    criarComponenteListaTarefas(divListaTarefas)

    dialog.showMessageBox("Testando")


})