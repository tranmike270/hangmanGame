var currentWord;
var chances = 7;
var wordDisplayed;
var theWord;
var user;
var wins;
var loss;
var wordsFinished = [];


function prepareGame(username,winCount, lossCount){
    user = username;
    wins = winCount;
    loss = lossCount;

 
    if(username){
        $('#info-username').text(username);
        $('#win-count').text(winCount);
        $('#loss-count').text(lossCount); 

    };

    printLeaders();
    $(document).keyup(function(event){
        if((currentWord === undefined || chances === 0 || currentWord == wordDisplayed) && (event.keyCode === 13)){
            $("#instructions").empty();

            // Runs function to pick the word
            pickWord();

            
        }
    })
    
};

// Prints Leaders
function printLeaders(){
    // Call to back-end to fetch leaders
    $.ajax('/leaders', {
        type: "GET",
        success: function(data){
            console.log(data);
            for(var i = 0; i < 3; i++){
                console.log(i);
                if(data[i]){
                    console.log("this");
                    console.log($("[data-rank='"+ (i + 1) +"']"));
                    $("[data-rank='"+ (i + 1) +"']").html(data[i].username + "<br>Wins: " + data[i].wins);
                }else {
                    $("[data-rank='"+ (i + 1) +"']").html("N/A");
                };
                
            };

        }
    });

};

// Function to get the word data
function pickWord(){

    // Call to back-end to fetch word data
    $.ajax('/newWord', {
        type: "GET",
        success: function(data){
            console.log(data);


            var max = data.length - 1;
            var random = Math.floor(Math.random() * ((max - 0 + 1) + 0));
            if(wordsFinished.length === data.length){
                wordsFinished = [];
            };

            while(wordsFinished.includes(data[random].word) || data[random].word === currentWord){
                random = Math.floor(Math.random() * ((max - 0 + 1) + 0));
            }
            
            

            $(document).unbind('keyup');
            beginGame(data[random]);

        }
    });

}
// Creating constructors

    // Letter constructor
function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.isGuessed = function(){
        if(this.guessed){
            return this.letter;
        }else{
            return "_"
        };
    };
    this.guess = function(character){
        if(character === this.letter.toLowerCase()){
            this.guessed = true;
        }
    }
};

    //Word constructor
function Word(word){
    this.wordArr = turnToObjectArray(word);
    this.displayWord = function(){
        var currentWord = [];
        for(var i = 0; i < this.wordArr.length; i++){
            var character = this.wordArr[i].isGuessed();

            if(character === "space"){
                currentWord.push(" ");
            }else{
            currentWord.push(character)
        };

        };
        var theWord = currentWord.join("");
        return theWord;
    };
    this.guess = function(guessedLetter){
        for(var i = 0; i < this.wordArr.length; i++){
            this.wordArr[i].guess(guessedLetter);
        };
    };
};

// Function to turn each letter of the word into a Letter object and push it into an array
function turnToObjectArray(word){
    var arr = [];
    for(var i = 0; i < word.length; i++){
        if(word[i] === " "){
            var currentLetter = new Letter("space");
            arr.push(currentLetter);
        }else{
            var currentLetter = new Letter(word[i]);
            arr.push(currentLetter);
        };

    };

    for(var i = 0; i < arr.length; i++){
        if(arr[i].letter === 'space'){
            arr[i].guess('space');
        };
    };

    return arr;
}


function beginGame(wordData){
    //Setting global variables and creating the Word Object
    currentWord = wordData.word;

    theWord = new Word(currentWord);

    // Start off by displaying the word for users to guess and reseting everything
    wordDisplayed = theWord.displayWord();
    $("#word").text(wordDisplayed);
    chances = 7;
    $("#remainingNum").text(chances);

    $("#guessedLetters").empty();
    var guessedLetters = [];

    $(document).keyup(function(event){
        var keyPressed = event.key.toUpperCase();

        if((keyPressed.match(/[A-Z]/g)) && (chances !== 0) && (currentWord !== wordDisplayed) && (guessedLetters.includes(keyPressed) === false) && (keyPressed.length <= 1)){
            theWord.guess(event.key);
            var afterGuessWord = theWord.displayWord();
    
            if(afterGuessWord === wordDisplayed){
                chances--;

                $("#remainingNum").text(chances);
                if(chances === 0){
                    loss++;
                    $("#instructions").text("You lost! Press 'Enter' to try again!");
                    if(user !== "N/A"){
                        updateInfo(user,wins,loss);
                    }else {
                        prepareGame("N/A",wins,loss);
                    }
                  
                }
            }else{
                wordDisplayed = afterGuessWord;
                $("#word").text(wordDisplayed);

                if(currentWord === wordDisplayed){

                    wins++;
                    $("#instructions").text("Congratulations!! You won!! Press 'Enter' to play again!");
                    wordsFinished.push(currentWord);
                    displayWinnings(wordData.backgroundUrl, wordData.audioPath,wordData.description);

                    if(user !== "N/A"){
                        updateInfo(user,wins,loss); 
                    }else {
                        prepareGame("N/A",wins,loss);
                    }
                   
                }
            };
    
            guessedLetters.push(keyPressed);
            var guessed = guessedLetters.join(", ");
            $("#guessedLetters").text(guessed);

        };
    });
};


function updateInfo(username,wins,loss){

    var WL = {
        winCount : wins,
        lossCount : loss
    };

    $.ajax('/updateInfo/' + username, {
        type: "POST",
        data: WL
    }).then(function(){

        prepareGame(username,wins,loss);
    })
};


function displayWinnings(background, audio, information){

    var currentBackground = "url(" + background + ")";
    //Changing the background
    $("#background").css('background-image', currentBackground);


    //Adding information

        //Adding the anime Title
        $("#animeName").text(information.titles[0]);

        //Adding Title/Alt Names
        $("#information").html("<h4>Title(s)/Alternate Names</h4>");

            //Emptying titles before appening them
            $("#titles").empty();
        for(var i = 0; i <information.titles.length; i++){
            var title = $("<p>").attr({
                class: 'title'
            }).text(information.titles[i]);
            $("#titles").append(title);
        };

        // Adding Synopsis

        $("#synopsis").html("<h4>Synopsis</h4>");
        $("#about").addClass("synopsis").html(information.synopsis);

        // Adding Characters

        $("#mainCharacter").html("<h4>Main Character(s)</h4>");

            //Emptying characters before appending them
            $("#characters").empty();
        for(var i = 0; i < information.characters.length; i++){
            var chara = $("<p>").attr({
                class: "characters"
            }).text(information.characters[i]);
            $("#characters").append(chara);
        };

        // Adding Link to wallpaper

        $("#wallpaper").html("<h4>Link to Wallpaper</h4>")

        $("#link").html("<a href='"+background+"' target='_blank'> Click Here for the wallpaper! </a>")
    //Adding the source to the audio element

   
    $("#volume-container").css("visibility","visible");

    var song = $("#songSrc").attr('src',audio);
    var player = $("#song");
    player.load();

}