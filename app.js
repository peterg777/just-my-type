let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let currentSentence = sentences[0];
let letterIndex = 0
let sentenceIndex = 0
let mistakes = 0
let startTime = Date.now()
console.log(startTime)
$('#sentence').text(currentSentence);
$('#target-letter').text(currentSentence[letterIndex]);
$('#keyboard-upper-container').hide();

$('body').keydown(function (e) {
    if (e.which === 16) {

        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();


    }
});


$('body').keyup(function (e) {
    $('.highlight').removeClass('highlight');
    if (e.which === 16) {

        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();


    }
});


$('body').keypress(function (e) {
    // highlights corresponsing key user has pressed
    $('#' + e.which).addClass('highlight');
    $('#yellow-block').css('left', '+=17.5px');
    if (e.which === currentSentence.charCodeAt(letterIndex)) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');

    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        mistakes++;

    }
    letterIndex++;
    $('#target-letter').text(currentSentence[letterIndex]);

    if (letterIndex === currentSentence.length) {
        $('#yellow-block').css('left', '15px');
        $('#feedback').empty();
        sentenceIndex++;
        if (sentenceIndex === sentences.length) {
            console.log('end of days');
            $('body').off();
            $('#yellow-block').hide();
            $('#feedback').empty();
            $('#sentence').text('Game Over!');
            return;

        }
        currentSentence = sentences[sentenceIndex]
        $('#sentence').text(currentSentence);
        letterIndex = 0
        $('#target-letter').text(currentSentence[letterIndex]);





    }

});


