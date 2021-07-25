# BrainScript
A set of functions and objects that make coding in JavaScript easier and more user friendly

As an example the way to get a random number with min and max, 
Math.floor(Math.random() * (max - min + 1) ) + min

To be made easier I made a basic function, 

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min
}