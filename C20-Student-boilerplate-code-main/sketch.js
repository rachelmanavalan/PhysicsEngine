
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ground2;
var ball2;
var ball3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  ground2=Bodies.rectangle(300,200,150,20,ground_options);
  World.add(world,ground2);
var ball2options ={
restitution: 1.5
};
ball2=Bodies.circle(300,50,10,ball2options);
World.add(world,ball2);

ball3=Bodies.circle(200,10,10,ball2options);
World.add(world,ball3);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,150,20);
  ellipse(ball2.position.x,ball2.position.y,10);
 ellipse(ball3.position.x,ball3.position.y,10);
}

