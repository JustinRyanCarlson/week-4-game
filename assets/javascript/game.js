var lukeHero = false;
var obiHero = false;
var sidiousHero = false;
var maulHero = false;
var lukeDefender = false;
var obiDefender = false;
var sidiousDefender = false;
var maulDefender = false;
var lukeStats = { hp: 100, dmg: 0, counter: 5 };
var obiStats = { hp: 120, dmg: 0, counter: 10 };
var sidiousStats = { hp: 150, dmg: 0, counter: 15 };
var maulStats = { hp: 180, dmg: 0, counter: 18 };
var enemiesDefeated = 0;

$('#reset-button').hide();


//
//CLICK EVENTS_________________________________________________________________________________________________
//



//when luke, obi, darth sidious, or darth maul is clicked under the "choose a hero" heading; 
//the hero triggers are checked so if a hero is click again after the starting pick, the code wont run again
//the variable CHOSENHEROHero is set to true, the char-boxes class is removed and the html 
//for the unchosen heros is set to nothing, the remaining unchosen heros are recreated in
//the corresponding enemies div
$('#Luke').click(function() {
    if (lukeHero === false && obiHero === false && sidiousHero === false && maulHero === false) {
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
    }
})


$('#Obi').click(function() {
    if (lukeHero === false && obiHero === false && sidiousHero === false && maulHero === false) {
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
    }
})


$('#Sidious').click(function() {
    if (lukeHero === false && obiHero === false && sidiousHero === false && maulHero === false) {
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
    }
})


