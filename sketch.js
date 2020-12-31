var trex, treximage, ground, groundimage, invisibleground, obstaclesGroup, cloudsGroup, obstacles, clouds, gameState, count, rand,obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6,cloud

function preload(){
  treximage=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage=loadImage("ground2.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
  cloud=loadImage("cloud.png");
}


function setup() {
  createCanvas(400, 400);
  trex=createSprite(75,350,10,10);
  trex.addAnimation("trex",treximage);
  trex.scale=0.5;
  ground=createSprite(200,385,10,10);
  ground.addImage(groundimage);
  invisibleground = createSprite(200,395,400,5);
  invisibleground.visible=false;
  gameState = "play";
  obstaclesGroup=new Group();
  cloudsGroup=new Group();
  count=0;
}

function draw() {
  background("white");
  trex.collide(invisibleground);
  if(keyDown("space") && trex.y>=369) {
    trex.velocityY=-10;
  }           
  trex.velocityY=trex.velocityY+0.8;
  ground.velocityX=-8;
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  console.log(trex.y);
  text("Score: "+count,340,20);
  count=count+Math.round(getFrameRate()/60);
   
  enemies();
  Clouds();
  drawSprites();
  
  
}

  function enemies () {
    if (World.frameCount % 60 === 0) {
      obstacles = createSprite(400,367,10,10);
      obstacles.velocityX=-6;
      
      
     
    
     switch(rand=Math.round(random(1,6))) {
         case 1: obstacles.addImage("obstacles",obstacle1);
         break;
         case 2: obstacles.addImage("obstacles",obstacle2);
         break;
         case 3: obstacles.addImage("obstacles",obstacle3);
         break;
         case 4:obstacles.addImage("obstacles",obstacle4);
         break;
         case 5:obstacles.addImage("obstacles",obstacle5);
         break;
         case 6:obstacles.addImage("obstacles",obstacle6);
         break;
         
         default:break;
     
     }
       
  obstacles.scale=0.5;
      
      obstacles.lifetime=70;
      obstaclesGroup.add(obstacles);
      }}

function Clouds () {
  if(World.frameCount%80===0) {
  
    clouds=createSprite(400,100,10,10);
   clouds.addImage("clouds",cloud);
    clouds.velocityX=-5;
    stroke("grey");
    clouds.lifetime=70;
  cloudsGroup.add(clouds);
    
    
   
  }
}