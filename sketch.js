var bg,bgImg,bg2,bgImg2,bg3,bgImg3;
var bck,bck2;
var invisibleGround;
var box1,box2,box3,box4,box5;
var bbox1,bbox2,bbox3,bbox4;
var boox1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var player,playerRunning,playerStanding;
var house,houseImg;
var obstacle1,obstacle2,obstacle3,obstacle4;
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10,obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20,obs21,obs22,obs23;
var lives=3;
var live1,live2,live3,liveImg;
var gameOver,gameOverImg,restrat;
var jump,collide;
var obstacleGroup1,obstacleGroup2,obstacleGroup3,obstacleGroup4;

var obstacleGroup1
//declaring gameStates
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  playerRunning  = loadAnimation("lep_01.png","lep_02.png");
  playerStanding = loadAnimation("lep_01.png");

  bgImg = loadImage("bg.png");
  bgImg2 = loadImage("gamingbackground1.jpg");
  bgImg3 = loadImage("bck-3.png");

  bck = loadImage("bck-1.png");
  bck2 = loadImage("bck-2.png");
  
  houseImg = loadImage("house.png");

  obstacle1 = loadImage("mushroom.png");
  obstacle2 = loadImage("spdr.png");
  obstacle3 = loadImage("obstacle1.png");
  obstacle4 = loadImage("toad.png");

  liveImg = loadImage("live.png");

