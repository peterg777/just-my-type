let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let currentSentence = sentences[0];
let letterIndex = 0
let sentenceIndex = 0
let mistakes = 0
let startTime = Date.now()

$('#sentence').text(currentSentence);
$('#target-letter').text(currentSentence[letterIndex]);
$('#keyboard-upper-container').hide();

// Keydown 
$('body').keydown(function (e) {
    if (e.which === 16) {

        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();


    }
});

// Keyup
$('body').keyup(function (e) {
    $('.highlight').removeClass('highlight');
    if (e.which === 16) {

        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();


    }
});

// Keypress
$('body').keypress(function (e) {
    // highlights corresponsing key user has pressed
    $('#' + e.which).addClass('highlight');
    // moves yellow block on keypress
    $('#yellow-block').css('left', '+=17.5px');
    // track letter position checks and x's
    if (e.which === currentSentence.charCodeAt(letterIndex)) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');

    } else {
    // Mistake  track  
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        mistakes++;

    }
    letterIndex++;
    //play next sentence
    $('#target-letter').text(currentSentence[letterIndex]);
    
    if (letterIndex === currentSentence.length) {
    //reset
        $('#yellow-block').css('left', '15px');
        $('#feedback').empty();
      
        sentenceIndex++;
        // end of game
        if (sentenceIndex === sentences.length) {
            console.log('end of days');
            $('body').off();
            $('#yellow-block').hide();
            $('#feedback').empty();
         // Calculate length of game   
            let endTime = Date.now();
            let minutes = (endTime - startTime) / 1000 / 60;
            let wpm = 54 / minutes - 2 * mistakes;
            // Game Over!
            $('#sentence').text('Game Over your WPM is ' + wpm);
            // Play Again button
            $('#target-letter').empty().append('<button>Play Again?</button>').click(function(){
                window.location.reload();
            })
            //stop playing game
            return;

        }
        // reloads last sentence
        currentSentence = sentences[sentenceIndex]
        $('#sentence').text(currentSentence);
        letterIndex = 0
        $('#target-letter').text(currentSentence[letterIndex]);





    }

});


