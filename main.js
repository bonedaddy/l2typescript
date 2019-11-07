// delcare a boolean
var isDone = false;
// declare a number (floating point value)
var decimal = 1.1;
// delcare a string
var color = "red";
color = 'purple';
// template strings can span multiple lines and have embedded expressions
// sorrounded by backticks and embedded expressisons are in the form of
// ${ expr }
var phrase = "This is a color " + color;
console.log(phrase);
// function declaration
function greeter(person) {
    return "Hello " + person + "!";
}
var p = greeter("alex");
console.log(p);
