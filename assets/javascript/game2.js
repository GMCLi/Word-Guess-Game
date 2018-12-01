//create variables
    //countries
    //img sources
    //win count
    //loss count
    //guessed letters array
    //current country
    //game has started boulean=false
    //number of lives
    //positions
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Republic of the Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portuga", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var winimg = ["assets/images/win1.jpg", "assets/images/win2.jpg", "assets/images/win3.jpg"];
var loseimg = ["assets/images/lose1.jpg", "assets/images/lose2.jpg", "assets/images/lose3.jpg"];
var wincount = [];
var losecount = [];
var guessedletters = [];
var currentcountry = [];
var gamehasstarted = false;
var lives = 10;
var positions = [];
//key work input
    //event listener for key up events
    //this is my "controller"
document.onkeyup=function(event) {
    if(GameOver) {
        initializegame();
        GameOver = false
    }
    else if(event.keyCode >=65 && event.keyCode <=90)
}


//initialize game  
    //word is randomly chosen from countries array, DONE
    //display data on screen
    //length of chosen word put into _, DONE
    //reset number of lives, DONE
    //reset guessed letters array, DONE
function initializegame() {
    currentcountry = Math.floor(Math.random() * (countries.length));
    
    for (var i=0; i < countries[currentcountry].length; i++) {
        currentcountry.push("_");
    }
    var lives = 10;
    var guessedletters = [];
}

//press button to start
    //toggle gamehasstarted boulean to true
    //call initialize game
document.onkeyup = function(event) {
    if (!gamehasstarted) {
        gamehasstarted = true;
    }
    else if (event.keyCode >= 65 && event.keyCode <=90) {

    }
}

//player picks a letter
    //call function that handles gameplay
function letterpicking(letter) {
    if (guessedletters.indexOf(letter) === -1) {
        guessedletters.push(letter);
    }
}
    
//various functions for the game
    //function that returns true/false if the guessed letter was in the word, DONE
    //function for letter NOT in the word
        //reduce number of lives by 1
    //function for letter when it IS in the word
        //replace underscore with letter
    //function returns true when a win occurs
        //bring up win image
        //increase win tally by 1
        //call initialize game
        //if all letters have been guessed, then win occurs = true
    //function returns true when a loss occurs
        //bring up loss image
        //increase loss tally by 1
        //call initialize game
        //if lives=0 then loss occurs = true
function checkingguess(letter) {
    for (var i = 0; i < guessedletters[countries].length; i++) {
        if(countries[guessedletters][i] === letter) {
            return true;
        }
        else {
            return false;
        }
    }
}
