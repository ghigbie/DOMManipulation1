//created in command line
var h1 = document.querySelector("h1");

// h1.style.color = "red";
// h1.style.border = "5px solid pink";

//we should add classes in javascript to turn these on in CSS

var tag = document.querySelector("h1");
tag.classList.add("blue");

tag.classList.add("another-class");//adds a class to an element
tag.classList.remove("another-class");//removes a class from an element
tag.classList.toggle("another-class");//togles a class

var paragraph = document.querySelector("p");
paragraph.classList.add("big");

//class list is not an array so we cannot use .push or .pop mehtods


//changing text in a tag
//textContent

var tag1 = document.querySelector("p");
tag1.textContent = "yo yo yo!!!"


