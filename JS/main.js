window.onload = main;

function main() {
    addEventListeners();
}

function addEventListeners() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', onStartButton);
}

//Tömmer innehållet i HTML'en och skapar ett p element med innehåll (sida 2)
function onStartButton() {
    document.querySelector('.start-container').innerHTML = '';
    elementCreator('.start-container', 'p', story.onStartPress);
    let minimumLetters = elementCreator('.start-container', 'p', story.minimumLetters);
    minimumLetters.classList.add('minimumLetters');


    //Skapat ett inputfält med knapp
    let userInputField = elementCreator('.start-container', 'input');
    let nameConfirmButton = elementCreator('.start-container', 'button', 'Done');
    nameConfirmButton.setAttribute('disabled', '');
    userInputField.addEventListener('input', () => nameInTextField(userInputField, nameConfirmButton));
    nameConfirmButton.addEventListener('click', () => afterNameInput(userInputField, nameConfirmButton));
}

//Bekräfta att användaren fyllt i sitt namn
function nameInTextField(userInputField, nameConfirmButton) {
    if (userInputField.value.length >= 2) {
        nameConfirmButton.removeAttribute('disabled', '');
    } else {
        nameConfirmButton.setAttribute('disabled', '');
    }
}

//Text med namnet användaren fyllt i
function afterNameInput(userInputField) {
    document.querySelector('.start-container').innerHTML = '';
    elementCreator('.start-container', 'p', story.afterPlayerName, userInputField);
    let homeInput = elementCreator('.start-container', 'input')
    let confirmGettingHomeButton = elementCreator('.start-container', 'button', story.ready);
    confirmGettingHomeButton.setAttribute('disabled', '');
    homeInput.addEventListener('input', () => onHomeInput(homeInput, confirmGettingHomeButton));
    confirmGettingHomeButton.addEventListener('click', () => onHomeInput(homeInput, confirmGettingHomeButton));
}

//skapat function som ger olika resultat beroende på inputen
function onHomeInput(homeInput, confirmGettingHomeButton) {
    confirmGettingHomeButton.setAttribute('disabled', '');

    if (homeInput.value.toUpperCase() === 'BUS') {
        document.querySelector('.story-container').innerHTML = '';
        elementCreator('.story-container', 'p', story.choiceBus);


    } else if (homeInput.value.toUpperCase() === 'WALK') {
        document.querySelector('.story-container').innerHTML = '';
        confirmGettingHomeButton.removeAttribute('disabled', '');
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceWalk'));

    } else if (homeInput.value.toUpperCase() === 'TAXI') {
        document.querySelector('.story-container').innerHTML = '';
        confirmGettingHomeButton.removeAttribute('disabled', '');
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceTaxi'));

    }
}

function decisionToMove(choice) {

    document.querySelector('.start-container').innerHTML = '';

    if (choice === 'choiceWalk') {
        elementCreator('.story-container', 'p', story.playerChoiceWalk);
        let walkInDarkButton = elementCreator('.story-container', 'button', story.walkInDark);
        let sleepOutsideButton = elementCreator('.story-container', 'button', story.sleepOutside);

        sleepOutsideButton.addEventListener('click', () => decisionToMoveOn('sleepInWoods'));
        walkInDarkButton.addEventListener('click', () => decisionToMoveOn('walkHome'));

    } else if (choice === 'choiceTaxi') {
        let headlightsCar = elementCreator('.story-container', 'img');
        headlightsCar.src = './img/headlightsnight.jpg';
        headlightsCar.classList.add('carPicture');
        elementCreator('.story-container', 'p', story.playerChoiceTaxi);
        let runButton = elementCreator('.story-container', 'button', story.run);
        let pretendButton = elementCreator('.story-container', 'button', story.pretendDetectiv);


        pretendButton.addEventListener('click', () => decisionToMoveOn('detectivChoice'));
        runButton.addEventListener('click', () => decisionToMoveOn('runChoice'));
    }
}

function decisionToMoveOn(choice) {
    document.querySelector('.story-container').innerHTML = '';

    if (choice === 'sleepInWoods') {
        let picOfBench = elementCreator('.story-container', 'img');
        picOfBench.src = './img/darkbench.jpg';
        picOfBench.classList.add('imgOfBench');

        elementCreator('.story-container', 'p', story.playerSleepInWoods);
        let ignoreButton = elementCreator('.story-container', 'button', story.ignore);
        ignoreButton.addEventListener('click', () => lastStep('ignores'));


        let runHomeButton = elementCreator('.story-container', 'button', story.runHome);
        runHomeButton.addEventListener('click', () => lastStep('runHome'));

    } else if (choice === 'walkHome') {
        elementCreator('.story-container', 'p', story.playerWalksHome);

        let runButton = elementCreator('.story-container', 'button', story.runs);
        runButton.addEventListener('click', () => lastStep('runningHome'));

        let turnButton = elementCreator('.story-container', 'button', story.turnAround);
        turnButton.addEventListener('click', () => lastStep('turnAround'));

    } else if (choice === 'detectivChoice') {

        elementCreator('.story-container', 'p', story.playerChoiceDetective);


    } else if (choice === 'runChoice') {
        let doggie = elementCreator('.story-container', 'img');
        doggie.src = './img/dogindark.jpg';
        doggie.classList.add('dogPicture');

        elementCreator('.story-container', 'p', story.playerRuns);

    }

}

function lastStep(choice) {
    document.querySelector('.story-container').innerHTML = '';

    if (choice === 'ignores') {
        elementCreator('.story-container', 'p', story.playerIgnoresPeople);

    } else if (choice === 'runHome') {
        elementCreator('.story-container', 'p', story.playerRunsHome);

    } else if (choice === 'runningHome') {
        let dogPicture = elementCreator('.story-container', 'img');
        dogPicture.src = './img/dogindark.jpg';
        dogPicture.classList.add('dogPicture');
       elementCreator('.story-container', 'p', story.playerRunning);


    } else if (choice === 'turnAround') {
        let dogPic = elementCreator('.story-container', 'img');
        dogPic.src = './img/dogindark.jpg';
        dogPic.classList.add('dogPicture');
       elementCreator('.story-container', 'p', story.playerTurnsAround);


    } else if (choice === 'detective') { // ingen addEventlisterner än!!

    }
}

function elementCreator(whatDiv, whatElement, storyContent, userInputField) {


    if (userInputField) {
        const element = document.createElement(whatElement);
        element.innerText = `Hello ${userInputField.value}. ${storyContent}`;
        document.querySelector(whatDiv).append(element);
        return element;
    }
    if (!storyContent) {
        const element = document.createElement(whatElement);
        document.querySelector(whatDiv).append(element);
        return element;
    } else {
        const element = document.createElement(whatElement);
        element.innerText = storyContent;
        document.querySelector(whatDiv).append(element);
        return element;
    }
}



// function printText(text, whatelement) {
//     let index = 0
//     let speed = 50
//     console.log(whatelement)
//     if (index < text.length){
//         whatelement.innerText += text.charAt(index)
//         index++
//         setTimeout(printText, speed)
//         //return whatelement
//     }
//     printText(story.minimumLetters, minimumLetters)
// }











































