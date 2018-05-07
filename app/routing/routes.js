var router = require('express').Router();
var path = require('path');
var hangman = require('../models/hangman.js')
var wordsData = require('../db/words.js');
var fs = require('fs');


// Route linking to home page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

// Route to check login information
router.post('/login/:username', function(req,res){
    hangman.check(req.params.username,req.body.password,function(err,results){
        if(err) throw err;
        if(results === "Correct"){
            hangman.stats(req.params.username, function(err,results){
                if(err) throw err;
                res.json(results);
            });
        }else{
            res.json(results);
        }
        
       
    })

});


// Route for signing up
router.post('/signup', function(req,res){

    hangman.new(req.body.username, req.body.password, function(err,results){
        res.json(results);
    });

    var body = req.body;
    var newUser = {
        username: body.username,
        password: body.password,
        wins : 0,
        loss : 0
    };

});

//Route to for grabbing leaders

router.get('/leaders', function(req,res){

    hangman.stats("all", function(err,results){
        res.json(results);
    });

});


//Route to get the word object

router.get("/newWord", function(req,res){
    fs.readFile(path.join(__dirname, "../db/words.js"), function(err, data){
        if(err) throw err;

        var words = JSON.parse(data);

        var max = words.length - 1;

        var random = Math.floor(Math.random() * ((max - 0 + 1) + 0));

        res.json(words);
    })
});

router.post("/updateInfo/:username", function(req,res){

    hangman.update(req.params.username, req.body.winCount, req.body.lossCount, function(err,results){
        if(err) throw err;

        res.end();
    })
    
});

module.exports = router;