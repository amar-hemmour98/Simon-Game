//alert("guess who's progressing");
//$("h1").css("color","yellow");

var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userChosenPattern = [];

var playing = false ;
var level = 0 ; 

$(document).keypress(function() {
    if (!playing){
        level++ ; 
        playing = true ; 
        nextSequence();
    } 

});

$(".btn").click(function(){
    $("#"+this.id).fadeOut(100).fadeIn(100);
    userChosenPattern.push(this.id);
    //console.log(userChosenPattern);
    makeSound(this.id);
    //  console.log("***");
    //  console.log("userChosenPattern "+userChosenPattern);
    //  console.log("gamePattern "+gamePattern);
    //  console.log("***");
    checkAnswer(userChosenPattern.length-1);
    

});

function checkAnswer(currentLevel){
    if (userChosenPattern[currentLevel]==gamePattern[currentLevel]){
        console.log("Correct");
        if(userChosenPattern.length==gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1500);
    
        }
    }else{
        
        reInit();      
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

    }
    // console.log("the user's pattern is "+userChosenPattern);
    // console.log("the game pattern is "+ gamePattern);
}
function reInit(){
    level = 0 ; 
    playing = false ; 
    gamePattern = [] ; 
    userChosenPattern = [];
    $("h1").text("Game over XD");
    $("h1").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    setTimeout(function () {
        $("h1").text("Press A Key to Start");
    }, 500);
    
}
function nextSequence(){
    userChosenPattern = [] ; 
    $("h1").text("Level "+level);
    level++ ;
    var randomNumber = Math.floor((Math.random() * 4) + 0);
    //console.log(randomNumber);
    
    var randomChoosenColor = buttonColours[randomNumber];
    //console.log(randomChoosenColor);
    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100);
    makeSound(randomChoosenColor);

    gamePattern.push(randomChoosenColor);
    //console.log(gamePattern);

}

function makeSound(color){
    switch (color) {
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;

        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;

        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;

        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;

        default:
            console.log("default case ");
    }
}