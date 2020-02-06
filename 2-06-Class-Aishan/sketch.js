

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  //checks to see if the mouseX pos is
  //greater than 500 and if the mouseY
  //is less than height/2
  if(mouseX > width/2 && mouseY < height/2 || keyIsPressed){
    background(255, 0, 0);
    ellipse(400, 300, 100, 100);
  }
}

function mouseDragged(){
  background(0);
  ellipse(mouseX, mouseY, 50, 50);
}
