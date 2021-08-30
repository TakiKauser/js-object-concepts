// 1. using object literals
const player = { name: "Daniel Vettori", job: "Cricketer" };

// 2. object constructor
const student = new Object();
console.log(student);

// 3. 
// const person = Object.create(null);
const person = Object.create(player);
console.log(person.job);

// 4. class (syntactical sugar)
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const people = new People("Omanush", 27);
console.log(people);

// 5. function
function manush(name) {
    this.name = name;
}
const man = new manush("kb");
console.log(man);