var anime = ["Your Lie In April",
    "Bleach",
    "Naruto",
    "Guilty Crown",
    "Haikyuu",
    "Yuri On Ice",
    "Death Parade",
    "Psycho Pass",
    "Dragon Ball Z",
    "Angel Beats",
    "No Game No Life",
    "Hunter X Hunter",
    "Gundam SEED",
    "Food Wars",
    "My Hero Academia",
    "Death Note",
    "Fate Series",
    //Will add at another date... plus others
    //   "Attack On Titan",
    //  "One Punch Man",
    //  "Charlotte",
    //  "Your Name",
    //  "Re Zero",
    //  "Kuroko no Basket"
]


var wins = 0;
var play = true;
var animeChoice = String;
var chances = 12;
var a, b, c, d, e, f, g, h, li, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = Number;
var letterCount;
var audio;
// To start the game
var fire = false; // Starting event handler
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (fire === false) {
        // To prevent wrong letters from being reprinted and loosing chances for a letter that has another been guessed wrong
        a = 1;
        b = 1;
        c = 1;
        d = 1;
        e = 1;
        f = 1;
        g = 1;
        h = 1;
        li = 1;
        j = 1;
        k = 1;
        l = 1;
        m = 1;
        n = 1;
        o = 1;
        p = 1;
        q = 1;
        r = 1;
        s = 1;
        t = 1;
        u = 1;
        v = 1;
        w = 1;
        x = 1;
        y = 1;
        z = 1;
        fire = true; //Changes event handler so it wont restart
        letterCount = 0; //Sets letter Count to 0


        //Pick a random anime from array
        animeChoice = anime[Math.floor(Math.random() * anime.length)];

        //Turning choice into an array and printing each index to a new div
        var wordDiv = document.getElementById("word");
        for (var count = 0; count < animeChoice.length; count++) {
            var letter = animeChoice[count].toLowerCase();
            //Takes into account instances where theree is a space in the animeChoice
            if (letter === " ") {
                var divLetter = document.createElement("div");
                divLetter.id = count;
                divLetter.className = "letterBox space col-lg-12";
                wordDiv.appendChild(divLetter);
                var letterBox = document.getElementById(count);
                var letterSpan = document.createElement("p");
                letterSpan.innerHTML = animeChoice[count];
                letterBox.appendChild(letterSpan);
                letterCount++;      //Adds a count for each space
            }

            var divLetter = document.createElement("div");
            divLetter.className = "letterBox";              //Gives each div box a class so it can be deleted later on
            divLetter.id = count;                           //Give each box an ID based on the index to attach the correct letter to the box
            wordDiv.appendChild(divLetter);
            var letterBox = document.getElementById(count);
            var letterSpan = document.createElement("p");
            // Giving the created letter a specific class according to the letter so it can be accessed later
            switch (letter) {
                case 'a':
                    letterSpan.className = "a";
                    break;
                case 'b':
                    letterSpan.className = "b";
                    break;
                case 'c':
                    letterSpan.className = "c";
                    break;
                case 'd':
                    letterSpan.className = "d";
                    break;
                case 'e':
                    letterSpan.className = "e";
                    break;
                case 'f':
                    letterSpan.className = "f";
                    break;
                case 'g':
                    letterSpan.className = "g";
                    break;
                case 'h':
                    letterSpan.className = "h";
                    break;
                case 'i':
                    letterSpan.className = "i";
                    break;
                case 'j':
                    letterSpan.className = "j";
                    break;
                case 'k':
                    letterSpan.className = "k";
                    break;
                case 'l':
                    letterSpan.className = "l";
                    break;
                case 'm':
                    letterSpan.className = "m";
                    break;
                case 'n':
                    letterSpan.className = "n";
                    break;
                case 'o':
                    letterSpan.className = "o";
                    break;
                case 'p':
                    letterSpan.className = "p";
                    break;
                case 'q':
                    letterSpan.className = "q";
                    break;
                case 'r':
                    letterSpan.className = "r";
                    break;
                case 's':
                    letterSpan.className = "s";
                    break;
                case 't':
                    letterSpan.className = "t";
                    break;
                case 'u':
                    letterSpan.className = "u";
                    break;
                case 'v':
                    letterSpan.className = "v";
                    break;
                case 'w':
                    letterSpan.className = "w";
                    break;
                case 'x':
                    letterSpan.className = "x";
                    break;
                case 'y':
                    letterSpan.className = "y";
                    break;
                case 'z':
                    letterSpan.className = "z";
                    break;
            }
            letterSpan.innerHTML = animeChoice[count];
            letterBox.appendChild(letterSpan);


        }
        //Start with 12 guessing and write into div reamining num
        chances = 12;
        var guessesDiv = document.getElementById("remainingNum");
        guessesDiv.innerHTML = chances;
    }
    // If all the following are true the program will run
    if (fire === true && chances >= 1 && letterCount < animeChoice.length) {
        var newString = animeChoice.toLowerCase();
        // If the users guess is not in the word do this
        if (newString.indexOf(userGuess) === -1) {
            switch (userGuess) {
                case 'a':
                    if (a === 1) {
                        chances--;
                        a--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "A, ";
                        if (chances === 0) {
                            gameOver();
                        }

                    }
                    break;
                case 'b':
                    if (b === 1) {
                        chances--;
                        b--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "B, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'c':
                    if (c === 1) {
                        chances--;
                        c--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "C, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'd':
                    if (d === 1) {
                        chances--;
                        d--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "D, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'e':
                    if (e === 1) {
                        chances--;
                        e--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "E, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'f':
                    if (f === 1) {
                        chances--;
                        f--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "F, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'g':
                    if (g === 1) {
                        chances--;
                        g--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "G, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'h':
                    if (h === 1) {
                        chances--;
                        h--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "H, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'i':
                    if (li === 1) {
                        chances--;
                        li--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "I, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'j':
                    if (j === 1) {
                        chances--;
                        j--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "J, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'k':
                    if (k === 1) {
                        chances--;
                        k--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "K, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'l':
                    if (l === 1) {
                        chances--;
                        l--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "L, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'm':
                    if (m === 1) {
                        chances--;
                        m--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "M, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'n':
                    if (n === 1) {
                        chances--;
                        n--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "N, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'o':
                    if (o === 1) {
                        chances--;
                        o--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "O, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'p':
                    if (p === 1) {
                        chances--;
                        p--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "P, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'q':
                    if (q === 1) {
                        chances--;
                        q--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "Q, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'r':
                    if (r === 1) {
                        chances--;
                        r--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "R, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 's':
                    if (s === 1) {
                        chances--;
                        s--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "S, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 't':
                    if (t === 1) {
                        chances--;
                        t--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "T, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'u':
                    if (u === 1) {
                        chances--;
                        u--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "U, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'v':
                    if (v === 1) {
                        chances--;
                        v--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "V, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'w':
                    if (w === 1) {
                        chances--;
                        w--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "W, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'x':
                    if (x === 1) {
                        chances--;
                        x--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "X, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'y':
                    if (y === 1) {
                        chances--;
                        y--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "Y, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
                case 'z':
                    if (z === 1) {
                        chances--;
                        z--;
                        var guessesDiv = document.getElementById("remainingNum");
                        guessesDiv.innerHTML = chances;
                        var wrongGuess = document.getElementById("guessedLetters")
                        wrongGuess.innerHTML += "Z, ";
                        if (chances === 0) {
                            gameOver();
                        }
                    }
                    break;
            }
        }
        // If the users guess is in the word do this
        else {
            switch (userGuess) {
                case 'a':
                    var correct = document.querySelectorAll("p.a");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }

                    break;
                case 'b':
                    var correct = document.querySelectorAll("p.b");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'c':
                    var correct = document.querySelectorAll("p.c");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'd':
                    var correct = document.querySelectorAll("p.d");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'e':
                    var correct = document.querySelectorAll("p.e");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'f':
                    var correct = document.querySelectorAll("p.f");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'g':
                    var correct = document.querySelectorAll("p.g");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'h':
                    var correct = document.querySelectorAll("p.h");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'i':
                    var correct = document.querySelectorAll("p.i");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'j':
                    var correct = document.querySelectorAll("p.j");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'k':
                    var correct = document.querySelectorAll("p.k");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'l':
                    var correct = document.querySelectorAll("p.l");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'm':
                    var correct = document.querySelectorAll("p.m");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'n':
                    var correct = document.querySelectorAll("p.n");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'o':
                    var correct = document.querySelectorAll("p.o");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'p':
                    var correct = document.querySelectorAll("p.p");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'q':
                    var correct = document.querySelectorAll("p.q");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'r':
                    var correct = document.querySelectorAll("p.r");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 's':
                    var correct = document.querySelectorAll("p.s");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 't':
                    var correct = document.querySelectorAll("p.t");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'u':
                    var correct = document.querySelectorAll("p.u");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'v':
                    var correct = document.querySelectorAll("p.v");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'w':
                    var correct = document.querySelectorAll("p.w");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'x':
                    var correct = document.querySelectorAll("p.x");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'y':
                    var correct = document.querySelectorAll("p.y");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
                case 'z':
                    var correct = document.querySelectorAll("p.z");
                    for (i = 0; i < correct.length; i++) {
                        correct[i].className = "correct";
                        letterCount++;
                    }
                    if (letterCount === animeChoice.length) {
                        winGame();
                    }
                    break;
            }
        }
    }

}
//Function that changes the background when user wins!
function changeBackground(string) {
    var string;
    switch (string) {
        case 'Your Lie In April':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/yourlieinaprilBG.jpg')";

            break;
        case 'Bleach':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/bleachBG.jpg')";

            break;
        case 'Naruto':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/narutoBG.jpg')";

            break;
        case 'Guilty Crown':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/guiltycrownBG.png')";

            break;
        case 'Haikyuu':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/haikyuuBG.jpg')";

            break;
        case 'Yuri On Ice':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/yurioniceBG.jpg')";

            break;
        case 'Death Parade':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/deathparadeBG.jpg')";

            break;
        case 'Psycho Pass':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/psychopassBG.jpg')";

            break;
        case 'Dragon Ball Z':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/dragonballzBG.jpg')";

            break;
        case 'Angel Beats':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/angelbeatsBG.jpg')";

            break;
        case 'No Game No Life':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/nogamenolifeBG.jpg')";

            break;
        case 'Hunter X Hunter':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/hunterxhunterBG.jpg')";

            break;
        case 'Gundam SEED':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/gundamBG.jpg')";

            break;
        case 'Food Wars':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/foodwarsBG.png')";

            break;
        case 'My Hero Academia':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/myheroBG.png')";

            break;
        case 'Death Note':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/deathnoteBG.jpg')";

            break;
        case 'Fate Series':
            document.getElementById("background").style.backgroundImage = "url('Wallpapers/fateBG.jpg')";

            break;

    }
}
//Function that plays the music when user wins!
function playMusic(string) {
    var string;
    switch (string) {
        case 'Your Lie In April':
            var audio = new Audio('Music/yourlieinaprilMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Bleach':
            var audio = new Audio('Music/bleachMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Naruto':
            var audio = new Audio('Music/narutoMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Guilty Crown':
            var audio = new Audio('Music/guiltycrownMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Haikyuu':
            var audio = new Audio('Music/haikyuuMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Yuri On Ice':
            var audio = new Audio('Music/yurioniceMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Death Parade':
            var audio = new Audio('Music/deathparadeMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Psycho Pass':
            var audio = new Audio('Music/psychopassMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Dragon Ball Z':
            var audio = new Audio('Music/dragonballzMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Angel Beats':
            var audio = new Audio('Music/angelbeatsMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'No Game No Life':
            var audio = new Audio('Music/nogamenolifeMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Hunter X Hunter':
            var audio = new Audio('Music/hunterxhunterMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Gundam SEED':
            var audio = new Audio('Music/gundamMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Food Wars':
            var audio = new Audio('Music/foodwarsMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'My Hero Academia':
            var audio = new Audio('Music/myheroMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Death Note':
            var audio = new Audio('Music/deathnoteMusic.mp3');
            audio.play();
            return audio;

            break;
        case 'Fate Series':
            var audio = new Audio('Music/fateMusic.mp3');
            audio.play();
            return audio;

            break;

    }
}

//Function that display all the anime information
function animeInfo(string) {
    var string;
    switch (string) {
        case 'Your Lie In April':

            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Your Lie In April<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Your Lie In April <br> Shigatsu wa Kimi no Uso";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Music accompanies the path of the human metronome, the prodigious pianist Kousei Arima. But after the passing of his mother, Saki Arima, Kousei falls into a downward spiral, rendering him unable to hear the sound of his own piano. Two years later, Kousei still avoids the piano, leaving behind his admirers and rivals, and lives a colorless life alongside his friends Tsubaki Sawabe and Ryouta Watari. However, everything changes when he meets a beautiful violinist, Kaori Miyazono, who stirs up his world and sets him on a journey to face music again. Based on the manga series of the same name, Shigatsu wa Kimi no Uso approaches the story of Kousei's recovery as he discovers that music is more than playing each note perfectly, and a single melody can bring in the fresh spring air of April.";


            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Arima, Kousei <br> Miyazono, Kaori <br> Sawabe,Tsubaki <br> Watari, Ryouta";

            break;
        case 'Bleach':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Bleach<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Bleach";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result. However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Kurosaki, Ichigo <br> Kuchiki, Rukia <br> Inoue, Orihime <br> Ishida, Uryuu <br> Sado, Yasutora";

            break;
        case 'Naruto':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Naruto<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Naruto <br> Naruto Shippuden";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Uzimaki, Naruto <br> Uchiha, Sasuke <br> Haruno, Sakura <br> Hatake, Kakashi";

            break;
        case 'Guilty Crown':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Guilty Crown<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Guilty Crown";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Japan, 2039. Ten years after the outbreak of the 'Apocalypse Virus,' an event solemnly regarded as 'Lost Christmas,' the once proud nation has fallen under the rule of the GHQ, an independent military force dedicated to restoring order. Funeral Parlor, a guerilla group led by the infamous Gai Tsutsugami, act as freedom fighters, offering the only resistance to GHQ's cruel despotism. Inori Yuzuriha, a key member of Funeral Parlor, runs into the weak and unsociable Shuu Ouma during a crucial operation, which results in him obtaining the 'Power of Kings'—an ability which allows the wielder to draw out the manifestations of an individual's personality, or 'voids.' Now an unwilling participant in the struggle against GHQ, Shuu must learn to control his newfound power if he is to help take back Japan once and for all.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Ouma, Shuu <br> Yuzuriha, Inori <br> Tsutsugami, Gai";

            break;
        case 'Haikyuu':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Haikyuu!<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Haikyuu!";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Inspired after watching a volleyball ace nicknamed 'Little Giant' in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last when they are brutally squashed by the 'King of the Court,' Tobio Kageyama. Hinata vows to surpass Kageyama, and so after graduating from middle school, he joins Karasuno High School's volleyball team—only to find that his sworn rival, Kageyama, is now his teammate. Thanks to his short height, Hinata struggles to find his role on the team, even with his superior jumping power. Surprisingly, Kageyama has his own problems that only Hinata can help with, and learning to work together appears to be the only way for the team to be successful. Based on Haruichi Furudate's popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order to make their high school volleyball team the best in Japan.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Hinata, Shouyou <br> Kageyama, Tobio";

            break;
        case 'Yuri On Ice':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Yuri!!! On ICE<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Yuri!!! On ICE";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Reeling from his crushing defeat at the Grand Prix Finale, Yuuri Katsuki, once Japan's most promising figure skater, returns to his family home to assess his options for the future. At age 23, Yuuri's window for success in skating is closing rapidly, and his love of pork cutlets and aptitude for gaining weight are not helping either. However, Yuuri finds himself in the spotlight when a video of him performing a routine previously executed by five-time world champion, Victor Nikiforov, suddenly goes viral. In fact, Victor himself abruptly appears at Yuuri's house and offers to be his mentor. As one of his biggest fans, Yuuri eagerly accepts, kicking off his journey to make it back onto the world stage. But the competition is fierce, as the rising star from Russia, Yuri Plisetsky, is relentlessly determined to defeat Yuuri and win back Victor's tutelage.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Nikiforov, Victor <br> Katsuki, Yuri <br> Plisetsky, Yuri";

            break;
        case 'Death Parade':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Death Parade<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Death Parade";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "After death, there is no heaven or hell, only a bar that stands between reincarnation and oblivion. There the attendant will, one after another, challenge pairs of the recently deceased to a random game in which their fate of either ascending into reincarnation or falling into the void will be wagered. Whether it's bowling, darts, air hockey, or anything in between, each person's true nature will be revealed in a ghastly parade of death and memories, dancing to the whims of the bar's master. Welcome to Quindecim, where Decim, arbiter of the afterlife, awaits!";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Decim <br> Nona <br> Kurokami no Onna";

            break;
        case 'Psycho Pass':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Psycho-Pass<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Psycho-Pass";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Justice, and the enforcement of it, has changed. In the 22nd century, Japan enforces the Sibyl System, an objective means of determining the threat level of each citizen by examining their mental state for signs of criminal intent, known as their Psycho-Pass. Inspectors uphold the law by subjugating, often with lethal force, anyone harboring the slightest ill-will; alongside them are Enforcers, jaded Inspectors that have become latent criminals, granted relative freedom in exchange for carrying out the Inspectors' dirty work. Into this world steps Akane Tsunemori, a young woman with an honest desire to uphold justice. However, as she works alongside veteran Enforcer Shinya Kougami, she soon learns that the Sibyl System's judgments are not as perfect as her fellow Inspectors assume. With everything she has known turned on its head, Akane wrestles with the question of what justice truly is, and whether it can be upheld through the use of a system that may already be corrupt.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Makishima, Shougo <br> Kougami, Shinya <br> Tsunemori, Akane";

            break;
        case 'Dragon Ball Z':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Dragon Ball Z<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Dragon Ball Z";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others. With his failed attempt at forcibly recruiting Gokuu as an ally, Raditz warns Gokuu's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Son, Goku <br> Vegeta <br> Son, Gohan <br> Piccolo <br> Kuririn";

            break;
        case 'Angel Beats':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Angel Beats!<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Angel Beats!";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Otonashi awakens only to learn he is dead. A rifle-toting girl named Yuri explains that they are in the afterlife, and Otonashi realizes the only thing he can remember about himself is his name. Yuri tells him that she leads the Shinda Sekai Sensen (Afterlife Battlefront) and wages war against a girl named Tenshi. Unable to believe Yuri's claims that Tenshi is evil, Otonashi attempts to speak with her, but the encounter doesn't go as he intended. Otonashi decides to join the SSS and battle Tenshi, but he finds himself oddly drawn to her. While trying to regain his memories and understand Tenshi, he gradually unravels the mysteries of the afterlife.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Tachibana, Kanade <br> Nakamura, Yuri <br> Yui <br> Otonashi, Yuzuru <br> Hinata, Hideki";

            break;
        case 'No Game No Life':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>No Game, No Life<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "No Game, No Life";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "No Game No Life is a surreal comedy that follows Sora and Shiro, shut-in NEET siblings and the online gamer duo behind the legendary username 'Blank.' They view the real world as just another lousy game; however, a strange e-mail challenging them to a chess match changes everything—the brother and sister are plunged into an otherworldly realm where they meet Tet, the God of Games. The mysterious god welcomes Sora and Shiro to Disboard, a world where all forms of conflict—from petty squabbles to the fate of whole countries—are settled not through war, but by way of high-stake games. This system works thanks to a fundamental rule wherein each party must wager something they deem to be of equal value to the other party's wager. In this strange land where the very idea of humanity is reduced to child's play, the indifferent genius gamer duo of Sora and Shiro have finally found a real reason to keep playing games: to unite the sixteen races of Disboard, defeat Tet, and become the gods of this new, gaming-is-everything world.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Sora <br> Shiro <br> Dola, Stephanie";

            break;
        case 'Hunter X Hunter':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Hunter X Hunter<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Hunter X Hunter <br> Hunter X Hunter 2011";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined. Along the way to becoming an official Hunter, Gon befriends the lively doctor-in-training Leorio, vengeful Kurapika, and rebellious ex-assassin Killua. To attain their own goals and desires, together the four of them take the Hunter Exam, notorious for its low success rate and high probability of death. Throughout their journey, Gon and his friends embark on an adventure that puts them through many hardships and struggles. They will meet a plethora of monsters, creatures, and characters—all while learning what being a Hunter truly means.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Freecss, Gon <br> Zoldyck, Killua <br> Kurapika <br> Paladiknight, Leorio";

            break;
        case 'Gundam SEED':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Gundam SEED<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Gundam SEED";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "C.E. 71: In the midst of war between the Naturals (OMNI) and Coordinators (ZAFT), a unit from ZAFT is dispatched to hijack the Earth Alliance's newly developed mobile suits on the neutral colony of Heliopolis. Orb Civilian Coordinator Kira Yamato attends the technical college on Heliopolis. After ZAFT hijacks 4 of the 5 mobile suits, Kira stumbles upon the last one, Strike, forced to pilot it to save his and his friend's lives. During this confusion, Kira also reunites with his childhood Coordinator friend, Athrun Zala, who ironically turns out to be a ZAFT soldier and one of the hijackers at Heliopolis. Having control of Strike, Kira joins the Earth Alliance boarding the ship known as Archangel, to protect his friends while despairing over becoming the enemy of his childhood friend and people.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Yamato, Kira <br> Clyne, Lacus <br> Zala, Athrun <br> Athha, Cagalli Yula";

            break;
        case 'Food Wars':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Food Wars!<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Food Wars! <br> Shokugeki no Souma";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "Ever since he was a child, fifteen-year-old Souma Yukihira has helped his father by working as the sous chef in the restaurant his father runs and owns. Throughout the years, Souma developed a passion for entertaining his customers with his creative, skilled, and daring culinary creations. His dream is to someday own his family's restaurant as its head chef. Yet when his father suddenly decides to close the restaurant to test his cooking abilities in restaurants around the world, he sends Souma to Tootsuki Culinary Academy, an elite cooking school where only 10 percent of the students graduate. The institution is famous for its 'Shokugeki' or 'food wars,' where students face off in intense, high-stakes cooking showdowns. As Souma and his new schoolmates struggle to survive the extreme lifestyle of Tootsuki, more and greater challenges await him, putting his years of learning under his father to the test.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Yukihira, Souma <br> Nakiri, Erina <br> Tadokoro, Megumi";

            break;
        case 'My Hero Academia':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>My Hero Academia<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "My Hero Academia <br> Boku no Hero Academia";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "The appearance of 'quirks,' newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual. Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor! Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Midoriya, Izuku <br> Bakugou, Katsuki <br> Uraraka, Ochako <br> Iida, Tenya <br> All Might";

            break;
        case 'Death Note':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Death Note<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Death Note";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. High school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be. With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Yagami, Light <br> Lawliet, L <br> Ryuk";

            break;
        case 'Fate Series':
            var animeName = document.getElementById("animeName");
            animeName.className = "nameOfAnime";
            animeName.innerHTML = "<h3>Fate Series<h3>";

            var animeInfo = document.getElementById("information");
            animeInfo.innerHTML = "<h4>Title/Alternate Names</h4>";
            var title = document.getElementById("titles");
            title.className = ("title");
            title.innerHTML = "Fate/stay night <br> Fate/Zero";

            var animeSynopsis = document.getElementById("synopsis");
            animeSynopsis.innerHTML = "<h4>Synopsis</h4>";
            var synopsis = document.getElementById("about");
            synopsis.className = ("synopsis");
            synopsis.innerHTML = "The Fate series is a TYPE-MOON media collective that follows various events called Holy Grail Wars that involve Masters, generally accomplished magi, summoning Servants, Heroic Spirits, and battling each other until the last remaining pair can claim the purported Holy Grail. It began with the visual novel, Fate/stay night, and has since gathered a number of prequels, sequels, spinoffs, and adaptations bearing the same 'Fate' name.";

            var mc = document.getElementById("mainCharacter");
            mc.innerHTML = "<h4>Main Character(s)</h4>";
            var characters = document.getElementById("characters");
            characters.className = ("characters");
            characters.innerHTML = "Saber <br> Toosaka, Rin <br> Archer <br> Emiya, Shirou";

            break;

    }
}

// Function for things to happen when player wins the game
function winGame() {
    var youWon = document.getElementById("remainingNum");
    youWon.innerHTML = "You won! Press any button to play again!";
    if (wins > 0) {
        stopSong();
    }
    reset();
    changeBackground(animeChoice);
    animeInfo(animeChoice);
    audio = playMusic(animeChoice);
    wins++;
    var winner = document.getElementById("count");
    winner.innerHTML = wins;
    fire = false;
}

// Function for things to happen when play looses
function gameOver() {
    var gameOver = document.getElementById("remainingNum");
    gameOver.innerHTML = "YOU LOST!! Press any key to try again";
    reset();
    fire = false;
}
//Function that resets the board for user!
function reset() {

    var removeWord = document.getElementsByClassName("letterBox");
    while (removeWord.length > 0) {
        removeWord[0].parentNode.removeChild(removeWord[0]);
    }

    var removeGuessed = document.getElementById("guessedLetters");
    removeGuessed.innerHTML = "";

}

// Function to stop the song
function stopSong() {

    audio.pause();
}

// Creating volume bar

$(function() {
 
    var slider = $('#slider'),
      tooltip = $('.tooltip');
   
    tooltip.hide();
   
    slider.slider({
      range: "min",
      min: 1,
      value: 35,
   
      start: function(event,ui) {
        tooltip.fadeIn('fast');
      },
   
      slide: function(event, ui) {
   
        var value = slider.slider('value'),
          volume = $('.volume');
   
        tooltip.css('left', value).text(ui.value);
   
        if(value <= 5) { 
          volume.css('background-position', '0 0');
        } 
        else if (value <= 25) {
          volume.css('background-position', '0 -25px');
        } 
        else if (value <= 75) {
          volume.css('background-position', '0 -50px');
        } 
        else {
          volume.css('background-position', '0 -75px');
        };
   
      },
   
      stop: function(event,ui) {
        tooltip.fadeOut('fast');
      },
    });
   
  });