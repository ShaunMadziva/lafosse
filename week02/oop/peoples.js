const person = {
  name: "Shaun",
  age: 31,
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

// console.log(person.name); // Shaun
// console.log(person.age); // 31
person.introduce(); // Hello, my name is Shaun and I am 31 years old.

const person2 = {
  name: "Bill",
  age: 45,
  introduce: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

person2.introduce();
