// Retorna um vetor com os checkboxes da página, incluindo
// o checkbox global que marca/desmarca todos os outros.
function getAllCheckInputs() {
    let inputs = [];
    let checkboxes = [];

    inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].getAttribute("type") === "checkbox")
            checkboxes.push(inputs[i]);
    }

    return checkboxes;
}

// Ao clicar na checkbox global, essa função faz a lógica de 
// marcar/desmarcar as checkboxes.
function selectAllChecks(){
    let checkboxes = getAllCheckInputs();

    document.getElementById("globalcheck").checked = false;

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked === true) {
            for(let j = 0; j < checkboxes.length; j++) {
                checkboxes[j].checked = false;
            }
            return;
        }
    }

        for(let j = 0; j < checkboxes.length; j++) {
            checkboxes[j].checked = true;
        }
}

// Usado no botão de editar tarefas para verificar as tarefas marcadas.
// Assim dá pra saber quais tarefas alocar no modal.
function checkCheckBox() { 
    let checkboxes = getAllCheckInputs();
    let checkedCheckboxes = [];

    document.getElementById("globalcheck").checked = false;

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked === true)
            checkedCheckboxes.push(checkboxes[i]);
    }
}