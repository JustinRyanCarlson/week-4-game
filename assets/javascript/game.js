var lukeHero = false;
var obiHero = false;
var sidiousHero = false;
var maulHero = false;
var lukeDefender = false;
var obiDefender = false;
var sidiousDefender = false;
var maulDefender = false;
var lukeStats = { hp: 100, dmg: '', counter: 5 };
var obiStats = { hp: 120, dmg: 8, counter: '' };
var sidiousStats = { hp: 150, dmg: '', counter: 20 };
var maulStats = { hp: 180, dmg: '', counter: 25 }

//make sure to comment and say what the code in the blocks does


$('#Luke').click(function() {
    lukeHero = true;
    $('#Obi').removeClass('char-boxes').html('');
    $('#Sidious').removeClass('char-boxes').html('');
    $('#Maul').removeClass('char-boxes').html('');
    $('#your-hero').html('Your Hero');
    $('#enemy1').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
        '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
        '<h5 class="text-center" id="obi-hp">120</h5>').addClass('enemy-char-boxes');
    $('#enemy2').html('<h5 class="text-center">Darth Sidious</h5>' +
        '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
        '<h5 class="text-center" id="sidious-hp">150</h5>').addClass('enemy-char-boxes');
    $('#enemy3').html('<h5 class="text-center">Darth Maul</h5>' +
        '<img class="text-center" src="assets/images/darth-maul.jpg" alt="Darth Maul">' +
        '<h5 class="text-center" id="maul-hp">180</h5>').addClass('enemy-char-boxes');
})



$('#Obi').click(function() {
    obiHero = true;
    $('#Luke').removeClass('char-boxes').html('');
    $('#Sidious').removeClass('char-boxes').html('');
    $('#Maul').removeClass('char-boxes').html('');
    $('#your-hero').html('Your Hero');
    $('#enemy1').html('<h5 class="text-center">Luke Skywalker</h5>' +
        '<img class="text-center" src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">' +
        '<h5 class="text-center" id="luke-hp">100</h5>').addClass('enemy-char-boxes');
    $('#enemy2').html('<h5 class="text-center">Darth Sidious</h5>' +
        '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
        '<h5 class="text-center" id="sidious-hp">150</h5>').addClass('enemy-char-boxes');
    $('#enemy3').html('<h5 class="text-center">Darth Maul</h5>' +
        '<img class="text-center" src="assets/images/darth-maul.jpg" alt="Darth Maul">' +
        '<h5 class="text-center" id="maul-hp">180</h5>').addClass('enemy-char-boxes');
})



$('#Sidious').click(function() {
    sidiousHero = true;
    $('#Obi').removeClass('char-boxes').html('');
    $('#Luke').removeClass('char-boxes').html('');
    $('#Maul').removeClass('char-boxes').html('');
    $('#your-hero').html('Your Hero');
    $('#enemy1').html('<h5 class="text-center">Luke Skywalker</h5>' +
        '<img class="text-center" src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">' +
        '<h5 class="text-center" id="luke-hp">100</h5>').addClass('enemy-char-boxes');
    $('#enemy2').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
        '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
        '<h5 class="text-center" id="obi-hp">120</h5>').addClass('enemy-char-boxes');
    $('#enemy3').html('<h5 class="text-center">Darth Maul</h5>' +
        '<img class="text-center" src="assets/images/darth-maul.jpg" alt="Darth Maul">' +
        '<h5 class="text-center" id="maul-hp">180</h5>').addClass('enemy-char-boxes');
})



$('#Maul').click(function() {
    maulHero = true;
    $('#Obi').removeClass('char-boxes').html('');
    $('#Sidious').removeClass('char-boxes').html('');
    $('#Luke').removeClass('char-boxes').html('');
    $('#your-hero').html('Your Hero');
    $('#enemy1').html('<h5 class="text-center">Luke Skywalker</h5>' +
        '<img class="text-center" src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">' +
        '<h5 class="text-center" id="luke-hp">100</h5>').addClass('enemy-char-boxes');
    $('#enemy2').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
        '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
        '<h5 class="text-center" id="obi-hp">120</h5>').addClass('enemy-char-boxes');
    $('#enemy3').html('<h5 class="text-center">Darth Sidious</h5>' +
        '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
        '<h5 class="text-center" id="sidious-hp">150</h5>').addClass('enemy-char-boxes');
})






