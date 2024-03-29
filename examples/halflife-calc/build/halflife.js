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
// grab the MG_AMOUNT env variable
// uncomment if running as nodejs script
// let strMg: string = process.env.MG_AMOUNT;
/*
if (strMg == undefined) {
    strMg = "1200"
}
*/
// comment if running as nodejs script
let strMg = "1200";
// cast to unknown type
let unknownMg = strMg;
// cast to number type
let mg = unknownMg;
// how many horus passed in a single interval
let intervalHour = 12;
// declare the extended class
let calculator = new ThcCalc(intervalHour, mg);
// run the calculator
calculator.start();
