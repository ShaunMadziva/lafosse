function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add: add,
  subtract: subtract,
};

const person = {
  name: "shaun",
  age: 31,
};

console.log(person.name);
