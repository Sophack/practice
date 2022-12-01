var grandparent = document.querySelector(".grandparent");
var parent = document.querySelector(".parent");
var child = document.querySelector(".child");

//two parameters for event listener function
//first parameter, type of event, in this case click
//second parameter = callback function that runs everytime 'click' (represented by "e" for event)
grandparent.addEventListener('click', e =>{
    console.log("GP")
} )

parent.addEventListener('click', e =>{
    console.log("P")
} )

child.addEventListener('click', e =>{
    console.log("CH")
} )

//on the console log it will show up as GP for grandparent, P GP for parent and CH P GP for child

document.addEventListener("click", e=> {
    console.log("Document 1")
})

//the above code will render the page to show all children elements when clicking on parents: 
//i.e document will click on grandparent,parent and child elements
//capturing happens outside in, bubbling inside out
//the capture event can stop bubbling for specific elements  