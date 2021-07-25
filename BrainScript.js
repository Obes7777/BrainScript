const brain = {                     
    math: {
            randomNum: function(min, max){
                    return Math.random() * (max - min + 1) + min
            },

            randomInt: function(min, max){
                    return Math.floor(Math.random() * (max - min + 1) ) + min
            },

            findHypotonuse: function(leg1, leg2){
                return Math.sqrt(leg1 * leg1 + leg2 * leg2)               
            },

            findLeg: function(leg, hypotonuse){
                return Math.sqrt(hypotonuse * hypotonuse - leg1 * leg1)
            },

            circleArea: function(radius){
                return Math.PI() * (r*r)
            },
            
            CircleCircuference: function(diameter){
                return Math.PI() * diameter
            },
    },

    string: {
        characterOfString: function(string, letterNum){
            return string.charAt(letterNum)
        },

        lengthOfString: function(string) {
            return string.length
        },

        stringContains: function (string, character){
            return string.includes(character, 0)
        },

        letterOfStringIs: function(string, letterNum, character){
            return string.charAt(letterNum) == character
        },

        
        stringType: function(string){
            var index = 0
            var alphebet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '', ' ', null, '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '<', '>', '.', '/', '?']

            if(string == 'false' || string == 'true'){
                return 'boolean'
            }

            main: while(index != string.length){
                if(alphebet.includes(string.charAt(index)) == false){
                    index++
                    continue main
                } else {
                    return "string"
                }
            }
            
            return "number"
        },
    },

    dom: {
        changeText: function(id, text){
            document.getElementById(id).innerHTML = text
        },

        hide: function(id){
            document.getElementById(id).style.visibility = 'hidden'
        },

        show: function(id){
            document.getElementById(id).style.visibility = 'visible'
        },

        click: function(id){
            document.getElementById(id).click()
        },

        rotate: function(id, deg){
            document.getElementById(id).style.transform = "rotate(" + deg + "deg)"
        },
        
        transparency: function(id, opacity){
            document.getElementById(id).style.opacity = opacity
        },
        
        style: function(id, textColor, borderColor, color, borderWidth, borderRadius, font, fontSize, position, top, left, width, height, zIndex){
            document.getElementById(id).style.color = textColor
            document.getElementById(id).style.borderColor = borderColor
            document.getElementById(id).style.backgroundColor = color
            document.getElementById(id).style.borderWidth = borderWidth
            document.getElementById(id).style.borderRadius = borderRadius
            document.getElementById(id).style.fontFamily = font
            document.getElementById(id).style.fontSize = fontSize
            document.getElementById(id).style.position = position
            document.getElementById(id).style.top = top
            document.getElementById(id).style.left = left
            document.getElementById(id).style.width = width
            document.getElementById(id).style.height = height
            document.getElementById(id).style.zIndex = zIndex
        },
    },

    date: {
        getFullDate: function(){
            let d = new Date()
            let day
            switch(d.getDay()){
                case 0:
                    day = "Sunday"
                    break
                
                case 1:
                    day = "Monday"
                    break

                case 2:
                    day = "Tuesday"
                    break

                case 3:
                    day = "Wednesday"
                    break

                case 4: 
                    day = "Thursday"
                    break

                case 5:
                    day = "Friday"
                    break

                case 6:
                    day = "Saturday"
                    break
            }
            
            let month
            switch(d.getMonth()){
                case 0:
                    month = "January"
                    break

                case 1:
                    month = "February"
                    break

                case 2:
                    month = "March"
                    break

                case 3:
                    month = "April"
                    break

                case 4:
                    month = "May"
                    break

                case 5:
                    month = "June"
                    break

                case 6:
                    month = "July"
                    break

                case 7:
                    month = "August"
                    break

                case 8:
                    month = "September"
                    break

                case 9:
                    month = "October"
                    break

                case 10:
                    month = "November"
                    break

                case 11:
                    month = "December"
                    break
            }
            return day + ", " + month + ", " + String(d.getDate())+ ", " + String(d.getFullYear())
        },
       
        getDayOfWeekString: function(){
            let d = new Date()
            let day
            switch(d.getDay()){
                case 0:
                    day = "Sunday"
                    break
                
                case 1:
                    day = "Monday"
                    break

                case 2:
                    day = "Tuesday"
                    break

                case 3:
                    day = "Wednesday"
                    break

                case 4: 
                    day = "Thursday"
                    break

                case 5:
                    day = "Friday"
                    break

                case 6:
                    day = "Saturday"
                    break
            }

            return day
        },

        getMonthString: function(){
            let d = new Date()
            let month
            switch(d.getMonth()){
                case 0:
                    month = "January"
                    break

                case 1:
                    month = "February"
                    break

                case 2:
                    month = "March"
                    break

                case 3:
                    month = "April"
                    break

                case 4:
                    month = "May"
                    break

                case 5:
                    month = "June"
                    break

                case 6:
                    month = "July"
                    break

                case 7:
                    month = "August"
                    break

                case 8:
                    month = "September"
                    break

                case 9:
                    month = "October"
                    break

                case 10:
                    month = "November"
                    break

                case 11:
                    month = "December"
                    break
            }

            return month
        },

        getYear: function(){
            let d = new Date()
            return d.getFullYear()  
        },

        getMonthNum: function(){
            let d = new Date
            return d.getMonth()
        },

        getDayOfMonth: function(){
            let d = new Date()
            return d.getDay()
        },

        getHour: function(){
            let d = new Date()
            return d.getHours()
        },

        getMinute: function(){
            let d = new Date()
            return d.getMinutes()
        },

        getSecond: function(){
            let d = new Date()
            return d.getSeconds()
        },

        getMillisecond: function(){
            let d = new Date()
            return d.getMilliseconds()
        },

        getDayOfWeekNum: function(){
            let d = new Date()
            return d.getDay()
        },

        getcurrentTime: function(){
            let d = new Date()
            return d.getTime()
        },

        //new
        getClockTime: function(){
            let d = new Date()

            return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
        },
    },
}



