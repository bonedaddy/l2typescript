// delcare a boolean
var isDone = false;
// declare a number (floating point value)
var decimal = 1.1;
// delcare a string
var ccolor = "red";
ccolor = 'purple';
// template strings can span multiple lines and have embedded expressions
// sorrounded by backticks and embedded expressisons are in the form of
// ${ expr }
var phrase = "This is a color " + ccolor;
console.log(phrase);
// arrays
var words = ["hello", "world"];
console.log(words);
// tuple like array, but fixed number of elements with types that aren't the same
var mytuple;
mytuple = ["hello", 1];
console.log(mytuple);
// enum!
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("enum:", c);
// function declaration
function greeter(person) {
    return "Hello " + person + "!";
}
var p = greeter("alex");
console.log(p);
