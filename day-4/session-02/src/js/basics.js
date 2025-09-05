// Variables
let name = "Adnan";   // string and let
var city = "Pune"   // string and var
const pi = 3.14   // number and constant
console.log(name, city, pi);

// Strings
let str = "Hi, It's a string"
console.log(str.length)

// Arrays
let skills = ["HTML", "CSS", "JavaScript"]
skills.push("React")
console.log(skills)
console.log(skills[2])


// Objects
let obj = {
    day1 : "On-boarding, Installations",
    day2 : "VS code extensions, HTML, CSS",
    day3 : "CSS layout, DevTools, Debugging",
    day4 : "Basics of JavaScript, DOM and Events"
};
console.log(obj.day4)


// Conditionals
// if else
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

// Switch statement
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

// For loop
for(let i=0;i<3;i++){
    console.log("Hello World");
}
// While loop
let count = 0;
while (count<3){
    console.log(count);
    count++
}

