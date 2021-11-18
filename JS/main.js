window.onload = main;

/**
 * gör så att nästa function körs när DOMen har laddat klart
 */
function main() {
    addEventListeners();
}

/**
 * knappen för att starta spelet
 */
function addEventListeners() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', onStartButton);
}

/**
 * När användaren trycker på start, så töms HTML innehållet och skapar ett inputfält som användaren fyller i sitt namn
 */

function onStartButton() {

    document.querySelector('.start-container').innerHTML = '';
    slowTextAnimation(elementCreator('.start-container', 'p', story.onStartPress))
    let minimumLetters = elementCreator('.start-container', 'p', story.minimumLetters)
    minimumLetters.classList.add('minimumLetters');


    //Skapat ett inputfält med knapp
    let userInputField = elementCreator('.start-container', 'input');
    let nameConfirmButton = elementCreator('.start-container', 'button', 'Done');
    nameConfirmButton.setAttribute('disabled', '');
    userInputField.addEventListener('input', () => nameInTextField(userInputField, nameConfirmButton));
    nameConfirmButton.addEventListener('click', () => afterNameInput(userInputField, nameConfirmButton));
}

/**
 * Kontrollerar att användaren fyllt i sitt namn och så aktiveras knappen
 * @param {HTMLInputElement} userInputField - inputfält för användaren att fylla i
 * @param {HTMLButtonElement} nameConfirmButton - knapp att använda för att gå vidare
 */

function nameInTextField(userInputField, nameConfirmButton) {
    if (userInputField.value.length >= 2) {
        nameConfirmButton.removeAttribute('disabled', '');
    } else {
        nameConfirmButton.setAttribute('disabled', '');
    }
}

/**
 * Skapat ett input fält som användaren kan skriva in sitt första val och sedan tryck på en knapp
 * @param {HTMLInputElement} userInputField - inputfält för användaren att fylla i
 */

function afterNameInput(userInputField) {
    document.querySelector('.start-container').innerHTML = '';
    slowTextAnimation(elementCreator('.start-container', 'p', story.afterPlayerName, userInputField))
    let homeInput = elementCreator('.start-container', 'input')
    let confirmGettingHomeButton = elementCreator('.start-container', 'button', story.ready);
    confirmGettingHomeButton.setAttribute('disabled', '');
    homeInput.addEventListener('input', () => onHomeInput(homeInput, confirmGettingHomeButton));
    confirmGettingHomeButton.addEventListener('click', () => onHomeInput(homeInput, confirmGettingHomeButton));
}

/**
 * function som beroende på användarens val ger olika resultat
 * @param {HTMLInputElement} homeInput - inputfält som användaren skriver sitt val
 * @param {HTMLButtonElement} confirmGettingHomeButton - knapp för att gå vidare
 */

//skapat function som ger olika resultat beroende på inputen
function onHomeInput(homeInput, confirmGettingHomeButton) {
    confirmGettingHomeButton.setAttribute('disabled', '');

    if (homeInput.value.toUpperCase() === 'BUS') {
        document.querySelector('.story-container').innerHTML = '';
        slowTextAnimation(elementCreator('.story-container', 'p', story.choiceBus))

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

/**
 * function som beroende på användarens val ger olika resultat
 * @param {string} choice - valet användaren gör
 */

function decisionToMove(choice) {

    document.querySelector('.start-container').innerHTML = '';

    if (choice === 'choiceWalk') {
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerChoiceWalk))
        let walkInDarkButton = elementCreator('.story-container', 'button', story.walkInDark);
        let sleepOutsideButton = elementCreator('.story-container', 'button', story.sleepOutside);

        sleepOutsideButton.addEventListener('click', () => decisionToMoveOn('sleepInWoods'));
        walkInDarkButton.addEventListener('click', () => decisionToMoveOn('walkHome'));

    } else if (choice === 'choiceTaxi') {
        let headlightsCar = elementCreator('.story-container', 'img');
        headlightsCar.src = './img/headlightsnight.jpg';
        headlightsCar.classList.add('carPicture');
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerChoiceTaxi))
        let runButton = elementCreator('.story-container', 'button', story.run);
        let pretendButton = elementCreator('.story-container', 'button', story.pretendDetectiv);

        pretendButton.addEventListener('click', () => decisionToMoveOn('detectivChoice'));
        runButton.addEventListener('click', () => decisionToMoveOn('runChoice'));
    }
}

/**
 * function som beroende på användarens val ger olika resultat
 * @param {string} choice - valet användare gör
 */

function decisionToMoveOn(choice) {
    document.querySelector('.story-container').innerHTML = '';

    if (choice === 'sleepInWoods') {
        let picOfBench = elementCreator('.story-container', 'img');
        picOfBench.src = './img/darkbench.jpg';
        picOfBench.classList.add('imgOfBench');

        slowTextAnimation(elementCreator('.story-container', 'p', story.playerSleepInWoods))
        let ignoreButton = elementCreator('.story-container', 'button', story.ignore);
        ignoreButton.addEventListener('click', () => lastStep('ignores'));

        let runHomeButton = elementCreator('.story-container', 'button', story.runHome);
        runHomeButton.addEventListener('click', () => lastStep('runHome'));

    } else if (choice === 'walkHome') {
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerWalksHome))

        let runButton = elementCreator('.story-container', 'button', story.runs);
        runButton.addEventListener('click', () => lastStep('runningHome'));

        let turnButton = elementCreator('.story-container', 'button', story.turnAround);
        turnButton.addEventListener('click', () => lastStep('turnAround'));

    } else if (choice === 'detectivChoice') {

        slowTextAnimation(elementCreator('.story-container', 'p', story.playerChoiceDetective))

    } else if (choice === 'runChoice') {
        let doggie = elementCreator('.story-container', 'img');
        doggie.src = './img/dogindark.jpg';
        doggie.classList.add('dogPicture');

        slowTextAnimation(elementCreator('.story-container', 'p', story.playerRuns))
    }
}

/**
 * function som beroende på användarens val ger olika resultat
 * @param {string} choice - valet användaren gör
 */

function lastStep(choice) {
    document.querySelector('.story-container').innerHTML = '';

    if (choice === 'ignores') {
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerIgnoresPeople))

    } else if (choice === 'runHome') {
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerRunsHome))

    } else if (choice === 'runningHome') {
        let dogPicture = elementCreator('.story-container', 'img');
        dogPicture.src = './img/dogindark.jpg';
        dogPicture.classList.add('dogPicture');
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerRunning))

    } else if (choice === 'turnAround') {
        let dogPic = elementCreator('.story-container', 'img');
        dogPic.src = './img/dogindark.jpg';
        dogPic.classList.add('dogPicture');
        slowTextAnimation(elementCreator('.story-container', 'p', story.playerTurnsAround))

    } else if (choice === 'detective') {

    }
}

/**
 * function som kan kallas på för att lägga elementen i rätt div, skapa element och vilket innehåll
 * @param {string} whatDiv - vilken div ska innehållet ligga i
 * @param {string} whatElement - vilket element som ska skapas
 * @param {string} storyContent - vilken story som ska köras
 * @param {HTMLInputElement} userInputField - inputfältet som användaren fyller i sitt val
 * @returns {HTMLElement} - retunerar ett element på sidan
 */

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

/**
 *
 * @param {HTMLElement} element - targetar ett element som den animerar
 *
 */

function slowTextAnimation(element) {
    const array = element.innerText.split('')
    element.innerHTML = ''
    array.forEach((letter, index) => {
        setTimeout(() => {
            element.innerHTML += letter
        }, index * 50)
    })

}







































