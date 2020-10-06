const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground,ball;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log3,log4,log5;
var bird1;
var b1;


function preload()
{
  b1=loadImage("bg.png")
}



function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
 /* var groundoption=
{
  isStatic:true
}
*/
box1=new box (700,320,70,70) ;
box2=new box (920,320,70,70);
box3=new box (700,240,70,70) ;
box4=new box (920,240,70,70);
box5=new box (810,160,70,70) ;

pig1=new pig (810,350) ;
pig2=new pig (810,220) ;
log1=new log (810,260,300,PI/2) ;
log3=new log (810,180,300,PI/2) ;
log4=new log (760,120,150,PI/7) ;
log5=new log (870,120,150,-PI/7) ;
bird1=new bird (100,100,40,40) ;
/*var balloption=
{
  restitution:1.0
}*/
 // ground=Bodies.rectangle(600,400,1200,20,groundoption)
 // World.add(world,ground);
 // ball=Bodies.circle(300,200,20,balloption)
  //World.add(world,ball);
  ground=new GROUND (600,400,1200,20)
}

function draw() {
  background(b1);  
  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
 box4.display()
  box5.display()
 pig2.display()
  pig1.display()
  log1.display()
  log3.display()
  log4.display()
  log5.display()
 bird1.display()
 ground.display()
  //fill("red")
 // rectMode(CENTER);
 // ellipseMode(RADIUS);
  //rect(ground.position.x,ground.position.y,1200,20);
  //ellipse(ball.position.x,ball.position.y,20,20);

}