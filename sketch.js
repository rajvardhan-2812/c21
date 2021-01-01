var fixedRect, movingRect;

var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200,300,30,30);
  car.shapeColor= "green";
  wall = createSprite(750,300,30,60);
  wall.shapeColor="yellow";
  
  car.velocityY=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
/* if( isTouching(fixedRect,wall))
 {

    text("no",200,300)
   // car.velocityX=0;
    movingRect.shapeColor="red"
 }
 else
 {
text("random text",300,400)
 }*/
 bounceOff(car,movingRect)
 
  drawSprites();
}

