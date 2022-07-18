class Countdown {
    constructor(array) {
        this.days = array[0],
        this.hours = array[1],
        this.minutes = array[2],
        this.seconds = array[3]
    }
}

const Timer = new Countdown([1,2,3,4]);
console.log(Timer.days);
console.log(Timer.hours);
console.log(Timer.minutes);
console.log(Timer.seconds);