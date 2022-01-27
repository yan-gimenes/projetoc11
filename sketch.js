var runner2;
var street2;
var street;
var runner;
  function preload(){
  //imagens pré-carregadas
  street=loadImage("path.png");
  runner=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
 street2=createSprite(200,200);
 street2.addImage(street);
  street2.velocityY=3;
  street2.scale=1.2;
  runner2=createSprite(180,340);
  runner2.addAnimation("runing",runner);
  runner2.scale=0.1;

}
function draw() {
  background(0);
  runner2.x=World.mouseX;
  if(street2.y>400){
    street2.y=height/2;
  }

  drawSprites();
}
