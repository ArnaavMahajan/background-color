var pointer;

function setup(){

 createCanvas(1200,600);
 
  pointer=createSprite(100,100,80,80);

}


function draw(){
background("white");

pointer.x=mouseX;
pointer.y=mouseY;

if(pointer.x && pointer.y>100){
    background("red");
}
if(pointer.x && pointer.y>200){
    background("blue");
}
if(pointer.x && pointer.y<300){
    background("yellow");
}
if(pointer.x && pointer.y>300){
    background("green");
}

drawSprites();
}