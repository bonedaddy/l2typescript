// calculates the half life of thc
// Get process.stdin as the standard input object.
var standard_input = process.stdin;
const ask = require("./ask");
// Set input character encoding.
standard_input.setEncoding('utf-8');

let halfLifeInHours: number = 31.2;

class HalfLifeCalc {
    interval: number;
    mgAmount: number;
    constructor(hourInterval: number, mgAmount: number) {
        this.interval = hourInterval;
        this.mgAmount = mgAmount;
    }
    calculate() {
        while (this.mgAmount > 0) {
            this.mgAmount--
        }
        return "interval: " + this.interval + " " + "amount: " + this.mgAmount;
    }
}

let mg: number = 100;
let intervalHour: number = 12;

let calculator = new HalfLifeCalc(intervalHour, mg);

console.log(calculator.calculate());