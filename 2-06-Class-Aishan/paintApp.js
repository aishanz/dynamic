
let furby;

let furbyBrushBool = false;
let ellipseBrushBool = false;

// pre load loads all media objects
//before running the sketch
function preload(){
  //furby variable contains the furby image now
  furby = loadImage("images/furby.png");

}


function setup(){
createCanvas(windowWidth, windowHeight);
background(255);
imageMode(CENTER);

}

function draw(){

}

function mouseDragged(){
  //if the furbyBrushBool is true
  //call our furbyBrush function
  if(furbyBrushBool == true){
    furbyBrush();
  }

  //if the ellipseBrushBool is true
  //call our ellipseBrush function
  if(ellipseBrushBool == true){
    ellipseBrush();
  }
}

function keyTyped(){
 if(key === 'f'){
   furbyBrushBool = true;
   ellipseBrushBool = false;
 }

 if(key === 'e'){
   ellipseBrushBool = true;
   furbyBrushBool = false;
 }
}

function furbyBrush(){
  image(furby, mouseX, mouseY, 50, 50);
}

function ellipseBrush(){
  fill(255, 0,0, 180);
  noStroke();
  for(let i = 0; i < 50; i++){
    ellipse(random(mouseX -20, mouseX +20), random(mouseY - 20, mouseY +20), 5, 5);
  }

}
