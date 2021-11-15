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
    document.querySelector('.start-container').innerHTML = '';
    elementCreator('.start-container', 'p', story.onStartPress)
    elementCreator('.start-container', 'p', story.minimumLetters)

    //Skapat ett inputfält med knapp
    let userInputField = elementCreator('.start-container', 'input')
    let nameConfirmButton = elementCreator('.start-container', 'button', 'Done')
    nameConfirmButton.setAttribute('disabled', "");
    userInputField.addEventListener('input', () => nameInTextField(userInputField, nameConfirmButton));
    nameConfirmButton.addEventListener('click', () => afterNameInput(userInputField, nameConfirmButton));
}

//Bekräfta att användaren fyllt i sitt namn
function nameInTextField(userInputField, nameConfirmButton) {
    if (userInputField.value.length >= 2) {
        nameConfirmButton.removeAttribute('disabled', "")
    } else {
        nameConfirmButton.setAttribute('disabled', "");
    }
}

//Text med namnet användaren fyllt i
function afterNameInput(userInputField) {
    document.querySelector('.start-container').innerHTML = ''
    elementCreator('.start-container', 'p', story.afterPlayerName, userInputField);
    let homeInput = elementCreator('.start-container', 'input')
    let confirmGettingHomeButton = elementCreator('.start-container', 'button', 'ImReady')
    confirmGettingHomeButton.setAttribute('disabled', "");
    homeInput.addEventListener('input', () => onHomeInput(homeInput, confirmGettingHomeButton));
    confirmGettingHomeButton.addEventListener('click', () => onHomeInput(homeInput, confirmGettingHomeButton))
}

//skapat function som ger olika resultat beroende på inputen
function onHomeInput(homeInput, confirmGettingHomeButton) {
    confirmGettingHomeButton.setAttribute('disabled', "");
    if (homeInput.value.toUpperCase() === 'BUS') {
        elementCreator('.story-container', 'p', story.choiceBus)


    } else if (homeInput.value.toUpperCase() === 'WALK') {

        confirmGettingHomeButton.removeAttribute('disabled', "");
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceWalk'))


    } else if (homeInput.value.toUpperCase() === 'TAXI') {

        confirmGettingHomeButton.removeAttribute('disabled', "");
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceTaxi'))

    }
}

function decisionToMove(choice) {

    document.getElementById('main-content').innerHTML = '';
    const pElement = document.createElement('p');
    const divElement = document.createElement('div');
    divElement.id = 'divContent';
    divElement.append(pElement);
    document.getElementById('main-content').append(divElement);


    if (choice === 'choiceWalk') {
        elementCreator(story.playerChoiceWalk)

        const walkInDarkButton = document.createElement('button');
        divElement.append(walkInDarkButton);
        walkInDarkButton.innerText = `Keep walking towards your 
        home in the dark`;
        const sleepOutsideButton = document.createElement('button');
        divElement.append(sleepOutsideButton);
        sleepOutsideButton.innerText = `Decide to stay on the little island 
        and live like in Cast Away`;

        sleepOutsideButton.addEventListener('click', () => decisionToMoveOn('sleepInWoods'));
        walkInDarkButton.addEventListener('click', () => decisionToMoveOn('walkHome'));

    } else if (choice === 'choiceTaxi') {
        elementCreator(story.playerChoiceTaxi)

        const runButton = document.createElement('button');
        divElement.append(runButton);
        runButton.innerText = `Run`;
        const pretendButton = document.createElement('button');
        divElement.append(pretendButton);
        pretendButton.innerText = `Light my cigar and pretend
        l'm detectiv Columbo`;

        pretendButton.addEventListener('click', () => decisionToMoveOn('detectivChoice'));
        runButton.addEventListener('click', () => decisionToMoveOn('runChoice'));
    }
}

function decisionToMoveOn(input) {
    document.getElementById('main-content').innerHTML = '';
    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    pElement.id = 'moveOptions';
    divElement.append(pElement);
    document.getElementById('main-content').append(divElement);


    if (input === 'sleepInWoods') {
        elementCreator(story.playerSleepInWoods)

        const ignoreButton = document.createElement('button');
        divElement.append(ignoreButton);
        ignoreButton.innerText = `Ignore them and goes outlooking for food`;
        ignoreButton.addEventListener('click', () => lastStep('ignores'));

        const runHomeButton = document.createElement('button');
        divElement.append(runHomeButton);
        runHomeButton.innerText = 'Run home';
        runHomeButton.addEventListener('click', () => lastStep('runHome'));

    } else if (input === 'walkHome') {
        elementCreator(story.playerWalksHome)


        const runButton = document.createElement('button');
        divElement.append(runButton);
        runButton.innerText = `Run`;
        runButton.addEventListener('click', () => lastStep('runningHome'));

        const turnButton = document.createElement('button');
        divElement.append(turnButton);
        turnButton.innerText = `Turn around`;
        turnButton.addEventListener('click', () => lastStep('turnAround'));

    } else if (input === 'detectivChoice') {
        elementCreator(story.playerChoiceDetective) //ingen addeventlisterner
        divElement.style.height = '3000px';

        elementCreator(story.playerScrollDown)


    } else if (input === 'runChoice') {
        elementCreator(story.playerRuns)
    }

}

function lastStep(input) {
    document.getElementById('main-content').innerHTML = '';
    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    divElement.append(pElement);
    document.getElementById('main-content').append(divElement);


    if (input === 'ignores') {
        elementCreator(story.playerIgnoresPeople)

    } else if (input === 'runHome') {
        elementCreator(story.playerRunsHome)

    } else if (input === 'runningHome') {
        elementCreator(story.playerRunning)


    } else if (input === 'turnAround') {
        elementCreator(story.playerTurnsAround)

    } else if (input === 'detective') { // ingen addEventlisterner än!!

    }
}

function elementCreator(whatDiv, whatElement, storyContent, userInputField) {


    if (userInputField) {
        const element = document.createElement(whatElement);
        element.innerText = `Hello ${userInputField.value}. ${storyContent}`
        document.querySelector(whatDiv).append(element)
        return element
    }
    if (!storyContent) {
        const element = document.createElement(whatElement);
        document.querySelector(whatDiv).append(element)
        return element
    } else {
        const element = document.createElement(whatElement);
        element.innerText = storyContent
        document.querySelector(whatDiv).append(element)
        return element

    }


}












































