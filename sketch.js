var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

// function draw() {
//   background(0,0,0);  
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;

//   if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
//       && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
//       && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
//       && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
//     movingRect.shapeColor = "red";
//     fixedRect.shapeColor = "red";
//   }
//   else {
//     movingRect.shapeColor = "green";
//     fixedRect.shapeColor = "green";
//   }
//   drawSprites();
// }



function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isT(movingRect, gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  drawSprites();
}

