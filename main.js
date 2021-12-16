var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var beeImage = "Bee.png";
var backgroundImage = "Background.png";

var beeWidth = 75;
var beeHeight = 90;

var beeX = 10;
var beeY = 500;

var keyPressed, backgroundImageTag, beeImageTag:

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    beeImageTag = new Image();
    beeImageTag.onload = uploadCar1;
    beeImageTag.src = beeImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadBee() {
    ctx.drawImage(beeImageTag, beeX, beeY, beeWidth, beeHeight);
}


window.addEventListener("keydown", keyDownFn);

function keyDownFn(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        beeUp();
        console.log("1 Up");
    }
    if (keyPressed == '40') {
        beeDown();
        console.log("1 Down");
    }
    if (keyPressed == '37') {
        beeLeft();
        console.log("1 Left");
    }
    if (keyPressed == '39') {
        beeRight();
        console.log("1 Right");
    }

    

function beeUp() {
    if (beeY >= 0) {
        car1Y = car1Y - 10;
        console.log("When up arrow is pressed,  x = " + beeX+ " | y = " + beeY);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function beeDown() {
    if (beeY <= 600) {
        beeY = beeY + 10;
        console.log("When down arrow is pressed,  x = " + beeX+ " | y = " + beeY);
        uploadBackground();
        uploadBee();
    }
}
function beeLeft() {
    if (beeX >= 0) {
        beeX = beeX - 10;
        console.log("When left arrow is pressed,  x = " + beeX+ " | y = " + beeY);
        uploadBackground();
        uploadBee();
    }
}
function beeRight() {
    if (beeX <= 600) {
        beeX = car1X + 10;
        console.log("When right arrow is pressed,  x = " + beeX+ " | y = " + beeY);
        uploadBackground();
        uploadBee();
    }
}


