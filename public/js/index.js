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