/*
===========================================================================================================================

==================================
Vanilla JS \ CLONES
==================================

1
Create a function that stacks n clones behind the a target element.
This function should create and append each clone behind the target, while assigning a background color following
the order of a static array of colors.

2
Clones will be displayed when the user clicks the main container.
Once the click is fired, clones should move down stacking one below the other on a single column.
A video reference is provided with the desired behaviour.


RULES:
- HTML should NOT be edited.
- LIBRARIES ARE NOT ALLOWED. Only good old js.
- Clones amount is an integer value.
- Color array can have any number of colors declared.
- Color order must be followed.


Tips:
- Use the video as reference, it's just more simple to understand.
- JS and CSS are both aviliable to edit, use it!
- If you have questions related to the challenge, just ask.

===========================================================================================================================
 */



// Deleting this line = cheating.
"use strict";

const palette = ["F38785", "C9CBA6", "EA4A66"];
const margin = 10;

var container;
var elems;
var box;

var isOpen = false;

function getColor(number){
    return '#' + palette[number%palette.length];
}

/**
 * Create n clones and append the behind the target element.
 * @param {HTML Element} target 
 * @param {int} numberOfClones 
 */
function createOffsetClones(target, numberOfClones){
    let createdElements = [];
    for(var i = 0; i < numberOfClones; i++){
        let element = target.cloneNode(true);
        element.style.background = getColor(i);
        element.classList.add('clone');
        createdElements.push(element);
    }
    
    return createdElements;
}

/**
 * The function to execute when the container is clicked. This should trigger the transition of the clones!
 * @param {MouseEvent} event 
 */
function click(event){
    if(event.target.classList[1] === 'clone'){
        container.innerHTML = '';
        container.appendChild(box);
    } else {
        for(var elem of elems){
            container.appendChild(elem);
        }
    }
    
}

// container element reference. This should be clicked.
container = document.getElementsByClassName('container')[0];
// box element reference. This should be cloned.
box = document.getElementsByClassName('box')[0];
// get the elemens
elems = createOffsetClones(box, 12);

container.addEventListener("click", click);