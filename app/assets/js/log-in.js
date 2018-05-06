$(document).ready(function(){
    //Opens up log-in prompt on page load
    $("#log-inModal").modal('toggle');

    // Toggles sign-up modal
    $("#sign-up-prompt").on('click', function(event){
        $("#log-inModal").modal('toggle');
        $("#sign-upModal").modal('toggle');
    });

    // Toggles log-in modal
    $("#log-in-prompt").on('click', function(event){
        $("#sign-upModal").modal('toggle');
        $("#log-inModal").modal('toggle');
    })

    //Function Handlers for form submissions
    $(".close").on("click", function(event){
    
        prepareGame("N/A", 0 ,0);
    });
    //Log-in
    $("#log-in").on('submit', function(event){
        event.preventDefault();
        
        var username = $("#log-in [name=username]").val().trim();
        var account = {
            password: $("#log-in [name=password]").val().trim()
        };

        $.ajax('/login/' + username, { 
            type: 'POST',
            data: account,
            success: function(res){
                
                
                switch(res){
                    case "Incorrect":
                        $("#log-in-error").css("display", "block");
                        $("#log-in-error").html("<h6 class='invalid'> Password does not match the username. </h6>");
                    break;
                    case "User does not exist":
                        $("#log-in-error").css("display", "block");
                        $("#log-in-error").html("<h6 class='invalid'> Username does not exist. </h6>");
                    break;
                    default:
                        $("#log-inModal").modal('toggle');
                        prepareGame(res.username, res.wins, res.loss);
                    break;
                }
            }
        })
    });


    $("#sign-up").on('submit', function(event){
        event.preventDefault();
        
        var account = {
            username: $("#sign-up [name=username]").val().trim(),
            password: $("#sign-up [name=password]").val().trim()
        };

        $.ajax('/signup',{
            type: "POST",
            data: account
        }).then(function(response){
            if(response == "Added user!"){
                location.reload();
            }else {
                $("#taken").css("display", "block");
                // Resets all validations
                $(uLength).removeClass('valid');
                $(uLength).addClass('invalid');
                $(length).removeClass('valid');
                $(length).addClass('invalid');
                $(letter).removeClass('valid');
                $(letter).addClass('invalid');
                $(capital).removeClass('valid');
                $(capital).addClass('invalid');
                $(number).removeClass('valid');
                $(number).addClass('invalid');
                $('#sign-up').trigger("reset");
            }
        });
    });

    //Sign-up

    // Handlers for validation
    var myUserNameInput = $("#username");
    var myPasswordInput = $("#password");
    var uLength = $("#userLength");
    var letter = $("#letter");
    var capital = $("#capital");
    var number = $("#number");
    var length = $("#length");

    // When user is focused on the inputs
    $('.sign-up-input').focus(function(){
        $("#message").css("display","block");
    });

    //For username
    $(myUserNameInput).keyup(function(){
        if($(myUserNameInput).val().length >= 6 && $(myUserNameInput).val().length <= 12){
            $(uLength).removeClass('invalid');
            $(uLength).addClass('valid');
        }else {
            $(uLength).removeClass('valid');
            $(uLength).addClass('invalid');
        };
    });

    // For password 
    $(myPasswordInput).keyup(function(){
        //For length
        if($(myPasswordInput).val().length >= 6){
            $(length).removeClass('invalid');
            $(length).addClass('valid');
        }else {
            $(length).removeClass('valid');
            $(length).addClass('invalid');
        };
   
        // For lowercase letter
        var lowerCaseLetters = /[a-z]/g;
        if($(myPasswordInput).val().match(lowerCaseLetters)){
            $(letter).removeClass('invalid');
            $(letter).addClass('valid');
        }else {
            $(letter).removeClass('valid');
            $(letter).addClass('invalid');
        };

        // For uppercase
        var upperCaseLetters = /[A-Z]/g;
        if($(myPasswordInput).val().match(upperCaseLetters)){
            $(capital).removeClass('invalid');
            $(capital).addClass('valid');
        }else {
            $(capital).removeClass('valid');
            $(capital).addClass('invalid');
        };

        // For numbers

        var numbers = /[0-9]/g;
        if($(myPasswordInput).val().match(numbers)){
            $(number).removeClass('invalid');
            $(number).addClass('valid');
        }else {
            $(number).removeClass('valid');
            $(number).addClass('invalid');
        };

    });
});