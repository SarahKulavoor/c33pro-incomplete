const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//initiate Game STATES
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight = 300;

var Score=0;
var turn=0;

function setup() {
  createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;

  ground = new Ground(width/2, height, width, 20);
 // divisions = new Divisions(200,755,20,100);

  //createSprite(400, 200, 50, 50);

  
  for (var k = 0; k <=width; k=k+80)
  {
    divisions.push(new Divisions (k,height-divisionHeight/2,10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko (j,75));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko (j,175)); 
  }
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko (j,275));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko (j,375)); 
  }
}

function draw() {
  background("pink");  
  text ("score=" + Score, 20, 40);
  
  text ("500",25,500);  
  text ("500",110,500);  
  text ("500",190,500);  
  text ("500",270,500);  
  text ("100",350,500);  
  text ("100",430,500);  
  text ("100",510,500);  
  text ("200",590,500);  
  text ("200",670,500);  
  text ("200",750,500);  
  
  Engine.update(engine);
 
  ground.display();

  for (var i = 0 ; i <plinkos.length; i++)
  {
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var j = 0 ; j <particles.length; j++)
  {
    particles[j].display();
  }
  for (var k = 0 ; k <divisions.length; k++)
  {
    divisions[k].display();
  }


  if(particle!=null)
   {
     particle.display();
     
     if (particle.body.position.y>760)
  {
     if (particle.body.position.x<300)
  {
    score=score+500;
    particle=null;
    if (count>= 5) gameState= "end";
  
      }
    }
  }
  
  if (particle!= null)
  {
    particle.display();

    if (particle.body.position.y>760)
    {
      if (particle.body.position.x<301 && particle.body.position.x<600)
      {
        score=score+100;
        particle=null;
        if (count>= 5) gameState= "end";
      }
    }
  }

  if (particle!= null)
  {
    particle.display();

    if (particle.body.position.y>760)
    {
      if (particle.body.position.x<601 && particle.body.position.x<900)
      {
        score=score+200;
        particle=null;
        if (count>= 5) gameState= "end";
      }
    }
  }
 
  drawSprites();
}

function mousePressed()
{
  if (gameState!=="end")
  {
      Count++;
      particle= new Particle (mouseX, 10, 10, 10);
  }
}


