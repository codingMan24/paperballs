
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground2;
var ground3;
var groundImage;
var kid
var kidImage
var paper
var paperImage
var paper_options
var leftSide
var rightSide
var bottom
var hold
var bro
var child
var garbageImage
var garbage
function preload()
{
	groundImage = loadImage('ground.png')
	kidImage = loadImage('kid.png')
	paperImage = loadImage('paper.png')
	garbageImage = loadImage('garbage.png')
}
function setup() {
	createCanvas(800, 700);
	paper_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	bro = {
		density : 1.5,
		isStatic : true
	}
	garbage = createSprite(50,670,60,10)
	garbage.addImage(garbageImage)
	garbage.scale = 0.5
	paper = Bodies.circle(685,565,25,paper_options)
	ground = createSprite(400,550,800,20)
	ground.addImage(groundImage)
	ground2 = createSprite(680,550,800,20)
	ground2.addImage(groundImage)
	ground3 = createSprite(40,558,800,20)
	ground3.addImage(groundImage)
	engine = Engine.create();
	world = engine.world;
	kid = createSprite(750,575,10,10)
	kid.addImage(kidImage)
	//Create the Bodies Here.
	World.add(world, paper)
	bottom = Bodies.rectangle(50,700,60,10,bro)
	World.add(world, bottom)
	rightSide = Bodies.rectangle(80,650,10,60,bro)
	leftSide = Bodies.rectangle(20,650,10,60,bro)
	World.add(world, rightSide)
	World.add(world, leftSide)
	hold = Bodies.rectangle(675,650,50,5,bro)
	World.add(world,hold)	
}
function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  rect(200,670,20,10)
  fill('green')
  rect(50,700,60,10)
  rect(80,650,10,60)
  rect(20,650,10,60)
  rect(675,625,40,5)
  child = Matter.SAT.collides(paper,hold)
  if(keyDown(UP_ARROW) && child.collided){
	Body.applyForce(paper,{x : 0, y : 0},{x : -100, y : -100})
	console.log('s')
  }
  image(paperImage,paper.position.x-25,paper.position.y-25,50,50)
  drawSprites();
 
}



