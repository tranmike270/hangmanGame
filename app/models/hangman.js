var orm = require('../config/orm.js');


var hangman = {
    check : function(user,pass,callback){
        orm.checkLogin(user,pass,function(err,results){
            if(err) console.log(err);

            callback(null,results);
        });
    },
    new : function(user,pass,callback){
        orm.newAccount(user,pass,function(err,results){
           if(err) console.log(err);
           
           callback(null,results);
        });
    },
    update : function(user, wins, loss, callback){
        orm.updateStats(user,wins,loss, function(err,results){
            if(err) console.log(err);

            callback(null,results);
        });
    },
    stats : function(user, callback){
        orm.viewStats(user,function(err,results){
            if(err) console.log(err);

            callback(null,results);
        });
    }
};

module.exports = hangman;