var anime = ["YourLieInApril", "Bleach", "Naruto", "GuiltyCrown", "Haikyuu", "YuriOnIce", "DeathParade", "PhycoPass"]


var wins = 0;
var play = true;
var animeChoice = String;
var chances = 12;
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = Number;
var letterCount;
// To start the game
var fire = false; // Starting event handler
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (fire === false) {
        a = 1;
        b = 1;
        c = 1;
        d = 1;
        e = 1;
        f = 1;
        g = 1;
        h = 1;
        i = 1;
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
        //Removes the old word
        if (wins > 0) {
            var removeWord = document.getElementsByClassName("letterBox");
            while (removeWord.length > 0){
                removeWord[0].parentNode.removeChild(removeWord[0]);
            }
            
            var removeGuessed = document.getElementById("guessedLetters");
            removeGuessed.innerHTML ="";
        }
    
    //Pick a random anime from array
    animeChoice = anime[Math.floor(Math.random() * anime.length)];

    //Turning choice into an array and printing each index to a new div
    var wordDiv = document.getElementById("word");
    for (var i = 0; i < animeChoice.length; i++) {
        var letter = animeChoice[i].toLowerCase();
        if (letter === " ") {
            var divLetter = document.createElement("div");
            divLetter.id = i;
            divLetter.className = "space";
            wordDiv.appendChild(divLetter);
            var letterBox = document.getElementById(i);
            var letterSpan = document.createElement("p");
            letterSpan.innerHTML = animeChoice[i];
            letterBox.appendChild(letterSpan);
        }

        var divLetter = document.createElement("div");
        divLetter.className = "letterBox";
        divLetter.id = i;
        wordDiv.appendChild(divLetter);
        var letterBox = document.getElementById(i);
        var letterSpan = document.createElement("p");
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
        letterSpan.innerHTML = animeChoice[i];
        letterBox.appendChild(letterSpan);


    }
    //Start with 12 guessing and write into div reamining num
    chances = 12;
    var guessesDiv = document.getElementById("remainingNum");
    guessesDiv.innerHTML = chances;
}

if (fire === true && chances >= 1 && letterCount < animeChoice.length) {
    var newString = animeChoice.toLowerCase();

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
                }
                break;
            case 'i':
                if (i === 1) {
                    chances--;
                    i--;
                    var guessesDiv = document.getElementById("remainingNum");
                    guessesDiv.innerHTML = chances;
                    var wrongGuess = document.getElementById("guessedLetters")
                    wrongGuess.innerHTML += "I, ";
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
                }
                break;
            case 'w':
                if (w === 1) {
                    chances--;
                    w--;
                    var guessesDiv = document.getElementById("remainingNum");
                    guessesDiv.innerHTML = chances;
                    var wrongGuess = document.getElementById("guessedLetters")
                    wrongGuess.innerHTML += "B, ";
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
                }
                break;
        }
    }
    else {
        switch (userGuess) {
            case 'a':
                var correct = document.querySelectorAll("p.a");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }

                break;
            case 'b':
                var correct = document.querySelectorAll("p.b");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'c':
                var correct = document.querySelectorAll("p.c");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'd':
                var correct = document.querySelectorAll("p.d");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'e':
                var correct = document.querySelectorAll("p.e");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'f':
                var correct = document.querySelectorAll("p.f");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'g':
                var correct = document.querySelectorAll("p.g");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'h':
                var correct = document.querySelectorAll("p.h");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'i':
                var correct = document.querySelectorAll("p.i");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'j':
                var correct = document.querySelectorAll("p.j");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'k':
                var correct = document.querySelectorAll("p.k");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'l':
                var correct = document.querySelectorAll("p.l");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'm':
                var correct = document.querySelectorAll("p.m");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'n':
                var correct = document.querySelectorAll("p.n");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'o':
                var correct = document.querySelectorAll("p.o");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'p':
                var correct = document.querySelectorAll("p.p");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'q':
                var correct = document.querySelectorAll("p.q");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'r':
                var correct = document.querySelectorAll("p.r");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 's':
                var correct = document.querySelectorAll("p.s");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 't':
                var correct = document.querySelectorAll("p.t");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'u':
                var correct = document.querySelectorAll("p.u");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'v':
                var correct = document.querySelectorAll("p.v");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'w':
                var correct = document.querySelectorAll("p.w");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'x':
                var correct = document.querySelectorAll("p.x");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'y':
                var correct = document.querySelectorAll("p.y");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
            case 'z':
                var correct = document.querySelectorAll("p.z");
                for (i = 0; i < correct.length; i++) {
                    correct[i].className = "correct";
                    letterCount++;
                }
                if (letterCount === animeChoice.length) {
                    wins++;
                    var winner = document.getElementById("count");
                    winner.innerHTML = wins;
                    var youWon = document.getElementById("remainingNum");
                    youWon.innerHTML = "You won! Press any button to play again!";
                    fire = false;
                }
                break;
        }
    }
}

}

//  var gameOver = document.getElementById("remainingNum");
//         gameOver.innerHTML = "GAME OVER Press any key to play again.";
//         fire = false;

