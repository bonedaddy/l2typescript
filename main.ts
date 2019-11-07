// delcare a boolean
let isDone: boolean = false;
// declare a number (floating point value)
let decimal: number = 1.1;
// delcare a string
let color: string = "red";
color = 'purple';
// template strings can span multiple lines and have embedded expressions
// sorrounded by backticks and embedded expressisons are in the form of
// ${ expr }
let phrase: string = `This is a color ${color}`
console.log(phrase);


// function declaration
function greeter(person: string) {
	return `Hello ${person}!`
}


let p = greeter("alex");
console.log(p);
