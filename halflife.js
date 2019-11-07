// calculates the half life of thc
// Get process.stdin as the standard input object.
var standard_input = process.stdin;
var ask = require("./ask");
// Set input character encoding.
standard_input.setEncoding('utf-8');
var halfLifeInHours = 31.2;
var HalfLifeCalc = /** @class */ (function () {
    function HalfLifeCalc(hourInterval, mgAmount) {
        this.interval = hourInterval;
        this.mgAmount = mgAmount;
    }
    HalfLifeCalc.prototype.calculate = function () {
        while (this.mgAmount > 0) {
            this.mgAmount--;
            console.log(this.mgAmount);
        }
        return "interval: " + this.interval + " " + "amount: " + this.mgAmount;
    };
    return HalfLifeCalc;
}());
var mg = 100;
var intervalHour = 12;
var calculator = new HalfLifeCalc(intervalHour, mg);
console.log(calculator.calculate());