$('#enemy1').click(function() {
    if (lukeDefender === false && obiDefender === false &&
        sidiousDefender === false && maulDefender === false) {

        if (lukeHero) {
            $('#enemy1').removeClass('enemy-char-boxes').html('');
            obiDefender = true;
            $('#current-defender').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
                '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
                '<h5 class="text-center" id="obi-hp">120</h5>').addClass('defender-char-boxes');
        } else {
            $('#enemy1').removeClass('enemy-char-boxes').html('');
            lukeDefender = true;
            $('#current-defender').html('<h5 class="text-center">Luke Skywalker</h5>' +
                '<img class="text-center" src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">' +
                '<h5 class="text-center" id="luke-hp">100</h5>').addClass('defender-char-boxes');
        }
    }
})

$('#enemy2').click(function() {
    if (lukeDefender === false && obiDefender === false &&
        sidiousDefender === false && maulDefender === false) {

        if (lukeHero || obiHero) {
            $('#enemy2').removeClass('enemy-char-boxes').html('');
            sidiousDefender = true;
            $('#current-defender').html('<h5 class="text-center">Darth Sidious</h5>' +
                '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
                '<h5 class="text-center" id="sidious-hp">150</h5>').addClass('defender-char-boxes');
        } else if (sidiousHero || maulHero) {
            $('#enemy2').removeClass('enemy-char-boxes').html('');
            obiDefender = true;
            $('#current-defender').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
                '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
                '<h5 class="text-center" id="obi-hp">120</h5>').addClass('defender-char-boxes');
        }
    }
})

$('#enemy3').click(function() {
    if (lukeDefender === false && obiDefender === false &&
        sidiousDefender === false && maulDefender === false) {

        if (lukeHero || obiHero || sidiousHero) {
            $('#enemy3').removeClass('enemy-char-boxes').html('');
            maulDefender = true;
            $('#current-defender').html('<h5 class="text-center">Darth Maul</h5>' +
                '<img class="text-center" src="assets/images/darth-maul.jpg" alt="Darth Maul">' +
                '<h5 class="text-center" id="maul-hp">180</h5>').addClass('defender-char-boxes');
        } else if (maulHero) {
            $('#enemy3').removeClass('enemy-char-boxes').html('');
            sidiousDefender = true;
            $('#current-defender').html('<h5 class="text-center">Darth Sidious</h5>' +
                '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
                '<h5 class="text-center" id="sidious-hp">150</h5>').addClass('defender-char-boxes');
        }
    }
})






$('#attack-button').click(function() {
    $('#status').addClass('status-padding');
    if (lukeHero === false && obiHero === false &&
        sidiousHero === false && maulHero === false) {
        $('#status').html('You must choose a hero first!');
    } else if (lukeDefender === false && obiDefender === false &&
        sidiousDefender === false && maulDefender === false) {
        $('#status').html('You must select a defender to attack!')
    } else if (lukeHero === true && obiDefender === true) {

    } else if (lukeHero === true && sidiousDefender === true) {

    } else if (lukeHero === true && maulDefender === true) {

    } else if (obiHero === true && lukeDefender === true) {

    } else if (obiHero === true && sidiousDefender === true) {

    } else if (obiHero === true && maulDefender === true) {

    } else if (sidiousHero === true && lukeDefender === true) {

    } else if (sidiousHero === true && obiDefender === true) {

    } else if (sidiousHero === true && maulDefender === true) {

    } else if (maulHero === true && lukeDefender === true) {

    } else if (maulHero === true && obiDefender === true) {

    } else if (maulHero === true && sidiousDefender === true) {

    }
})


//need to add win loss checks into each #attack-button if else event
function winChecker() {

}

function loseChecker() {

}
