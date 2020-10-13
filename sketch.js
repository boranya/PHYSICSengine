const ENG = Matter.Engine;
const WRL = Matter.World;
const BDY = Matter.Bodies;

var engine, world;
var ground, ball;
function setup() {
  var canvas = createCanvas(400,400);
  engine = ENG.create();
  world = engine.world;
  var GOptions = {
    isStatic : true
  }
  ground = BDY.rectangle(200,390,200,20, GOptions);
  WRL.add(world, ground);
  var ballOptions = {
    restitution : 1.0
  }
  ball = BDY.circle(200,50,20);
  WRL.add(world, ball, ballOptions);

}

function draw() {
  background(0,0,0);  
  ENG.update(engine);
  rectMode(CENTER); 
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);

}