function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min
}



function ask(message){
    return prompt(message)
}



function changeText(id, message){
    document.getElementById(id).innerHTML = message
}



function hide(id){
    document.getElementById('option1').style.visibility = 'hidden'
}

function show(id){
    document.getElementById('option1').style.visibility = 'visible'
}



