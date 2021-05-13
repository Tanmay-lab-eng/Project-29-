const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
polygonImg = loadImage("polygon.png");
}

function setup() {
createCanvas(1600,800);



engine = Engine.create();
world = engine.world;
Engine.run(engine);
ball = Bodies.circle(50,200,20); 
World.add(world , ball);

ground1 = new Ground(390,300,250,10);
ground2 = new Ground(700,200,250,10);

//ground 1
block1 = new Block(300,275,30,40);
block11 = new Block(330,275,30,40);
block12 = new Block(360,275,30,40);
block13 = new Block(390,275,30,40);
block14 = new Block(420,275,30,40);
block15 = new Block(450,275,30,40);
block16 = new Block(480,275,30,40);

block2 = new Block(330,235,30,40); 
block3 = new Block(360,235,30,40); 
block4 = new Block(390,235,30,40);
block5 = new Block(420,235,30,40);
block6 = new Block(450,235,30,40);

block7 = new Block(360,195,30,40);
block8 = new Block(390,195,30,40);
block9 = new Block(420,195,30,40);

block10 = new Block(390,155,30,40);
Slingshot = new SlingShot(this.ball,{ x : 100,y : 200})


//ground2
block24 = new Block(640,175,30,40); 
block25 = new Block(670,175,30,40); 
block26 = new Block(700,175,30,40);
block27 = new Block(730,175,30,40);
block28 = new Block(760,175,30,40);

block29 = new Block(670,125,30,40);
block30 = new Block(700,125,30,40);
block31 = new Block(730,125,30,40);

block32 = new Block(700,95,30,40);

}

function draw() {
background(255);
image(polygonImg,ball.position.x,ball.position.y,40,40);
ground1.display();
ground2.display();
fill("green");
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
fill("pink");
block7.display();
block8.display();
block9.display();
fill("cyan");
block10.display();
fill("blue");
block1.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
Slingshot.display();


fill("blue");
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
fill("green");
block29.display();
block30.display();
block31.display();
fill("pink");
block32.display();

drawSprites();
}

function mouseDragged(){
 Matter.Body.setPosition(this.ball,{x : mouseX,y : mouseY})
}
function mouseReleased(){
 Slingshot.fly();   
}