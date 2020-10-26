var fixedRect, movingRect;
var gameObject,gameeObject,gamObject,gg;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  gameObject=createSprite(700,340,47,70);
  gameObject.shapeColor="purple";

  gameeObject=createSprite(700,440,47,70);
  gameeObject.shapeColor="white";

  gamObject=createSprite(700,540,47,70);
  gamObject.shapeColor="pink";

  gg=createSprite(700,640,47,70);
  gg.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gg)){
  movingRect.shapeColor = "yellow";
  gg.shapeColor = "yellow";
}
 else{
  movingRect.shapeColor = "blue";
  gg.shapeColor = "red"; 
 }

  drawSprites();
}

function isTouching(ob1,ob2){
 
  if (ob1.x - ob2.x < ob2.width/2 +ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
   return(true);
}
else {
  return(false);

}  

}   