const body = document.body
const head = document.head

const title = document.createElement(`title`)
title.innerText = "DOM Lesson 1"
head.append(title)


const heading1 = document.getElementById(`title`)
heading1.innerText = "Lesson 1 is all about DOM manipulation"

const heading3 = document.querySelector(`h3`)
heading3.innerText = "Today's date"

const heading2 = document.createElement(`h2`)
heading2.innerText = "31/01/2023"
body.append(heading2)

const list = document.createElement(`ol`)
const listHeading = document.createElement(`h5`)
listHeading.innerText = "Coding Languages I am currently learning"
body.append(list)
list.append(listHeading)

const listItem1 = document.createElement(`li`)
listItem1.innerText = "HTML"
list.append(listItem1)

const listItem2 = document.createElement(`li`)
listItem2.innerText = "CSS"
list.append(listItem2)

const listItem3 = document.createElement(`li`)
listItem3.innerText = "Javascript"
list.append(listItem3)

const hyperlink = document.createElement(`a`)

body.append(hyperlink)

const italic = document.createElement(`em`)
italic.innerText = "Page 1"
hyperlink.append(italic)

const paragraph = document.createElement(`p`)
paragraph.innerText = "This website was made purely using DOM manipulation"
body.append(paragraph)

