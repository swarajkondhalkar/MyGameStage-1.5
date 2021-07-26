var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var pig, pigImage;

function preload(){
  backgroundImage =loadImage("images/bg2.jpg")
  pigImage =loadImage("images/piggy.jpg")
  
}



function setup() {
  canvas =createCanvas(1000, 500);
  ground = createSprite(0,0);
  ground.addImage("ground",backgroundImage)
  //ground.velocityX=-4;
  //ground.x=ground.width/2;
  //console.log(ground.x)
  pig =createSprite( 50,300,100,100);
  pig.addImage(pigImage);
  pig.scale =0.25;
}



function draw() {
  background(255);

 
  
 
  drawSprites();
}



