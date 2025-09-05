// Selecting elements
let title = document.getElementById("title")    //by id
console.log(title.textContent)

let items = document.getElementsByClassName("item")   //by classname
console.log(items.length)

let tagEle = document.getElementsByTagName("p")[1]  //by tagname
console.log(tagEle)

let qTitle = document.querySelector("#title")   //by query selector
console.log(qTitle)

let qItems = document.querySelectorAll(".item")  //by query selector all
console.log(qItems)

// Updating elements
title.textContent = "Hi, Welcome"  //title update
tagEle.style.fontSize = "35px"  //change style
title.classList.add = "header"  //add class
console.log(title.classList)

// Listening to event
let btn = document.getElementById("btn")
let message = document.getElementById("message")

btn.addEventListener("click", function(){
    message.textContent = "Button Clicked"
})

// Example
let status = document.getElementById("status")
let toggle = document.getElementById("toggleBtn")
let body = document.getElementById("body")

toggle.addEventListener("click", function(){
    if(status.textContent.includes("on")){
        body.style.backgroundColor = "black"
        body.style.color = "#8d8a91"
        status.textContent = "Light is off"
    }else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        status.textContent = "Light is on"
    }
})