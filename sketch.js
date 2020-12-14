const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world, ground, bg;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
    engine = Engine.create();
    world = engine.world;
    createCanvas(480,800);
    ground = new Ground(240,795,480,10);
}

function draw() {
    Engine.update(engine);
    background("black");

    noStroke();
    //calling particles into array
    if(frameCount%90===0) {
      particles.push(new Particle(random(230, 240), 10, 10));
    }

    //calling divsions into array
    for(var i = 0; i <= 480; i = i + 80) {
      divisions.push(new Division(i, 650, 10, 300));
    }

    //calling plinkos into array
    for(var k = 40; k <= 480; k = k + 50) {
      plinkos.push(new Plinko(k, 75, 15));
    }
    for(var k = 15; k <= 470; k = k + 50) {
      plinkos.push(new Plinko(k, 175, 15));
    }
    for(var k = 40; k <= 480; k = k + 50) {
      plinkos.push(new Plinko(k, 275, 15));
    }
    for(var k = 15; k <= 470; k = k + 50) {
      plinkos.push(new Plinko(k, 375, 15));
    }

    //displaying plinkos, divisions, and particles
    for(var i = 0; i < divisions.length; i++){
      divisions[i].display();
    }
    for(var k = 0; k < plinkos.length; k++){
      plinkos[k].display();
    }
    for(var j = 0; j <  particles.length; j++){
      particles[j].display();
    }

    ground.display();
}