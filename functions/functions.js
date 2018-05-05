// Nav buttons/On Click events
$(function() {

    $(".promptInstructions").click(function(){
        $(".instructionsWrapper").show();
        $(".titleWrapper").hide();
    });

    $(".close").click(function () {
        $(".titleWrapper").show();
        $(".instructionsWrapper").hide();
    });

    $(".start").click(function () {
        $(".gameUi").show();
        $(".titleWrapper").hide();
        $(".instructionsWrapper").hide();
        $(app.init());
        score = 0;
        finalScore = 0;
    });

    $(".done").click(function () {
        $(".gameUi").hide();
        $(".titleWrapper").show();
        $(".instructionsWrapper").hide();
        $('.results').html(`Your Final Score is ${finalScore}`);
        if (timeMultiplier < 20) {
            finalScore = score * 1;
            $('.multiply').html(`Your multiplier is x1`);
            console.log('x1');
            $('.results').html(`Your Final Score is ${finalScore}`);
        } else if (20 <= timeMultiplier) {
            finalScore = score * 2;
            $('.multiply').html(`Your multiplier is x2`);
            console.log('x2');
            $('.results').html(`Your Final Score is ${finalScore}`);
        };

       $(".finalScreen").show();
       $(".titleWrapper").hide();
       $(".instructionsWrapper").hide();
   });

   $('.playAgain').on('click', function(){
        $('.titleWrapper').show();
        $('.finalScreen').hide();
        finalScore = 0;
        score = 0;
        timeMultiplier = 0;
   });

   $(".happyDoug").on('click', function() {
        score = score + 1;
        console.log(`+1`);
        $('.activeDoug').removeClass('pop');
   });
   $(".angryDoug").on('click', function() {
       score = score - 2;
       console.log(`-2`);
       $('.activeDoug').removeClass('pop');
   });
});

//------------------------------Functions----------------------------- 

// Global Variables
let score = 0;
let finalScore = 0;
let timeMultiplier = 0;
app = {};

app.init = function() {

    // Every second it runs a doug randomizer, on start timer starts counting to 30s
    let timer = setInterval(app.where, 1000);
    // Counts down to 30 seconds to run gameover
    let timer2 = setTimeout(app.gameOver, 30000);

    // when done button is clicked it clears the timers
    $(".done").click(function () {
    clearInterval(timer);
    clearTimeout(timer2);
    });

    // Kills spawns at 35 seconds 
    setTimeout(() => { clearInterval(timer); app.spawn; }, 34000);

    // Turns the score to 0 if the time is past 30 seconds.
    setTimeout(app.loser, 30000);
}

// Good or bad RNG
app.goodOrBad = function() {
    let gob = Math.floor(Math.random()*10) + 1;
    return gob;
}

// Where Dougie Spawns 
app.where = function() {
    let location = Math.floor(Math.random()*7) + 1;
   
    if (location === 1) {
        $('.dougie1').addClass('pop');
        console.log(`hi1`)
    } else if (location === 2) {
        $('.dougie2').addClass('pop');
        console.log(`hi2`)
    } else if (location === 3) {
        $('.dougie3').addClass('pop');
        console.log(`hi3`)
    } else if (location === 4) {
        $('.dougie4').addClass('pop');
        console.log(`hi4`)
    } else if (location === 5 ) {
        $('.dougie5').addClass('pop');
        console.log(`hi5`)
    } else if (location === 6 ) {
        $('.dougie6').addClass('pop');
        console.log(`hi6`)
    } else if (location === 7 ) {
        $('.dougie7').addClass('pop');
        console.log(`hi7`)
    }

    // makes doug goes away after apearing 
    setTimeout(app.hide, 800);

    // adds on to the 30 seconds count down timer
    $('#scoreTracker').html(`<p>Your Score is ${score}</p>`);
    timeMultiplier = timeMultiplier + 1;
    console.log(timeMultiplier);
}

// hides Dougie
app.hide = function() {
    $('.activeDoug').removeClass('pop');
}

// Makes the score = 0
app.loser = function() {
    if (score > 0) {
        score = score * 0;
    } 
}

// Automatically runs the result screen when the 30 seconds are up
app.gameOver = function() {
    $(".gameUi").hide();
    $(".titleWrapper").show();
    $(".instructionsWrapper").hide();
    $(".finalScreen").show();
    $(".titleWrapper").hide();
    $(".instructionsWrapper").hide();
    $('.results').html(`<p> Game Over, you missed the 30 second mark =( </p>`);
    score = 0;
    finalScore = 0;
    timeMultiplier = 0;
    $('.multiply').html(`LoserFace`);
}

    
 




