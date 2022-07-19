// Getting elements
// days
const days1 = document.querySelectorAll('.days-1');
const days2 = document.querySelectorAll('.days-2');
const days3 = document.querySelectorAll('.days-3');
// hours
const hours1 = document.querySelectorAll('.hours-1');
const hours2 = document.querySelectorAll('.hours-2');
// minutes
const minutes1 = document.querySelectorAll('.minutes-1');
const minutes2 = document.querySelectorAll('.minutes-2');
// seconds
const seconds1 = document.querySelectorAll('.seconds-1');
const seconds2 = document.querySelectorAll('.seconds-2');
// button
const submitButton = document.querySelector('.submit-button');
const input = document.querySelector('#date');

/* Algorithm for calculating countdown:
    1. Setting the finishdate (initial, or from input)
    2. Calculate the difference between current date and finishdate
    3. Reduce difference by 1 second in 1000ms
*/

/* Algorithm for animation:
    
*/

// Step 1.1 Setting finishDate (initial)
let finishDate = new Date();

finishDate.setFullYear(2023, 0, 1);
finishDate.setHours(0,0,0,0);

// Step 1.2 Setting finishDate (from input)

submitButton.addEventListener('click', () => {
    const inputValue = input.value;
    
    if (inputValue.length === 0) { // If input is not valid or empty setting next New Year Date
        finishDate.setFullYear(2023, 0, 1);
        finishDate.setHours(0,0,0,0);
    }
    else { // If input is valid parse it to finishDate var
        finishDate = (new Date(Date.parse(inputValue)));
    }
});

// Step 2. Calculate the difference

function calculateDifference() {
    const currentDate = new Date();

    const difference = finishDate.getTime() - currentDate.getTime();
    
    const days = Math.floor(difference / (86400 * 1000));
    const hours = Math.floor(difference / (3600 * 1000) % 24);
    const minutes = Math.floor(difference / (60 * 1000) % 60);
    const seconds = Math.floor(difference / (1000) % 60);

    return [days, hours, minutes, seconds];
}

function flipBlock(elementList, value = 0) {
    if (sameValue(elementList, value) === false) {
        elementList[2].classList.add('top-animation');
        elementList[3].classList.add('bottom-animation');
        
        setTimeout(() => {
            elementList.forEach((element) => {
                element.innerHTML = value;
            })
        }, 250);
    
        setTimeout(() => {
            elementList[2].classList.remove('top-animation');
            elementList[3].classList.remove('bottom-animation');
        }, 500);
    }
}

function sameValue(elementList, value) {
    if (elementList[0].innerHTML == value) {
        return true;
    }

    return false;
}

function renderTimer() {
    let [days, hours, minutes, seconds] = calculateDifference();
    
    if (days.toString().length === 3) {
        flipBlock(days1, days.toString()[0]);
        flipBlock(days2, days.toString()[1]);
        flipBlock(days3, days.toString()[2]);
    } else if (days.toString().length === 2) {
        flipBlock(days1, 0);
        flipBlock(days2, days.toString()[0]);
        flipBlock(days3, days.toString()[1])
    } else if (days.toString().length === 1) {
        flipBlock(days1, 0);
        flipBlock(days2, 0);
        flipBlock(days3, days.toString()[0]);
    }

    if (hours.toString().length === 2) {
        flipBlock(hours1, hours.toString()[0]);
        flipBlock(hours2, hours.toString()[1]);
    } else if (hours.toString().length === 1) {
        flipBlock(hours1);
        flipBlock(hours2, hours.toString()[0]);
    }

    if (minutes.toString().length === 2) {
        flipBlock(minutes1, minutes.toString()[0]);
        flipBlock(minutes2, minutes.toString()[1]);
    } else if (minutes.toString().length === 1) {
        flipBlock(minutes1);
        flipBlock(minutes2, minutes.toString()[0]);
    }

    if (seconds.toString().length === 2) {
        flipBlock(seconds1, seconds.toString()[0]);
        flipBlock(seconds2, seconds.toString()[1]);
    } else if (seconds.toString().length === 1) {
        flipBlock(seconds1);
        flipBlock(seconds2, seconds.toString()[0]);
    }
}

setInterval(renderTimer, 1000);