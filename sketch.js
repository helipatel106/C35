
var box;

function setup (){
createCanvas(300,400);
box = createSprite(150,200,20,30);

}

function draw (){
    background("black");
    if (keyDown("UP_ARROW")){
        changePosition(0,-1);
    }
  else if(keyDown("DOWN_ARROW")){
      changePosition(0,1);
  }
  else if(keyDown("LEFT_ARROW")){
      changePosition(-1,0);
  }
  else if(keyDown("RIGHT_ARROW")){
      changePosition(1,0);
  }
    drawSprites();

}

function changePosition(x,y){
    box.x=box.x+x
    box.y=box.y+y
}