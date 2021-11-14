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

    //skapa ett divelement som vi sen kan tömma
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
    homeInput.id = 'inputHome';
    document.getElementById('main-content').append(homeInput);
    homeInput.addEventListener('input', () => onHomeInput(homeInput));
}

//skapat function som ger olika resultat beroende på inputen
function onHomeInput(homeInput) {
    console.log(homeInput.value.toUpperCase())
    document.getElementById('storyContent').innerHTML = ''
    const confirmGettingHomeButton = document.createElement('button');
    document.getElementById('storyContent').append(confirmGettingHomeButton);
    confirmGettingHomeButton.innerText = `I'm ready`;
    confirmGettingHomeButton.setAttribute('disabled', "");


    if (homeInput.value.toUpperCase() === 'BUS') {
        //document.getElementById('storyContent').innerHTML = '';
        const pElement = document.createElement('p');
        document.getElementById('storyContent').append(pElement);
        pElement.style.fontSize = '30px';
        pElement.innerText = 'The buses have already stopped running for today';


    } else if (homeInput.value.toUpperCase() === 'WALK') {
        //document.getElementById('storyContent').innerHTML = '';
        const pElement = document.createElement('p');
        document.getElementById('storyContent').append(pElement);
        pElement.style.fontSize = '30px';
        pElement.innerText = `Good choice you decided to walk`;
        confirmGettingHomeButton.removeAttribute('disabled', "");
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceWalk'))


    } else if (homeInput.value.toUpperCase() === 'TAXI') {
        const pElement = document.createElement('p');
        document.getElementById('storyContent').append(pElement);
        pElement.style.fontSize = '30px';
        pElement.innerText = `Good choice you decided to take a taxi`;
        confirmGettingHomeButton.removeAttribute('disabled', "");
        confirmGettingHomeButton.addEventListener('click', () => decisionToMove('choiceTaxi'))

    }
}

function decisionToMove(input) {

    document.getElementById('main-content').innerHTML = '';
    const pElement = document.createElement('p');
    const divElement = document.createElement('div');
    divElement.id = 'divContent';
    divElement.append(pElement);
    document.getElementById('main-content').append(divElement);
    pElement.style.fontSize = '30px';


    if (input === 'choiceWalk') {
        pElement.innerText = `You decided to walk home, and starts walking towards your home
            that is about an hour away.
            It's really dark outside and you walk over a little bridge to an island
            you have to walk through to get to your home, but you can't see anything.

            What do you do?`;

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

    } else if (input === 'choiceTaxi') {
        pElement.innerText = `You choice to look for a taxi and after a few minutes
        you see a car with the headlights on a few meters in front of you.
        You walk towards it and bend down to see if there's someone inside the car. 
        But the only thing you see is a bloody hand print on the window.
        
        What do you do?`;

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
    divElement.append(pElement);
    document.getElementById('main-content').append(divElement);

    pElement.style.fontSize = '30px';


    if (input === 'sleepInWoods') {
        pElement.innerText = `You are staying on the island and starts to feel around oon the ground
        for sticks so you can build yourself a shelter, and fall fast asleep.
        When you wake up you look outside your shelter and see that a lot of people
        have gathered around your little shelter.
        You feel embarrassed.
        
        What do you do?`

        const ignoreButton = document.createElement('button');
        divElement.append(ignoreButton);
        ignoreButton.innerText = `Ignore them and goes outlooking for food`;
        ignoreButton.addEventListener('click', () => lastStep('ignores'));

        const runHomeButton = document.createElement('button');
        divElement.append(runHomeButton);
        runHomeButton.innerText = 'Run home';
        runHomeButton.addEventListener('click', () => lastStep('runHome'));

    } else if (input === 'walkHome') {
        pElement.innerText = `You keep walking towards your home but it's really dark
        and it's hard to see anything.
        
        You start hearing footsteps behind you, you start walking a bit faster.
        But the footsteps behind you accelerates. 
        
        What do you do?`;

        const runButton = document.createElement('button');
        divElement.append(runButton);
        runButton.innerText = `Run`;
        runButton.addEventListener('click', () => lastStep('runningHome'));

        const turnButton = document.createElement('button');
        divElement.append(turnButton);
        turnButton.innerText = `Turn around`;
        turnButton.addEventListener('click', () => lastStep('turnAround'));

    } else if (input === 'detectivChoice') {
        pElement.innerText = `You take up a cigar from your pocket and lights it,
        and start pretending your detective Columbo. You start looking for 
        clues and soon see a man standing in a alley close by.
        You slowly walk towards him and...
        
        Scroll down!`;  //ingen addeventlisterner

    } else if (input === 'runChoice') {
        pElement.innerText = `You start running but soon fall and hit your head on the ground.
        You turn your head and see something coming running towards you.
        
        You soon see that it's the cutest dog ever coming towards you 
        and starts licking your face. 
        You forget about the pain and the blood and you and the dog
        walks home together.
        You live happy ever after.
        
        THE END`;
    }

}

function lastStep(input) {
    document.getElementById('main-content').innerHTML = '';
    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    divElement.append(pElement);
    document.getElementById('main-content').append(divElement);

    pElement.style.fontSize = '30px';

    if (input === 'ignores') {
        pElement.innerText = `You look at the mass of people and frown
        your face, and goes out looking for something to eat. 
        You find some berries and some moss and live happily
        ever after.
        
        THE END`;

    } else if (input === 'runHome') {
        pElement.innerText = `You start running home and when you finally
        gets inside your door, you start thinking that maybe you should
        move somewhere else.
        
        THE END`;

    } else if (input === 'runningHome') {
        pElement.innerText = `You start running but soon fall and hit your head
        on the ground.
        You turn your head and see something coming running towards you.
        
        You soon see that it's the cutest dog ever coming towards you and starts licking your face.
        You forget about the pain and the blood and you and the dog walks home together.
        You live happy ever after.
        
        THE END`

    } else if (input === 'turnAround') {
        pElement.innerText = `You turn around and see the cutest dog ever running towards you.
        You bend down and it jumps in your arms and licks your face.
        
        The dog dosen't have a color so you decide to take the dog 
        with you and walks home.
        
        You and the dog lives happy ever after.
        
        THE END`

    } else if (input === 'detective') { // ingen addEventlisterner än!!

    }
}




















































