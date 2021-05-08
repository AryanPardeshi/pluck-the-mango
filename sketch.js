
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  tree,mango1,mango2,mango3,mango4,mango5,stone,slingshot;
var boy;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;



	//Create the Bodies Here.
	boy = new Boy(700,320,50,50);

	mango1 = new Mango(700,320,50,50);
	mango2 = new Mango(700,320,50,50);
	mango3 = new Mango(700,320,50,50);
	mango4 = new Mango(700,320,50,50);
	mango5 = new Mango(700,320,50,50);
	stone = new Stone(235,420,20,20);
	tree = new Tree(400,300,50,100);
	tree = new Boy(200,400,50,80)

	slingshot = new SlingShot(stone.body,{x:200, y:100});

	Engine.run(engine);
  

}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position


	var distance =dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
  {
	  Matter.body.setStatic(lmango.body,false);
  }
}
function draw() {
  rectMode(CENTER);
  background(0);

  discollision(stone,mango1);
  discollision(stone,mango2);
  discollision(stone,mango4);
  discollision(stone,mango5);
  discollision(stone,mango3);
  Engine.update(engine);
  mango1.display();
  mango3.display();
  mango2.display();
  mango4.display();
  mango5.display();
  stone.display();
  tree.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
	if (keyCoad=32) {
		MatterBody.setPosition(stone.body, {x:235, y:420})
		boy.attach(stone.body)
	}
}
