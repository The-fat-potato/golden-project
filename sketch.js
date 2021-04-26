var thief,thiefimg;
var laser;
var gaurds,gaurdsimg;
var gem,gemimg;
var wall1,wall2,wall3,wall4,wall,wall6,wall7,wall8,wall9,wall10;
var siren,alertsound;


function preload(){
    thiefimg=loadImage("thief.png");
    gaurdsimg=loadImage("transparent gaurd.png");
    gemimg=loadImage("transparent gem.png");
    siren=loadSound("siren.mp3");
    alertsound=loadSound("alert.mp3");    

}

function setup() {
  createCanvas(500,500);
  
  //thief
  thief=createSprite(50,50,25,25);
  thief.addImage("t",thiefimg);
  thief.scale= 0.15;

  //guard
  gaurds=createSprite(150,465,25,25);
  gaurds.addImage("g",gaurdsimg);
  gaurds.scale= 0.20
  gaurds.velocityY=-3;
 
 //gem 
  gem=createSprite(308,400,20,20);
  gem.addImage("j",gemimg);
  gem.scale= 0.20;
 
  //maze structure 
   cb1 = createSprite(93, 1, 10, 80);
   cb1.shapeColor="red";
   cb2 = createSprite(1, 110, 170, 10);
   cb2.shapeColor="green";
   cb3 = createSprite(100, 177, 100, 10);
   cb3.shapeColor="pink";
   cb4 = createSprite(153, 152, 10, 60);
   cb4.shapeColor="orange";
   cb5 = createSprite(166, 116, 50, 10);
   cb5.shapeColor="yellow"
   cb6 = createSprite(135, 81, 10, 80);
   cb6.shapeColor="orange";
   cb7 = createSprite(169, 36, 80, 10);
   cb7.shapeColor="cyan";
   cb8 = createSprite(216, 135, 10, 220);
   cb8.shapeColor="maroon"
   cb9 = createSprite(184, 190, 10, 150);
   cb9.shapeColor="black"
   cb10 = createSprite(87, 228, 120, 10);
   cb10.shapeColor="pink"
   cb10.velocityX=3;


   cb11 = createSprite(33, 333, 10, 200);
   cb11.shapeColor="purple"
   cb12 = createSprite(239, 80, 55, 10);
   cb12.shapeColor="red";
   cb13 = createSprite(305, 264, 57, 10);
   cb13.shapeColor="purple";
   cb14 = createSprite(302, 57, 60, 10);
   cb14.shapeColor="blue";
   cb15 = createSprite(337, 177, 10, 250);
   cb15.shapeColor= "green"
   cb16 = createSprite(367, 308, 70, 10);
   cb16.shapeColor="black";
   cb17 = createSprite(331, 371, 10, 60);
   cb17.shapeColor= "orange";
   cb18 = createSprite(252, 153, 70, 10);
   cb18.shapeColor="purple"
   cb19 = createSprite(275, 248, 10, 200);
   cb19.shapeColor="lime";
   cb20 = createSprite(242, 337, 10, 140);
   cb20.shapeColor="cyan"
   cb21 = createSprite(162, 300, 150, 10);
   cb21.shapeColor="black"
   cb22 = createSprite(91, 336, 10, 60);
   cb22.shapeColor="green"
   cb23 = createSprite(358,420,150,10);
   cb23.shapeColor="red";
   cb24 = createSprite(375,10,100,10);
   cb24.shapeColor="pink";
   cb25 = createSprite(480,300,10,75);
   cb25.shapeColor="light blue";
   cb26 = createSprite(485,250,150,10);
   cb26.shapeColor="brown";
   cb26 = createSprite(485,250,150,10);
   cb26.shapeColor="pink";
   cb27 = createSprite(435,200,10,150);
   cb27.shapeColor="orange";
   cb28 = createSprite(400,100,75,10);
   cb28.shapeColor="black";
   cb29 = createSprite(375,350,10,50);
   cb29.shapeColor="red";
   cb30 = createSprite(260,460,200,10);
   cb30.shapeColor="blue";
   cb31 = createSprite(475,150,10,200);
   cb31.shapeColor="orange";
   //cd32 = createSprite(400,170,10,250);
}

