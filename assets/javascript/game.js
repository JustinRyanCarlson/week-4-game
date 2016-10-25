var lukeHero = false;
var obiHero = false;
var sidiousHero = false;
var maulHero = false;


$('#Luke').click(function() {
    lukeHero = true;
    $('#Obi').removeClass('char-boxes').html('');
    $('#Sidious').removeClass('char-boxes').html('');
    $('#Maul').removeClass('char-boxes').html('');
    $('#your-hero').html('Your Hero');
    $('#enemy1').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
        '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
        '<h5 class="text-center">120</h5>').addClass('enemy-char-boxes');
    $('#enemy2').html('<h5 class="text-center">Darth Sidious</h5>' +
        '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
        '<h5 class="text-center">150</h5>').addClass('enemy-char-boxes');
    $('#enemy3').html('<h5 class="text-center">Darth Maul</h5>' +
        '<img class="text-center" src="assets/images/darth-maul.jpg" alt="Darth Maul">' +
        '<h5 class="text-center">180</h5>').addClass('enemy-char-boxes');
})

$('#Obi').click(function() {
    obiHero = true;
})

$('#Sidious').click(function() {
    sidiousHero = true;
})

$('#Maul').click(function() {
    maulHero = true;
})
