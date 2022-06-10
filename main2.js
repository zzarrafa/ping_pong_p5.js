var ballX;
var ballY;
var ballwidth = 15;
var ballheight = 15;
var ballSpedd = 5;
var ballDircX = -1;
var ballDircY = -1;


//score

var plscore = 0;
var p2score = 0;
//player
var plx = 10;
var ply = 250;
var p2x = 890;
var p2y = 250;
var pw = 20;
var ph = 100;
var pSpeed = 5;

function setup(){
    createCanvas(900, 500);

    rectMode(CENTER);
    ballX = width/2;
    ballY = height/2;

    textAlign(CENTER);
}

function draw() {
    keyTyped();
    keyPressed();


    background(0);
    noFill();
    stroke(255);
    rect(width/2, height/2, width, height);
    line(450,0,450,height);

    fill(255);
    noStroke();

//ball
    rect(ballX, ballY,ballwidth, ballheight);
// players
rect(plx, ply,pw, ph);
rect(p2x,p2y,pw,ph);

//physics
ballX = ballX + (ballDircX * ballSpedd);
ballY = ballY + (ballDircY * ballSpedd);

//collisions
if (ballY >= height){
    ballDircY = ballDircY * (-1);
}
if(ballY <= 0)
{
    ballDircY = ballDircY*-1;
}

// rebounc
if (ballX >= plx - 10 && ballX <= plx + 10 && ballY >= ply - 50 && ballY <= ply+50){
    ballDircX = ballDircX*-1;
}
if (ballX >= p2x - 10 && ballX <= p2x + 10 && ballY >= p2y - 50 && ballY <= p2y+50){
    ballDircX = ballDircX*-1;
}
//score
textSize(15);
text(plscore, 400,25);
text(p2score, 500,25);

if(ballX <= 0){
    p2score =p2score +1;
    ballX = width/2;
    ballY = height/2;
}
if(ballX >= width){
    plscore =plscore +1;
    ballX = width/2;
    ballY = height/2;
}
}
function keyTyped(){
    if(key == 'w' && keyIsPressed){
        ply= ply - pSpeed;
    }
    if (key == 's' && keyIsPressed){
        ply = ply+ pSpeed;
    }
}
function keyPressed(){
    if (keyCode == UP_ARROW && keyIsPressed){
        p2y = p2y-pSpeed;
    }
    if (keyCode == DOWN_ARROW && keyIsPressed){
        p2y = p2y+pSpeed;
    }
}