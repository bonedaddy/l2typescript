// delcare a boolean
let isDone: boolean = false;
// declare a number (floating point value)
let decimal: number = 1.1;
// delcare a string
let ccolor: string = "red";
ccolor = 'purple';
// template strings can span multiple lines and have embedded expressions
// sorrounded by backticks and embedded expressisons are in the form of
// ${ expr }
let phrase: string = `This is a color ${ccolor}`
console.log(phrase);
// arrays
let words: string[] = ["hello", "world"];
console.log(words);
// tuple like array, but fixed number of elements with types that aren't the same
let mytuple: [string, number];
mytuple = ["hello", 1];
console.log(mytuple);
// enum!
enum Color{Red, Green, Blue};
let c: Color = Color.Green;
console.log("enum:", c);

// function declaration
function greeter(person: string) {
	return `Hello ${person}!`
}

 
let p = greeter("alex");
console.log(p);
