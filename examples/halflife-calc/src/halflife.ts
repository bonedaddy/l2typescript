// calculates the half life of thc

let halfLifeInHours: number = 31.2;
let minDetectableAmount: number = 0.03; // 0.03mg, todo: get an actual number

class HalfLifeCalc {
    // read only values must be initialized
    // at their declaration, or in the constructor
    readonly interval: number;
    public mgAmount: number;
    constructor(hourInterval: number, mgAmount: number) {
        this.interval = hourInterval;
        this.mgAmount = mgAmount;
    }
    calculate() {
        let count: number = 0;
        while (this.mgAmount > 0) {
            count++;
            let hoursPassed: number = count * this.interval;
            let num: number = hoursPassed / halfLifeInHours;
            if (num > 1.0) {
                this.mgAmount = this.mgAmount / num;
            } else {
                this.mgAmount = this.mgAmount*num;
            }
            console.log("hours passed: ", hoursPassed);
            console.log("plasma concentration: ", this.mgAmount);
            if (this.mgAmount <= minDetectableAmount) {
                break;
            }
        }
        let message: string = "days until nondetectable plasma concentration: " + ((count*this.interval)/24);
        console.log(message);
        // comment if running as nodejs module
        document.body.textContent = message; 
    }
}

class ThcCalc extends HalfLifeCalc {
    constructor(hourInterval: number, mgAmount: number) {
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
let strMg: string = "1200";
// cast to unknown type
let unknownMg: unknown = (<unknown>strMg);
// cast to number type
let mg: number = (unknownMg as number);
// how many horus passed in a single interval
let intervalHour: number = 12;
// declare the extended class
let calculator = new ThcCalc(intervalHour, mg);
// run the calculator
calculator.start();