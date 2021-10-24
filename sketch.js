const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

var option ={
  isStatic: true
};


  //create player base body

playerBase= Bodies.rectangle(200,350,180,150,option)
World.add(world,playerBase)
  //create player body
player=Bodies.rectangle(250, playerBase.position.y - 160,50,180,option );
World.add(world.player)

}

function draw() {
  background(backgroundImg);

  //show the nplayer image using image() function

  //show the playerbase image using image() function


  Engine.update(engine);
 Image(baseimage,playerBase.postion.x,playerBase.position.y,180,150)
 Image(playerimage,player.postion.x,player.position.y,50,180)


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