gameOverImg = loadImage("gameOver.png");
collide = loadSound("collided.wav");
jump = loadSound("jump.wav");


}

 function setup(){
   createCanvas(700,500);

   bg=createSprite(2100,198);
   bg.addImage("bg",bgImg);
   bg.scale = 0.3
   bg.depth = 1;
  
   bg2=createSprite(6500,198);
   bg2.addImage("bg2",bgImg2);
   bg2.scale = 0.3;
   bg2.depth = 1;

  bg3 = createSprite(9500,300);
  bg3.addImage("bg3",bgImg3);
  bg3.scale = 0.3;
  bg3.depth = 1;

  invisibleGround=createSprite(100,500,20000,10);

  box1 = createSprite(200,400,200,20);
  box1.addImage("box",bck);

 box2 = createSprite(1100,300,200,20);
 box2.addImage("box",bck);

 box3 = createSprite(2000,400,200,20);
  box3.addImage("box",bck);

  box4 = createSprite(2900,500,200,20);
  box4.addImage("box",bck);

  box5 = createSprite(3800,400,200,20);
  box5.addImage("box",bck);

  bbox1 = createSprite(4800,300,200,20);
  bbox1.addImage("box2",bck2)

  bbox2 =createSprite(5850,300,200,20);
  bbox2.addImage("box2",bck2);
  
  
  bbox3 =createSprite(6850,200,200,20);
  bbox3.addImage("box2",bck2);
  
  bbox4 = createSprite(8100,400,200,20);
  bbox4.addImage("box2",bck2);

  boox1 = createSprite(8970,300);
  boox1.addImage("box3",bck);

  player = createSprite(200,400,30,30);
  player.addAnimation("playerRunning",playerRunning);
  player.addAnimation("standing",playerStanding);
  player.scale = 0.2;

  block1 = createSprite(4280,350,30,30);
  block2 = createSprite(5300,350,30,30);
  block3 = createSprite(6350,250,30,30);
  block4 = createSprite(7320,350,30,30);
  block5 = createSprite(7400,400,30,30);
  block6 = createSprite(7500,450,30,30);
  block7 = createSprite(7570,400,30,30);
  block8 = createSprite(7650,350,30,30);
  block9 = createSprite(7250,300,30,30);

  house = createSprite(9200,200);
  house.addImage("house",houseImg);

  
  live1 = createSprite(150,40,20,20)
 // live1.visible = false
   live1.addImage("heart",liveImg)
   live1.scale = 0.4

   live2 = createSprite(100,40,20,20)
   //live2.visible = false
   live2.addImage("heart",liveImg)
   live2.scale = 0.4

   live3 = createSprite(180,40,20,20)
   live3.addImage("heart",liveImg)
   live3.scale = 0.2

   
  gameOver = createSprite(2500,200);
  gameOver.addImage("gameOver", gameOverImg);
  gameOver.visible = false
  gameOver.scale = 0.5
  
  obstacleGroup1 = new Group();
  obstacleGroup2 = new Group();
  obstacleGroup3 = new Group();
  obstacleGroup4 = new Group();
 }

 function draw(){
   background(0);
   
   
  obs1 = createSprite(820,280,20,20);
  obs1.addImage("obs",obstacle1);
  obs1.lifetime = 30;

  obs2 = createSprite(1100,280,20,20);
  obs2.addImage("obs",obstacle1);
  obs1.lifetime = 100;

  obs3 = createSprite(1300,280,20,20);
  obs3.addImage("obs",obstacle1);

  obs4 = createSprite(1700,380,20,20);
  obs4.addImage("obs",obstacle1);

  obs5 = createSprite(2100,380,20,20);
  obs5.addImage("obs",obstacle1);

  obs6 = createSprite(2700,450,20,20);
  obs6.addImage("obs",obstacle1);

  obs7 = createSprite(3100,450,20,20);
  obs7.addImage("obs",obstacle1);
  
  obs8 = createSprite(3850,380,20,20);
  obs8.addImage("obs",obstacle1);

  obs9 = createSprite(5600,250,20,20);
  obs9.addImage("obs",obstacle1);

  obs10 = createSprite(5950,250,20,20);
  obs10.addImage("obs",obstacle1);
 //adding group
 obstacleGroup1.add(obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10);

 obs11 = createSprite(1900,380,20,20);
  obs11.addImage("obs2",obstacle2);
  obs11.scale = 0.2;

  obs12 = createSprite(2300,380,20,20);
  obs12.addImage("obs2",obstacle2);
  obs12.scale = 0.2;

  obs13 = createSprite(2900,450,20,20);
  obs13.addImage("obs2",obstacle2);
  obs13.scale = 0.2;

  obs14 = createSprite(3600,380,20,20);
  obs14.addImage("obs2",obstacle2);
  obs14.scale = 0.2;
   
  obs15 = createSprite(3600,380,20,20);
  obs15.addImage("obs2",obstacle2);
  obs15.scale = 0.2;

  obs16 = createSprite(4820,260,20,20);
  obs16.addImage("obs2",obstacle2);
  obs16.scale = 0.2;
  
  obs17 = createSprite(8100,370,20,20);
  obs17.addImage("obs2",obstacle2);
  obs17.scale = 0.2;

  //adding group
 obstacleGroup2.add(obs11,obs12,obs13,obs14,obs15,obs16,obs17);

  obs18 = createSprite(4600,240,20,20);
  obs18.addImage("obs3",obstacle3);
  obs18.scale = 0.2;

  obs19 = createSprite(5100,240,20,20);
  obs19.addImage("obs3",obstacle3);
  obs19.scale = 0.2;

  obs20 = createSprite(6900,150,20,20);
  obs20.addImage("obs3",obstacle3);
  obs20.scale = 0.2;

  
  obs21 = createSprite(7720,350,20,20);
  obs21.addImage("obs3",obstacle3);
  obs21.scale = 0.2;

  //adding group
obstacleGroup3.add(obs18,obs19,obs20,obs21);

  obs22 = createSprite(6600,150,20,20);
  obs22.addImage("obs4",obstacle4);
  obs22.scale = 0.2;

  obs23 = createSprite(7100,150,20,20);
  obs23.addImage("obs`4",obstacle4);
  obs23.scale = 0.2;
  //adding group
obstacleGroup4.add(obs22,obs23);


   if(gameState === PLAY){
   camera.position.x = player.x;
  


   if (keyDown("right")) {
    player.x = player.x + 10;
    player.changeAnimation("playerRunning", playerRunning);
   
   } else {
    player.changeAnimation("standing", playerStanding);
   }
     if (keyDown("up")) {
     player.y = player.y - 13;
     jump.play();
    } 
   //if (keyDown("left")) {
    //player.x = player.x - 10;
   //} 

   player.velocityY =player.velocityY + 0.8;
 
   if(lives===3){
    live3.visible = true
    live1.visible = false
    live2.visible = false
   }
    if(lives===2){
    live2.visible = true
    live1.visible = false
    live3.visible = false
   }
   if(lives===1){
     live1.visible = true
     live3.visible = false
     live2.visible = false
   }

   if(lives===0){
     gameState = "end"
    
    }
   player.collide(box1);
   player.collide(box2);
   player.collide(box3);
   player.collide(box4);
   player.collide(box5);
   player.collide(bbox1);
   player.collide(bbox2);
   player.collide(bbox3);
   player.collide(bbox4);
    player.collide(block1);
   player.collide(block2);
   player.collide(block3);
   player.collide(block4);
    player.collide(block5);
   player.collide(block6);
    player.collide(block7);
   player.collide(block8);
   player.collide(block9);
   player.collide(boox1);

    if(obstacleGroup1.isTouching(player) || obstacleGroup2.isTouching(player) || obstacleGroup3.isTouching(player) || obstacleGroup4.isTouching(player) || invisibleGround.isTouching(player)){
     lives = lives -1 ;
      collide.play();
     }

   }
   drawSprites();
   if(gameState === END){
    
    gameOver.visible = true;
    gameOver.depth = gameOver.depth+1;
    textSize(35) 
    textStyle(BOLD);
    text("You Lost!!",player.x-80,190);
    textSize(20) 
    textStyle(NORMAL);
    text("Press Ctrl+r To Restart",bruno.x-90,230);
   }

 }
  