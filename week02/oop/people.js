class Person {
  static population = 0;
  static averageLifeExpectancy = 74;

  static increaseLifeExpectancy(years) {
    Person.averageLifeExpectancy += years;
  }

  constructor(name, age, employer) {
    this.firstName = name;
    this.age = age;
    this.employer = employer;
    Person.population += 1;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.firstName} and I am ${this.age} years old and I work for ${this.employer}.`
    );
  }
  eats(food) {
    console.log(`${this.firstName} eats ${food}.`);
  }
}

const person1 = new Person("Mark", 37, "JLB");
const person2 = new Person("Jezz", 36, "Unemployed");

//
class LafosseTrainer extends Person {
  constructor(name, age, jobTitle) {
    super(name, age, "LaFosse");
    this.jobTitle = jobTitle;
  }

  teach(cohort) {
    console.log(`${this.firstName} is teaching the ${cohort} cohort.`);
  }
}

const emile = new LafosseTrainer("Emile", 30, "Snr. Engineering Trainer");
// emile.introduce();
// emile.eats("pizza");
// emile.teach("Murati");

//console.log(Person.population);

class Docter extends Person {
  static md = true;
  constructor(name, age, speciality) {
    super(name, age, "NHS");
    this.speciality = speciality;
  }
  givePrescription(drug, amount) {
    console.log(
      `${this.firstName} prescribes ${amount} of ${drug} to the patient.`
    );
  }

  discoverMedicine(medicine, years) {
    Person.increaseLifeExpectancy += years;
    console.log(
      `${this.firstName} has discovered a new medicine called ${medicine} that increases life expectancy. The average life expetancy is now ${Person.averageLifeExpectancy}.`
    );
  }
}

const house = new Docter("House", 52, "Diagnosis");

console.log(house);
console.log(Person.averageLifeExpectancy);
house.discoverMedicine("Paracetamol", 5);
