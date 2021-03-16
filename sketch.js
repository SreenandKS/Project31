

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,800,1000,10);
  for(var k = 0;k<= width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40;j<= width;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(var l = 15;l<= width-10;l=l+50){
    plinkos.push(new Plinko(l,175,10));
  }

  for(var h = 40;h<= width-10;h=h+50){
    plinkos.push(new Plinko(h,275,10));
  }

  for(var x = 15;x<= width-10;x=x+50){
    plinkos.push(new Plinko(x,375,10));
  }
}

var particles = [];
var plinkos = [];
var divisions = [];


function draw() {
  background(0);  

  

  Engine.update(engine);

 

  if(frameCount%60===0){
    particles.push(new Particle(random(20,380),10,10));
  }

  // console.log(particles);
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for(var l = 0;l<plinkos.length;l++){
    plinkos[l].display();
  }

  for(var h = 0;h<plinkos.length;h++){
    plinkos[h].display();
  }

  for(var x = 0;x<plinkos.length;x++){
    plinkos[x].display();
  }
  
  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  ground.display();
  
  drawSprites();
}