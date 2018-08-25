


//X    //0. accurately capture letters 
//X      1. update a DOM element from JavaScript
//x      //2. tracking which letters have been guessed
//x      //3. prevent repeat guessing
        //4. generate dashes, showing letters that have been guessed
//x     //5. check against a word
    //6. limit number of guesses
    //7. display win or lose message
    //8. track wins
    //9. display wins vs losses?
//x //10. randomly select word from an array
    //11. press any key to start

    var countryNames = [
        "FRANCE",
        "USA",
        "CANADA",
        "MEXICO",
        "INDIA",
        "GERMANY"
    ];
    var guessingWordDashes = [];

var wins = 0;
var losses = 0;
var userGuesses = []; //array for user guesses
var numberGuesses = 10;
var guessingWordNode = document.querySelector("#guessingWordDashes"); //create&points guessingWordNode to #guessingWordDashes in HTMl
var guessesRemainingNode = document.querySelector("#guessesRemaining");
var lossesNode = document.querySelector("#losses");
var winsNode = document.querySelector("#wins");
var guessedListNode = document.querySelector("#guessedList"); //selected an element in the DOM by using its ID
var beforeFirstGame = true;
 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {
     
    if (beforeFirstGame) {
        beforeFirstGame = false;
        reset();
    }
    // Determines which key was pressed.
    var letterGuessed = event.key.toUpperCase();
    if (!letterGuessed.match(/[A-Z]/)){
        alert("This is not a letter");
        return;
    }
   

//takes the letter guessed and checks it against all letter in the the userGuesses array. alerts and NOT adds letter if already in the array
    for (let i = 0; i <  userGuesses.length; i++ ) {
        
         //checking if letter has been guessed 
            if (letterGuessed == userGuesses[i]) {
                alert("this letter has been guessed");
                return; //stops the event handler
            }
    }

    userGuesses.push(letterGuessed);
    

   
   

   //creating a span element and assigning it a varible name
   var guessedChildNode = document.createElement("span"); //building a place to use 
        //dislpays letter as guessed
    guessedChildNode.textContent = letterGuessed;
    //growing the guessedListNode
    guessedListNode.appendChild(guessedChildNode)

    
    var dashesRemain = false;
    var incorrectGuess = true;

    for (let i = 0; i <  countryBeingGuessed.length; i++ ) {
        //checks if a letter is in the countryBeingGuessed
           if (letterGuessed == countryBeingGuessed[i]) {
               incorrectGuess = false;
               guessingWordDashes[i]=letterGuessed; //recording letter correctly guessed in the guessingWordDashesArray
           }
           else if (guessingWordDashes[i] == "_") {
               dashesRemain = true;
            }
    }
    //where to know if we're done or not. 
    if (incorrectGuess == true){
        numberGuesses -= 1; //reduces the numberGuesses by one
    }
    displayGuessedCountry();    

    if (dashesRemain == false) {
        wins += 1;
        winsNode.textContent= wins;
        alert("you won");
        reset();
    }

    if (numberGuesses == 0){
        losses += 1; //increases the losses
        lossesNode.textContent= losses;
        alert("Sorry, you lost.");
        reset();
    }
 }

 //random country
var countryBeingGuessed; 


//creates the dashes

function countryDashes(){
    for (var i = 0; i < countryBeingGuessed.length; i++) {  //iterates through the ccountry being guessed word
      guessingWordDashes.push("_"); //pushes dashes to the guessing word array
      
    }   
}

function displayGuessedCountry(){
        guessingWordNode.innerHTML = "";
        
        guessesRemainingNode.textContent = numberGuesses;
    for (let i = 0; i < guessingWordDashes.length; i++) {
        var guessingLetterNode = document.createElement("span"); //creates a span element for the guessinglettter node to display in
       guessingLetterNode.textContent = guessingWordDashes[i] ; //should display
      guessingWordNode.appendChild(guessingLetterNode);
        
    }
    
}




function reset (){  //gets game ready for a new game // not working 
    guessingWordDashes = [];
    countryBeingGuessed = countryNames[Math.floor(Math.random() * countryNames.length)];
    countryDashes ();
    userGuesses = [];
    numberGuesses = 10;
    guessedListNode.innerHTML = "";
    displayGuessedCountry();
}