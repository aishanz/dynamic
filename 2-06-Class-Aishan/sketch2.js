let s1, s2, s3;
let gravity = 9.0;
let mass = 2.0;
let vincent;

function preload(){
  vincent = loadImage('images/v.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(265,185);
  // Inputs: x, y, mass, gravity
  s1 = new Spring2D(0.0, width / 3, mass, gravity);
  s2 = new Spring2D(0.0, width / 10, mass, gravity);
  s3 = new Spring2D(0.0, width / 5, mass,gravity);

}

function draw() {
  background(255,255,255);
  image(vincent, 0, 0, width, height);
  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);
  s3.update(mouseX, mouseY);
  s3.display(mouseX,mouseY);
  s2.update(s3.x, s2.y);
  s2.display(s1.x, s3.y);
}


function Spring2D(xpos, ypos, m, g) {
  this.x = xpos; // The x- and y-coordinates
  this.y = ypos;
  this.vx = 50; // The x- and y-axis velocities
  this.vy = 100;
  this.mass = m;
  this.gravity = g;
  this.radius = 10;
  this.stiffness = 0.5;
  this.damping = 0.9;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    stroke('#fae');
    strokeWeight(4);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(255);
    line(this.x, this.y, nx, ny);
  }
}
