# DOM and Events Session 3

1. What is the DOM?
- DOM = Document Object Model
- Represents the HTML page as a tree structure of nodes (elements, attributes, text).
- JavaScript can use the DOM API to select, update, and listen to changes in elements.

2. Selecting Elements
- `document.getElementById("id")` → Select element by ID
- `document.getElementsByClassName("class")` → Select multiple elements by class
- `document.getElementsByTagName("p")` → Select multiple by tag name
- `document.querySelector("selector")` → First match of CSS selector
- `document.querySelectorAll("selector")` → All matches of CSS selector

  Example:
  let heading = document.getElementById("title");
  let items = document.querySelectorAll(".item");

3. Updating Elements
- title update
  title.textContent = "Hi, Welcome"
- change style
  tagEle.style.fontSize = "35px"
- add class
  title.classList.add = "header"

4. Event Listeners
- Events are user actions like click, input, keydown, etc.
- Use addEventListener to react to events.

Example:
let btn = document.getElementById("btn");
let message = document.getElementById("message");
btn.addEventListener("click", () => {
message.textContent = "Button clicked!";
});

5. Example – Toggle Light
   <h2 id="status">Light is OFF</h2>
   <button id="toggleBtn">Toggle Light</button>

   let status = document.getElementById("status");
   let toggleBtn = document.getElementById("toggleBtn");
   
   toggleBtn.addEventListener("click", () => {
   if (status.textContent.includes("OFF")) {
   status.textContent = "Light is ON";
   status.style.color = "green";
   } else {
   status.textContent = "Light is OFF";
   status.style.color = "red";
   }
   });
