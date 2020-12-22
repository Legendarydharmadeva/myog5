var rider, riderImage;
var happyRider;
var road;
var slantingroad;
var restart;
var uphill  = 0;
var straightroad2 = 0;

function preload(){
  riderImage = loadImage("Rider1.png");
  rider45Image = loadImage("rider-45.png");
}

function setup(){
  var canvas = createCanvas(1500,700);
  rider = createSprite(150,392);
  rider.addImage("rider",riderImage);
  rider.addImage("rider45",rider45Image);
  rider.velocityX = 0;
  rider.scale = 0.5;

  road = createSprite(650,490,1200,10);
  road.shapeColor = "black";

  slantingroad = createSprite(1250,490,10,10);
  slantingroad.visible = false;

  straightroad = createSprite(1950,190,700,10);
  straightroad.shapeColor = "black"

  cliff = createSprite(2700,190,200,10);
  cliff.shapeColor = "black";
}


function draw(){

  background("green");

  camera.position.x = rider.x;
  camera.position.y = rider.y;

  rider.velocityX = 0;


  rider.collide(straightroad);
  //rider.collide(road);
  

  fill("black");
  strokeWeight(10);

  line(1250,490,1600,190);
  

  if(keyDown("RIGHT_ARROW")){
    rider.velocityX = 4;
  }

  if(keyDown("space")){
    rider.velocityY = -4;
    rider.velocityX = 6;
  }
  rider.velocityY = rider.velocityY + 0.8;

  if(rider.isTouching(slantingroad)&& uphill===0){
    console.log("slantingroad");
    uphill = 1;
    traveluphill();
  }  

  if(rider.isTouching(straightroad)){
    rider.changeImage("rider",riderImage);
    rider.scale = 0.5;
    if(straightroad2 === 0){
      rider.y = 90;
      rider.velocityY = 0;
      straightroad2 = 1;
    }
  }




  drawSprites();

  text(mouseX + ", " + mouseY,mouseX,mouseY);
}



function traveluphill(){
  if(uphill===1){
  if(keyDown("RIGHT_ARROW")){
    rider.velocityX = 6;
  }
  rider.x = 1240;
  rider.velocityY = -3.5;
  rider.changeImage("rider45",rider45Image);
  rider.y = 415;
  rider.scale = 0.9;
  console.log(rider);
  //uphill = 0;
}
}