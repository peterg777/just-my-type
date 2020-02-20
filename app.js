let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let currentSentence = sentences[0];
$('#sentence').text(currentSentence);
$('#target-letter').text(currentSentence[0]);
$('#keyboard-upper-container').hide();

$('body').keydown(function (e) {
    if (e.which === 16){

        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    

    } 
});


$('body').keyup(function (e) {
$('.highlight').removeClass('highlight');
    if (e.which === 16){

        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    

    } 
 });


$('body').keypress(function (e) {
   $('#'+ e.which).addClass('highlight')
 });
