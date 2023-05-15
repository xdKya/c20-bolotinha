//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var chao;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var chaoOptions = {
    isStatic: true
  }

  chao = Bodies.rectangle(200,390,400,20,chaoOptions);
  World.add(world,chao);

  console.log(chao);
}

function draw() {
  background("black");


  fill("red");

  rectMode(CENTER);
  rect(chao.position.x,chao.position.y,400,20);


  Engine.update(engine);
}
