var connection = require('./connection.js');


var orm = {
    checkLogin : function(user, pass, callback){
        var queryString = "SELECT * FROM accounts WHERE username = ?";
        connection.query(queryString,[user], function(err,data){
            if(err) console.log(err);
            if(data[0] == undefined){
                callback(null,"User does not exist");
            }else if(data[0].password === pass){
                callback(null,"Correct");
            }else{
                callback(null,"Incorrect");
            };
        })
    },
    newAccount: function(user, pass, callback){
        var queryString = "INSERT INTO accounts SET ?"; 
        connection.query(queryString,
                {
                    username: user,
                    password: pass
                },
            function(err){
                if(err){
                    callback(null,err.code);
                }else {
                    var queryString = 'INSERT INTO user_stats SET ?';
                    connection.query(queryString,
                            {
                                username: user
                            },
                        function(err){
                            if(err) throw err;
                            callback(null,"Added user!");
                        });
                    
                };

                
            });
    },
    updateStats: function(user, wins, loss, callback){
        var queryString = "UPDATE user_stats SET wins = ? , loss = ? WHERE username = ?";
        connection.query(queryString,[wins,loss,user],
            function(err,data){
                if(err) throw err;
                callback(null,data);
            })
    },
    viewStats: function(user, callback){
        var queryString = "SELECT username, wins, loss, ((wins * 100) / (wins + loss)) AS ratio FROM user_stats";
        if(user !== "all"){
            queryString += " WHERE username = '" + user + "' ";
        };

        queryString += " ORDER BY wins DESC"
        connection.query(queryString, function(err,data){
            if(err) throw err;

            callback(null,data);
        });
    }
}

module.exports = orm;