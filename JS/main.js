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
    userInputField.id = 'nameField';
    document.getElementById('main-content').append(userInputField);
    userInputField.addEventListener('input', () => nameInTextField(userInputField, errorElement, nameConfirmButton));

    //Skapar en knapp
    const nameConfirmButton = document.createElement('button');
    nameConfirmButton.id = 'nameButton';
    document.getElementById('main-content').append(nameConfirmButton);
    nameConfirmButton.innerText = 'Done';
    nameConfirmButton.addEventListener('click', () => startAdventure(errorElement, userInputField, nameConfirmButton));
    nameConfirmButton.setAttribute('disabled', "");

    //skapa ett divelement som vi sen kan tömma - win.
    const divElement = document.createElement('div')
    divElement.id = 'storyContent'
    document.getElementById('main-content').append(divElement)

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
        
        How will you get home? Bus, Walk or Taxi?`
    //gömmer textfältet för namn
    document.getElementById('nameField').style.display = 'none';
    document.getElementById('nameButton').style.display = 'none';

    //skapar nytt input
    const homeInput = document.createElement('input');
    document.getElementById('main-content').append(homeInput);
    homeInput.addEventListener('input', () => onHomeInput(homeInput));

}
//skapat function som ger olika resultat beroende på inputen
function onHomeInput(homeInput) {
console.log(homeInput.value)


    if (homeInput.value === 'Bus') {
        document.getElementById('storyContent').innerHTML = ''
        const pElement = document.createElement('p');
        document.getElementById('storyContent').append(pElement);
        pElement.style.fontSize = '30px';
        pElement.innerText = 'The buses have already stopped running for today';

    } else if (homeInput.value === 'Walk') {
        document.getElementById('storyContent').innerHTML = ''
        const pElement = document.createElement('p');
        document.getElementById('storyContent').append(pElement);
        pElement.style.fontSize = '30px';
        pElement.innerText = `You decided to walk home, and starts walking towards your home
            that is about an hour away.
            It's really dark outside and you walk over a little bridge to an island
            you have to walk through to get to your home, but you can't see anything.

            What do you do?`;

    } else if (homeInput.value === 'Taxi') {
        document.getElementById('storyContent').innerHTML = ''
        const pElement = document.createElement('p');
        document.getElementById('storyContent').append(pElement);
        pElement.style.fontSize = '30px';
        pElement.innerText = `You choice to look for a taxi and after a few minutes
        you see a car with the headlights on a few meters in front of you.
        You walk towards it and bend down to see if there's someone inside
        the car. But the only thing you see is a bloody hand print on the window.

        What do you do?`;

    }
}

// function




















































