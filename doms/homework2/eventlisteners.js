const body = document.querySelector("body")
const heading = document.querySelector("h1")
const button1 = document.getElementById("btn-1")
const button2 = document.getElementById("btn-2")
const button3 = document.getElementById("btn-3")
const input = document.getElementById("name")
let greeting = document.createElement("h2")
body.append(greeting)

let colors =["blue", "green", "orange", "red", "yellow", "pink", "grey", "purple"]

button1.addEventListener("click", function(){
        let random= Math.floor(Math.random()*colors.length)
        button1.textContent=`Background is now ${colors[random]}!`
        body.style.backgroundColor = colors[random]
})

button2.addEventListener("click", function(){
    let random= Math.floor(Math.random()*colors.length)
    button2.textContent=`Font is now ${colors[random]}!`
    body.style.color = colors[random]
})

button3.addEventListener("click", function(){
    heading.textContent = "Event Listeners Homework 2"
    button3.textContent = "The title has changed"

})

input.addEventListener("keyup", function(){
    greeting.textContent=`Hello ${input.value}`
})