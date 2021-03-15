

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var d1,d2,d3,d4;
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p;


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,800,1000,10);
  // d1 = new Divisions(90,650,10,250);
  // d2 = new Divisions(190,650,10,250);
  // d3 = new Divisions(290,650,10,250);
  // d4 = new Divisions(390,650,10,250);
  // p1 = new Plinko(50,100,10);
  // p2 = new Plinko(100,200,10);
  // p3 = new Plinko(50,300,10); 
  // p4 = new Plinko(100,400,10);
  // p5 = new Plinko(150,100,10);
  // p6 = new Plinko(200,200,10);
  // p7 = new Plinko(150,300,10);
  // p8 = new Plinko(200,400,10);
  // p9 = new Plinko(250,100,10);
  // p10 = new Plinko(300,200,10);
  // p11 = new Plinko(250,300,10);
  // p12 = new Plinko(300,400,10);
  // p13 = new Plinko(350,100,10);
  // p14 = new Plinko(400,200,10);
  // p15 = new Plinko(350,300,10);
  // p16 = new Plinko(400,400,10);
  // p = new Particle(random(50,430),0,10,{isStatic:false});
 

}

var particles = [];
var plinkos = [];
var divisions = [];


function draw() {
  background(0);  

  var divisionHeight = 300;

  Engine.update(engine);

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

  if(frameCount%60===0){
    particles.push(new Particle(200,0,10,10));
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
    particles[j].display;
  }
  ground.display();
  
  drawSprites();
}