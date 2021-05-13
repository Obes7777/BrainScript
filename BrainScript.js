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


function lengthOf(string){
    return string.length
}


function contains(string, character){
    return string.includes(character, 0)
}