import Sketch from "react-p5";

import P5 from "p5";


var ballwidth = 15;
var ballheight = 15;
var ballSpedd = 2;
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
var ballX = 900/2;
var ballY = 500/2;
var width = 900;
var height = 500; 
export default function App() {
  

  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(900, 500).parent(canvasParentRef);
    p5.rectMode(p5.CENTER);
    p5.textAlign(p5.CENTER);
  };

  const draw = (p5: P5) => {

    keyTyped(p5);
    keypressed(p5);
    p5.background(0);
    p5.noFill();
    p5.stroke(255);
    p5.rect(width/2, height/2, 900, 500);
    p5.line(450,0,450,height);
    p5.fill(255);
    p5.noStroke();

    //ball
    p5.rect(ballX, ballY,ballwidth, ballheight);
// players
p5.rect(plx, ply,pw, ph);
p5.rect(p2x,p2y,pw,ph);

//physics
ballX = ballX + (ballDircX * ballSpedd);
ballY = ballY + (ballDircY * ballSpedd);

//collisions
if (ballY >= 500){
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
p5.textSize(15);
p5.text(plscore, 400,25);
p5.text(p2score, 500,25);

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
   
  };
  const keyTyped = (p5: P5) => {
    if(p5.key === 'w' && p5.keyIsPressed){
        ply= ply - pSpeed;
        if (ply < 25)
          ply = 25;
    }
    if (p5.key === 's' && p5.keyIsPressed){
        ply = ply+ pSpeed;
        if (ply > 475)
        ply = 475;
    }
}
const keypressed = (p5: P5) =>{
    if (p5.keyCode === p5.UP_ARROW && p5.keyIsPressed){
        p2y = p2y-pSpeed;
        if (p2y < 25)
          p2y = 25;
    }
    if (p5.keyCode === p5.DOWN_ARROW && p5.keyIsPressed){
        p2y = p2y+pSpeed;
        if (p2y > 475)
        p2y = 475;
    }
}

  return <Sketch setup={setup} draw={draw} />;
}
