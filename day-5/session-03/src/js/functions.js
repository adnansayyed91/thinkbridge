// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Adnan"));

// Function Expression
const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 10));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// Scope Example
function scopeTest() {
    var x = 10;       // function-scoped
    let y = 20;       // block-scoped
    const z = 30;     // block-scoped
    if(true){
        var x = 50;   // overwrites outer x
        let y = 100;  // new block-scoped y
        console.log("Inside block:", x, y, z);
    }
    console.log("Outside block:", x, y, z);
}

scopeTest();