$('#Maul').click(function() {
    if (lukeHero === false && obiHero === false && sidiousHero === false && maulHero === false) {
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
    }
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
        lukeStats.dmg += 21;
        obiStats.hp -= lukeStats.dmg;
        $('#obi-hp').html(obiStats.hp);
        lukeStats.hp -= obiStats.counter;
        $('#luke-hp').html(lukeStats.hp);
        $('#status').html('Luke Skywalker attacked Obi-Wan Kenobi for ' + lukeStats.dmg +
            ' damage and Obi-Wan Kenobi countered back for 10 damage.');
        if (obiStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            obiDefender = false;
            $('#status').html('You have defeated Obi-Wan Kenobi, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (lukeHero === true && sidiousDefender === true) {
        lukeStats.dmg += 21;
        sidiousStats.hp -= lukeStats.dmg;
        $('#sidious-hp').html(sidiousStats.hp);
        lukeStats.hp -= sidiousStats.counter;
        $('#luke-hp').html(lukeStats.hp);
        $('#status').html('Luke Skywalker attacked Darth Sidious for ' + lukeStats.dmg +
            ' damage and Darth Sidious countered back for 15 damage.');
        if (sidiousStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            sidiousDefender = false;
            $('#status').html('You have defeated Darth Sidious, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (lukeHero === true && maulDefender === true) {
        lukeStats.dmg += 21;
        maulStats.hp -= lukeStats.dmg;
        $('#maul-hp').html(maulStats.hp);
        lukeStats.hp -= maulStats.counter;
        $('#luke-hp').html(lukeStats.hp);
        $('#status').html('Luke Skywalker attacked Darth Maul for ' + lukeStats.dmg +
            ' damage and Darth Maul countered back for 18 damage.');
        if (maulStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            maulDefender = false;
            $('#status').html('You have defeated Darth Maul, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (obiHero === true && lukeDefender === true) {
        obiStats.dmg += 17;
        lukeStats.hp -= obiStats.dmg;
        $('#luke-hp').html(lukeStats.hp);
        obiStats.hp -= lukeStats.counter;
        $('#obi-hp').html(obiStats.hp);
        $('#status').html('Obi-Wan Kenobi attacked Luke Skywalker for ' + obiStats.dmg +
            ' damage and Luke Skywalker countered back for 5 damage.');
        if (lukeStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            lukeDefender = false;
            $('#status').html('You have defeated Luke Skywalker, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (obiHero === true && sidiousDefender === true) {
        obiStats.dmg += 17;
        sidiousStats.hp -= obiStats.dmg;
        $('#sidious-hp').html(sidiousStats.hp);
        obiStats.hp -= sidiousStats.counter;
        $('#obi-hp').html(obiStats.hp);
        $('#status').html('Obi-Wan Kenobi attacked Dath Sidious for ' + obiStats.dmg +
            ' damage and Darth Sidious countered back for 15 damage.');
        if (sidiousStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            sidiousDefender = false;
            $('#status').html('You have defeated Darth Sidious, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (obiHero === true && maulDefender === true) {
        obiStats.dmg += 17;
        maulStats.hp -= obiStats.dmg;
        $('#maul-hp').html(maulStats.hp);
        obiStats.hp -= maulStats.counter;
        $('#obi-hp').html(obiStats.hp);
        $('#status').html('Obi-Wan Kenobi attacked Dath Maul for ' + obiStats.dmg +
            ' damage and Darth Maul countered back for 18 damage.');
        if (maulStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            maulDefender = false;
            $('#status').html('You have defeated Darth Maul, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (sidiousHero === true && lukeDefender === true) {
        sidiousStats.dmg += 5;
        lukeStats.hp -= sidiousStats.dmg;
        $('#luke-hp').html(lukeStats.hp);
        sidiousStats.hp -= lukeStats.counter;
        $('#sidious-hp').html(sidiousStats.hp);
        $('#status').html('Darth Sidious attacked Luke Skywalker for ' + sidiousStats.dmg +
            ' damage and Luke Skywalker countered back for 5 damage.');
        if (lukeStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            lukeDefender = false;
            $('#status').html('You have defeated Luke Skywalker, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (sidiousHero === true && obiDefender === true) {
        sidiousStats.dmg += 5;
        obiStats.hp -= sidiousStats.dmg;
        $('#obi-hp').html(obiStats.hp);
        sidiousStats.hp -= obiStats.counter;
        $('#sidious-hp').html(sidiousStats.hp);
        $('#status').html('Darth Sidious attacked Obi-Wan Kenobi for ' + sidiousStats.dmg +
            ' damage and Obi-Wan Kenobi countered back for 10 damage.');
        if (obiStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            obiDefender = false;
            $('#status').html('You have defeated Obi-Wan Kenobi, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (sidiousHero === true && maulDefender === true) {
        sidiousStats.dmg += 5;
        maulStats.hp -= sidiousStats.dmg;
        $('#maul-hp').html(maulStats.hp);
        sidiousStats.hp -= maulStats.counter;
        $('#sidious-hp').html(sidiousStats.hp);
        $('#status').html('Darth Sidious attacked Dath Maul for ' + sidiousStats.dmg +
            ' damage and Darth Sidious countered back for 18 damage.');
        if (maulStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            maulDefender = false;
            $('#status').html('You have defeated Darth Maul, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (maulHero === true && lukeDefender === true) {
        maulStats.dmg += 3;
        lukeStats.hp -= maulStats.dmg;
        $('#luke-hp').html(lukeStats.hp);
        maulStats.hp -= lukeStats.counter;
        $('#maul-hp').html(maulStats.hp);
        $('#status').html('Darth Maul attacked Luke Skywalker for ' + maulStats.dmg +
            ' damage and Luke Skywalker countered back for 5 damage.');
        if (lukeStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            lukeDefender = false;
            $('#status').html('You have defeated Luke Skywalker, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (maulHero === true && obiDefender === true) {
        maulStats.dmg += 3;
        obiStats.hp -= maulStats.dmg;
        $('#obi-hp').html(obiStats.hp);
        maulStats.hp -= obiStats.counter;
        $('#maul-hp').html(maulStats.hp);
        $('#status').html('Darth Maul attacked Obi-Wan Kenobi for ' + maulStats.dmg +
            ' damage and Obi-Wan Kenobi countered back for 10 damage.');
        if (obiStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            obiDefender = false;
            $('#status').html('You have defeated Obi-Wan Kenobi, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    } else if (maulHero === true && sidiousDefender === true) {
        maulStats.dmg += 3;
        sidiousStats.hp -= maulStats.dmg;
        $('#sidious-hp').html(sidiousStats.hp);
        maulStats.hp -= sidiousStats.counter;
        $('#maul-hp').html(maulStats.hp);
        $('#status').html('Darth Maul attacked Darth Sidious for ' + maulStats.dmg +
            ' damage and Darth Sidious countered back for 15 damage.');
        if (sidiousStats.hp <= 0) {
            $('#current-defender').removeClass('defender-char-boxes').html('');
            sidiousDefender = false;
            $('#status').html('You have defeated Darth Sidious, select a new defender.');
            enemiesDefeated++;
        }
        loseChecker();
        winChecker();
    }
})


$('#reset-button').click(function() {
    reset();
})




//
//FUNCTIONS _____________________________________________________________________________________________
//





function winChecker() {
    if (enemiesDefeated === 3) {
        $('#status').html('You WIN!');
        $('#attack-button').prop('disabled', true);
        $('#reset-button').show();
    }
}

function loseChecker() {
    if (lukeHero === true) {
        if (lukeStats.hp <= 0) {
            $('#status').html('You lose!');
            $('#attack-button').off('click');
            $('#reset-button').show();
        }
    } else if (obiHero === true) {
        if (obiStats.hp <= 0) {
            $('#status').html('You lose!');
            $('#attack-button').off('click');
            $('#reset-button').show();
        }
    } else if (sidiousHero === true) {
        if (sidiousStats.hp <= 0) {
            $('#status').html('You lose!');
            $('#attack-button').off('click');
            $('#reset-button').show();
        }
    } else if (maulHero === true) {
        if (maulStats.hp <= 0) {
            $('#status').html('You lose!');
            $('#attack-button').off('click');
            $('#reset-button').show();
        }
    }
}

function reset() {
    lukeHero = false;
    obiHero = false;
    sidiousHero = false;
    maulHero = false;
    lukeDefender = false;
    obiDefender = false;
    sidiousDefender = false;
    maulDefender = false;
    lukeStats = { hp: 100, dmg: 0, counter: 5 };
    obiStats = { hp: 120, dmg: 0, counter: 10 };
    sidiousStats = { hp: 150, dmg: 0, counter: 15 };
    maulStats = { hp: 180, dmg: 0, counter: 18 };
    enemiesDefeated = 0;
    $('#current-defender').html('');
    $('#enemy1').html('');
    $('#enemy2').html('');
    $('#enemy3').html('');
    $('#Luke').html('<h5 class="text-center">Luke Skywalker</h5>' +
        '<img class="center" src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">' +
        '<h5 class="text-center" id="luke-hp">100</h5>').addClass('char-boxes');
    $('#Obi').html('<h5 class="text-center">Obi-Wan Kenobi</h5>' +
        '<img class="text-center" src="assets/images/obi-wan.jpg" alt="Obi-Wan Kenobi">' +
        '<h5 class="text-center" id="obi-hp">120</h5>').addClass('char-boxes');
    $('#Sidious').html('<h5 class="text-center">Darth Sidious</h5>' +
        '<img class="text-center" src="assets/images/darth-sidious.png" alt="Darth Sidious">' +
        '<h5 class="text-center" id="sidious-hp">150</h5>').addClass('char-boxes');
    $('#Maul').html('<h5 class="text-center">Darth Maul</h5>' +
        '<img class="text-center" src="assets/images/darth-maul.jpg" alt="Darth Maul">' +
        '<h5 class="text-center" id="maul-hp">180</h5>').addClass('char-boxes');
    $('#status').html('Thanks for playing again!');
    $('#attack-button').prop('disabled', false);
    $('#reset-button').hide();
}
