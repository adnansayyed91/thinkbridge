function greet(name) {
    let message = `Hello, ${name}!`;
    return message;
}

function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}

let user = "Adnan";
let greeting = greet(user);
console.log(greeting);

let total = addNumbers(10, 20);
console.log("Total:", total);
