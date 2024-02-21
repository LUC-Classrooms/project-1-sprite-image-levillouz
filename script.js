/**
 * Project 1 - Interactive Image
 * Name: Lev
 * Comments: 
 */
var x;
// Global Variables go here
function setup(){
  // this function will run once
  createCanvas(600, 800); // create a 600x400 pixel drawing canvas
 
    x = width;
}

function draw(){
  // this function runs again and again (60x per second)
  
  background(0, 25, 50); // night sky
  x--;
  if(x<0){

    x=width
  }

  // Moon
  push();
  translate(x, 400);
  fill (255, 200, 0);
  ellipse (0, 0, 200, 200);//moon
  strokeWeight(2);

  //eyes
  fill (255);
  ellipse(25, -20, 20, 20);
  ellipse(-25, -20, 20, 20);
  //pupils
  fill(0);
  ellipse (25, -20, 5, 5);
  ellipse(-25, -20, 5, 5);

  //mouth
  arc (0, 10, 100, 50, 0, PI, PI);
  pop();

//grass
  fill (0, 255, 0);
  rect (0, 650, 800, 200);

//house
  fill (255);
  rect (50, 570, 80, 80);
  fill (0, 158, 255);
  rect (58, 582, 20, 20);
  line (58, 592, 78, 592);
  line (68, 602, 68, 582)
  fill (0, 158, 255);
  rect (100, 582, 20, 20);
  line (100, 592, 120,592);
  line (110, 582, 110, 602);
  fill(90, 0, 0);
  rect (79, 615, 20, 35);
  fill (255,200, 0);
  ellipse (84, 630, 7, 7);
  fill (90, 0, 0);
  rect (61, 530, 20, 30);
  fill (255, 0, 0);
  triangle (90, 530, 130, 570, 50, 570);
  //chimney smoke

  fill (255);
  ellipse (65, 495, 10, 70);
  ellipse (76, 465, 10, 70);
  ellipse (73, 400, 10, 70);

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}