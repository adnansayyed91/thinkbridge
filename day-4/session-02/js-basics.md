## JavaScript Basics – Session 2

1. Variables
Learned about let, const, and var.
let → block-scoped, re-assignable.
const → block-scoped, cannot be re-assigned.
var → function-scoped, avoid using in modern JS.

Example:
let name = "Adnan";
var city = "Pune";
const pi = 3.14;

2. Strings
Strings are sequences of characters wrapped in quotes (' ', " ", or ` `).
Common methods: .length, .toUpperCase(), .toLowerCase(), .slice().

Example:
let str = "Hi, It's a string";
console.log(str.length);        // 17

3. Arrays
Arrays store multiple values in a single variable.
Common methods: .push(), .pop(), .shift(), .unshift(), .length.

Example:
let skills = ["HTML", "CSS", "JavaScript"];
skills.push("React");
console.log(skills); // ["HTML", "CSS", "JavaScript", "React"]
console.log(skills[2]) //"JavaScript"

4. Objects
Objects store data as key–value pairs.
Access with dot obj.key or bracket obj["key"].

Example:
let obj = {
    day1 : "On-boarding, Installations",
    day2 : "VS code extensions, HTML, CSS",
    day3 : "CSS layout, DevTools, Debugging",
    day4 : "Basics of JavaScript, DOM and Events"
};
console.log(obj.day4)

5. Conditionals
Used to make decisions (if, else if, else, switch).

Example (if, elseif, else):
let score = 85
if(score>=80){
    console.log("A Grade")
}else if(score>=50){
    console.log("B Grade")
}else if(score>=40){
    console.log("C Grade")
}else{
    console.log("Not Qualified")
}

Example (switch):
switch (obj.day) {
    case obj.day1: console.log(`Practiced ${obj.day1}`);
    break;
    case obj.day2: console.log(`Practiced ${obj.day2}`);
    break;
    case obj.day3: console.log(`Practiced ${obj.day3}`);
    break;
    case obj.day4: console.log(`Practiced ${obj.day4}`);
    break;
    default: console.log("Haven't Practiced Anything")
    break;
}

6. Loops
Loops allow repeating tasks.
Types: for, while, for…of.

Example (for loop):
for (let i = 0; i <3; i++) {
  console.log("Hello World");
}  // "Hello World" "Hello World" "Hello World"

Example (while loop):
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}  // 0 1 2
