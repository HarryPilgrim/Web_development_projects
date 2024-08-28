var gamePattern = []
var userClickedPattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var level = 0
var gameStarted = false
 

function nextSequence() {
    const randomNumber = Math.floor(Math.random()*4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    const chosenButton = $(`#${randomChosenColour}`);
    chosenButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text(`Level ${level}`);
}


function playSound(name) {
    const buttonSound = new Audio(`sounds/${name}.mp3`);
    buttonSound.play();
}


$(".btn").click(function() {
    const userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);   //check if has answered fully
})


function animatePress(currentColour) {
    const chosenButton = $(`#${currentColour}`);
    chosenButton.addClass("pressed");

    setTimeout(function() {
        chosenButton.removeClass("pressed");
    }, 200);

}


//detect key press and start game
$(document).on("keypress", function(e) {

    if (!gameStarted) {

        $("#level-title").text(`Level ${level}`);
        nextSequence();
        gameStarted = true;
    }
})


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (gamePattern.length === userClickedPattern.length) {


            //console.log(gamePattern)
            //console.log(userClickedPattern)


            //userCompArraysEqual = false


                //console.log("success");

                setTimeout(function() {
                    nextSequence();
                }, 1000);
                userClickedPattern = [];
            }

            } else {
                //console.log("fail")

                    const wrongSound = new Audio("sounds/wrong.mp3");
                    wrongSound.play();

                    $("body").addClass("game-over")
                    setTimeout(function() {
                        $("body").removeClass("game-over");
                    }, 200);
                    $("#level-title").text("GAME OVER, press any key to restart");
                    startOver();

            }
        }

    



function startOver() {
    gameStarted = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}