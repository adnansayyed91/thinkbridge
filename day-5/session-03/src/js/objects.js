// Simple Object
const person = {
    name: "Adnan",
    age: 22,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person.greet());

// Adding a property
person.profession = "Student";
console.log(person);

// Iterating properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object with nested objects
const classroom = {
    teacher: "Sai Ganesh",
    students: ["Adnan", "Ravi", "Neha"],
    details: {
        subject: "JavaScript",
        duration: "5 days"
    }
};

console.log(classroom.details.subject);
