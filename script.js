/* TAREA: empezar preguntando cuánta gente hay en el grupo familiar.
    crear tantos inputs y labels como gente haya para completar la edad de cada integrante
    Al hacer click en calcular, mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio de edades

    Punto bonus: Crear un botón "para empezar de nuevo" que empiece el proceso nuevamente borrando los inputs creados"

*/

const $sendInfo  = document.querySelector('#send-info').onclick = function(event){
    const $amountMembers  = document.querySelector('#amount-members');
    const amountMembers = Number($amountMembers.value);

    createMember(amountMembers);
    displayButtons();
    disableSendInfoButton();
    event.preventDefault();
}


function addMember(i) {

    const $div = document.createElement('div');
    $div.className = 'member';
    
    const $label = document.createElement('label');
    $label.textContent = 'La edad del integrante Nº ' + (i + 1);

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = "Edad";

    $div.appendChild($label);
    $div.appendChild($input);

    const $members = document.querySelector('.total-members');
    $members.appendChild($div);
}

function createMember(amountMembers){
    if(amountMembers > 1 ){
        displayCalculateButton;
    } else {
        hideCalculateButton;
    }

    for(let i = 0; i < amountMembers; i++ ) {
        addMember(i);
    }
}

function displayButtons(){
    displayCalculateButton();
    displayResetButton();
}

function displayResetButton(){
    const $resetButton = document.querySelector('#reset');
    $resetButton.className = '';
}

function hideResetButton(){
    const $resetButton = document.querySelector('#reset')
    $resetButton.className = 'hidden'
}

function displayCalculateButton(){
    const $calculateButton = document.querySelector('#calculate');
    $calculateButton.className = '';
}

function hideCalculateButton() {
    const $calculateButton = document.querySelector('#calculate');
    $calculateButton.className = 'hidden'
}

function displayResults(){
    const $results = document.querySelector('#results');
    $results.className = '';
}

function hideResults(){
    const $results = document.querySelector('#results');
    $results.className = 'hidden';
}

function disableSendInfoButton(){
    const $sendInfoButton = document.querySelector('#send-info');
    $sendInfoButton.setAttribute('disabled', 'disabled')

}
    
const $calculateButton = document.querySelector('#calculate').onclick = function(event){
    const numbers = getAllMembersAges();
    displayAge('oldest', getOldestMember(numbers));
    displayAge('youngest', getYoungestMember(numbers));
    displayAge('average', getAverageAges(numbers));
    displayResults();

    event.preventDefault();
};

function removePreviousMembers(){
    const $members = document.querySelectorAll('.total-members');
    for(let i = 0; i < $members.length; i++){
        $members[i].remove();
    }
}

function displayAge(type, value) {
    document.querySelector(`#${type}-age`).textContent = value;
}



function getAllMembersAges () {
    const $members = document.querySelectorAll('.total-members input');
    const ages = [];

    for(let i = 0; i < $members.length; i++) {
        ages.push(Number($members[i].value));
    }

    return ages;   
}



