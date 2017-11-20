var easyPossibleWords = ["hello", "princess", "water", "applesauce", "bear","hat"];
var mediumPossibleWords = ["lullaby", "cabbage", "pineapple", "birthday", "young","spaghetti"];
var hardPossibleWords = ["cannibalism", "satchel", "forlorn", "cartography", "zany","corduroy"];

var word = "";
var guessedLetters = [];
var numGuesses = 8;
var guessedWord ="";


function startGame(){
    word = "";
    guessedLetters = [];
    numGuesses = 8;
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("numGuesses").innerHTML = "";
    document.getElementById("hangFrame").innerHTML = "";

    var difficulty = document.getElementById("difficulty").value;
    if(difficulty == 1){
        word = easyPossibleWords[Math.floor(Math.random() * easyPossibleWords.length)];
    }
    if(difficulty == 2){
        word = mediumPossibleWords[Math.floor(Math.random() * mediumPossibleWords.length)];
    }
    if(difficulty == 3){
        word = hardPossibleWords[Math.floor(Math.random() * hardPossibleWords.length)];
    }
    console.log(word);


    document.getElementById("hangFrame").innerHTML = "<img src=img/8.png>";
    printWord();


}


function printWord(){
    console.log(word);
    console.log(guessedLetters);
    var result  = "";

    if(word == guessedWord){
        result = "Congratulations! You win and you saved the man.";
    } else {
        for (var i = 0; i < word.length; i ++){
            if(guessedLetters.indexOf(word[i]) > -1){
                result += word[i];
            } else {
                result += "_ ";
            }
        }
        console.log(result);
        if(numGuesses == 0){
            result = "SORRY you lose and you killed the man.";
        }
    }

    document.getElementById("wordSpaces").innerHTML = result;
    guessedWord = "";
}


function handleGuess(){
    var letter = document.getElementById("guessedLetter").value;
    guessedWord = document.getElementById("guessedWord").value;


    if(letter != "" && letter.length == 1 && numGuesses > 0 && guessedLetters.indexOf(letter) == -1 && isNaN(parseInt(letter))){
        guessedLetters.push(letter);
        if(word.indexOf(letter) == -1){
            numGuesses --;
            console.log(numGuesses);
        }
    }

    if(guessedWord.length> 0 && numGuesses > 0 && guessedLetters.indexOf(guessedWord) == -1 && isNaN(parseInt(guessedWord))){
        guessedLetters.push(guessedWord);
        if(guessedWord != word){
            numGuesses --;
            console.log(numGuesses);
        }
    }


    document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
    document.getElementById("numGuesses").innerHTML = numGuesses;
    document.getElementById("guessedLetter").value = "";
    document.getElementById("guessedWord").value = "";
    console.log(numGuesses);
    var newImage = "<img src='img/" + numGuesses + ".png'>";
    document.getElementById("hangFrame").innerHTML = newImage;
    printWord();
}

