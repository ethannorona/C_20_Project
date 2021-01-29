var tom, tomImg1, tomImg2, tomImg3;

var jerry, jerryImg1, jerryImg2, jerryImg3;

var garden, gardenImg;

function preload() {
    //load the images here
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");

    jerryImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg2 = loadAnimation("images/mouse4.png");
    jerryImg3 = loadAnimation("images/mouse1.png")

    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500, 400);
    garden.addImage("garden", gardenImg);

    tom = createSprite(800, 609);
    tom.addAnimation("sitting", tomImg1);
    tom.scale = 0.2; 

    jerry = createSprite(100, 589);
    jerry.addAnimation("playing", jerryImg3);
    jerry.scale = 0.2;
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    console.log(tom.x - jerry.x);

    tom.width = 100;
    jerry.width = 100;
    //tom.debug = true;
    //jerry.debug = true;

    if(tom.x - jerry.x < tom.width/2 + jerry.width/2){
        tom.addAnimation("finished", tomImg3);
        tom.changeAnimation("finished", tomImg3);
        tom.velocityX = 0;

        jerry.addAnimation("look", jerryImg2);
        jerry.changeAnimation("look", jerryImg2);
    }

    drawSprites();

    text(mouseX + ' , ' + mouseY, 10, 45);

}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){  
    tom.velocityX = -5;
    tom.addAnimation("running", tomImg2);
    tom.changeAnimation("running", tomImg2);

    jerry.addAnimation("funny", jerryImg1);
    jerry.changeAnimation("funny", jerryImg1);
  }
}
