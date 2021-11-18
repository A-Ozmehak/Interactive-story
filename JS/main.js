window.onload = main;

/**
 * Makes the next function run when the DOM is done loading
 */
function main() {
    addEventListeners();
}

/**
 * The button that starts the game
 */
function addEventListeners() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', onStartButton);
}

/**
 * When the user press start, it empties the HTML and prints text in paragraphs and creates a input field and a button
 */

function onStartButton() {

    document.querySelector('.start-container').innerHTML = '';
    slowTextAnimation(elementCreator('.start-container', 'p', story.onStartPress))
    let minimumLetters = elementCreator('.start-container', 'p', story.minimumLetters)
    minimumLetters.classList.add('minimumLetters');



    let userInputField = elementCreator('.start-container', 'input');
    let nameConfirmButton = elementCreator('.start-container', 'button', 'Done');
    nameConfirmButton.setAttribute('disabled', '');
    userInputField.addEventListener('input', () => nameInTextField(userInputField, nameConfirmButton));
    nameConfirmButton.addEventListener('click', () => afterNameInput(nameConfirmButton));
}

/**
 * Controls that the user as enter a name and enables the button
 * @param {HTMLInputElement} userInputField Input field for the user to enter something
 * @param {HTMLButtonElement} nameConfirmButton A button to move forward
 */

function nameInTextField(userInputField, nameConfirmButton) {
    if (userInputField.value.length >= 2) {
        nameConfirmButton.removeAttribute('disabled');
    } else {
        nameConfirmButton.setAttribute('disabled', '');
    }
}

/**
 * Creates an input field for the user to enter a choice and a button
 * @param {HTMLInputElement} userInputField Input field for the user
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
 * Function that depending on the users choice gives different results
 * @param {HTMLInputElement} homeInput Input field for the user to enter a choice
 * @param {HTMLButtonElement} confirmGettingHomeButton Button to move on
 */

function onHomeInput(homeInput, confirmGettingHomeButton) {
    confirmGettingHomeButton.setAttribute('disabled', '');

    if (homeInput.value.toUpperCase() === 'BUS') {
        document.querySelector('.story-container').innerHTML = '';
        slowTextAnimation(elementCreator('.story-container', 'p', story.choiceBus))

    } else if (homeInput.value.toUpperCase() === 'WALK') {
        document.querySelector('.story-container').innerHTML = '';
        confirmGettingHomeButton.removeAttribute('disabled');
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceWalk'));

    } else if (homeInput.value.toUpperCase() === 'TAXI') {
        document.querySelector('.story-container').innerHTML = '';
        confirmGettingHomeButton.removeAttribute('disabled');
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceTaxi'));
    }
}

/**
 * Function that depending on the users choice gives different results
 * @param {string} choice The users choice
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

        pretendButton.addEventListener('click', () => decisionToMoveOn('detectiveChoice'));
        runButton.addEventListener('click', () => decisionToMoveOn('runChoice'));
    }
}

/**
 * Function that depending on the users choice gives different results
 * @param {string} choice - The users choice
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

    } else if (choice === 'detectiveChoice') {

        slowTextAnimation(elementCreator('.story-container', 'p', story.playerChoiceDetective))

    } else if (choice === 'runChoice') {
        let doggie = elementCreator('.story-container', 'img');
        doggie.src = './img/dogindark.jpg';
        doggie.classList.add('dogPicture');

        slowTextAnimation(elementCreator('.story-container', 'p', story.playerRuns))
    }
}

/**
 * Function that depending on the users choice gives different results
 * @param {string} choice - The users choice
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
 * Function that creates element depending on the input parameters
 * @param {string} whatDiv What div the element should be in
 * @param {string} whatElement What element to create
 * @param {string} storyContent What story to run
 * @param {HTMLInputElement} userInputField Input field for the user to enter a choice
 * @returns {HTMLElement} Returns a element on the page
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
 * Splits the text and runs it one letter at a time
 * @param {HTMLElement} element Targets an element
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







































