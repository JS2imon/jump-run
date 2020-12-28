function hideMenus() {
    hideStartMenu()
    hideGameOver()
}

// Main menu

var button;




if (button = document.getElementById("btn-lvl1")) {
    button.addEventListener('click', function (event) {
        lvl = 1;
        current_level = levels[1];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[1];
        load_level()
    }, false);
}

if (button = document.getElementById("btn-lvl2")) {
    button.addEventListener('click', function (event) {
        lvl = 2;
        current_level = levels[2];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[2];
        load_level()
    }, false);
}

if (button = document.getElementById("btn-lvl3")) {
    button.addEventListener('click', function (event) {
        lvl = 3;
        current_level = levels[3];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[3];
        load_level()
    }, false);
}
if (button = document.getElementById("btn-lvl4")) {
    button.addEventListener('click', function (event) {
        lvl = 4;
        current_level = levels[4];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[4];
        load_level()
    }, false);
}
if (button = document.getElementById("btn-lvl5")) {
    button.addEventListener('click', function (event) {
        lvl = 5;
        current_level = levels[5];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[5];
        load_level()
    }, false);
}

var start_menu = document.getElementById("game-menu");

function showStartMenu() {
    sound_success_stop()
    hideControls()
    start_menu.style.visibility = "visible";
}

function hideStartMenu() {
    start_menu.style.visibility = "hidden";
}


// Gameover menu

document.getElementById("button-restart").addEventListener('click', function (event) {
    restartGame();
}, false);

document.getElementById("button-menu").addEventListener('click', function (event) {
    initGame()
    showStartMenu()
}, false);


var gameover_menu = document.getElementById("game-over");

function showGameOver() {
    hideControls()
    sound_theme_stop()
    gameover_menu.style.visibility = "visible";

    if (button = document.getElementById("btn-lvlNext")) {
        button.addEventListener('click', function (event) {
            current_level = levels[lvl];
            nextLevel();
        }, false);
    }

    //nextLevel()
    /*
    document.getElementById("btn-lvlNext").addEventListener('click', function (event) {
      alert("call next level button");
      current_level = levels[lvl];
      nextLevel();
    }, false);
    */
}

function hideGameOver() {
    gameover_menu.style.visibility = "hidden";
}
