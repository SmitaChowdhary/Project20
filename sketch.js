var speed,weight;
var wall,car;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed;
  car.shapeColor="yellow";
  wall=createSprite(1500,20,60,1600);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background("lightblue");  
  drawSprites();
  if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
    car.shapeColor=color(255,0,0);
    }
      if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
}