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

    document.getElementById("globalcheck").checked = false;
}

/**
 * Retorna um vetor com os
 * checkboxes checados.
 */
function getAllCheckeds() { 
    let checkboxes = getAllCheckInputs();
    let checkedCheckboxes = [];

    document.getElementById("globalcheck").checked = false;

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked === true)
            checkedCheckboxes.push(checkboxes[i]);
    }

    return checkedCheckboxes;
}

/**
 * Cria um <form> contendo um formulário para edição
 * de tarefas.
 */
function createEditForm() {
    let form = document.createElement('form');
    form.method = "POST";
    form.action = "/";
    
    let div = document.createElement('div');
    div.setAttribute('class','input-group mb-3');

    let span = document.createElement('span');
    span.setAttribute('class','input-group-text');
    span.id = 'basic-addon1';
    span.innerHTML = 'Título';

    let input = document.createElement('input');
    input.name='titulo';
    input.type='text';
    input.setAttribute('class','form-control')
    input.placeholder = 'Título da tarefa';
    input["aria-label"] = 'Username';
    input["aria-describedby"] = 'basic-addon1';

    document.getElementById('modalEditContent').appendChild(form);
    form.appendChild(div);
    div.appendChild(span);
    div.appendChild(input);

    let divPrazo = div.cloneNode(true);
    divPrazo.firstChild.innerHTML = 'Prazo'
    divPrazo.lastChild.name = 'prazo'
    divPrazo.lastChild.type = 'date'
    form.appendChild(divPrazo);

    let divHora = div.cloneNode(true);
    divHora.firstChild.innerHTML = 'Horário'
    divHora.lastChild.type = 'time'
    divHora.lastChild.name = 'hora'
    form.appendChild(divHora);

    let divText = document.createElement('div');
    divText.setAttribute('class', 'input-group')
    divText.appendChild(span.cloneNode(true));
    divText.appendChild(input.cloneNode(true));
    divText.firstChild.innerHTML = 'Descrição'
    divText.lastChild.type = null;
    divText.lastChild.name = 'descricao';

    form.appendChild(divText);
}

/**
 * Função específica para o botão de editar tarefas.
 * 
 * Verifica se há alguma tarefa marcada para editar e adicionar ao modal.
 * Caso não haja, o modal não aparece ao clicar no botão de editar
 * tarefas.
 */
document.getElementById("edit").onclick = function() {

    if(getAllCheckeds().length === 0) {
        document.getElementById("modalEditContent").style.display = 'none';
        document.getElementById("modalEditMessage").style.display = 'block';
    } else {
        document.getElementById("modalEditContent").style.display = 'block';
        document.getElementById("modalEditMessage").style.display = 'none';
    }
}