var ground;
var division = [];
var plinko = [];
var particle = [];
var divisionHeight = 300;

function setup()
{
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(240,780,480,25);
  division = new Division(240,200,10,400);
  plinko = new Plinko(240,600,10);
}

function draw() 
{
  background(0,0,0);  
  drawSprites();

  for (var k = 0; k =<width; k = k + 80) 
  {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
  for (var j = 40; j <=width; j = j + 50) 
  {
     plinko.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j = j + 50) 
  {
     plinko.push(new Plinko(j,175));
  }
  for (var j = -10; j <=width-20; j = j + 50) 
  {
     plinko.push(new Plinko(j,275));
  }
  for (var j = -35; j <=width-30; j = j + 50) 
  {
     plinko.push(new Plinko(j,375));
  }
  if (frameCount%60===0) 
  {
     particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  ground.display();

   for (var j = 0;j<particle.length;j++) 
   {
      particle[j].display();
   }
   for (var k = 0;k<particle.length;k++) 
   {
      division[k].display();
   }
}