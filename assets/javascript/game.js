


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessed = [];

var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Republic of the Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portuga", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

var currentWordIndex;

var guessingcountry = [];

var guessesleft = 0;

var space

var maxAttempt = 10;

var winarray = ["assets/images/win1.jpg", "assets/images/win2.jpg", "assets/images/win3.jpg"]

var losearray = ["assets/images/lose1.jpg", "assets/images/lose2.jpg", "assets/images/lose3.jpg"];



//on initalizing put hangman pic then after win/loss use appropriate pics
function imgcontrol(path) {
    document.getElementById("hangmanimg").src=path;
}



//reset variables

function resetGame() {
    guessesleft = maxAttempt


    //choosing the country

    currentWordIndex = Math.floor(Math.random() * (countries.length));

    //clear out arrays

    guessed = [];
    guessingcountry = [];

    //build the guessing word and clear it out

    for (var i = 0; i < countries[currentWordIndex].length; i++) {
    guessingcountry.push("_");
    
    }
    //show display
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;


//-----lines displaying guess progress
var guessingCountryText = "";
for (var i = 0; i < guessingcountry.length; i++) {
    guessingCountryText += guessingcountry[i];
}

document.getElementById("currentCountry").innerText = guessingCountryText;
document.getElementById("guessesleft").innerText = guessesleft;
document.getElementById("guessed").innterText = guessed;
};

//takes a letter and finds all instances in the string and replaces them in the guess word
function evaluateGuess(letter) {
    var positions = [];
//loops through the word finding all instances of guessed letters and storing them in an array
    for (var i = 0; i < currentWordIndex[countries].length; i++){
        console.log(countries[currentWordIndex][i], letter);
        if(countries[currentWordIndex][i] === letter) {
            positions.push[i];
        }
    }
//if no matches, remove a guess
    if (positions.length <= 0) {
        guessesleft--;
    }
    else {
        //loop through all the indicies and replace "_" with a letter
        for(var i = 0; i < positions.length; i++) {
            countries[positions[i]] = letter;
        }
    }
}
//check for a win by detecting any remaining _
function wincheck() {
    if(countries[currentWordIndex].indexOf()) {
        var img = document.getElementById(element);
        for(var i=0; i < winarray.length;i++) {
            if(winarray[i] == img.src) {
                if(i === winarray.length){
                    document.getElementById(element).src = winarray[0]
                }
                document.getElementById(element).src = winarray[i+1];
                break;
            }
        }

        hasFinished = true;
    }
}

//check for loss
function losscheck() {
    if(guessesleft <=0)
    {
        var img = document.getElementById(element);
        for(var i=0; i < losearray.length;i++) {
            if(losearray[i].src == img.src) {
                if(i === losearray.length){
                    document.getElementById(element).src = losearray[0]
                }
                document.getElementById(element).src = losearray[i+1];
                break;
    }
}



document.onkeyup=function(event) { console.log(event.key);
    if(hasFinished) {
        resetGame();
        hasFinished = false;
        }
    else if(event.keyCode >= 65 && event.keyCode <= 90) { console.log(event.key);
        guessing(event.key.toUpperCase());
        updateDisplay();
        // wincheck();
        // losscheck();
    }
};

//hiding win/lose images
document.getElementById("winimage").style.cssText= "display: none";
document.getElementById("loseimage").style.cssText= "display: none"}}
//guessing mechanism, ensuring no repeat letters
function guessing(letter) {
    console.log("guessing function called and value = ", letter);
    if (guessed.indexOf(letter) === -1) {
        guessed.push(letter);
        //evaluateGuess(letter);
        console.log("no letter was found in the guessed array");
    }
    else {
        console.log("we found a letter already in the guessed array");
    }
}
var gamehasstarted = false;
console.log("javascript loaded");
document.onkeyup = function(event) {
    var letterguessed = event.key;
    
    if (!gamehasstarted) {
        console.log("hasFinished is true"); 
        gamehasstarted = true;
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log("event.keyCode between 65 and 90");
        console.log("user pressed key up", letterguessed);
        guessing(event.key.toUpperCase());
    } else {
        console.log("if and else if did not execute");
    }
}