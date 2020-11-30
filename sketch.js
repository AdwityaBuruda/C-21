var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(800,400); 
  fixedRect = createSprite(400, 200, 50, 100); 
  fixedRect.shapeColor="yellow"; 
  movingRect = createSprite(400,200, 100, 50);
   movingRect.shapeColor="blue";
  rect1 = createSprite(100,100,50,100);
  rect1.shapeColor="green";
  rect1.velocityY=5;
  rect2 = createSprite(100,400,50,100);
  rect2.shapeColor="brown";
  rect2.velocityY=-5;

}

function draw() {
  background(255,255,255);
   movingRect.x=World.mouseX; 
   movingRect.y=World.mouseY;
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor="red";
    }
  else{movingRect.shapeColor="blue"}
  
  bounce(rect1, rect2);
  
  drawSprites();
}

