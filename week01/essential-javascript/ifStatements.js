// const secPastMin = new Date().getSeconds();
// if (secPastMin < 20) {
//   console.log('The first half of the minute');
// }
// else {
//   console.log('The second half of the minute');
// }

const prompt = require("prompt-sync")();

let num = prompt("Pick a number: ");
if (num == 7) {
  console.log("Exact");
} else if (num < 3) {
  console.log("Low");
} else if (num >= 11) {
  console.log("High");
} else {
  console.log("Medium");
}
