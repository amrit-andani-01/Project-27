var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {

	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;


	bobObject1 = new bob(380,380,50,50);
	bobObject2 = new bob(390,390,50,50);

	bobObject3 = new bob(400,400,50,50);
	bobObject4 = new bob(410,410,50,50);

	bobObject5 = new bob(420,420,50,50);
	rope1 = new rope(bobObject1.body,roof1.body,-bobDiameter*2,0);

	rope2 = new rope(bobObject2.body,roof1.body,-bobDiameter*2,0);
	rope3 = new rope(bobObject3.body,roof1.body,-bobDiameter*2,0);

	rope4 = new rope(bobObject4.body,roof1.body,-bobDiameter*2,0);
	rope5 = new rope(bobObject5.body,roof1.body,-bobDiameter*2,0);

	roof1 = new roof(200,200,200,200);

	Engine.run(engine);
  
}


function draw() {

    rectMode(CENTER);
    background(0);

	bobObject1.display();
	bobObject2.display();

	bobObject3.display();
	bobObject4.display();

	bobObject5.display();
	rope1.display();

	rope2.display();
	rope3.display();

	rope4.display();
	rope5.display();

	roof1.display();

	drawSprites();

}



