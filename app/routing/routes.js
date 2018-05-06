var router = require('express').Router();
var path = require('path');
var accountsData = require('../data/accounts.js');
var leadersData = require('../data/leaders.js');
var wordsData = require('../data/words.js');
var fs = require('fs');


// Route linking to home page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

// Route to check login information
router.post('/login/:username', function(req,res){
    fs.readFile(path.join(__dirname, '../data/accounts.js'), function(err, data){
        if(err) throw err;
        var accounts = JSON.parse(data);
        var index = accounts.findIndex(x => x.username === req.params.username);

        if(index == -1){
            res.json("User does not exist");
        }else{
            if(accounts[index].password === req.body.password){
                var currentUser = {
                    username: accounts[index].username,
                    wins : accounts[index].wins,
                    loss :accounts[index].loss
                }
                res.json(currentUser);
            }else {
                res.json("Incorrect")
            }
        };

    });
});


// Route for signing up
router.post('/signup', function(req,res){
    var body = req.body;
    var newUser = {
        username: body.username,
        password: body.password,
        wins : 0,
        loss : 0
    };

    fs.readFile(path.join(__dirname, "../data/accounts.js"), function(err,data){
        if(err) throw err;
        var usernames = [];
        var accounts = JSON.parse(data);

        for(var i = 0; i < accounts.length; i++){
            usernames.push(accounts[i].username);
        };

        if(usernames.indexOf(body.username) == -1){
            accounts.push(newUser);
            fs.writeFile(path.join(__dirname, "../data/accounts.js"), JSON.stringify(accounts, null, 2), function(err){
                if(err) throw err;
                    res.json("Added user!");
            });
        }else {
            res.json("Username Taken");
        };
    })
});

//Route to for grabbing leaders

router.get('/leaders', function(req,res){
    fs.readFile(path.join(__dirname, "../data/leaders.js"), function(err,data){
        if(err) throw err;

        res.json(JSON.parse(data));
    });
});


//Route to get the word object

router.get("/newWord", function(req,res){
    fs.readFile(path.join(__dirname, "../data/words.js"), function(err, data){
        if(err) throw err;

        var words = JSON.parse(data);

        var max = words.length - 1;

        var random = Math.floor(Math.random() * ((max - 0 + 1) + 0));

        res.json(words[random]);
    })
});

router.post("/updateInfo/:username", function(req,res){

    // First update the accounts page
    fs.readFile(path.join(__dirname, "../data/accounts.js"), function(err,data){
        if (err) throw err;

        var accounts = JSON.parse(data);

        var index = accounts.findIndex(x => x.username === req.params.username);
        
        // Now update the information

        accounts[index].wins = parseInt(req.body.winCount);
        accounts[index].loss = parseInt(req.body.lossCount);

        fs.writeFile(path.join(__dirname, "../data/accounts.js"), JSON.stringify(accounts, null, 2), function(err){
            if(err) throw err;
            fs.readFile(path.join(__dirname, "../data/leaders.js"), function(err,data){
                if(err) throw err;
    
                var leaders = JSON.parse(data);

                for(var j = 0; j < leaders.length; j++){
                    var index;
                    for(var i = 0; i < accounts.length; i++){
                        var ratio = (accounts[i].wins * 100) / (accounts[i].loss + accounts[i].wins)
                        if(ratio > leaders[j].winRatio){
                            leaders[j].holder = accounts[i].username;
                            leaders[j].winRatio = ratio;
                            index = i;
                        }
                    }

                    accounts.splice(index,1);
                }


                



                
                fs.writeFile(path.join(__dirname, "../data/leaders.js"), JSON.stringify(leaders, null, 2), function(err){
                    if(err) throw err;
    
                    res.end();
                });
            });
        });



    });
});

module.exports = router;