//bools
var mouseDown = false
var mouseX
var mouseY

var keyPressed = 'none'

var upArrow = false
var downArrow = false
var rightArrow = false
var leftArrow = false

var wKey = false
var sKey = false
var aKey = false
var dKey = false

var enterKey = false
var shiftKey = false
var spaceKey = false
var ctrlKey = false
var altKey = false
var EscapeKey = false
var tabKey = false

var qkey = false
var eKey = false

var zKey = false
var xKey = false
var cKey = false

var oneKey = false
var twoKey = false
var threeKey = false
var fourKey = false
var fiveKey = false
var sixKey = false
var sevenKey = false
var eightKey = false
var nineKey = false
var zeroKey = false

window.addEventListener('click', e =>{
    mouseDown = true
})

window.addEventListener('mouseup', e => {
    mouseDown = false
})

window.addEventListener('mousemove', e => {
    mouseX = e.mouseX
    mouseY = e.mouseY
})

window.addEventListener('keydown', e => {
    keyPressed = e.key
    console.log(e.key)

    switch(e.key){
        case 'ArrowUp':
            upArrow = true
            break

        case 'ArrowDown':
            downArrow = true
            break

        case 'ArrowRight':
            rightArrow = true
            break

        case 'ArrowLeft':
            leftArrow = true
            break

        case 'w':
            wKey = true
            break

        case 's':
            sKey = true
            break

        case 'a':
            aKey = true
            break

        case 'd':
            dKey = true
            break

        case 'Enter':
            enterKey = true
            break

        case 'Shift':
            shiftKey = true
            break

        case ' ':
            spaceKey = true
            break
        
        case 'Control':
            ctrlKey = true
            break

        case 'Alt':
            altKey = true
            break

        case 'Escape':
            EscapeKey = true
            break

        case 'Tab':
            tabKey = true
            break

        case 'q':
            qKey = true
            break

        case 'e':
            eKey = true
            break

        case 'z':
            zKey = true
            break

        case 'x':
            xKey = true
            break

        case 'c':
            cKey = true
            break

        case '1':
            oneKey = true
            break

        case '2':
            twoKey = true
            break

        case '3':
            threeKey = true
            break

        case '4':
            fourKey = true
            break

        case '5':
            fiveKey = true
            break

        case '6':
            sixKey = true
            break

        case '7':
            sevenKey = true
            break
        
        case '8':
            eightKey = true
            break

        case '9':
            nineKey = true
            break

        case '0':
            zeroKey = true
            break
    }
})

window.addEventListener('keyup', e => {
    keyPressed = 'none'

    upArrow = false
    downArrow = false
    rightArrow = false
    leftArrow = false

    wKey = false
    sKey = false
    aKey = false
    dKey = false

    enterKey = false
    shiftKey = false
    spaceKey = false
    ctrlKey = false
    altKey = false
    EscapeKey = false
    tabKey = false

    qkey = false
    eKey = false

    zKey = false
    xKey = false
    cKey = false

    oneKey = false
    twoKey = false
    threeKey = false
    fourKey = false
    fiveKey = false
    sixKey = false
    sevenKey = false
    eightKey = false
    nineKey = false
    zeroKey = false
})  