const daysBlock = document.querySelectorAll('.days');
const hoursBlock = document.querySelectorAll('.hours');
const minutesBlock = document.querySelectorAll('.minutes');
const secondsBlock = document.querySelectorAll('.seconds');
const submitButton = document.querySelector('.submit-button');
const input = document.querySelector('#date');
const topBlocks = document.querySelectorAll('.top');
const bottomBlocks = document.querySelectorAll('.bottom');


let finishDate = new Date();

finishDate.setFullYear(2022, 7, 15);
finishDate.setHours(0,0,0,0);

function toggle() {
    topBlocks.forEach((element) => {
        element.classList.remove('top-animation');
    })

    bottomBlocks.forEach((element) => {
        element.classList.remove('bottom-animation');
    })
}

const showTime = () => {
    const currentDate = new Date();

    let difference = finishDate.getTime() - currentDate.getTime();
    
    let days = Math.floor(difference / (86400 * 1000));
    let hours = Math.floor(difference / (3600 * 1000) % 24);
    let minutes = Math.floor(difference / (60 * 1000) % 60);
    let seconds = Math.floor(difference / (1000) % 60);

    daysBlock.forEach((element) => {
        element.innerHTML = days;
    });

    hoursBlock.forEach((element) => {
        element.innerHTML = hours;
    });

    minutesBlock.forEach((element) => {
        element.innerHTML = minutes;
    });

    secondsBlock.forEach((element) => {
        element.innerHTML = seconds;
    });
    
    topBlocks.forEach((element) => {
        element.classList.add('top-animation');
    })

    bottomBlocks.forEach((element) => {
        element.classList.add('bottom-animation');
    })

    setTimeout(toggle,750);
    // console.log(`Текущая дата: ${currentDate}`);
    // console.log(`Конечная дата: ${finishDate}`);
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