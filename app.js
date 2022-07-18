
const hoursBlock = document.querySelectorAll('.hours');
const minutesBlock = document.querySelectorAll('.minutes');
const secondsBlock = document.querySelectorAll('.seconds');
const submitButton = document.querySelector('.submit-button');
const input = document.querySelector('#date');
const topClones = document.querySelectorAll('.top-clone');
const bottomClones = document.querySelectorAll('.bottom-clone');

// days vars
const days1 = document.querySelectorAll('.days-1');
const days2 = document.querySelectorAll('.days-2');
const days3 = document.querySelectorAll('.days-3');

// hours vars
const hours1 = document.querySelectorAll('.hours-1');
const hours2 = document.querySelectorAll('.hours-2');

// minutes vars
const minutes1 = document.querySelectorAll('.minutes-1');
const minutes2 = document.querySelectorAll('.minutes-2');

// seconds vars
const seconds1 = document.querySelectorAll('.seconds-1');
const seconds2 = document.querySelectorAll('.seconds-2');

let finishDate = new Date();

finishDate.setFullYear(2022, 7, 15);
finishDate.setHours(0,0,0,0);

function turnOffAnimation() {
    topClones.forEach((el) => {
        el.classList.remove('top-animation');
    })

    bottomClones.forEach((el) => {
        el.classList.remove('bottom-animation');
    })
}

function calculateDifference() {
    const currentDate = new Date();

    const difference = finishDate.getTime() - currentDate.getTime();

    const days = Math.floor(difference / (86400 * 1000));
    const hours = Math.floor(difference / (3600 * 1000) % 24);
    const minutes = Math.floor(difference / (60 * 1000) % 60);
    const seconds = Math.floor(difference / (1000) % 60);

    return [days, hours, minutes, seconds];
}

function renderTimer(array) {

    const daysArray = array[0].toString().split('');
    const hoursArray = array[1].toString().split('');
    const minutesArray = array[2].toString().split('');
    const secondsArray = array[3].toString().split('');

    // days render
    if (daysArray.length === 3) {
        days1.forEach((element) => {
            element.innerHTML = daysArray[0];
        });

        days2.forEach((element) => {
            element.innerHTML = daysArray[1];
        });

        days3.forEach((element) => {
            element.innerHTML = daysArray[2];
        });
    } else if (daysArray.length === 2) {
        days1.forEach((element) => {
            element.innerHTML = 0;
        });

        days2.forEach((element) => {
            element.innerHTML = daysArray[0];
        });

        days3.forEach((element) => {
            element.innerHTML = daysArray[1];
        });
    } else if (daysArray.length === 1) {
        days1.forEach((element) => {
            element.innerHTML = 0;
        });

        days2.forEach((element) => {
            element.innerHTML = 0;
        });

        days3.forEach((element) => {
            element.innerHTML = daysArray[0];
        });
    }

    // hours render 
    if (hoursArray.length === 2) {
        hours1.forEach((element) => {
            element.innerHTML = hoursArray[0];
        });

        hours2.forEach((element) => {
            element.innerHTML = hoursArray[1];
        });
    } else if (hoursArray.length === 1) {
        hours1.forEach((element) => {
            element.innerHTML = 0;
        });

        hours2.forEach((element) => {
            element.innerHTML = hoursArray[0];
        });
    } 

    // minutes render
    if (minutesArray.length === 2) {
        minutes1.forEach((element) => {
            element.innerHTML = minutesArray[0];
        });

        minutes2.forEach((element) => {
            element.innerHTML = minutesArray[1];
        });
    } else if (minutesArray.length === 1) {
        minutes1.forEach((element) => {
            element.innerHTML = 0;
        });

        minutes2.forEach((element) => {
            element.innerHTML = minutesArray[0];
        });
    } 

    // seconds render
    if (secondsArray.length === 2) {
        seconds1.forEach((element) => {
            element.innerHTML = secondsArray[0];
        });

        seconds2.forEach((element) => {
            element.innerHTML = secondsArray[1];
        });
    } else if (secondsArray.length === 1) {
        seconds1.forEach((element) => {
            element.innerHTML = 0;
        });

        seconds2.forEach((element) => {
            element.innerHTML = secondsArray[0];
        });
    } 
}

function combo() {
    renderTimer(calculateDifference());
}

const showTime = () => {
    
    topClones.forEach((el) => {
        el.classList.add('top-animation');
    })

    bottomClones.forEach((el) => {
        el.classList.add('bottom-animation');
    })

    setTimeout(turnOffAnimation,500);
    // console.log(`Текущая дата: ${currentDate}`);
    // console.log(`Конечная дата: ${finishDate}`);

    setTimeout(combo, 275);

}

showTime();
setInterval(showTime,1000);

submitButton.addEventListener('click', () => {
    const inputValue = input.value;
    
    // console.log(inputValue);

    if (inputValue.length === 0) {
        finishDate.setFullYear(2023, 0, 1);
        finishDate.setHours(0,0,0,0);
    }
    else {
        finishDate = (new Date(Date.parse(inputValue)));
    }
});