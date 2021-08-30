// using function as a property of an object is called method
const student = {
    id: 1694,
    name: "kb",
    salary: 39000,
    major: "Computer Science",
    isRich: false,
    subjects: ["Calculus", "English", "Physics"],
    friend: {
        name: "Khairul",
        major: "Electronics"
    },
    takeExam: function () {
        console.log(this.name, "is taking exam");
    },
    treatdey: function (expense, tips) {
        this.salary = this.salary - expense - tips;
        return this.salary;
    }
}
// student.takeExam();

const remaining1 = student.treatdey(700, 50);
const remaining2 = student.treatdey(900, 100);
console.log(remaining2);