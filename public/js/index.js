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
function createEditForm(data) {
    let divForm = document.createElement('div');

    console.log(data);
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
    input.value = data[0];

    document.getElementById('modalEditContent').appendChild(divForm);
    divForm.appendChild(div);
    div.appendChild(span);
    div.appendChild(input);

    let divPrazo = div.cloneNode(true);
    divPrazo.firstChild.innerHTML = 'Prazo'
    divPrazo.lastChild.name = 'prazo'
    divPrazo.lastChild.type = 'date'
    divPrazo.lastChild.value = data[1];
    divForm.appendChild(divPrazo);

    let divHora = div.cloneNode(true);
    divHora.firstChild.innerHTML = 'Horário'
    divHora.lastChild.type = 'time'
    divHora.lastChild.name = 'hora'
    divHora.lastChild.value = data[2];
    divForm.appendChild(divHora);

    let divText = document.createElement('div');
    divText.setAttribute('class', 'input-group')
    divText.appendChild(span.cloneNode(true));
    divText.appendChild(document.createElement('textarea'));
    divText.firstChild.innerHTML = 'Descrição'
    divText.lastChild.setAttribute('class', 'form-control');
    divText.lastChild.name = 'descricao';
    divText.lastChild.value = data[4];

    // input para enviar o ID da tarefa.
    divText.appendChild(document.createElement('input'));
    divText.lastChild.name = 'id';
    divText.lastChild.type = 'text';
    divText.lastChild.placeholder = 'ID';
    divText.lastChild.style.display = 'none';
    divText.lastChild.value = data[3];

    divForm.appendChild(divText);
    divForm.appendChild(document.createElement('hr'))
}

function removeTextSpacing(str) {
    let newStr;

    if(str.indexOf('\n  ') === 0) {
        newStr = str.slice(13, str.length - 10)
        return newStr;
    }

    return str;
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
        
        let Alltable_rows = document.getElementsByTagName('tr');
        let trArray = [];
        let descArray = [];

        for(let i = 1; i < Alltable_rows.length; i++){
            if(i % 2 === 0) {
                descArray.push(
                    removeTextSpacing(Alltable_rows[i].
                        children[0].innerText)
                );
            } else {
                trArray.push(Alltable_rows[i]);

                if(!Alltable_rows[i].children[0].children[0].children[0].checked)
                    i++;
            }
        }

        console.log(trArray)
        console.log(descArray)

        let TdData, TrData = [];
        for(let i = 0; i < trArray.length; i++) {
            TdData = [];

            if(trArray[i].children[0].children[0].children[0].checked) {
                for(let j = 2; j < trArray[i].children.length; j++) {
                    TdData.push(trArray[i].children[j].innerText);
                }
                TdData.push(descArray[0]);
                descArray.shift();
                TrData.push(TdData);
            }
        }

        console.log()

        for(let i = 0; i < TrData.length; i++) {
            TrData[i][3] = TrData[i][3].slice(13, 49);
        }

        console.log(TrData);
        for(let i = 0; i < TrData.length; i++) {
            createEditForm(TrData[i]);
        }

        document.getElementById("modalEditMessage").style.display = 'none';
    }
}

function removeEditContent() {
    modalEditBody = document.getElementById("modalEditContent");

    while (modalEditBody.firstChild) {
        modalEditBody.removeChild(modalEditBody.firstChild);
    }

}


function expand_subtext(id){
    
    let status = document.getElementById(id).getAttribute("class")


        if (status == "collapse"){
            document.getElementById(id).setAttribute("class" , "expand")
        }else{
            document.getElementById(id).setAttribute("class" , "collapse")
        }

}

function submitForm() {
    let form = document.getElementById('modalEditContent');
    form.submit();
}