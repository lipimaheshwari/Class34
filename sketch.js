const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1600,20)

    box1 = new Box(880,300,70,70);
    box2 = new Box(880,300,70,70);
    box3 = new Box(880,230,70,70);
    box4 = new Box(880,230,70,70);
    box5 = new Box(880,230,70,70);

    box6 = new Box(810,160,70,70);
    box7 = new Box(810,160,70,70);
    box8 = new Box(810,160,70,70);
    box9 = new Box(810,160,70,70);
    box10 = new Box(810,160,70,70);

    box11 = new Box(740,160,70,70);
    box12 = new Box(740,160,70,70);
    box13 = new Box(740,160,70,70);
    box14 = new Box(740,160,70,70);
    box15 = new Box(740,160,70,70);

    box16 = new Box(950,160,70,70);
    box17 = new Box(950,160,70,70);
    box18 = new Box(950,160,70,70);
    box19 = new Box(950,160,70,70);
    box20 = new Box(950,160,70,70);

    ball = new Ball(500,350);
    sling = new SlingShot(ball.body,{x:500,y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    sling.display();

}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}