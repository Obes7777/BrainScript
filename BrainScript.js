const brain = {
    math: {
            randomNumber: function(min, max){
                    return Math.random() * (max - min + 1) + min
            },

            randomInteger: function(min, max){
                    return Math.floor(Math.random() * (max - min + 1) ) + min
            },

            findHypotonuse: function(leg1, leg2){
                return Math.sqrt(leg1 * leg1 + leg2 * leg2)               
            },

            findLeg: function(leg, hypotonuse){
                return Math.sqrt(hypotonuse * hypotonuse - leg1 * leg1)
            },

            circleArea: function(radius){
                return Math.PI * (r*r)
            }
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

        click:  function(id){
            document.getElementById(id).click()
        },

        rotate: function(id, deg){
            document.getElementById(id).style.transform = 'rotate(' + String(amount) + ')'
        },

        transparency: function(id, opacity){
            document.getElementById(id).style.opacity = String(num)
        }
    },

    date = {
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
            return day + ", " + String(d.getDate()) + ", " + month + ", " + String(d.getFullYear())
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
        }
    },
}