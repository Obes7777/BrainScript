//random integer
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

//random num including decimals
function randomInt(min, max){
    return Math.random() * (max - min + 1) + min
}


//ask a question
function ask(message){
    return prompt(message)
}


//edit the text of an html tag
function changeText(id, message){
    document.getElementById(id).innerHTML = message
}


//hides an element
function hide(id){
    document.getElementById(id).style.visibility = 'hidden'
}

//shows an element
function show(id){
    document.getElementById(id).style.visibility = 'visible'
}


//gets the length of a string
function lengthOf(string){
    return string.length
}

//checks if a string includes a certain character or string
function contains(string, character){
    return string.includes(character, 0)
}


//clicks an element
function click(id){
    document.getElementById(id).click()
}


//finds the hypotonuse of a right triangle
function findHypotonuse(leg1, leg2){
    return Math.sqrt(leg1 * leg1 + leg2 * leg2)
}

//finds the leg of a right triangle
function findLeg(leg1, hypotonuse){
    return Math.sqrt(hypotonuse * hypotonuse - leg1 * leg1)
}


//turns an element 1 degree
function Turn(id){
    document.getElementById(id).style.transform = 'rotate(1deg)'
}
