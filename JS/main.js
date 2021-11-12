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

    document.getElementById('main-content').append(pElement);
    //Ändrat text färg
    pElement.style.color = 'white';
    pElement.style.fontSize = '30px'

    //Skapat ett inputfält
    const userInputField = document.createElement('input');

    document.getElementById('main-content').append(userInputField);
    userInputField.addEventListener('input', () => nameInTextField(userInputField));

}

//Bekräfta att användaren fyllt i sitt namn??


function nameInTextField(userInputField) {

    // let name;
    if (userInputField.value.length > 1) {
        console.log(userInputField.value)
    }
    else {
        let pElement = document.createElement('p').textContent = 'why u no putti namee'

        document.getElementById('main-content').append(pElement);


    }
}