function draw() {
  background(255,255,55); 
  
  edges=createEdgeSprites();
  
   //making thief bounce off all maze walls

   thief.bounceOff(cb1);
   thief.bounceOff(cb2);
   thief.bounceOff(cb3);
   thief.bounceOff(cb4);
   thief.bounceOff(cb5);
   thief.bounceOff(cb6);
   thief.bounceOff(cb7);
   thief.bounceOff(cb8);
   thief.bounceOff(cb9);
   thief.bounceOff(cb10);
   thief.bounceOff(cb11);
   thief.bounceOff(cb12);
   thief.bounceOff(cb13);
   thief.bounceOff(cb14);
   thief.bounceOff(cb15);
   thief.bounceOff(cb16);
   thief.bounceOff(cb17);
   thief.bounceOff(cb18);
   thief.bounceOff(cb19);
   thief.bounceOff(cb20);
   thief.bounceOff(cb21); 
   thief.bounceOff(cb22);
   thief.bounceOff(cb23);
   thief.bounceOff(cb24);
   thief.bounceOff(cb25); 
   thief.bounceOff(cb26);
   thief.bounceOff(cb27);
   thief.bounceOff(cb28);
   thief.bounceOff(cb29);
   thief.bounceOff(cb30);
   thief.bounceOff(cb31); 

  
   cb10.bounceOff(cb1);
   cb10.bounceOff(cb2);
   cb10.bounceOff(cb3);
   cb10.bounceOff(cb4);
   cb10.bounceOff(cb5);
   cb10.bounceOff(cb6);
   cb10.bounceOff(cb7);
   cb10.bounceOff(cb8);
   cb10.bounceOff(cb9);
   cb10.bounceOff(cb11);
   cb10.bounceOff(cb12);
   cb10.bounceOff(cb13);
   cb10.bounceOff(cb14);
   cb10.bounceOff(cb15);
   cb10.bounceOff(cb16);
   cb10.bounceOff(cb17);
   cb10.bounceOff(cb18);
   cb10.bounceOff(cb19);
   cb10.bounceOff(cb20);
   cb10.bounceOff(cb21); 
   cb10.bounceOff(cb22);
   cb10.bounceOff(cb23);
   cb10.bounceOff(cb24);
   cb10.bounceOff(cb25); 
   cb10.bounceOff(cb26);
   cb10.bounceOff(cb27);
   cb10.bounceOff(cb28);
   cb10.bounceOff(cb29);
   cb10.bounceOff(cb30);
   cb10.bounceOff(cb31); 

   //making gaurd bounceoff the edge.

   gaurds.bounceOff(cb21);
   gaurds.bounceOff(edges[3]);
   cb10.bounceOff(edges)

//condition to catch the thief
   if(thief.isTouching(gaurds)){
      gaurds.velocityY=0;
      thief.x=gaurds.x;
      thief.y=gaurds.y;
      textSize(30);
      fill("black");
      text("THIEF CAUGHT!!!",100,100);
      siren.play();
   };

   if (thief.isTouching(gem)){
      thief.x=gem.x;
      thief.y=gem.y;
      textSize(30);
      fill("black");
      text("DIOMAND LOST!!!",100,100);
      alertsound.play();
   };
   
   
   //controlling the thief to move through the maze.
   if(keyDown ("up"))
    {
      thief.y=thief.y-2;
    }  
    if(keyDown ("down"))
    {
       thief.y=thief.y+2;
    }  
  
    if(keyDown ("left"))
    {
       thief.x=thief.x-2;
    } 
     if(keyDown ("right"))
    {
       thief.x=thief.x+2;
    } 
  drawSprites();
}