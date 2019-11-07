// ask.js
// https://stackoverflow.com/questions/22578160/how-to-read-user-input-in-node-js-for-simple-calculations
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.pause();

function ask(question, cb = () => void 0) {
  return new Promise(resolve => {
    rl.question(question, (...args) => {
      rl.pause();
      resolve(...args);
      cb(...args);
    });
  });
}

module.exports = ask;