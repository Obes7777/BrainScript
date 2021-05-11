//random integer
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min
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
    document.getElementById('option1').style.visibility = 'hidden'
}

//shows an element
function show(id){
    document.getElementById('option1').style.visibility = 'visible'
}



