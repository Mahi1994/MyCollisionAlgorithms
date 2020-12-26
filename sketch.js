var object1, object2, object3, object4;
var movingRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(100,300,50,50);
  object1 = createSprite(600, 400, 50, 50);
  object2 = createSprite(500,300,50,50)
  object3 = createSprite(700,200, 50, 50);
  object4 = createSprite(80,360,50,50);

  movingRect.shapeColor = "green";
  object1.shapeColor = "blue";
  object2.shapeColor = "blue";
  object3.shapeColor = "blue";
  object4.shapeColor = "blue";
  movingRect.velocityX = 2;
  //object2.velocityX = -2;
  movingRect.debug= true;
  

 
}

function draw() {
  background(0,0,0);

//Uncomment whichever function you want to execute and go live in live server  
  //displace(movingRect,object2)
  //collide(movingRect,object2)
  //bounceOff(movingRect,object2)
  changeColor(movingRect,object2) // For checking touching of two bodies

//Uncomment the following function you want to execute alongwith line 18 and go live in live server  
  //bounce(movingRect,object2)

  drawSprites();
}

function changeColor(body1,body2){
  if(isTouching(body1,body2)){
    body1.shapeColor = "red"
    body2.shapeColor = "red"
  }
  else{
    body1.shapeColor = "green"
    body2.shapeColor = "blue"
  }
}
