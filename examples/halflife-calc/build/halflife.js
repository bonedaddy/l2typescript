// calculates the half life of thc
let halfLifeInHours = 31.2;
let minDetectableAmount = 0.03; // 0.03mg, todo: get an actual number
class HalfLifeCalc {
    constructor(hourInterval, mgAmount) {
        this.interval = hourInterval;
        this.mgAmount = mgAmount;
    }
    calculate() {
        let count = 0;
        while (this.mgAmount > 0) {
            count++;
            let hoursPassed = count * this.interval;
            let num = hoursPassed / halfLifeInHours;
            if (num > 1.0) {
                this.mgAmount = this.mgAmount / num;
            }
            else {
                this.mgAmount = this.mgAmount * num;
            }
            console.log("hours passed: ", hoursPassed);
            console.log("plasma concentration: ", this.mgAmount);
            if (this.mgAmount <= minDetectableAmount) {
                break;
            }
        }
        let message = "days until nondetectable plasma concentration: " + ((count * this.interval) / 24);
        console.log(message);
        if (window.isNaN) {
            return;
        }
        document.body.textContent = message;
    }
}
class ThcCalc extends HalfLifeCalc {
    constructor(hourInterval, mgAmount) {
        super(hourInterval, mgAmount);
    }
    start() {
        super.calculate();
    }
}
let mg = 100;
let intervalHour = 12;
let calculator = new ThcCalc(intervalHour, mg);
calculator.start();
