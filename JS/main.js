window.onload = main;

function main() {
    addEventListeners()
}

function addEventListeners() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', onStartButton);
}

//Tömmer innehållet i HTML'en och skapar ett p element med innehåll (sida 2)
function onStartButton() {
    document.getElementById('main-content').innerHTML = '';
    const pElement = document.createElement('p');
    pElement.innerText = `This is a story about a dark night. 
    Please tell us your name in case something happens to you`;
    const errorElement = document.createElement('p')
    errorElement.innerText = 'Add your name with atleast two letters'
    errorElement.classList.add('errorinjo');
    pElement.classList.add('text-anim');
    errorElement.style.fontSize = '30px';

    document.getElementById('main-content').append(pElement, errorElement);
    //Ändrat text färg
    pElement.style.color = 'white';
    pElement.style.fontSize = '30px'

    //Skapat ett inputfält
    const userInputField = document.createElement('input');
    document.getElementById('main-content').append(userInputField);
    userInputField.addEventListener('input', () => nameInTextField(userInputField, errorElement, nameConfirmButton));

    //Skapar en knapp
    const nameConfirmButton = document.createElement('button');
    document.getElementById('main-content').append(nameConfirmButton);
    nameConfirmButton.innerText = 'Done';
    nameConfirmButton.addEventListener('click', () => startAdventure(errorElement, userInputField, nameConfirmButton));
    nameConfirmButton.setAttribute('disabled', "");
}

//Bekräfta att användaren fyllt i sitt namn
function nameInTextField(userInputField, errorElement, nameConfirmButton) {

    if (userInputField.value.length >= 2) {
        nameConfirmButton.removeAttribute('disabled', "")

    }

}

function startAdventure(errorElement, userInputField) {
    errorElement.innerText = `Hello ${userInputField.value}!
        You just moved to a new town and don't know anything about this place. 
        One day your in town, when you look at your watch and see that it's really late 
        and you need to get home. 
        
        How will you get home?`
}

